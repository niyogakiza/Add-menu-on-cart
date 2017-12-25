(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.text = text;
exports.createElement = createElement;
exports.div = div;
exports.i = i;
exports.span = span;
exports.nav = nav;
exports.section = section;
exports.p = p;
exports.h1 = h1;
exports.article = article;
exports.h3 = h3;
exports.button = button;
exports.img = img;
exports.ul = ul;
exports.li = li;
exports.footer = footer;
exports.addClass = addClass;
exports.addId = addId;
function text(words) {
    return document.createTextNode(words);
}

function createElement(type) {
    var newElement = document.createElement(type);

    for (var _len = arguments.length, children = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        children[_key - 1] = arguments[_key];
    }

    children.forEach(function (child) {
        return newElement.appendChild(child);
    });
    return newElement;
}

function div() {
    for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        children[_key2] = arguments[_key2];
    }

    return createElement.apply(undefined, ['div'].concat(children));
}
function i() {
    for (var _len3 = arguments.length, children = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        children[_key3] = arguments[_key3];
    }

    return createElement.apply(undefined, ['i'].concat(children));
}
function span() {
    for (var _len4 = arguments.length, children = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        children[_key4] = arguments[_key4];
    }

    return createElement.apply(undefined, ['span'].concat(children));
}

function nav() {
    for (var _len5 = arguments.length, children = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        children[_key5] = arguments[_key5];
    }

    return createElement.apply(undefined, ['nav'].concat(children));
}

function section() {
    for (var _len6 = arguments.length, children = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        children[_key6] = arguments[_key6];
    }

    return createElement.apply(undefined, ['section'].concat(children));
}

function p() {
    for (var _len7 = arguments.length, children = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        children[_key7] = arguments[_key7];
    }

    return createElement.apply(undefined, ['p'].concat(children));
}
function h1() {
    for (var _len8 = arguments.length, children = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        children[_key8] = arguments[_key8];
    }

    return createElement.apply(undefined, ['h1'].concat(children));
}
function article() {
    for (var _len9 = arguments.length, children = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        children[_key9] = arguments[_key9];
    }

    return createElement.apply(undefined, ['article'].concat(children));
}
function h3() {
    for (var _len10 = arguments.length, children = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        children[_key10] = arguments[_key10];
    }

    return createElement.apply(undefined, ['h3'].concat(children));
}

function button() {
    for (var _len11 = arguments.length, children = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        children[_key11] = arguments[_key11];
    }

    return createElement.apply(undefined, ['button'].concat(children));
}
function img(source) {
    var image = createElement('img');
    image.src = source;
    return image;
}

function ul() {
    for (var _len12 = arguments.length, children = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        children[_key12] = arguments[_key12];
    }

    return createElement.apply(undefined, ['ul'].concat(children));
}
function li() {
    for (var _len13 = arguments.length, children = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        children[_key13] = arguments[_key13];
    }

    return createElement.apply(undefined, ['li'].concat(children));
}
function footer() {
    for (var _len14 = arguments.length, children = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
        children[_key14] = arguments[_key14];
    }

    return createElement.apply(undefined, ['footer'].concat(children));
}
function addClass(element) {
    var newElement = element.cloneNode(true);

    for (var _len15 = arguments.length, klasses = Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
        klasses[_key15 - 1] = arguments[_key15];
    }

    klasses.forEach(function (klass) {
        return newElement.classList.add(klass);
    });
    return newElement;
}
function addId(element, id) {
    var newElement = element.cloneNode(true);
    return Object.assign(newElement, { id: id });
}

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = app;

var _builders = require('../builders');

var _modal = require('./modal');

var _modal2 = _interopRequireDefault(_modal);

var _navbar = require('./navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _hero = require('./hero');

var _hero2 = _interopRequireDefault(_hero);

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

var _bottom = require('./bottom');

var _bottom2 = _interopRequireDefault(_bottom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function app(store) {
    var modalEle = (0, _modal2.default)(store);
    var navbarEle = (0, _navbar2.default)();
    var heroEle = (0, _hero2.default)();
    var menuEle = (0, _menu2.default)(store);
    var bottomEle = (0, _bottom2.default)();
    var appEle = (0, _builders.addId)((0, _builders.div)(modalEle, navbarEle, heroEle, menuEle, bottomEle), 'app-container'); // navbar with id app-container in div

    return appEle;
}

},{"../builders":1,"./bottom":3,"./hero":4,"./menu":6,"./modal":9,"./navbar":11}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = bottom;

var _builders = require('../builders');

function bottom() {
    var name = (0, _builders.p)((0, _builders.text)('Aimable Niyogakiza'));
    var content = (0, _builders.addClass)((0, _builders.div)(name), 'content', 'is-centered');

    var container = (0, _builders.addClass)((0, _builders.div)(content), 'container');

    return (0, _builders.addClass)((0, _builders.footer)(container), 'footer');
}

},{"../builders":1}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = hero;

var _builders = require('../builders');

function hero() {
    var logo = (0, _builders.addClass)((0, _builders.img)('static/fancybear_white.png'), 'logo');
    var the = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('The')), 'hero-text-light');
    var fancyBear = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('Fancy Bear')), 'hero-text-bold');
    var eateries = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('Eateries')), 'hero-text-light');

    var container = (0, _builders.addClass)((0, _builders.div)(logo, the, fancyBear, eateries), 'container');

    var heroContent = (0, _builders.addClass)((0, _builders.div)(container), 'hero-content');

    return (0, _builders.addClass)((0, _builders.section)(heroContent), 'hero', 'splash');
}

},{"../builders":1}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = leftMenu;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _menuList = require('./menuList');

