document.addEventListener('DOMContentLoaded', function() {
  L2Dwidget.init({
    model: {
      scale: 1,
      hHeadPos: 0.5,
      vHeadPos: 0.618,
      //   jsonPath: '/live2d/Girls_Frontline/ump45_3403/ump45_3403.model.json',
      //   jsonPath: '/live2d/Girls_Frontline/ump9_3404/ump9_3404.model.json',
      //   jsonPath: '/live2d/hk416_3401/hk416_3401.model.json',
      jsonPath: '/live2d/g41_2401/g41_2401.model.json',
    },
    display: {
      superSample: 5,     // 超采样等级
      width: 300,         // canvas的宽度
      height: 500,        // canvas的高度
      position: 'right',  // 显示位置：左或右
      hOffset: 0,       // canvas水平偏移
      vOffset: -100,       // canvas垂直偏移
    },
    mobile: {
      show: true,    // 是否在移动设备上显示
      scale: 1,      // 移动设备上的缩放
      motion: true,  // 移动设备是否开启重力感应
    },
    react: {
      opacityDefault: 1,  // 默认透明度
      opacityOnHover: 1,  // 鼠标移上透明度
    },
  });
});