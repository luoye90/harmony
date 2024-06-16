import prompt from '@system.prompt'
import app from '@system.app';
import window from '@ohos.window';
import http from '@ohos.net.http';
import chart from './chart'

export default {
  data: {
    isLoading: false,
    netInfo: {
      tx: 0,
      rx: 0,
      downSpeed: '',
      upSpeed: '',
      bandWidth: ''
    },
    signalInfo: {
      level: '',
      dbm: '',
      class: ''
    },
    trafficInfo: {
      remain: 0,
      dataAmount: 0,
      recordTime: 0
    },
    screenInfo: {
      keepScreenOn: true,
      brightness: 0
    }
  },
  onShow() {
    if (this.trafficInfo.dataAmount) {
      return
    }
    this.showToast('启动成功!', 5000)
    this.getNetInfo()
    this.getValidInfo()
    this.setWindow()
    chart.initData(this.$refs.chart)
    // let v = 0
    // setInterval(() => {
    //   v += 0.01
    //   if (v > 1) {
    //     v = 0
    //   }
    //   chart.initData(this.$refs.chart, v)
    // },100)
  },
  getNetInfo: function () {
    setInterval(async() => {
      await this.getInfoFromJava();
      await this.getSignalFromJava();
      let bandWidth = Number(this.formatNetData('bandWidth').value)
      if (bandWidth < 10) {
        bandWidth = bandWidth/20
      } else {
        bandWidth = 0.5 + bandWidth/100
      }
      if (bandWidth > 1) {
        bandWidth = 1
      }
      chart.initData(this.$refs.chart, bandWidth)
    }, 1000)
  },
  getValidInfo: function (isBtnClick) {
    let httpRequest = http.createHttp();
    this.isLoading = true
    httpRequest.request(
      "http://ww.dwgiot.cn//index/ka_ban/RefreshKaban/kahao/89861500032430070843",
      {
        method: http.RequestMethod.GET, // 可选，默认为http.RequestMethod.GET
        header: {
          'Content-Type': 'application/json'
        },
        // 当使用POST请求时此字段用于传递内容
        extraData: {
          "data": "data to send",
        }
      }, async (err, data) => {
      this.isLoading = false
      if (!err) {
        const info = JSON.parse(data.result)?.info
        if (info.total) {
          const dataAmount = parseFloat((info.dataAmount/1024).toFixed(3))
          const recordTime = new Date().getTime()
          this.trafficInfo.remain = parseFloat((500 - dataAmount).toFixed(3))
          if (isBtnClick) {
            const diffVal = (this.trafficInfo.dataAmount*1024-info.dataAmount).toFixed(2)
            const diffTime = recordTime-this.trafficInfo.recordTime
            const day = parseInt(diffTime/1000/60/60/24)
            const hou = parseInt(diffTime/1000/60/60%24)
            const min = parseInt(diffTime/1000/60%60%24)
            const sec = parseInt(diffTime/1000%60%60%24)
            await this.showToast(`操作成功!流量误差:${diffVal}Mb, 计时:${day}天${hou}小时${min}分钟${sec}秒`, 10000)
          }
          this.trafficInfo.dataAmount = dataAmount
          this.trafficInfo.recordTime = recordTime
        } else {
          this.showToast(JSON.parse(data.result)?.msg)
        }
      }
    }
    );
  },
  initAction: function (code) {
    var actionData = {};
    var action = {};
    action.bundleName = "ohos.samples.netinfo";
    action.abilityName = "NetInfoInternalAbility";
    action.messageCode = code;
    action.data = actionData;
    action.abilityType = 1;
    action.syncOption = 0;
    return action;
  },
  getInfoFromJava: async function () {
    try {
      var action = this.initAction(1001);
      var result = await FeatureAbility.callAbility(action);
      const rx = Number(result.split(',')[0]) || 0
      const tx = Number(result.split(',')[1]) || 0
      if (this.netInfo.rx) {
        this.netInfo.downSpeed = rx - this.netInfo.rx
        this.netInfo.upSpeed = tx - this.netInfo.tx
        this.netInfo.bandWidth = Number(this.netInfo.downSpeed) * 8
        if (this.trafficInfo.dataAmount) {
          const val = parseFloat(Number(this.netInfo.downSpeed+this.netInfo.upSpeed)/1024/1024/1024)
          this.trafficInfo.dataAmount = parseFloat((this.trafficInfo.dataAmount + val).toFixed(3))
          this.trafficInfo.remain = parseFloat((500 - this.trafficInfo.dataAmount).toFixed(3))
        }
      }
      this.netInfo.rx = rx
      this.netInfo.tx = tx
    } catch (pluginError) {
      console.error(pluginError);
    }
    app.requestFullWindow({
      duration: 200
    });
  },
  getSignalFromJava: async function () {
    try {
      var action = this.initAction(1002);
      var result = await FeatureAbility.callAbility(action);
      const strVal = result?.substr(28, 3) || ''
      this.signalInfo.dbm = Number(strVal) || ''
      this.signalInfo.level = this.signalInfo.dbm ? this.signalInfo.dbm + 120 : ''
      if (this.signalInfo.level > 40) { // -80dbm
        this.signalInfo.class = 'good-progress'
      } else if (this.signalInfo.level > 30) { // -90dbm
        this.signalInfo.class = 'normal-progress'
      } else if (this.signalInfo.level > 20) { // -100dbm
        this.signalInfo.class = 'not-good-progress'
      } else { // 小于-100dbm
        this.signalInfo.class = 'bad-progress'
      }
    } catch (pluginError) {
      console.error(pluginError);
    }
  },
  formatTrafficInfo(val) {
    const arr = String(val).split('.')
    return [
      arr[0] + '.',
      arr[1]
    ]
  },
  formatNetData(key) {
    const val = this.netInfo[key] / 1024
    let value = val.toFixed(2)
    let unit = "Kb/s"
    if (val > 1024) {
      unit = "Mb/s"
      value = (val / 1024).toFixed(2)
    }
    if (key === 'bandWidth') {
      unit = "Mbps"
      value = (val / 1024).toFixed(2)
    }
    return {
      value,
      unit
    }
  },
  setWindow() {
    // 设置屏幕常亮和亮度
    window.getTopWindow((err, data) => {
      const windowClass = data;
      windowClass.setKeepScreenOn(this.screenInfo.keepScreenOn, (err) => {
      });
      windowClass.setBrightness(this.screenInfo.brightness/100, (err) => {
      });
    });
  },
  brightnessChange(value) {
    this.screenInfo.brightness = Number(value.progress)
    this.setWindow()
  },
  keepScreenChange(value) {
    this.screenInfo.keepScreenOn = Boolean(value.checked)
    this.setWindow()
  },
  showToast: function (msg, duration) {
    prompt.showToast({
      message: msg,
      duration: duration || 3000,
      bottom: 600
    })
  }
}
