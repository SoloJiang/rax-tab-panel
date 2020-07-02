if(!self.__appxInited) {
self.__appxInited = 1;
require('@alipay/appx-compiler/lib/sjsEnvInit');

require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}

if(AFAppX.compilerConfig){ AFAppX.compilerConfig.component2 = true; }

function success() {
require('../../app');
require('../../components/Target/npm/_rax-slider_2.3.3_rax-slider/lib/miniapp/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/Target/npm/_rax-scrollview_3.2.3_rax-scrollview/lib/miniapp-native/miniapp/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/Target/index?hash=98f71509b124ce00415415f09f77a50abb983739');
require('../../pages/index?hash=07abba7737ef5b616a9eeeda5dd8868a1e7c6116');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}