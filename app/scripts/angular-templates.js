'use strict';
angular.module('angularTemp1App',[]).run(['$templateCache',function($templateCache) {
	
	$templateCache.put("template/accordion/accordion-group.html",
            "<div class=\"accordion-group\">\n" +
            "  <div class=\"accordion-heading\" ><a class=\"accordion-toggle\" ng-click=\"isOpen = !isOpen\" accordion-transclude=\"heading\">{{heading}}</a></div>\n" +
            "  <div class=\"accordion-body\" collapse=\"!isOpen\">\n" +
            "    <div class=\"accordion-inner\" ng-transclude></div>  </div>\n" +
            "</div>");
        

        
          $templateCache.put("template/accordion/accordion.html",
            "<div class=\"accordion\" ng-transclude></div>");
        

        
          $templateCache.put("template/alert/alert.html",
            "<div class='alert' ng-class='type && \"alert-\" + type'>\n" +
            "    <button ng-show='closeable' type='button' class='close' ng-click='close()'>&times;</button>\n" +
            "    <div ng-transclude></div>\n" +
            "</div>\n" +
            "");
    

        
          $templateCache.put("template/carousel/carousel.html",
            "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\">\n" +
            "    <ol class=\"carousel-indicators\" ng-show=\"slides().length > 1\">\n" +
            "        <li ng-repeat=\"slide in slides()\" ng-class=\"{active: isActive(slide)}\" ng-click=\"select(slide)\"></li>\n" +
            "    </ol>\n" +
            "    <div class=\"carousel-inner\" ng-transclude></div>\n" +
            "    <a ng-click=\"prev()\" class=\"carousel-control left\" ng-show=\"slides().length > 1\">&lsaquo;</a>\n" +
            "    <a ng-click=\"next()\" class=\"carousel-control right\" ng-show=\"slides().length > 1\">&rsaquo;</a>\n" +
            "</div>\n" +
            "");
        

        
          $templateCache.put("template/carousel/slide.html",
            "<div ng-class=\"{\n" +
            "    'active': leaving || (active && !entering),\n" +
            "    'prev': (next || active) && direction=='prev',\n" +
            "    'next': (next || active) && direction=='next',\n" +
            "    'right': direction=='prev',\n" +
            "    'left': direction=='next'\n" +
            "  }\" class=\"item\" ng-transclude></div>\n" +
            "");
        

        
          $templateCache.put("template/datepicker/datepicker.html",
            "<table>\n" +
            "  <thead>\n" +
            "    <tr class=\"text-center\">\n" +
            "      <th><button type=\"button\" class=\"btn pull-left\" ng-click=\"move(-1)\"><i class=\"icon-chevron-left\"></i></button></th>\n" +
            "      <th colspan=\"{{rows[0].length - 2 + showWeekNumbers}}\"><button type=\"button\" class=\"btn btn-block\" ng-click=\"toggleMode()\"><strong>{{title}}</strong></button></th>\n" +
            "      <th><button type=\"button\" class=\"btn pull-right\" ng-click=\"move(1)\"><i class=\"icon-chevron-right\"></i></button></th>\n" +
            "    </tr>\n" +
            "    <tr class=\"text-center\" ng-show=\"labels.length > 0\">\n" +
            "      <th ng-show=\"showWeekNumbers\">#</th>\n" +
            "      <th ng-repeat=\"label in labels\">{{label}}</th>\n" +
            "    </tr>\n" +
            "  </thead>\n" +
            "  <tbody>\n" +
            "    <tr ng-repeat=\"row in rows\">\n" +
            "      <td ng-show=\"showWeekNumbers\" class=\"text-center\"><em>{{ getWeekNumber(row) }}</em></td>\n" +
            "      <td ng-repeat=\"dt in row\" class=\"text-center\">\n" +
            "        <button type=\"button\" style=\"width:100%;\" class=\"btn\" ng-class=\"{'btn-info': dt.selected}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\"><span ng-class=\"{muted: dt.secondary}\">{{dt.label}}</span></button>\n" +
            "      </td>\n" +
            "    </tr>\n" +
            "  </tbody>\n" +
            "</table>\n" +
            "");
        

        
          $templateCache.put("template/datepicker/popup.html",
            "<ul class=\"dropdown-menu\" ng-style=\"{display: (isOpen && 'block') || 'none', top: position.top+'px', left: position.left+'px'}\">\n" +
            "   <li ng-transclude></li>\n" +
            "   <li ng-show=\"showButtonBar\" style=\"padding:10px 9px 2px\">\n" +
            "       <span class=\"btn-group\">\n" +
            "           <button type=\"button\" class=\"btn btn-small btn-inverse\" ng-click=\"today()\">{{currentText}}</button>\n" +
            "           <button type=\"button\" class=\"btn btn-small btn-info\" ng-click=\"showWeeks = ! showWeeks\" ng-class=\"{active: showWeeks}\">{{toggleWeeksText}}</button>\n" +
            "           <button type=\"button\" class=\"btn btn-small btn-danger\" ng-click=\"clear()\">{{clearText}}</button>\n" +
            "       </span>\n" +
            "       <button type=\"button\" class=\"btn btn-small btn-success pull-right\" ng-click=\"isOpen = false\">{{closeText}}</button>\n" +
            "   </li>\n" +
            "</ul>\n" +
            "");
        

        
          $templateCache.put("template/modal/backdrop.html",
            "<div class=\"modal-backdrop fade\" ng-class=\"{in: animate}\" ng-style=\"{'z-index': 1040 + index*10}\" ng-click=\"close($event)\"></div>");
        

        
          $templateCache.put("template/modal/window.html",
            "<div tabindex=\"-1\" class=\"modal fade {{ windowClass }}\" ng-class=\"{in: animate}\" ng-style=\"{'z-index': 1050 + index*10}\" ng-transclude></div>");
        

        
          $templateCache.put("template/pagination/pager.html",
            "<div class=\"pager\">\n" +
            "  <ul>\n" +
            "    <li ng-repeat=\"page in pages\" ng-class=\"{disabled: page.disabled, previous: page.previous, next: page.next}\"><a ng-click=\"selectPage(page.number)\">{{page.text}}</a></li>\n" +
            "  </ul>\n" +
            "</div>\n" +
            "");
        

        
          $templateCache.put("template/pagination/pagination.html",
            "<div class=\"pagination\"><ul class=\"pagination\">\n" +
            "  <li ng-repeat=\"page in pages\" ng-class=\"{active: page.active, disabled: page.disabled}\"><a ng-click=\"selectPage(page.number)\">{{page.text}}</a></li>\n" +
            "  </ul>\n" +
            "</div>\n" +
            "");
        

        
          $templateCache.put("template/tooltip/tooltip-html-unsafe-popup.html",
            "<div class=\"tooltip {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" +
            "  <div class=\"tooltip-arrow\"></div>\n" +
            "  <div class=\"tooltip-inner\" bind-html-unsafe=\"content\"></div>\n" +
            "</div>\n" +
            "");
    

        
          $templateCache.put("template/tooltip/tooltip-popup.html",
            "<div class=\"tooltip {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" +
            "  <div class=\"tooltip-arrow\"></div>\n" +
            "  <div class=\"tooltip-inner\" ng-bind=\"content\"></div>\n" +
            "</div>\n" +
            "");
        

        
          $templateCache.put("template/popover/popover.html",
            "<div class=\"popover {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" +
            "  <div class=\"arrow\"></div>\n" +
            "\n" +
            "  <div class=\"popover-inner\">\n" +
            "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-show=\"title\"></h3>\n" +
            "      <div class=\"popover-content\" ng-bind=\"content\"></div>\n" +
            "  </div>\n" +
            "</div>\n" +
            "");
        

        
          $templateCache.put("template/progressbar/bar.html",
            "<div class=\"bar\" ng-class=\"type && 'bar-' + type\" ng-transclude></div>");
        

        
          $templateCache.put("template/progressbar/progress.html",
            "<div class=\"progress\" ng-transclude></div>");
        

        
          $templateCache.put("template/progressbar/progressbar.html",
            "<div class=\"progress\"><div class=\"bar\" ng-class=\"type && 'bar-' + type\" ng-transclude></div></div>");
        

        
          $templateCache.put("template/rating/rating.html",
            "<span ng-mouseleave=\"reset()\">\n" +
            "   <i ng-repeat=\"r in range\" ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" ng-class=\"$index < val && (r.stateOn || 'icon-star') || (r.stateOff || 'icon-star-empty')\"></i>\n" +
            "</span>");
        

        
          $templateCache.put("template/tabs/tab.html",
            "<li ng-class=\"{active: active, disabled: disabled}\">\n" +
            "  <a ng-click=\"select()\" tab-heading-transclude>{{heading}}</a>\n" +
            "</li>\n" +
            "");
        

        
          $templateCache.put("template/tabs/tabset-titles.html",
            "<ul class=\"nav {{type && 'nav-' + type}}\" ng-class=\"{'nav-stacked': vertical}\">\n" +
            "</ul>\n" +
            "");
        

        
          $templateCache.put("template/tabs/tabset.html",
            "\n" +
            "<div class=\"tabbable\">\n" +
            "  <ul class=\"nav {{type && 'nav-' + type}}\" ng-class=\"{'nav-stacked': vertical}\" ng-transclude>\n" +
            "  </ul>\n" +
            "  <div class=\"tab-content\">\n" +
            "    <div class=\"tab-pane\" \n" +
            "         ng-repeat=\"tab in tabs\" \n" +
            "         ng-class=\"{active: tab.active}\"\n" +
            "         tab-content-transclude=\"tab\">\n" +
            "    </div>\n" +
            "  </div>\n" +
            "</div>\n" +
            "");
        

        
          $templateCache.put("template/timepicker/timepicker.html",
            "<table class=\"form-inline\">\n" +
            "   <tr class=\"text-center\">\n" +
            "       <td><a ng-click=\"incrementHours()\" class=\"btn btn-link\"><i class=\"icon-chevron-up\"></i></a></td>\n" +
            "       <td>&nbsp;</td>\n" +
            "       <td><a ng-click=\"incrementMinutes()\" class=\"btn btn-link\"><i class=\"icon-chevron-up\"></i></a></td>\n" +
            "       <td ng-show=\"showMeridian\"></td>\n" +
            "   </tr>\n" +
            "   <tr>\n" +
            "       <td class=\"control-group\" ng-class=\"{'error': invalidHours}\"><input type=\"text\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"span1 text-center\" ng-mousewheel=\"incrementHours()\" ng-readonly=\"readonlyInput\" maxlength=\"2\"></td>\n" +
            "       <td>:</td>\n" +
            "       <td class=\"control-group\" ng-class=\"{'error': invalidMinutes}\"><input type=\"text\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"span1 text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\"></td>\n" +
            "       <td ng-show=\"showMeridian\"><button type=\"button\" ng-click=\"toggleMeridian()\" class=\"btn text-center\">{{meridian}}</button></td>\n" +
            "   </tr>\n" +
            "   <tr class=\"text-center\">\n" +
            "       <td><a ng-click=\"decrementHours()\" class=\"btn btn-link\"><i class=\"icon-chevron-down\"></i></a></td>\n" +
            "       <td>&nbsp;</td>\n" +
            "       <td><a ng-click=\"decrementMinutes()\" class=\"btn btn-link\"><i class=\"icon-chevron-down\"></i></a></td>\n" +
            "       <td ng-show=\"showMeridian\"></td>\n" +
            "   </tr>\n" +
            "</table>\n" +
            "");
        

        
          $templateCache.put("template/typeahead/typeahead-match.html",
            "<a tabindex=\"-1\" bind-html-unsafe=\"match.label | typeaheadHighlight:query\"></a>");
        

        
          $templateCache.put("template/typeahead/typeahead-popup.html",
            "<ul class=\"typeahead dropdown-menu\" ng-style=\"{display: isOpen()&&'block' || 'none', top: position.top+'px', left: position.left+'px'}\">\n" +
            "    <li ng-repeat=\"match in matches\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index)\">\n" +
            "        <div typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div>\n" +
            "    </li>\n" +
            "</ul>");
  }]);
