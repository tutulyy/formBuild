/**
 * Created by lyy on 2017/1/1.
 */
const MapTimeBox = {
    config: {
        type: "ComTimeBox",
        label:"时间",//标题
        valueHour:"00",//默认值,
        valueMinute:"00",
        value:"00:00",
        description:"",//给用户的字段说明
        submit:true,//是否提交到表单
        require:false,//是否必须输入
    },
    propertyConfig: [
        [
            {type: "ComTextAreaBox", label: "字段名称", uId: "label", value: "时间" }],
        [
            {type: "ComSelectSingle", label: "小时默认值", uId: "valueHour", value: "00",length:"xxl",//input显示长度
            options:[{value:"00",name:"00"},{value:"01",name:"01"},{value:"02",name:"02"},{value:"03",name:"03"},{value:"04",name:"04"},{value:"05",name:"05"},{value:"06",name:"06"},{value:"07",name:"07"},{value:"08",name:"08"},{value:"09",name:"09"},{value:"10",name:"10"},{value:"11",name:"11"},{value:"12",name:"12"},{value:"13",name:"13"},{value:"14",name:"14"},{value:"15",name:"15"},{value:"16",name:"16"},{value:"17",name:"17"},{value:"18",name:"18"},{value:"19",name:"19"},{value:"20",name:"20"},{value:"21",name:"21"},{value:"22",name:"22"},{value:"23",name:"23"}]},
            {type: "ComSelectSingle", label: "分钟默认值", uId: "valueMinute", value: "00",length:"xxl",//input显示长度
            options:[{value:"00",name:"00"},{value:"01",name:"01"},{value:"02",name:"02"},{value:"03",name:"03"},{value:"04",name:"04"},{value:"05",name:"05"},{value:"06",name:"06"},{value:"07",name:"07"},{value:"08",name:"08"},{value:"09",name:"09"},{value:"10",name:"10"},{value:"11",name:"11"},{value:"12",name:"12"},{value:"13",name:"13"},{value:"14",name:"14"},{value:"15",name:"15"},{value:"16",name:"16"},{value:"17",name:"17"},{value:"18",name:"18"},{value:"19",name:"19"},{value:"20",name:"20"},{value:"21",name:"21"},{value:"22",name:"22"},{value:"23",name:"23"},{value:"24",name:"24"},{value:"25",name:"25"},{value:"26",name:"26"},{value:"27",name:"27"},{value:"28",name:"28"},{value:"29",name:"29"},{value:"30",name:"30"},{value:"31",name:"31"},{value:"32",name:"32"},{value:"33",name:"33"},{value:"34",name:"34"},{value:"35",name:"35"},{value:"36",name:"36"},{value:"37",name:"37"},{value:"38",name:"38"},{value:"39",name:"39"},{value:"40",name:"40"},{value:"41",name:"41"},{value:"42",name:"42"},{value:"43",name:"43"},{value:"44",name:"44"},{value:"45",name:"45"},{value:"46",name:"46"},{value:"47",name:"47"},{value:"48",name:"48"},{value:"49",name:"49"},{value:"50",name:"50"},{value:"51",name:"51"},{value:"52",name:"52"},{value:"53",name:"53"},{value:"54",name:"54"},{value:"55",name:"55"},{value:"56",name:"56"},{value:"57",name:"57"},{value:"58",name:"58"},{value:"59",name:"59"}]}],
        [
            {type: "ComCheckBoxList", label: "设置", uId: "settingCheckbox",tip: "",
                options:[{name: "必须输入", matchKey: "require", uId:"require",
                    tip: "用户必须输入此字段，否则将不能提交表单。", checked:false}]
            }],
        [
            {type: "ComTextAreaBox", label: "字段说明", uId: "description", height:"l",
                tip:"对字段进行解释，帮助填表人进行理解和输入。",
                value: ""}]
    ]
};
export default MapTimeBox