var _menuList2 = _interopRequireDefault(_menuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function leftMenu() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var appetizers = (0, _menuList2.default)('Appetizers', (0, _helpers.filterByType)(items, 'appetizer'));
    var burgers = (0, _menuList2.default)('Burgers', (0, _helpers.filterByType)(items, 'burger'));

    return (0, _builders.addClass)((0, _builders.div)(appetizers, burgers), 'column', 'is-6');
}

},{"../builders":1,"../helpers":13,"./menuList":8}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = menu;

var _builders = require("../builders");

var _helpers = require("../helpers");

var _leftMenu = require("./leftMenu");

var _leftMenu2 = _interopRequireDefault(_leftMenu);

var _rightMenu = require("./rightMenu");

var _rightMenu2 = _interopRequireDefault(_rightMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function menu(store) {
    var menuEle = (0, _builders.addId)((0, _builders.addClass)((0, _builders.div)(), 'container'), 'menu');

    store.on('SET_ITEMS', function (_ref) {
        var items = _ref.items;

        var leftSide = (0, _leftMenu2.default)(items);
        var rightSide = (0, _rightMenu2.default)(items);
        var columns = (0, _builders.addClass)((0, _builders.section)(leftSide, rightSide), 'columns');
        (0, _helpers.$)('#menu').children(columns);
    });

    store.on('ITEM_ADDED', function (_ref2) {
        var cart = _ref2.cart;

        var cartArray = [].concat(_toConsumableArray(cart)); //create array from a set
        var articles = cartArray.map(function (id) {
            return "article[data-key='" + id + "']";
        });
        var buttons = cartArray.map(function (id) {
            return "article[data-key='" + id + "'] button.add-to-cart";
        });

        (0, _helpers.$)(articles.join(", ")).addClass('in-cart');
        (0, _helpers.$)(buttons.join(", ")).attr('disabled', 'disabled');
    });

    store.on('ITEM_REMOVED', function (_ref3) {
        var cart = _ref3.cart;

        var onPageKeys = (0, _helpers.$)('article.in-cart').map(function (ele) {
            return parseInt(ele.dataset.key, 10);
        });
        var inCartKeys = [].concat(_toConsumableArray(cart));
        var keysToRemove = onPageKeys.filter(function (key) {
            return !inCartKeys.includes(key);
        });

        keysToRemove.forEach(function (key) {
            (0, _helpers.$)("article[data-key='" + key + "']").removeClass('in-cart');
            (0, _helpers.$)("article[data-key='" + key + "'] button.add-to-cart").attr('disabled', false);
        });
    });

    return menuEle;
}

},{"../builders":1,"../helpers":13,"./leftMenu":5,"./rightMenu":12}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = menuItem;

var _builders = require('../builders');

var _helpers = require('../helpers');

function menuItem() {
    var itemData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var name = (0, _builders.addClass)((0, _builders.h3)((0, _builders.text)(itemData.name)), 'name');
    var price = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)('$' + (0, _helpers.formatPrice)(itemData.price))), 'price', 'is-pulled-right');
    var description = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)(itemData.description)), 'desc');
    var addToCart = (0, _builders.addClass)((0, _builders.button)((0, _builders.text)('Add to Cart')), 'button', 'is-pulled-right', 'add-to-cart');

    var mediaContent = (0, _builders.addClass)((0, _builders.div)(name, price, description, addToCart), 'media-content');

    var item = (0, _builders.addClass)((0, _builders.article)(mediaContent), 'media', 'menu_item');
    item.dataset.key = itemData.id;
    return item;
}

},{"../builders":1,"../helpers":13}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = menuList;

var _builders = require('../builders');

var _menuItem = require('./menuItem');

var _menuItem2 = _interopRequireDefault(_menuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function menuList(headline) {
    var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var menuItems = items.map(_menuItem2.default);

    var title = (0, _builders.addClass)((0, _builders.h1)((0, _builders.text)(headline)), 'title');

    return (0, _builders.addClass)(_builders.div.apply(undefined, [title].concat(_toConsumableArray(menuItems))), 'collections');
}

},{"../builders":1,"./menuItem":7}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = modal;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _modalItem = require('./modalItem');

var _modalItem2 = _interopRequireDefault(_modalItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function modal(store) {
    var close = (0, _builders.addId)((0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-times', 'close'), 'close');
    var title = (0, _builders.addClass)((0, _builders.h1)((0, _builders.text)('Cart')), 'title');

    var cartContainer = (0, _builders.addId)((0, _builders.div)((0, _builders.p)((0, _builders.text)('Your cart is empty.'))), 'cart-items');
    var checkoutButton = (0, _builders.addClass)((0, _builders.button)((0, _builders.text)('Checkout')), 'button', 'is-fullwidth');
    var modalContainer = (0, _builders.addClass)((0, _builders.div)(close, title, cartContainer, checkoutButton), 'modal-container');
    var modalEle = (0, _builders.addId)((0, _builders.addClass)((0, _builders.section)(modalContainer), 'modal'), 'modal');

    store.on('TOGGLE_SHOW_CART', function (_ref) {
        var cartVisible = _ref.cartVisible;

        var ele = (0, _helpers.$)('#modal');
        if (cartVisible) {
            ele.addClass('show');
        } else {
            ele.removeClass('show');
        }
    });

    store.on('ITEM_ADDED', function (_ref2) {
        var items = _ref2.items,
            cart = _ref2.cart;

        var cartArray = [].concat(_toConsumableArray(cart));
        var cartItems = cartArray.map(function (itemId) {
            return (0, _modalItem2.default)(items[itemId]);
        });
        var cartList = (0, _builders.addClass)(_builders.ul.apply(undefined, _toConsumableArray(cartItems)), 'menu');
        (0, _helpers.$)('#cart-items').children(cartList);
    });

    return modalEle;
}

},{"../builders":1,"../helpers":13,"./modalItem":10}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = modalItem;

var _builders = require("../builders");

var _helpers = require("../helpers");

function modalItem(itemData) {
    var name = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)(itemData.name)), 'name');
    var price = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)((0, _helpers.formatPrice)(itemData.price))), 'price', 'is-pulled-right');
    var removeButton = (0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-times', 'remove');

    var item = (0, _builders.addClass)((0, _builders.li)(name, price, removeButton), 'menu-item');
    item.dataset.key = itemData.id;

    return item;
}

},{"../builders":1,"../helpers":13}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = navbar;

