export default {
  c:'',
  ctx:'',
  now: '',
  time: '',
  canvasInterval: '',
  drawPanel: function (ctx) {
    ctx.beginPath() //开始
    ctx.arc(300, 300, 200, 0, Math.PI * 2) //绘制弧线路径
    ctx.fillStyle = 'white' //填充颜色
    ctx.fill() //填充
    ctx.closePath() //闭合
  },
  hourCalibration: function (ctx) {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //定义刻度的数字
    ctx.beginPath(); //开始
    ctx.translate(300, 300) //移动当前坐标系的原点
    ctx.font = '30px bold' //文字的大小
    ctx.textAlign = "center"; // 文字居中
    ctx.textBaseline = "middle"; // 设置文本绘制中的水平对齐方式 为文本块的中间
    ctx.fillStyle = "black"; // 填充颜色
    for (var i = 0; i < arr.length; i++) {
      //绘制填充类文本
      ctx.fillText(
        arr[i],
        168 * Math.cos(((i * 30 - 60) * Math.PI) / 180),
        168 * Math.sin(((i * 30 - 60) * Math.PI) / 180)
      );
    }
    ctx.closePath(); // 结束
  },
  centerDot: function (ctx) {
    ctx.beginPath(); // 开始
    ctx.arc(0, 0, 8, 0, 2 * Math.PI); //绘制弧线路径
    ctx.fill(); //对封闭路径进行填充
    ctx.beginPath(); //开始
    ctx.fillStyle = "white";
    ctx.arc(0, 0, 5, 0, 2 * Math.PI); //绘制弧线路径
    ctx.fill(); //对封闭路径进行填充
  },
  getTimeStamp: function () {
    var zoneOffset = 8;
    //算出时差,并转换为毫秒：
    var offset2 = new Date().getTimezoneOffset() * 60 * 1000;
    //算出现在的时间：
    var nowDate2 = new Date().getTime();
    //此时东八区的时间
    var currentZoneDate = new Date(nowDate2 + offset2 + zoneOffset * 60 * 60 * 1000);
    return currentZoneDate;
  },
  hourHand: function (ctx, hours, minutes) {
    var radius =
      ((2 * Math.PI) / 12) * hours + (((1 / 6) * Math.PI) / 60) * minutes;
    ctx.save(); // 保存当前状态，为了旋转后能回到当初状态。
    ctx.beginPath(); //开始
    ctx.lineWidth = 8; // 针的宽度
    ctx.lineCap = "round"; // 针头为圆角
    ctx.strokeStyle = "green"; //针的颜色
    ctx.rotate(radius); // 旋转
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -90);
    ctx.stroke();
    ctx.closePath() // 结束
    // 回到保存的状态
    ctx.restore();
  },
  minuteHand: function (ctx, minutes) {
    2 * Math.PI;
    var radius = ((2 * Math.PI) / 60) * minutes;
    ctx.save(); // 保存当前状态，为了旋转后能回到当初状态。
    ctx.beginPath(); //开始
    ctx.lineWidth = 4; // 针的宽度
    ctx.lineCap = "round"; //针头为圆角
    ctx.strokeStyle = "black";
    ctx.rotate(radius); //旋转
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -110);
    ctx.stroke(); //绘制轮廓圆
    ctx.closePath() //结束
    ctx.restore();
  },
  secondHand: function (ctx, seconds) {
    var radius = ((2 * Math.PI) / 60) * seconds;
    ctx.save(); // 保存当前状态，为了旋转后能回到当初状态。
    ctx.beginPath(); //开始
    ctx.lineWidth = 2; // 针的宽度
    ctx.lineCap = "round"; //针头为圆角
    ctx.strokeStyle = "red";
    ctx.rotate(radius); //旋转
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -140);
    ctx.stroke(); //绘制轮廓圆
    ctx.closePath() //结束
    ctx.restore();
  },
  updateClock: function (ctx) {
    var time = this.getTimeStamp()
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    ctx.save();
    this.drawPanel(this.ctx);
    this.hourCalibration(this.ctx);
    this.secondHand(this.ctx, seconds);
    this.minuteHand(this.ctx, minutes);
    this.hourHand(this.ctx, hours, minutes);
    this.centerDot(this.ctx)
    ctx.closePath();
    ctx.restore();
  },
  initData: function (el,val) {
    if(!this.ctx) {
      this.ctx = el.getContext('2d');
    }
    this.draw(val)
  },
  ///////////////////////////////////////////////////////
  draw: function (val){
    const startAngle = (5 / 6) * Math.PI
    const endAngle = (13 / 6) * Math.PI
    const nowAngle = startAngle + (endAngle - startAngle)*val
    const lineWidth = 16
    const outerWidth = 2
    const splitWidth = 5
    const x = 300
    const y = 270
    const r1 = 250
    const r2 = 260
    this.ctx.clearRect(0,0,600, 600)
    //绘制背景底盘
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(x, y, r1, startAngle, endAngle)
    this.ctx.strokeStyle = '#4e6a68';
    this.ctx.lineWidth = lineWidth;
    this.ctx.setLineDash([0]);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.arc(x, y, r2, startAngle, endAngle);
    this.ctx.strokeStyle = '#4e6a68';
    this.ctx.lineWidth = 5;
    this.ctx.setLineDash([outerWidth, splitWidth]);
    this.ctx.stroke();
    // this.ctx.restore();

    //绘制填充颜色部分
    // this.ctx.save();
    this.ctx.beginPath();
    this.ctx.strokeStyle = '#18c9b2';
    this.ctx.arc(x, y, r1, startAngle, nowAngle);
    this.ctx.lineWidth = lineWidth;
    this.ctx.setLineDash([0]);
    this.ctx.stroke();
    // this.ctx.restore();

    // this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(x, y, r2, startAngle, nowAngle);
    this.ctx.lineWidth = outerWidth;
    this.ctx.setLineDash([outerWidth, splitWidth]);
    this.ctx.stroke();
    // this.ctx.restore();

    //绘制表针
    this.ctx.save();
    this.ctx.beginPath(); //开始
    this.ctx.lineWidth = 5; // 针的宽度
    this.ctx.setLineDash([0]);
    this.ctx.lineCap = "round"; //针头为圆角
    this.ctx.strokeStyle = "#18c9b2";
    this.ctx.moveTo(300, 270);
    this.ctx.lineTo(220*Math.cos(nowAngle)+300, 220*Math.sin(nowAngle)+270);
    this.ctx.stroke(); //绘制轮廓圆
    this.ctx.restore();
  },
}