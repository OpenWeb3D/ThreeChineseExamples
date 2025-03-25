// 导入必要的模块
import { HOST, FILE_HOST } from "./host.js";
import webgpuExamples from "./webgpu-examples.js";
import threeExamples from "./three-examples.js";
import threeCesiumAuthors from "./author.js";
import threeCesiumLinks from "./links.js";

// 定义全局变量
window.THREE_CESIUM_LINKS = threeCesiumLinks;
window.HOST = HOST;
window.FILE_HOST = FILE_HOST;

// 定义全局配置
window.GLOBAL_CONFIG = {
    HOST,
    FILE_HOST,
    getFileUrl(url) {
        return FILE_HOST + url;
    }
};

 

// 定义导航菜单
window.THREE_CESIUM_NAVIGATION = [
    {
        name: "WebGL",
        label: "WebGL",
        examples: threeExamples
    },
    {
        name: "WebGPU",
        label: "WebGPU",
        examples: webgpuExamples
    }
];

// 定义作者信息
window.THREE_CESIUM_AUTHORS = threeCesiumAuthors;
 

// 依赖注入函数
window.GET_SCRIPT = (v, t) => {
    return (t === "Cesium.js案例[1.119]" ? `">
  ` : `    
`) + `${v} `;
};
 
    