var _builders = require('../builders');

function navbar() {
    var navLeft = (0, _builders.addClass)((0, _builders.div)(), 'navbar-left');

    var cartIcon = (0, _builders.addId)((0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-shopping-cart'), 'cart-icon');
    var cartItems = (0, _builders.addClass)((0, _builders.span)(), 'cart-items');
    var navbarItem = (0, _builders.addClass)((0, _builders.div)(cartIcon, cartItems), 'navbar-item');
    var navRight = (0, _builders.addClass)((0, _builders.div)(navbarItem), 'navbar-right', 'cart');

    return (0, _builders.addClass)((0, _builders.nav)(navLeft, navRight), 'navbar');
}

},{"../builders":1}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = rightMenu;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _menuList = require('./menuList');

var _menuList2 = _interopRequireDefault(_menuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rightMenu() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var soupSalad = (0, _menuList2.default)('soups and salads', (0, _helpers.filterByType)(items, 'soup_salad'));
    var desserts = (0, _menuList2.default)('Desserts', (0, _helpers.filterByType)(items, 'dessert'));

    return (0, _builders.addClass)((0, _builders.div)(soupSalad, desserts), 'column', 'is-6');
}

},{"../builders":1,"../helpers":13,"./menuList":8}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.filterByType = filterByType;
exports.formatPrice = formatPrice;
exports.$ = $;
function filterByType(map, type) {
    return Object.keys(map).filter(function (key) {
        return map[key].type === type;
    }).map(function (key) {
        return map[key];
    });
}

function formatPrice(price) {
    return parseFloat(price).toFixed(2);
}

function $(query) {
    var elements = Array.prototype.slice.call(document.querySelectorAll(query));
    function children(toAdd) {
        elements.forEach(function (ele) {
            while (ele.firstChild) {
                ele.removeChild(ele.firstChild);
            }

            ele.appendChild(toAdd);
        });
    }
    // cb is callback
    function on(event, cb) {
        elements.forEach(function (ele) {
            ele.addEventListener(event, cb);
        });
    }

    function addClass(klass) {
        elements.forEach(function (ele) {
            ele.classList.add(klass);
        });
    }

    function removeClass(klass) {
        elements.forEach(function (ele) {
            ele.classList.remove(klass);
        });
    }

    function attr(attribute, value) {
        elements.forEach(function (ele) {
            if (value === false) {
                ele.removeAttribute(attribute);
            } else {
                ele.setAttribute(attribute, value);
            }
        });
    }

    function map(cb) {
        return elements.map(cb);
    }

    return {
        children: children,
        on: on,
        addClass: addClass,
        removeClass: removeClass,
        attr: attr,
        map: map
    };
}

},{}],14:[function(require,module,exports){
'use strict';

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _state = require('./state');

var _setup_listeners = require('./setup_listeners');

var _setup_listeners2 = _interopRequireDefault(_setup_listeners);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer(state, event, data) {
    switch (event) {
        case 'SET_ITEMS':
            return Object.assign({}, state, {
                items: data.items.reduce(function (total, item) {
                    return Object.assign({}, total, _defineProperty({}, item.id, item));
                }, {})
            });
        case 'TOGGLE_SHOW_CART':
            return Object.assign({}, state, {
                cartVisible: !state.cartVisible
            });
        case 'ITEM_ADDED':
            return Object.assign({}, state, {
                cart: new Set(state.cart).add(data.item)
            });
        case 'ITEM_REMOVED':
            var newCart = new Set(state.cart);
            newCart.delete(data.item);
            return Object.assign({}, state, {
                cart: newCart
            });
        default:
            return state;
    }
}

var store = (0, _state.createStore)(reducer);

fetch('food.json').then(function (res) {
    return res.json();
}).then(function (resBody) {
    var body = document.querySelector('body');
    body.insertBefore((0, _app2.default)(store), body.childNodes[0]);
    store.trigger('SET_ITEMS', { items: resBody });
    (0, _setup_listeners2.default)(store);
});

},{"./components/app":2,"./setup_listeners":15,"./state":16}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (store) {
    (0, _helpers.$)('#cart-icon, #close').on('click', function () {
        store.trigger('TOGGLE_SHOW_CART');
    });

    function getParentWithKey(element) {
        var parent = element.parentElement;

        while (parent && !parent.dataset.key) {
            parent = parent.parentElement;
        }

        return parent;
    }

    (0, _helpers.$)('.add-to-cart').on('click', function (e) {
        var parent = getParentWithKey(e.currentTarget);

        var key = parseInt(parent.dataset.key, 10);
        store.trigger('ITEM_ADDED', { item: key });
    });

    (0, _helpers.$)('body').on('click', function (e) {
        if (e.target.classList.contains('remove')) {
            var element = e.target;
            var parent = getParentWithKey(element);
            var key = parseInt(parent.dataset.key, 10);

            parent.parentElement.removeChild(parent);
            store.trigger('ITEM_REMOVED', { item: key });
        }
    });
};

var _helpers = require('./helpers');

},{"./helpers":13}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createStore = createStore;
var defaultState = {
    item: {},
    cart: new Set(),
    cartVisible: false
};

