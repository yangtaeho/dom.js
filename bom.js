
			function getCurrUrl() {
				var tempurl = location.href.replace(location.pathname+location.search,'');
				return tempurl;
			}
			function replaceHistory(url,pathname,queryStr) {
				var tempUrl = '';
				if(!url) {
				    if (window.console) console.log('Invalid url.');
				    return false;
				}
				tempUrl += url;
				pathname && (tempUrl += pathname);
				queryStr && (tempUrl += "?"+queryStr);
				history.replaceState("", "", tempUrl);
			}
			function replacePath(pathname) {
				replaceHistory(getCurrUrl(),pathname);
			}
      
			/*
       * for example
       */
			//replacePath('you want path');
