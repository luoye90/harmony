/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package ohos.samples.netinfo;

import ohos.ace.ability.AceInternalAbility;
import ohos.app.AbilityContext;
import ohos.rpc.MessageOption;
import ohos.rpc.MessageParcel;
import ohos.net.DataFlowStatistics;
import ohos.telephony.RadioInfoManager;
import ohos.telephony.SignalInformation;
import ohos.telephony.NrSignalInformation;
import ohos.telephony.TelephonyConstants;
import java.util.List;

/**
 * Internal Ability
 */
public class NetInfoInternalAbility extends AceInternalAbility {
    private AbilityContext context;
    private static final int BATTERY_LEVEL_NOT_AVAILABLE = 1001;

    private static final int RADIO_INFO = 1002;

    private static NetInfoInternalAbility instance;

    private static final String BUNDLE_NAME = "ohos.samples.netinfo";

    private static final String ABILITY_NAME = "NetInfoInternalAbility";

    private NetInfoInternalAbility() {
        super(BUNDLE_NAME, ABILITY_NAME);
    }

    /**
     * Business execution
     *
     * @param code   Request Code.
     * @param data   Receives MessageParcel object.
     * @param reply  The MessageParcel object is returned.
     * @param option Indicates whether the operation is synchronous or asynchronous.
     * @return If the operation is successful, true is returned. Otherwise, false is returned.
     */
    public boolean onRemoteRequest(int code, MessageParcel data, MessageParcel reply, MessageOption option) {
        switch (code) {
            case BATTERY_LEVEL_NOT_AVAILABLE:
                reply.writeString(getBatteryInfo());
                break;
            case RADIO_INFO:
                reply.writeString(getRadioInfo());
                break;
            default:
                reply.writeString("service not defined");
                return false;
        }
        return true;
    }

    private String getBatteryInfo() {
        StringBuilder stringBuilder = new StringBuilder();
        long rx = DataFlowStatistics.getCellularRxBytes();
        long tx = DataFlowStatistics.getCellularTxBytes();
        stringBuilder.append(rx).append(",").append(tx);
        return stringBuilder.toString();
    }

    private String getRadioInfo() {
        StringBuilder stringBuilder = new StringBuilder();
        // 获取RadioInfoManager对象。
        RadioInfoManager radioInfoManager = RadioInfoManager.getInstance(context);

        // 获取信号信息。
        List<SignalInformation> signalList = radioInfoManager.getSignalInfoList(0);
        // 检查信号信息列表大小。
        if (signalList.size() == 0) {
            return null;
        }
        // 依次遍历list获取当前驻网networkType对应的信号信息。
        NrSignalInformation nrSignal = null;
        for (SignalInformation signal : signalList) {
            int signalNetworkType = signal.getNetworkType();
            if (signalNetworkType == TelephonyConstants.NETWORK_TYPE_NR) {
                nrSignal = (NrSignalInformation) signal;
            }
        }
        // 调用子类中相应方法，获取对应制式的信号强度信息。
        int signalLevel = nrSignal != null ? nrSignal.getSignalLevel() : 0;

        stringBuilder.append(nrSignal);
        return stringBuilder.toString();
    }

    /**
     * NetInfoInternalAbility
     *
     * @return If the instance is NULL, Get new instance. Otherwise, instance is returned.
     */
    public static NetInfoInternalAbility getInstance() {
        if (instance == null) {
            synchronized (NetInfoInternalAbility.class) {
                if (instance == null) {
                    instance = new NetInfoInternalAbility();
                }
            }
        }
        return instance;
    }

    /**
     * init Internal ability
     */
    public void register() {
        this.setInternalAbilityHandler(this::onRemoteRequest);
    }

    /**
     * Internal ability release
     */
    public void deregister() {
        this.setInternalAbilityHandler(null);
    }
}