function createStore(reducer) {
    var listeners = {};
    var state = Object.assign({}, defaultState);

    function on(event, cb) {
        if (!listeners[event]) {
            listeners[event] = [];
        }

        listeners[event].push(cb);
    }

    function trigger(event) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        state = reducer(state, event, data);

        if (listeners[event]) {
            listeners[event].forEach(function (cb) {
                cb(state);
            });
        }
    }

    return {
        on: on,
        trigger: trigger
    };
}

},{}]},{},[14])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYnVpbGRlcnMuanMiLCJzcmMvanMvY29tcG9uZW50cy9hcHAuanMiLCJzcmMvanMvY29tcG9uZW50cy9ib3R0b20uanMiLCJzcmMvanMvY29tcG9uZW50cy9oZXJvLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbGVmdE1lbnUuanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51LmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbWVudUl0ZW0uanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51TGlzdC5qcyIsInNyYy9qcy9jb21wb25lbnRzL21vZGFsLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbW9kYWxJdGVtLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvcmlnaHRNZW51LmpzIiwic3JjL2pzL2hlbHBlcnMuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvc2V0dXBfbGlzdGVuZXJzLmpzIiwic3JjL2pzL3N0YXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7UUNBZ0IsSSxHQUFBLEk7UUFJQSxhLEdBQUEsYTtRQU1BLEcsR0FBQSxHO1FBR0EsQyxHQUFBLEM7UUFHQSxJLEdBQUEsSTtRQUlBLEcsR0FBQSxHO1FBSUEsTyxHQUFBLE87UUFJQSxDLEdBQUEsQztRQUdBLEUsR0FBQSxFO1FBR0EsTyxHQUFBLE87UUFHQSxFLEdBQUEsRTtRQUlBLE0sR0FBQSxNO1FBR0EsRyxHQUFBLEc7UUFNQSxFLEdBQUEsRTtRQUdBLEUsR0FBQSxFO1FBR0EsTSxHQUFBLE07UUFHQSxRLEdBQUEsUTtRQUtDLEssR0FBQSxLO0FBaEVWLFNBQVMsSUFBVCxDQUFjLEtBQWQsRUFBcUI7QUFDeEIsV0FBTyxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBUDtBQUNIOztBQUVNLFNBQVMsYUFBVCxDQUF1QixJQUF2QixFQUF5QztB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bGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZnVuY3Rpb24gdGV4dCh3b3Jkcykge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh3b3Jkcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIC4uLmNoaWxkcmVuKXtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdiguLi5jaGlsZHJlbil7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIC4uLmNoaWxkcmVuKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpKC4uLmNoaWxkcmVuKXtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaScsIC4uLmNoaWxkcmVuKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzcGFuKC4uLmNoaWxkcmVuKXtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnc3BhbicsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hdiguLi5jaGlsZHJlbil7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ25hdicsIC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3Rpb24oLi4uY2hpbGRyZW4pe1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcCguLi5jaGlsZHJlbil7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3AnLCAuLi5jaGlsZHJlbik7XG59XG5leHBvcnQgZnVuY3Rpb24gaDEoLi4uY2hpbGRyZW4pe1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdoMScsIC4uLmNoaWxkcmVuKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcnRpY2xlKC4uLmNoaWxkcmVuKXtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScsIC4uLmNoaWxkcmVuKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBoMyguLi5jaGlsZHJlbil7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2gzJywgLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnV0dG9uKC4uLmNoaWxkcmVuKXtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgLi4uY2hpbGRyZW4pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGltZyhzb3VyY2Upe1xuICAgIGNvbnN0IGltYWdlID0gY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc3JjID0gc291cmNlO1xuICAgIHJldHVybiBpbWFnZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVsKC4uLmNoaWxkcmVuKXtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgndWwnLCAuLi5jaGlsZHJlbik7XG59XG5leHBvcnQgZnVuY3Rpb24gbGkoLi4uY2hpbGRyZW4pe1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdsaScsIC4uLmNoaWxkcmVuKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmb290ZXIoLi4uY2hpbGRyZW4pe1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdmb290ZXInLCAuLi5jaGlsZHJlbik7XG59XG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgLi4ua2xhc3Nlcykge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICBrbGFzc2VzLmZvckVhY2goa2xhc3MgPT4gbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGtsYXNzKSk7XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5leHBvcnQgIGZ1bmN0aW9uIGFkZElkKGVsZW1lbnQsIGlkKXtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3RWxlbWVudCwgeyBpZCB9KTtcbn0iLCJpbXBvcnQgeyBkaXYsIGFkZElkIH0gZnJvbSBcIi4uL2J1aWxkZXJzXCI7XG5pbXBvcnQgbW9kYWwgZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQgbmF2YmFyIGZyb20gJy4vbmF2YmFyJztcbmltcG9ydCBoZXJvIGZyb20gJy4vaGVybyc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGJvdHRvbSBmcm9tICcuL2JvdHRvbSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwKHN0b3JlKXtcbiAgICBjb25zdCBtb2RhbEVsZSA9IG1vZGFsKHN0b3JlKTtcbiAgICBjb25zdCBuYXZiYXJFbGUgPSBuYXZiYXIoKTtcbiAgICBjb25zdCBoZXJvRWxlID0gaGVybygpO1xuICAgIGNvbnN0IG1lbnVFbGUgPSBtZW51KHN0b3JlKTtcbiAgICBjb25zdCBib3R0b21FbGUgPSBib3R0b20oKTtcbiAgICBjb25zdCBhcHBFbGUgPSBhZGRJZChkaXYobW9kYWxFbGUsIG5hdmJhckVsZSwgaGVyb0VsZSwgbWVudUVsZSwgYm90dG9tRWxlKSwgJ2FwcC1jb250YWluZXInKTsvLyBuYXZiYXIgd2l0aCBpZCBhcHAtY29udGFpbmVyIGluIGRpdlxuXG4gICAgcmV0dXJuIGFwcEVsZTtcbn1cbiIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYsIGZvb3RlciwgdGV4dCwgcCB9IGZyb20gXCIuLi9idWlsZGVyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAgZnVuY3Rpb24gYm90dG9tKCl7XG4gICAgY29uc3QgbmFtZSA9IHAodGV4dCgnQWltYWJsZSBOaXlvZ2FraXphJykpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBhZGRDbGFzcyhkaXYobmFtZSksICdjb250ZW50JywgJ2lzLWNlbnRlcmVkJyk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBhZGRDbGFzcyhkaXYoY29udGVudCksICdjb250YWluZXInKTtcblxuICAgIHJldHVybiBhZGRDbGFzcyhmb290ZXIoY29udGFpbmVyKSwgJ2Zvb3RlcicpO1xufSIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYsIGltZywgcCwgc2VjdGlvbiwgdGV4dH0gZnJvbSBcIi4uL2J1aWxkZXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlcm8oKXtcbiAgICBjb25zdCBsb2dvID0gYWRkQ2xhc3MoaW1nKCdzdGF0aWMvZmFuY3liZWFyX3doaXRlLnBuZycpLCAnbG9nbycpO1xuICAgIGNvbnN0IHRoZSA9IGFkZENsYXNzKHAodGV4dCgnVGhlJykpLCAnaGVyby10ZXh0LWxpZ2h0Jyk7XG4gICAgY29uc3QgZmFuY3lCZWFyID0gYWRkQ2xhc3MocCh0ZXh0KCdGYW5jeSBCZWFyJykpLCAnaGVyby10ZXh0LWJvbGQnKTtcbiAgICBjb25zdCBlYXRlcmllcyA9IGFkZENsYXNzKHAodGV4dCgnRWF0ZXJpZXMnKSksICdoZXJvLXRleHQtbGlnaHQnKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGFkZENsYXNzKGRpdihsb2dvLCB0aGUsIGZhbmN5QmVhciwgZWF0ZXJpZXMpLCAnY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBoZXJvQ29udGVudCA9IGFkZENsYXNzKGRpdihjb250YWluZXIpLCAnaGVyby1jb250ZW50Jyk7XG5cbiAgICByZXR1cm4gYWRkQ2xhc3Moc2VjdGlvbihoZXJvQ29udGVudCksICdoZXJvJywgJ3NwbGFzaCcpO1xuICAgIH0iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2IH0gZnJvbSBcIi4uL2J1aWxkZXJzXCI7XG5pbXBvcnQgeyBmaWx0ZXJCeVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCBtZW51TGlzdCBmcm9tICcuL21lbnVMaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGVmdE1lbnUoaXRlbXMgPSBbXSl7XG4gICAgY29uc3QgYXBwZXRpemVycyA9IG1lbnVMaXN0KCdBcHBldGl6ZXJzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnYXBwZXRpemVyJykpO1xuICAgIGNvbnN0IGJ1cmdlcnMgPSBtZW51TGlzdCgnQnVyZ2VycycsIGZpbHRlckJ5VHlwZShpdGVtcywgJ2J1cmdlcicpKTtcblxuICAgIHJldHVybiBhZGRDbGFzcyhkaXYoYXBwZXRpemVycywgYnVyZ2VycyksICdjb2x1bW4nLCAnaXMtNicpO1xuXG59IiwiaW1wb3J0IHthZGRDbGFzcywgYWRkSWQsIGJ1dHRvbiwgZGl2LCBzZWN0aW9ufSBmcm9tIFwiLi4vYnVpbGRlcnNcIjtcbmltcG9ydCB7ICQgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xuaW1wb3J0IGxlZnRNZW51IGZyb20gJy4vbGVmdE1lbnUnO1xuaW1wb3J0IHJpZ2h0TWVudSBmcm9tICcuL3JpZ2h0TWVudSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoc3RvcmUpe1xuICAgIGNvbnN0IG1lbnVFbGUgPSBhZGRJZChhZGRDbGFzcyhkaXYoKSwgJ2NvbnRhaW5lcicpLCAnbWVudScpO1xuXG4gICAgc3RvcmUub24oJ1NFVF9JVEVNUycsICh7IGl0ZW1zIH0pID0+IHtcbiAgICAgICAgY29uc3QgbGVmdFNpZGUgPSBsZWZ0TWVudShpdGVtcyk7XG4gICAgICAgIGNvbnN0IHJpZ2h0U2lkZSA9IHJpZ2h0TWVudShpdGVtcyk7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBhZGRDbGFzcyhzZWN0aW9uKGxlZnRTaWRlLCByaWdodFNpZGUpLCAnY29sdW1ucycpO1xuICAgICAgICAkKCcjbWVudScpLmNoaWxkcmVuKGNvbHVtbnMpO1xuICAgIH0pO1xuXG4gICAgc3RvcmUub24oJ0lURU1fQURERUQnLCAoeyBjYXJ0IH0pID0+IHtcbiAgICAgICAgY29uc3QgY2FydEFycmF5ID0gWy4uLmNhcnRdOy8vY3JlYXRlIGFycmF5IGZyb20gYSBzZXRcbiAgICAgICAgY29uc3QgYXJ0aWNsZXMgPSBjYXJ0QXJyYXkubWFwKGlkID0+IGBhcnRpY2xlW2RhdGEta2V5PScke2lkfSddYCk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBjYXJ0QXJyYXkubWFwKGlkID0+IGBhcnRpY2xlW2RhdGEta2V5PScke2lkfSddIGJ1dHRvbi5hZGQtdG8tY2FydGApO1xuXG4gICAgICAgICQoYXJ0aWNsZXMuam9pbihcIiwgXCIpKS5hZGRDbGFzcygnaW4tY2FydCcpO1xuICAgICAgICAkKGJ1dHRvbnMuam9pbihcIiwgXCIpKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgIH0pO1xuXG4gICAgc3RvcmUub24oJ0lURU1fUkVNT1ZFRCcsICh7IGNhcnQgfSkgPT4ge1xuICAgICAgICBjb25zdCBvblBhZ2VLZXlzID0gJCgnYXJ0aWNsZS5pbi1jYXJ0JykubWFwKGVsZSA9PiBwYXJzZUludChlbGUuZGF0YXNldC5rZXksIDEwKSk7XG4gICAgICAgIGNvbnN0IGluQ2FydEtleXMgPSBbLi4uY2FydF07XG4gICAgICAgIGNvbnN0IGtleXNUb1JlbW92ZSA9IG9uUGFnZUtleXMuZmlsdGVyKGtleSA9PiAhaW5DYXJ0S2V5cy5pbmNsdWRlcyhrZXkpKTtcblxuICAgICAgICBrZXlzVG9SZW1vdmUuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgJChgYXJ0aWNsZVtkYXRhLWtleT0nJHtrZXl9J11gKS5yZW1vdmVDbGFzcygnaW4tY2FydCcpO1xuICAgICAgICAgICAgJChgYXJ0aWNsZVtkYXRhLWtleT0nJHtrZXl9J10gYnV0dG9uLmFkZC10by1jYXJ0YCkuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1lbnVFbGU7XG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGFydGljbGUsIGJ1dHRvbiwgZGl2LCBoMywgcCwgc3BhbiwgdGV4dCB9IGZyb20gXCIuLi9idWlsZGVyc1wiO1xuaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUl0ZW0oaXRlbURhdGEgPSB7fSl7XG4gICAgY29uc3QgbmFtZSA9IGFkZENsYXNzKGgzKHRleHQoaXRlbURhdGEubmFtZSkpLCAnbmFtZScpO1xuICAgIGNvbnN0IHByaWNlID0gYWRkQ2xhc3Moc3Bhbih0ZXh0KGAkJHtmb3JtYXRQcmljZShpdGVtRGF0YS5wcmljZSl9YCkpLCAncHJpY2UnLCAnaXMtcHVsbGVkLXJpZ2h0Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBhZGRDbGFzcyhwKHRleHQoaXRlbURhdGEuZGVzY3JpcHRpb24pKSwgJ2Rlc2MnKTtcbiAgICBjb25zdCBhZGRUb0NhcnQgPSBhZGRDbGFzcyhidXR0b24odGV4dCgnQWRkIHRvIENhcnQnKSksICdidXR0b24nLCAnaXMtcHVsbGVkLXJpZ2h0JywgJ2FkZC10by1jYXJ0Jyk7XG5cbiAgICBjb25zdCBtZWRpYUNvbnRlbnQgPSBhZGRDbGFzcyhkaXYobmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBhZGRUb0NhcnQpLCAnbWVkaWEtY29udGVudCcpO1xuXG4gICAgY29uc3QgaXRlbSA9IGFkZENsYXNzKGFydGljbGUobWVkaWFDb250ZW50KSwgJ21lZGlhJywgJ21lbnVfaXRlbScpO1xuICAgIGl0ZW0uZGF0YXNldC5rZXkgPSBpdGVtRGF0YS5pZDtcbiAgICByZXR1cm4gaXRlbTtcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2LCBoMSwgdGV4dCB9IGZyb20gXCIuLi9idWlsZGVyc1wiO1xuaW1wb3J0IG1lbnVJdGVtIGZyb20gJy4vbWVudUl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51TGlzdChoZWFkbGluZSwgaXRlbXMgPSBbXSl7XG4gICAgY29uc3QgbWVudUl0ZW1zID0gaXRlbXMubWFwKG1lbnVJdGVtKTtcblxuICAgIGNvbnN0IHRpdGxlID0gYWRkQ2xhc3MoaDEodGV4dChoZWFkbGluZSkpLCAndGl0bGUnKTtcblxuICAgIHJldHVybiBhZGRDbGFzcyhkaXYodGl0bGUsIC4uLm1lbnVJdGVtcyksICdjb2xsZWN0aW9ucycpO1xufSIsImltcG9ydCB7IGFkZENsYXNzLCBhZGRJZCwgYnV0dG9uLCBkaXYsIGgxLCBpLCBwLCBzZWN0aW9uLCB0ZXh0LCB1bCB9IGZyb20gXCIuLi9idWlsZGVyc1wiO1xuaW1wb3J0IHsgJCB9IGZyb20gJy4uL2hlbHBlcnMnXG5pbXBvcnQgbW9kYWxJdGVtIGZyb20gJy4vbW9kYWxJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWwoc3RvcmUpe1xuICAgIGNvbnN0IGNsb3NlID0gYWRkSWQoYWRkQ2xhc3MoaSgpLCAnZmEnLCAnZmEtdGltZXMnLCAnY2xvc2UnKSwgJ2Nsb3NlJyk7XG4gICAgY29uc3QgdGl0bGUgPSBhZGRDbGFzcyhoMSh0ZXh0KCdDYXJ0JykpLCAndGl0bGUnKTtcblxuICAgIGNvbnN0IGNhcnRDb250YWluZXIgPSBhZGRJZChkaXYocCh0ZXh0KCdZb3VyIGNhcnQgaXMgZW1wdHkuJykpKSwgJ2NhcnQtaXRlbXMnKTtcbiAgICBjb25zdCBjaGVja291dEJ1dHRvbiA9IGFkZENsYXNzKGJ1dHRvbih0ZXh0KCdDaGVja291dCcpKSwgJ2J1dHRvbicsICdpcy1mdWxsd2lkdGgnKTtcbiAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGFkZENsYXNzKGRpdihjbG9zZSwgdGl0bGUsIGNhcnRDb250YWluZXIsIGNoZWNrb3V0QnV0dG9uKSwnbW9kYWwtY29udGFpbmVyJyk7XG4gICAgY29uc3QgbW9kYWxFbGUgPSBhZGRJZChhZGRDbGFzcyhzZWN0aW9uKG1vZGFsQ29udGFpbmVyKSwgJ21vZGFsJyksICdtb2RhbCcpO1xuXG4gICAgc3RvcmUub24oJ1RPR0dMRV9TSE9XX0NBUlQnLCAoeyBjYXJ0VmlzaWJsZX0pID0+IHtcbiAgICAgICAgY29uc3QgZWxlID0gJCgnI21vZGFsJyk7XG4gICAgICAgIGlmKGNhcnRWaXNpYmxlKXtcbiAgICAgICAgICAgIGVsZS5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGVsZS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBzdG9yZS5vbignSVRFTV9BRERFRCcsICh7IGl0ZW1zLCBjYXJ0IH0pID0+IHtcbiAgICAgICAgY29uc3QgY2FydEFycmF5ID0gWy4uLmNhcnRdO1xuICAgICAgICBjb25zdCBjYXJ0SXRlbXMgPSBjYXJ0QXJyYXkubWFwKGl0ZW1JZCA9PiBtb2RhbEl0ZW0oaXRlbXNbaXRlbUlkXSkpO1xuICAgICAgICBjb25zdCBjYXJ0TGlzdCA9IGFkZENsYXNzKHVsKC4uLmNhcnRJdGVtcyksICdtZW51Jyk7XG4gICAgICAgICQoJyNjYXJ0LWl0ZW1zJykuY2hpbGRyZW4oY2FydExpc3QpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1vZGFsRWxlO1xufVxuXG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgaSwgbGksIHNwYW4sIHRleHQgfSBmcm9tIFwiLi4vYnVpbGRlcnNcIjtcbmltcG9ydCB7IGZvcm1hdFByaWNlIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWxJdGVtKGl0ZW1EYXRhKXtcbiAgICBjb25zdCBuYW1lID0gYWRkQ2xhc3Moc3Bhbih0ZXh0KGl0ZW1EYXRhLm5hbWUpKSwgJ25hbWUnKTtcbiAgICBjb25zdCBwcmljZSA9IGFkZENsYXNzKHNwYW4odGV4dChmb3JtYXRQcmljZShpdGVtRGF0YS5wcmljZSkpKSwgJ3ByaWNlJywgJ2lzLXB1bGxlZC1yaWdodCcpO1xuICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGFkZENsYXNzKGkoKSwgJ2ZhJywgJ2ZhLXRpbWVzJywgJ3JlbW92ZScpO1xuXG4gICAgY29uc3QgaXRlbSA9IGFkZENsYXNzKGxpKG5hbWUsIHByaWNlLCByZW1vdmVCdXR0b24pLCAnbWVudS1pdGVtJyk7XG4gICAgaXRlbS5kYXRhc2V0LmtleSA9IGl0ZW1EYXRhLmlkO1xuXG4gICAgcmV0dXJuIGl0ZW07XG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGFkZElkLCBkaXYsIGksIG5hdiwgc3BhbiB9IGZyb20gJy4uL2J1aWxkZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgIGZ1bmN0aW9uIG5hdmJhcigpe1xuICAgIGNvbnN0IG5hdkxlZnQgPSBhZGRDbGFzcyhkaXYoKSwgJ25hdmJhci1sZWZ0Jyk7XG5cbiAgICBjb25zdCBjYXJ0SWNvbiA9IGFkZElkKGFkZENsYXNzKGkoKSwgJ2ZhJywgJ2ZhLXNob3BwaW5nLWNhcnQnKSwgJ2NhcnQtaWNvbicpO1xuICAgIGNvbnN0IGNhcnRJdGVtcyA9IGFkZENsYXNzKHNwYW4oKSwgJ2NhcnQtaXRlbXMnKTtcbiAgICBjb25zdCBuYXZiYXJJdGVtID0gYWRkQ2xhc3MoZGl2KGNhcnRJY29uLCBjYXJ0SXRlbXMpLCAnbmF2YmFyLWl0ZW0nKTtcbiAgICBjb25zdCBuYXZSaWdodCA9IGFkZENsYXNzKGRpdihuYXZiYXJJdGVtKSwgJ25hdmJhci1yaWdodCcsICdjYXJ0Jyk7XG5cbiAgICByZXR1cm4gYWRkQ2xhc3MobmF2KG5hdkxlZnQsIG5hdlJpZ2h0KSwgJ25hdmJhcicpO1xufSIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYgfSBmcm9tIFwiLi4vYnVpbGRlcnNcIjtcbmltcG9ydCB7IGZpbHRlckJ5VHlwZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IG1lbnVMaXN0IGZyb20gJy4vbWVudUxpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByaWdodE1lbnUoaXRlbXMgPSBbXSl7XG4gICAgY29uc3Qgc291cFNhbGFkID0gbWVudUxpc3QoJ3NvdXBzIGFuZCBzYWxhZHMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdzb3VwX3NhbGFkJykpO1xuICAgIGNvbnN0IGRlc3NlcnRzID0gbWVudUxpc3QoJ0Rlc3NlcnRzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnZGVzc2VydCcpKTtcblxuICAgIHJldHVybiBhZGRDbGFzcyhkaXYoc291cFNhbGFkLCBkZXNzZXJ0cyksICdjb2x1bW4nLCAnaXMtNicpO1xufSIsIlxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQnlUeXBlKG1hcCwgdHlwZSl7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG1hcClcbiAgICAgICAgLmZpbHRlcihrZXkgPT4gbWFwW2tleV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgLm1hcChrZXkgPT4gbWFwW2tleV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UHJpY2UocHJpY2Upe1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHByaWNlKS50b0ZpeGVkKDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gJChxdWVyeSl7XG4gICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KSk7XG4gICAgZnVuY3Rpb24gY2hpbGRyZW4odG9BZGQpe1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgICB3aGlsZSAoZWxlLmZpcnN0Q2hpbGQpe1xuICAgICAgICAgICAgICAgIGVsZS5yZW1vdmVDaGlsZChlbGUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsZS5hcHBlbmRDaGlsZCh0b0FkZCk7XG4gICAgICAgIH0pO1xuICAgIH1cbi8vIGNiIGlzIGNhbGxiYWNrXG4gICAgZnVuY3Rpb24gb24oZXZlbnQsIGNiKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZENsYXNzKGtsYXNzKXtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoa2xhc3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVDbGFzcyhrbGFzcyl7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGtsYXNzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXR0cihhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICAgIGlmKHZhbHVlID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgZWxlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgZWxlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXAoY2Ipe1xuICAgICAgICByZXR1cm4gZWxlbWVudHMubWFwKGNiKTtcbiAgICB9XG5cbiAgICByZXR1cm57XG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBvbixcbiAgICAgICAgYWRkQ2xhc3MsXG4gICAgICAgIHJlbW92ZUNsYXNzLFxuICAgICAgICBhdHRyLFxuICAgICAgICBtYXBcbiAgICB9O1xufSIsImltcG9ydCBhcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcCc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgc2V0dXBMaXN0ZW5lcnMgZnJvbSAnLi9zZXR1cF9saXN0ZW5lcnMnO1xuXG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGV2ZW50LCBkYXRhKXtcbiAgICBzd2l0Y2ggKGV2ZW50KXtcbiAgICAgICAgY2FzZSAnU0VUX0lURU1TJzpcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICBpdGVtczogZGF0YS5pdGVtcy5yZWR1Y2UoKHRvdGFsLCBpdGVtKSA9PiBPYmplY3QuYXNzaWduKHt9LCB0b3RhbCwge1tpdGVtLmlkXTogaXRlbX0pLCB7fSksXG4gICAgICAgIH0pO1xuICAgICAgICBjYXNlICdUT0dHTEVfU0hPV19DQVJUJzpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGNhcnRWaXNpYmxlOiAhc3RhdGUuY2FydFZpc2libGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSAnSVRFTV9BRERFRCc6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBjYXJ0OihuZXcgU2V0KHN0YXRlLmNhcnQpKS5hZGQoZGF0YS5pdGVtKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlICdJVEVNX1JFTU9WRUQnOlxuICAgICAgICAgICAgY29uc3QgbmV3Q2FydCA9IChuZXcgU2V0KHN0YXRlLmNhcnQpKTtcbiAgICAgICAgICAgIG5ld0NhcnQuZGVsZXRlKGRhdGEuaXRlbSk7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBjYXJ0OiBuZXdDYXJ0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpO1xuXG5mZXRjaCgnZm9vZC5qc29uJylcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbihyZXNCb2R5ID0+IHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgYm9keS5pbnNlcnRCZWZvcmUoYXBwKHN0b3JlKSwgYm9keS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgc3RvcmUudHJpZ2dlcignU0VUX0lURU1TJywgeyBpdGVtczogcmVzQm9keX0pO1xuICAgICAgICBzZXR1cExpc3RlbmVycyhzdG9yZSk7XG5cbiAgICB9KTtcbiIsImltcG9ydCB7ICQgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5leHBvcnQgIGRlZmF1bHQgIGZ1bmN0aW9uIChzdG9yZSl7XG4gICAgJCgnI2NhcnQtaWNvbiwgI2Nsb3NlJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzdG9yZS50cmlnZ2VyKCdUT0dHTEVfU0hPV19DQVJUJyk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBnZXRQYXJlbnRXaXRoS2V5KGVsZW1lbnQpe1xuICAgICAgICBsZXQgcGFyZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIHdoaWxlIChwYXJlbnQgJiYgIXBhcmVudC5kYXRhc2V0LmtleSl7XG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuXG4gICAgJCgnLmFkZC10by1jYXJ0Jykub24oJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGdldFBhcmVudFdpdGhLZXkoZS5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICBjb25zdCBrZXkgPSBwYXJzZUludChwYXJlbnQuZGF0YXNldC5rZXksIDEwKTtcbiAgICAgICAgc3RvcmUudHJpZ2dlcignSVRFTV9BRERFRCcsIHsgaXRlbToga2V5IH0pO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlbW92ZScpKXtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGdldFBhcmVudFdpdGhLZXkoZWxlbWVudCk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBwYXJzZUludChwYXJlbnQuZGF0YXNldC5rZXksIDEwKTtcblxuICAgICAgICAgICAgcGFyZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocGFyZW50KTtcbiAgICAgICAgICAgIHN0b3JlLnRyaWdnZXIoJ0lURU1fUkVNT1ZFRCcsIHsgaXRlbToga2V5IH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cblxufSIsImNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcbiAgICBpdGVtOiB7fSxcbiAgICBjYXJ0OiAobmV3IFNldCgpKSxcbiAgICBjYXJ0VmlzaWJsZTogZmFsc2UsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlcil7XG4gICAgY29uc3QgbGlzdGVuZXJzID0ge307XG4gICAgbGV0IHN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFN0YXRlKTtcblxuICAgIGZ1bmN0aW9uIG9uKGV2ZW50LCBjYil7XG4gICAgICAgIGlmKCFsaXN0ZW5lcnNbZXZlbnRdKXtcbiAgICAgICAgICAgIGxpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3RlbmVyc1tldmVudF0ucHVzaChjYik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJpZ2dlcihldmVudCwgZGF0YSA9IHt9KXtcbiAgICAgICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBldmVudCwgZGF0YSk7XG5cbiAgICAgICAgaWYobGlzdGVuZXJzW2V2ZW50XSl7XG4gICAgICAgICAgICBsaXN0ZW5lcnNbZXZlbnRdLmZvckVhY2goY2IgPT4ge1xuICAgICAgICAgICAgICAgIGNiKHN0YXRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJue1xuICAgICAgICBvbixcbiAgICAgICAgdHJpZ2dlcixcbiAgICB9O1xufSJdfQ==
