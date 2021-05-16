
function _hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
function _toggleClass(elem, className) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
    if ( _hasClass(elem, className) ) {
        while (newClass.indexOf(' ' + className + ' ') >= 0) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

function ResponsiveMenu(settings) {
    if(!settings) return;

    this.nav = document.getElementsByClassName(settings.navClass)[0];
    this.mobile = settings.mobileClass;
    this.toggle = document.getElementsByClassName(settings.toggleClass)[0];
    this.innerToggle = settings.innerToggle ? document.getElementsByClassName(settings.innerToggle) : false;

    this.navOpen = settings.navOpen || 'nav-mobile-open';
    this.toggleActive = settings.toggleActive || 'nav-active';
    this.innerToggleActive = settings.innerToggleActive || 'nav-active-inner';

    this.jQuery = (window.jQuery) ? jQuery : false;

    this.init();
}
ResponsiveMenu.prototype.createMenu = function() {
    this.mobileElem = document.createElement('div');
    this.mobileElem.className = this.mobile;
    this.nav.appendChild(this.mobileElem);
};
ResponsiveMenu.prototype.bindHandlers = function() {
    var _self = this;
    var piece = void 0;

    this.mobileElem.addEventListener('click', function() {
        if(_self.jQuery) {
            _self.jQuery(_self.toggle).slideToggle(function() {
                _self.jQuery(this).attr('style', '');
                _toggleClass(this, _self.navOpen);
                _toggleClass(_self.toggle, _self.toggleActive);
            });
        }
        else {
            _toggleClass(this, _self.navOpen);
            _toggleClass(_self.toggle, _self.toggleActive);
        }
    });

    if( this.innerToggle && !this.jQuery ) {
        for( piece in this.innerToggle ) {
            if( !isNaN( parseInt(piece) ) ) {
                this.innerToggle[piece].addEventListener('click', function() {
                    _toggleClass(this, _self.innerToggleActive);
                });
            }
        }
    }

    if( this.jQuery ) {
        this.jQuery( this.innerToggle ).on({
            click: function() {
                var trigger = this;
                var menu = jQuery(this).find('ul');
                menu.slideToggle(function() {
                    _toggleClass(trigger, _self.innerToggleActive);
                });
            }
        });
    }
};
ResponsiveMenu.prototype.init = function() {
    this.createMenu();
    this.bindHandlers();
};


(function () {
    var r_menu = new ResponsiveMenu({
        navClass: 'nav', 
        mobileClass: 'nav-mobile', 
        toggleClass: 'nav-list', 
        innerToggle: 'has-inner', 
        innerToggleClass: 'nav-inner', 


        navOpen: 'nav-mobile-open',
        toggleActive: 'nav-active',
        innerToggleActive: 'nav-active-inner'
    });
})();