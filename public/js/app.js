
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
System.register([], (function (exports) {
	'use strict';
	return {
		execute: (function () {

			function getDefaultExportFromCjs (x) {
				return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
			}

			var singleSpaSvelte$1 = {};

			(function (exports) {

			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			exports["default"] = singleSpaSvelte;

			function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

			function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

			function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

			function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

			var defaultOpts = {
			  // required opts
			  component: null,
			  // optional opts
			  domElementGetter: null,
			  props: {}
			};

			function singleSpaSvelte(userOpts) {
			  if (_typeof(userOpts) !== "object") {
			    throw new Error("single-spa-svelte requires a configuration object");
			  }

			  var opts = _objectSpread(_objectSpread({}, defaultOpts), userOpts);

			  if (!opts.component) {
			    throw new Error("single-spa-svelte must be passed opts.component");
			  } // Just a shared object to store the mounted object state


			  var mountedInstances = {};
			  return {
			    bootstrap: bootstrap.bind(null, opts, mountedInstances),
			    mount: mount.bind(null, opts, mountedInstances),
			    unmount: unmount.bind(null, opts, mountedInstances),
			    update: update.bind(null, opts, mountedInstances)
			  };
			}

			function bootstrap(opts) {
			  return Promise.resolve();
			}

			function mount(opts, mountedInstances, singleSpaProps) {
			  var defaultOptKeys = Object.keys(defaultOpts);
			  var svelteOpts = Object.keys(opts).reduce(function (object, key) {
			    if (!defaultOptKeys.includes(key)) {
			      object[key] = opts[key];
			    }

			    return object;
			  }, {});
			  return Promise.resolve().then(function () {
			    var domElementGetter = chooseDomElementGetter(opts, singleSpaProps);
			    var domElement = domElementGetter(); // See https://svelte.dev/docs#Creating_a_component

			    mountedInstances.instance = new opts.component(_objectSpread(_objectSpread({}, svelteOpts), {}, {
			      target: domElement,
			      props: Object.assign({}, singleSpaProps, opts.props)
			    }));
			  });
			}

			function unmount(opts, mountedInstances) {
			  return Promise.resolve().then(function () {
			    mountedInstances.instance.$destroy ? mountedInstances.instance.$destroy() : mountedInstances.instance.destroy();
			  });
			}

			function update(opts, mountedInstances, props) {
			  return Promise.resolve().then(function () {
			    mountedInstances.instance.$set ? mountedInstances.instance.$set(props) : mountedInstances.instance.set(props);
			  });
			}

			function chooseDomElementGetter(opts, props) {
			  props = props && props.customProps ? props.customProps : props;

			  if (props.domElement) {
			    return function () {
			      return props.domElement;
			    };
			  } else if (props.domElementGetter) {
			    return function () {
			      return props.domElementGetter(props);
			    };
			  } else if (opts.domElementGetter) {
			    return function () {
			      return opts.domElementGetter(props);
			    };
			  } else {
			    return defaultDomElementGetter(props);
			  }
			}

			function defaultDomElementGetter(props) {
			  var appName = props.appName || props.name;

			  if (!appName) {
			    throw Error("single-spa-svelte was not given an application name as a prop, so it can't make a unique dom element container for the svelte application");
			  }

			  var htmlId = "single-spa-application:".concat(appName);
			  return function defaultDomEl() {
			    var domElement = document.getElementById(htmlId);

			    if (!domElement) {
			      domElement = document.createElement("div");
			      domElement.id = htmlId;
			      document.body.appendChild(domElement);
			    }

			    return domElement;
			  };
			}


			}(singleSpaSvelte$1));

			var singleSpaSvelte = /*@__PURE__*/getDefaultExportFromCjs(singleSpaSvelte$1);

			function noop() { }
			function run(fn) {
			    return fn();
			}
			function blank_object() {
			    return Object.create(null);
			}
			function run_all(fns) {
			    fns.forEach(run);
			}
			function is_function(thing) {
			    return typeof thing === 'function';
			}
			function safe_not_equal(a, b) {
			    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
			}
			function is_empty(obj) {
			    return Object.keys(obj).length === 0;
			}
			function append(target, node) {
			    target.appendChild(node);
			}
			function append_styles(target, style_sheet_id, styles) {
			    const append_styles_to = get_root_for_style(target);
			    if (!append_styles_to.getElementById(style_sheet_id)) {
			        const style = element('style');
			        style.id = style_sheet_id;
			        style.textContent = styles;
			        append_stylesheet(append_styles_to, style);
			    }
			}
			function get_root_for_style(node) {
			    if (!node)
			        return document;
			    const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
			    if (root && root.host) {
			        return root;
			    }
			    return node.ownerDocument;
			}
			function append_stylesheet(node, style) {
			    append(node.head || node, style);
			    return style.sheet;
			}
			function insert(target, node, anchor) {
			    target.insertBefore(node, anchor || null);
			}
			function detach(node) {
			    if (node.parentNode) {
			        node.parentNode.removeChild(node);
			    }
			}
			function destroy_each(iterations, detaching) {
			    for (let i = 0; i < iterations.length; i += 1) {
			        if (iterations[i])
			            iterations[i].d(detaching);
			    }
			}
			function element(name) {
			    return document.createElement(name);
			}
			function text(data) {
			    return document.createTextNode(data);
			}
			function space() {
			    return text(' ');
			}
			function listen(node, event, handler, options) {
			    node.addEventListener(event, handler, options);
			    return () => node.removeEventListener(event, handler, options);
			}
			function attr(node, attribute, value) {
			    if (value == null)
			        node.removeAttribute(attribute);
			    else if (node.getAttribute(attribute) !== value)
			        node.setAttribute(attribute, value);
			}
			function children(element) {
			    return Array.from(element.childNodes);
			}
			function set_data(text, data) {
			    data = '' + data;
			    if (text.wholeText !== data)
			        text.data = data;
			}
			function toggle_class(element, name, toggle) {
			    element.classList[toggle ? 'add' : 'remove'](name);
			}

			let current_component;
			function set_current_component(component) {
			    current_component = component;
			}
			function get_current_component() {
			    if (!current_component)
			        throw new Error('Function called outside component initialization');
			    return current_component;
			}
			/**
			 * The `onMount` function schedules a callback to run as soon as the component has been mounted to the DOM.
			 * It must be called during the component's initialisation (but doesn't need to live *inside* the component;
			 * it can be called from an external module).
			 *
			 * `onMount` does not run inside a [server-side component](/docs#run-time-server-side-component-api).
			 *
			 * https://svelte.dev/docs#run-time-svelte-onmount
			 */
			function onMount(fn) {
			    get_current_component().$$.on_mount.push(fn);
			}
			/**
			 * Schedules a callback to run immediately before the component is unmounted.
			 *
			 * Out of `onMount`, `beforeUpdate`, `afterUpdate` and `onDestroy`, this is the
			 * only one that runs inside a server-side component.
			 *
			 * https://svelte.dev/docs#run-time-svelte-ondestroy
			 */
			function onDestroy(fn) {
			    get_current_component().$$.on_destroy.push(fn);
			}

			const dirty_components = [];
			const binding_callbacks = [];
			const render_callbacks = [];
			const flush_callbacks = [];
			const resolved_promise = Promise.resolve();
			let update_scheduled = false;
			function schedule_update() {
			    if (!update_scheduled) {
			        update_scheduled = true;
			        resolved_promise.then(flush);
			    }
			}
			function add_render_callback(fn) {
			    render_callbacks.push(fn);
			}
			// flush() calls callbacks in this order:
			// 1. All beforeUpdate callbacks, in order: parents before children
			// 2. All bind:this callbacks, in reverse order: children before parents.
			// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
			//    for afterUpdates called during the initial onMount, which are called in
			//    reverse order: children before parents.
			// Since callbacks might update component values, which could trigger another
			// call to flush(), the following steps guard against this:
			// 1. During beforeUpdate, any updated components will be added to the
			//    dirty_components array and will cause a reentrant call to flush(). Because
			//    the flush index is kept outside the function, the reentrant call will pick
			//    up where the earlier call left off and go through all dirty components. The
			//    current_component value is saved and restored so that the reentrant call will
			//    not interfere with the "parent" flush() call.
			// 2. bind:this callbacks cannot trigger new flush() calls.
			// 3. During afterUpdate, any updated components will NOT have their afterUpdate
			//    callback called a second time; the seen_callbacks set, outside the flush()
			//    function, guarantees this behavior.
			const seen_callbacks = new Set();
			let flushidx = 0; // Do *not* move this inside the flush() function
			function flush() {
			    // Do not reenter flush while dirty components are updated, as this can
			    // result in an infinite loop. Instead, let the inner flush handle it.
			    // Reentrancy is ok afterwards for bindings etc.
			    if (flushidx !== 0) {
			        return;
			    }
			    const saved_component = current_component;
			    do {
			        // first, call beforeUpdate functions
			        // and update components
			        try {
			            while (flushidx < dirty_components.length) {
			                const component = dirty_components[flushidx];
			                flushidx++;
			                set_current_component(component);
			                update(component.$$);
			            }
			        }
			        catch (e) {
			            // reset dirty state to not end up in a deadlocked state and then rethrow
			            dirty_components.length = 0;
			            flushidx = 0;
			            throw e;
			        }
			        set_current_component(null);
			        dirty_components.length = 0;
			        flushidx = 0;
			        while (binding_callbacks.length)
			            binding_callbacks.pop()();
			        // then, once components are updated, call
			        // afterUpdate functions. This may cause
			        // subsequent updates...
			        for (let i = 0; i < render_callbacks.length; i += 1) {
			            const callback = render_callbacks[i];
			            if (!seen_callbacks.has(callback)) {
			                // ...so guard against infinite loops
			                seen_callbacks.add(callback);
			                callback();
			            }
			        }
			        render_callbacks.length = 0;
			    } while (dirty_components.length);
			    while (flush_callbacks.length) {
			        flush_callbacks.pop()();
			    }
			    update_scheduled = false;
			    seen_callbacks.clear();
			    set_current_component(saved_component);
			}
			function update($$) {
			    if ($$.fragment !== null) {
			        $$.update();
			        run_all($$.before_update);
			        const dirty = $$.dirty;
			        $$.dirty = [-1];
			        $$.fragment && $$.fragment.p($$.ctx, dirty);
			        $$.after_update.forEach(add_render_callback);
			    }
			}
			const outroing = new Set();
			let outros;
			function group_outros() {
			    outros = {
			        r: 0,
			        c: [],
			        p: outros // parent group
			    };
			}
			function check_outros() {
			    if (!outros.r) {
			        run_all(outros.c);
			    }
			    outros = outros.p;
			}
			function transition_in(block, local) {
			    if (block && block.i) {
			        outroing.delete(block);
			        block.i(local);
			    }
			}
			function transition_out(block, local, detach, callback) {
			    if (block && block.o) {
			        if (outroing.has(block))
			            return;
			        outroing.add(block);
			        outros.c.push(() => {
			            outroing.delete(block);
			            if (callback) {
			                if (detach)
			                    block.d(1);
			                callback();
			            }
			        });
			        block.o(local);
			    }
			    else if (callback) {
			        callback();
			    }
			}
			function create_component(block) {
			    block && block.c();
			}
			function mount_component(component, target, anchor, customElement) {
			    const { fragment, after_update } = component.$$;
			    fragment && fragment.m(target, anchor);
			    if (!customElement) {
			        // onMount happens before the initial afterUpdate
			        add_render_callback(() => {
			            const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
			            // if the component was destroyed immediately
			            // it will update the `$$.on_destroy` reference to `null`.
			            // the destructured on_destroy may still reference to the old array
			            if (component.$$.on_destroy) {
			                component.$$.on_destroy.push(...new_on_destroy);
			            }
			            else {
			                // Edge case - component was destroyed immediately,
			                // most likely as a result of a binding initialising
			                run_all(new_on_destroy);
			            }
			            component.$$.on_mount = [];
			        });
			    }
			    after_update.forEach(add_render_callback);
			}
			function destroy_component(component, detaching) {
			    const $$ = component.$$;
			    if ($$.fragment !== null) {
			        run_all($$.on_destroy);
			        $$.fragment && $$.fragment.d(detaching);
			        // TODO null out other refs, including component.$$ (but need to
			        // preserve final state?)
			        $$.on_destroy = $$.fragment = null;
			        $$.ctx = [];
			    }
			}
			function make_dirty(component, i) {
			    if (component.$$.dirty[0] === -1) {
			        dirty_components.push(component);
			        schedule_update();
			        component.$$.dirty.fill(0);
			    }
			    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
			}
			function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
			    const parent_component = current_component;
			    set_current_component(component);
			    const $$ = component.$$ = {
			        fragment: null,
			        ctx: [],
			        // state
			        props,
			        update: noop,
			        not_equal,
			        bound: blank_object(),
			        // lifecycle
			        on_mount: [],
			        on_destroy: [],
			        on_disconnect: [],
			        before_update: [],
			        after_update: [],
			        context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
			        // everything else
			        callbacks: blank_object(),
			        dirty,
			        skip_bound: false,
			        root: options.target || parent_component.$$.root
			    };
			    append_styles && append_styles($$.root);
			    let ready = false;
			    $$.ctx = instance
			        ? instance(component, options.props || {}, (i, ret, ...rest) => {
			            const value = rest.length ? rest[0] : ret;
			            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
			                if (!$$.skip_bound && $$.bound[i])
			                    $$.bound[i](value);
			                if (ready)
			                    make_dirty(component, i);
			            }
			            return ret;
			        })
			        : [];
			    $$.update();
			    ready = true;
			    run_all($$.before_update);
			    // `false` as a special case of no DOM component
			    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
			    if (options.target) {
			        if (options.hydrate) {
			            const nodes = children(options.target);
			            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			            $$.fragment && $$.fragment.l(nodes);
			            nodes.forEach(detach);
			        }
			        else {
			            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			            $$.fragment && $$.fragment.c();
			        }
			        if (options.intro)
			            transition_in(component.$$.fragment);
			        mount_component(component, options.target, options.anchor, options.customElement);
			        flush();
			    }
			    set_current_component(parent_component);
			}
			/**
			 * Base class for Svelte components. Used when dev=false.
			 */
			class SvelteComponent {
			    $destroy() {
			        destroy_component(this, 1);
			        this.$destroy = noop;
			    }
			    $on(type, callback) {
			        if (!is_function(callback)) {
			            return noop;
			        }
			        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
			        callbacks.push(callback);
			        return () => {
			            const index = callbacks.indexOf(callback);
			            if (index !== -1)
			                callbacks.splice(index, 1);
			        };
			    }
			    $set($$props) {
			        if (this.$$set && !is_empty($$props)) {
			            this.$$.skip_bound = true;
			            this.$$set($$props);
			            this.$$.skip_bound = false;
			        }
			    }
			}

			var SingleSpaEventName;
			(function (SingleSpaEventName) {
			    SingleSpaEventName["BeforeMountRouting"] = "single-spa:before-mount-routing-event";
			    SingleSpaEventName["BeforeFirstMount"] = "single-spa:before-first-mount";
			})(SingleSpaEventName || (SingleSpaEventName = {}));

			/* single-spa@5.9.4 - ESM - prod */
			var t=Object.freeze({__proto__:null,get start(){return xt},get ensureJQuerySupport(){return ft},get setBootstrapMaxTime(){return F},get setMountMaxTime(){return J},get setUnmountMaxTime(){return H},get setUnloadMaxTime(){return Q},get registerApplication(){return Ot},get unregisterApplication(){return Tt},get getMountedApps(){return Et},get getAppStatus(){return Pt},get unloadApplication(){return At},get checkActivityFunctions(){return bt},get getAppNames(){return yt},get pathToActiveWhen(){return _t},get navigateToUrl(){return nt},get triggerAppChange(){return Mt},get addErrorHandler(){return a},get removeErrorHandler(){return c},get mountRootParcel(){return C},get NOT_LOADED(){return l},get LOADING_SOURCE_CODE(){return p},get NOT_BOOTSTRAPPED(){return h},get BOOTSTRAPPING(){return m},get NOT_MOUNTED(){return v},get MOUNTING(){return d},get UPDATING(){return g},get LOAD_ERROR(){return y},get MOUNTED(){return w},get UNMOUNTING(){return E},get SKIP_BECAUSE_BROKEN(){return P}});function n(t){return (n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var r=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}).CustomEvent,o=function(){try{var t=new r("cat",{detail:{foo:"bar"}});return "cat"===t.type&&"bar"===t.detail.foo}catch(t){}return !1}()?r:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(t,n){var e=document.createEvent("CustomEvent");return n?e.initCustomEvent(t,n.bubbles,n.cancelable,n.detail):e.initCustomEvent(t,!1,!1,void 0),e}:function(t,n){var e=document.createEventObject();return e.type=t,n?(e.bubbles=Boolean(n.bubbles),e.cancelable=Boolean(n.cancelable),e.detail=n.detail):(e.bubbles=!1,e.cancelable=!1,e.detail=void 0),e},i=[];function u(t,n,e){var r=f(t,n,e);i.length?i.forEach((function(t){return t(r)})):setTimeout((function(){throw r}));}function a(t){if("function"!=typeof t)throw Error(s(28,!1));i.push(t);}function c(t){if("function"!=typeof t)throw Error(s(29,!1));var n=!1;return i=i.filter((function(e){var r=e===t;return n=n||r,!r})),n}function s(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];return "single-spa minified message #".concat(t,": ").concat(n?n+" ":"","See https://single-spa.js.org/error/?code=").concat(t).concat(r.length?"&arg=".concat(r.join("&arg=")):"")}function f(t,n,e){var r,o="".concat(N(n)," '").concat(T(n),"' died in status ").concat(n.status,": ");if(t instanceof Error){try{t.message=o+t.message;}catch(t){}r=t;}else {console.warn(s(30,!1,n.status,T(n)));try{r=Error(o+JSON.stringify(t));}catch(n){r=t;}}return r.appOrParcelName=T(n),n.status=e,r}var l="NOT_LOADED",p="LOADING_SOURCE_CODE",h="NOT_BOOTSTRAPPED",m="BOOTSTRAPPING",v="NOT_MOUNTED",d="MOUNTING",w="MOUNTED",g="UPDATING",E="UNMOUNTING",y="LOAD_ERROR",P="SKIP_BECAUSE_BROKEN";function O(t){return t.status===w}function b(t){try{return t.activeWhen(window.location)}catch(n){return u(n,t,P),!1}}function T(t){return t.name}function A(t){return Boolean(t.unmountThisParcel)}function N(t){return A(t)?"parcel":"application"}function S(){for(var t=arguments.length-1;t>0;t--)for(var n in arguments[t])"__proto__"!==n&&(arguments[t-1][n]=arguments[t][n]);return arguments[0]}function _(t,n){for(var e=0;e<t.length;e++)if(n(t[e]))return t[e];return null}function D(t){return t&&("function"==typeof t||(n=t,Array.isArray(n)&&!_(n,(function(t){return "function"!=typeof t}))));var n;}function U(t,n){var e=t[n]||[];0===(e=Array.isArray(e)?e:[e]).length&&(e=[function(){return Promise.resolve()}]);var r=N(t),o=T(t);return function(t){return e.reduce((function(e,i,u){return e.then((function(){var e=i(t);return j(e)?e:Promise.reject(s(15,!1,r,o,n,u))}))}),Promise.resolve())}}function j(t){return t&&"function"==typeof t.then&&"function"==typeof t.catch}function M(t,n){return Promise.resolve().then((function(){return t.status!==h?t:(t.status=m,t.bootstrap?V(t,"bootstrap").then(e).catch((function(e){if(n)throw f(e,t,P);return u(e,t,P),t})):Promise.resolve().then(e))}));function e(){return t.status=v,t}}function L(t,n){return Promise.resolve().then((function(){if(t.status!==w)return t;t.status=E;var e=Object.keys(t.parcels).map((function(n){return t.parcels[n].unmountThisParcel()}));return Promise.all(e).then(r,(function(e){return r().then((function(){var r=Error(e.message);if(n)throw f(r,t,P);u(r,t,P);}))})).then((function(){return t}));function r(){return V(t,"unmount").then((function(){t.status=v;})).catch((function(e){if(n)throw f(e,t,P);u(e,t,P);}))}}))}var R=!1,I=!1;function x(t,n){return Promise.resolve().then((function(){return t.status!==v?t:(R||(window.dispatchEvent(new o("single-spa:before-first-mount")),R=!0),V(t,"mount").then((function(){return t.status=w,I||(window.dispatchEvent(new o("single-spa:first-mount")),I=!0),t})).catch((function(e){return t.status=w,L(t,!0).then(r,r);function r(){if(n)throw f(e,t,P);return u(e,t,P),t}})))}))}var B=0,G={parcels:{}};function C(){return W.apply(G,arguments)}function W(t,e){var r=this;if(!t||"object"!==n(t)&&"function"!=typeof t)throw Error(s(2,!1));if(t.name&&"string"!=typeof t.name)throw Error(s(3,!1,n(t.name)));if("object"!==n(e))throw Error(s(4,!1,name,n(e)));if(!e.domElement)throw Error(s(5,!1,name));var o,i=B++,u="function"==typeof t,a=u?t:function(){return Promise.resolve(t)},c={id:i,parcels:{},status:u?p:h,customProps:e,parentName:T(r),unmountThisParcel:function(){return y.then((function(){if(c.status!==w)throw Error(s(6,!1,name,c.status));return L(c,!0)})).then((function(t){return c.parentName&&delete r.parcels[c.id],t})).then((function(t){return m(t),t})).catch((function(t){throw c.status=P,d(t),t}))}};r.parcels[i]=c;var l=a();if(!l||"function"!=typeof l.then)throw Error(s(7,!1));var m,d,E=(l=l.then((function(t){if(!t)throw Error(s(8,!1));var n=t.name||"parcel-".concat(i);if(Object.prototype.hasOwnProperty.call(t,"bootstrap")&&!D(t.bootstrap))throw Error(s(9,!1,n));if(!D(t.mount))throw Error(s(10,!1,n));if(!D(t.unmount))throw Error(s(11,!1,n));if(t.update&&!D(t.update))throw Error(s(12,!1,n));var e=U(t,"bootstrap"),r=U(t,"mount"),u=U(t,"unmount");c.status=h,c.name=n,c.bootstrap=e,c.mount=r,c.unmount=u,c.timeouts=q(t.timeouts),t.update&&(c.update=U(t,"update"),o.update=function(t){return c.customProps=t,$(function(t){return Promise.resolve().then((function(){if(t.status!==w)throw Error(s(32,!1,T(t)));return t.status=g,V(t,"update").then((function(){return t.status=w,t})).catch((function(n){throw f(n,t,P)}))}))}(c))});}))).then((function(){return M(c,!0)})),y=E.then((function(){return x(c,!0)})),O=new Promise((function(t,n){m=t,d=n;}));return o={mount:function(){return $(Promise.resolve().then((function(){if(c.status!==v)throw Error(s(13,!1,name,c.status));return r.parcels[i]=c,x(c)})))},unmount:function(){return $(c.unmountThisParcel())},getStatus:function(){return c.status},loadPromise:$(l),bootstrapPromise:$(E),mountPromise:$(y),unmountPromise:$(O)}}function $(t){return t.then((function(){return null}))}function k(e){var r=T(e),o="function"==typeof e.customProps?e.customProps(r,window.location):e.customProps;("object"!==n(o)||null===o||Array.isArray(o))&&(o={},console.warn(s(40,!1),r,o));var i=S({},o,{name:r,mountParcel:W.bind(e),singleSpa:t});return A(e)&&(i.unmountSelf=e.unmountThisParcel),i}var K={bootstrap:{millis:4e3,dieOnTimeout:!1,warningMillis:1e3},mount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unmount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unload:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},update:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3}};function F(t,n,e){if("number"!=typeof t||t<=0)throw Error(s(16,!1));K.bootstrap={millis:t,dieOnTimeout:n,warningMillis:e||1e3};}function J(t,n,e){if("number"!=typeof t||t<=0)throw Error(s(17,!1));K.mount={millis:t,dieOnTimeout:n,warningMillis:e||1e3};}function H(t,n,e){if("number"!=typeof t||t<=0)throw Error(s(18,!1));K.unmount={millis:t,dieOnTimeout:n,warningMillis:e||1e3};}function Q(t,n,e){if("number"!=typeof t||t<=0)throw Error(s(19,!1));K.unload={millis:t,dieOnTimeout:n,warningMillis:e||1e3};}function V(t,n){var e=t.timeouts[n],r=e.warningMillis,o=N(t);return new Promise((function(i,u){var a=!1,c=!1;t[n](k(t)).then((function(t){a=!0,i(t);})).catch((function(t){a=!0,u(t);})),setTimeout((function(){return l(1)}),r),setTimeout((function(){return l(!0)}),e.millis);var f=s(31,!1,n,o,T(t),e.millis);function l(t){if(!a)if(!0===t)c=!0,e.dieOnTimeout?u(Error(f)):console.error(f);else if(!c){var n=t,o=n*r;console.warn(f),o+r<e.millis&&setTimeout((function(){return l(n+1)}),r);}}}))}function q(t){var n={};for(var e in K)n[e]=S({},K[e],t&&t[e]||{});return n}function z(t){return Promise.resolve().then((function(){return t.loadPromise?t.loadPromise:t.status!==l&&t.status!==y?t:(t.status=p,t.loadPromise=Promise.resolve().then((function(){var o=t.loadApp(k(t));if(!j(o))throw r=!0,Error(s(33,!1,T(t)));return o.then((function(r){var o;t.loadErrorTime=null,"object"!==n(e=r)&&(o=34),Object.prototype.hasOwnProperty.call(e,"bootstrap")&&!D(e.bootstrap)&&(o=35),D(e.mount)||(o=36),D(e.unmount)||(o=37);var i=N(e);if(o){var a;try{a=JSON.stringify(e);}catch(t){}return console.error(s(o,!1,i,T(t),a),e),u(void 0,t,P),t}return e.devtools&&e.devtools.overlays&&(t.devtools.overlays=S({},t.devtools.overlays,e.devtools.overlays)),t.status=h,t.bootstrap=U(e,"bootstrap"),t.mount=U(e,"mount"),t.unmount=U(e,"unmount"),t.unload=U(e,"unload"),t.timeouts=q(e.timeouts),delete t.loadPromise,t}))})).catch((function(n){var e;return delete t.loadPromise,r?e=P:(e=y,t.loadErrorTime=(new Date).getTime()),u(n,t,e),t})));var e,r;}))}var X,Y="undefined"!=typeof window,Z={hashchange:[],popstate:[]},tt=["hashchange","popstate"];function nt(t){var n;if("string"==typeof t)n=t;else if(this&&this.href)n=this.href;else {if(!(t&&t.currentTarget&&t.currentTarget.href&&t.preventDefault))throw Error(s(14,!1));n=t.currentTarget.href,t.preventDefault();}var e=ct(window.location.href),r=ct(n);0===n.indexOf("#")?window.location.hash=r.hash:e.host!==r.host&&r.host?window.location.href=n:r.pathname===e.pathname&&r.search===e.search?window.location.hash=r.hash:window.history.pushState(null,null,n);}function et(t){var n=this;if(t){var e=t[0].type;tt.indexOf(e)>=0&&Z[e].forEach((function(e){try{e.apply(n,t);}catch(t){setTimeout((function(){throw t}));}}));}}function rt(){Lt([],arguments);}function ot(t,n){return function(){var e=window.location.href,r=t.apply(this,arguments),o=window.location.href;return X&&e===o||(Bt()?window.dispatchEvent(it(window.history.state,n)):Lt([])),r}}function it(t,n){var e;try{e=new PopStateEvent("popstate",{state:t});}catch(n){(e=document.createEvent("PopStateEvent")).initPopStateEvent("popstate",!1,!1,t);}return e.singleSpa=!0,e.singleSpaTrigger=n,e}if(Y){window.addEventListener("hashchange",rt),window.addEventListener("popstate",rt);var ut=window.addEventListener,at=window.removeEventListener;window.addEventListener=function(t,n){if(!("function"==typeof n&&tt.indexOf(t)>=0)||_(Z[t],(function(t){return t===n})))return ut.apply(this,arguments);Z[t].push(n);},window.removeEventListener=function(t,n){if(!("function"==typeof n&&tt.indexOf(t)>=0))return at.apply(this,arguments);Z[t]=Z[t].filter((function(t){return t!==n}));},window.history.pushState=ot(window.history.pushState,"pushState"),window.history.replaceState=ot(window.history.replaceState,"replaceState"),window.singleSpaNavigate?console.warn(s(41,!1)):window.singleSpaNavigate=nt;}function ct(t){var n=document.createElement("a");return n.href=t,n}var st=!1;function ft(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.jQuery;if(t||window.$&&window.$.fn&&window.$.fn.jquery&&(t=window.$),t&&!st){var n=t.fn.on,e=t.fn.off;t.fn.on=function(t,e){return lt.call(this,n,window.addEventListener,t,e,arguments)},t.fn.off=function(t,n){return lt.call(this,e,window.removeEventListener,t,n,arguments)},st=!0;}}function lt(t,n,e,r,o){return "string"!=typeof e?t.apply(this,o):(e.split(/\s+/).forEach((function(t){tt.indexOf(t)>=0&&(n(t,r),e=e.replace(t,""));})),""===e.trim()?this:t.apply(this,o))}var pt={};function ht(t){return Promise.resolve().then((function(){var n=pt[T(t)];if(!n)return t;if(t.status===l)return mt(t,n),t;if("UNLOADING"===t.status)return n.promise.then((function(){return t}));if(t.status!==v&&t.status!==y)return t;var e=t.status===y?Promise.resolve():V(t,"unload");return t.status="UNLOADING",e.then((function(){return mt(t,n),t})).catch((function(e){return function(t,n,e){delete pt[T(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,u(e,t,P),n.reject(e);}(t,n,e),t}))}))}function mt(t,n){delete pt[T(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,t.status=l,n.resolve();}function vt(t,n,e,r){pt[T(t)]={app:t,resolve:e,reject:r},Object.defineProperty(pt[T(t)],"promise",{get:n});}function dt(t){return pt[t]}var wt=[];function gt(){var t=[],n=[],e=[],r=[],o=(new Date).getTime();return wt.forEach((function(i){var u=i.status!==P&&b(i);switch(i.status){case y:u&&o-i.loadErrorTime>=200&&e.push(i);break;case l:case p:u&&e.push(i);break;case h:case v:!u&&dt(T(i))?t.push(i):u&&r.push(i);break;case w:u||n.push(i);}})),{appsToUnload:t,appsToUnmount:n,appsToLoad:e,appsToMount:r}}function Et(){return wt.filter(O).map(T)}function yt(){return wt.map(T)}function Pt(t){var n=_(wt,(function(n){return T(n)===t}));return n?n.status:null}function Ot(t,e,r,o){var i=function(t,e,r,o){var i,u={name:null,loadApp:null,activeWhen:null,customProps:null};return "object"===n(t)?(function(t){if(Array.isArray(t)||null===t)throw Error(s(39,!1));var e=["name","app","activeWhen","customProps"],r=Object.keys(t).reduce((function(t,n){return e.indexOf(n)>=0?t:t.concat(n)}),[]);if(0!==r.length)throw Error(s(38,!1,e.join(", "),r.join(", ")));if("string"!=typeof t.name||0===t.name.length)throw Error(s(20,!1));if("object"!==n(t.app)&&"function"!=typeof t.app)throw Error(s(20,!1));var o=function(t){return "string"==typeof t||"function"==typeof t};if(!(o(t.activeWhen)||Array.isArray(t.activeWhen)&&t.activeWhen.every(o)))throw Error(s(24,!1));if(!St(t.customProps))throw Error(s(22,!1))}(t),u.name=t.name,u.loadApp=t.app,u.activeWhen=t.activeWhen,u.customProps=t.customProps):(function(t,n,e,r){if("string"!=typeof t||0===t.length)throw Error(s(20,!1));if(!n)throw Error(s(23,!1));if("function"!=typeof e)throw Error(s(24,!1));if(!St(r))throw Error(s(22,!1))}(t,e,r,o),u.name=t,u.loadApp=e,u.activeWhen=r,u.customProps=o),u.loadApp="function"!=typeof(i=u.loadApp)?function(){return Promise.resolve(i)}:i,u.customProps=function(t){return t||{}}(u.customProps),u.activeWhen=function(t){var n=Array.isArray(t)?t:[t];return n=n.map((function(t){return "function"==typeof t?t:_t(t)})),function(t){return n.some((function(n){return n(t)}))}}(u.activeWhen),u}(t,e,r,o);if(-1!==yt().indexOf(i.name))throw Error(s(21,!1,i.name));wt.push(S({loadErrorTime:null,status:l,parcels:{},devtools:{overlays:{options:{},selectors:[]}}},i)),Y&&(ft(),Lt());}function bt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location;return wt.filter((function(n){return n.activeWhen(t)})).map(T)}function Tt(t){if(0===wt.filter((function(n){return T(n)===t})).length)throw Error(s(25,!1,t));return At(t).then((function(){var n=wt.map(T).indexOf(t);wt.splice(n,1);}))}function At(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{waitForUnmount:!1};if("string"!=typeof t)throw Error(s(26,!1));var e=_(wt,(function(n){return T(n)===t}));if(!e)throw Error(s(27,!1,t));var r,o=dt(T(e));if(n&&n.waitForUnmount){if(o)return o.promise;var i=new Promise((function(t,n){vt(e,(function(){return i}),t,n);}));return i}return o?(r=o.promise,Nt(e,o.resolve,o.reject)):r=new Promise((function(t,n){vt(e,(function(){return r}),t,n),Nt(e,t,n);})),r}function Nt(t,n,e){L(t).then(ht).then((function(){n(),setTimeout((function(){Lt();}));})).catch(e);}function St(t){return !t||"function"==typeof t||"object"===n(t)&&null!==t&&!Array.isArray(t)}function _t(t,n){var e=function(t,n){var e=0,r=!1,o="^";"/"!==t[0]&&(t="/"+t);for(var i=0;i<t.length;i++){var u=t[i];(!r&&":"===u||r&&"/"===u)&&a(i);}return a(t.length),new RegExp(o,"i");function a(i){var u=t.slice(e,i).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&");if(o+=r?"[^/]+/?":u,i===t.length)if(r)n&&(o+="$");else {var a=n?"":".*";o="/"===o.charAt(o.length-1)?"".concat(o).concat(a,"$"):"".concat(o,"(/").concat(a,")?(#.*)?$");}r=!r,e=i;}}(t,n);return function(t){var n=t.origin;n||(n="".concat(t.protocol,"//").concat(t.host));var r=t.href.replace(n,"").replace(t.search,"").split("?")[0];return e.test(r)}}var Dt=!1,Ut=[],jt=Y&&window.location.href;function Mt(){return Lt()}function Lt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(Dt)return new Promise((function(t,e){Ut.push({resolve:t,reject:e,eventArguments:n});}));var r,i=gt(),u=i.appsToUnload,a=i.appsToUnmount,c=i.appsToLoad,s=i.appsToMount,f=!1,p=jt,h=jt=window.location.href;return Bt()?(Dt=!0,r=u.concat(c,a,s),g()):(r=c,d());function m(){f=!0;}function d(){return Promise.resolve().then((function(){var t=c.map(z);return Promise.all(t).then(y).then((function(){return []})).catch((function(t){throw y(),t}))}))}function g(){return Promise.resolve().then((function(){if(window.dispatchEvent(new o(0===r.length?"single-spa:before-no-app-change":"single-spa:before-app-change",O(!0))),window.dispatchEvent(new o("single-spa:before-routing-event",O(!0,{cancelNavigation:m}))),f)return window.dispatchEvent(new o("single-spa:before-mount-routing-event",O(!0))),E(),void nt(p);var n=u.map(ht),e=a.map(L).map((function(t){return t.then(ht)})).concat(n),i=Promise.all(e);i.then((function(){window.dispatchEvent(new o("single-spa:before-mount-routing-event",O(!0)));}));var l=c.map((function(t){return z(t).then((function(t){return Rt(t,i)}))})),h=s.filter((function(t){return c.indexOf(t)<0})).map((function(t){return Rt(t,i)}));return i.catch((function(t){throw y(),t})).then((function(){return y(),Promise.all(l.concat(h)).catch((function(n){throw t.forEach((function(t){return t.reject(n)})),n})).then(E)}))}))}function E(){var n=Et();t.forEach((function(t){return t.resolve(n)}));try{var e=0===r.length?"single-spa:no-app-change":"single-spa:app-change";window.dispatchEvent(new o(e,O())),window.dispatchEvent(new o("single-spa:routing-event",O()));}catch(t){setTimeout((function(){throw t}));}if(Dt=!1,Ut.length>0){var i=Ut;Ut=[],Lt(i);}return n}function y(){t.forEach((function(t){et(t.eventArguments);})),et(n);}function O(){var t,o=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=arguments.length>1?arguments[1]:void 0,m={},d=(e(t={},w,[]),e(t,v,[]),e(t,l,[]),e(t,P,[]),t);o?(c.concat(s).forEach((function(t,n){E(t,w);})),u.forEach((function(t){E(t,l);})),a.forEach((function(t){E(t,v);}))):r.forEach((function(t){E(t);}));var g={detail:{newAppStatuses:m,appsByNewStatus:d,totalAppChanges:r.length,originalEvent:null==n?void 0:n[0],oldUrl:p,newUrl:h,navigationIsCanceled:f}};return i&&S(g.detail,i),g;function E(t,n){var e=T(t);n=n||Pt(e),m[e]=n,(d[n]=d[n]||[]).push(e);}}}function Rt(t,n){return b(t)?M(t).then((function(t){return n.then((function(){return b(t)?x(t):t}))})):n.then((function(){return t}))}var It=!1;function xt(t){var n;It=!0,t&&t.urlRerouteOnly&&(n=t.urlRerouteOnly,X=n),Y&&Lt();}function Bt(){return It}Y&&setTimeout((function(){It||console.warn(s(1,!1));}),5e3);var Gt={getRawAppData:function(){return [].concat(wt)},reroute:Lt,NOT_LOADED:l,toLoadPromise:z,toBootstrapPromise:M,unregisterApplication:Tt};Y&&window.__SINGLE_SPA_DEVTOOLS__&&(window.__SINGLE_SPA_DEVTOOLS__.exposedMethods=Gt);

			/* node_modules\.pnpm\svelte-material-symbols@0.0.6_svelte@3.55.1\node_modules\svelte-material-symbols\components\MaterialSymbol.svelte generated by Svelte v3.55.1 */

			function create_fragment$2(ctx) {
				let span;
				let t;
				let span_class_value;

				return {
					c() {
						span = element("span");
						t = text(/*name*/ ctx[0]);
						attr(span, "class", span_class_value = `material-symbols-${/*type*/ ctx[1]} ${/*className*/ ctx[2]}`);
						attr(span, "style", /*style*/ ctx[3]);
					},
					m(target, anchor) {
						insert(target, span, anchor);
						append(span, t);
					},
					p(ctx, [dirty]) {
						if (dirty & /*name*/ 1) set_data(t, /*name*/ ctx[0]);

						if (dirty & /*type, className*/ 6 && span_class_value !== (span_class_value = `material-symbols-${/*type*/ ctx[1]} ${/*className*/ ctx[2]}`)) {
							attr(span, "class", span_class_value);
						}
					},
					i: noop,
					o: noop,
					d(detaching) {
						if (detaching) detach(span);
					}
				};
			}

			function instance$2($$self, $$props, $$invalidate) {
				let { name } = $$props;
				let { type } = $$props;
				let { opticalSize = 48 } = $$props;
				let { grade = 0 } = $$props;
				let { weight = 500 } = $$props;
				let { filled = false } = $$props;
				let { class: className = "" } = $$props;

				const style = `
  font-variation-settings:
  'FILL' ${+filled},
  'wght' ${weight},
  'GRAD' ${grade},
  'opsz' ${opticalSize}
`;

				$$self.$$set = $$props => {
					if ('name' in $$props) $$invalidate(0, name = $$props.name);
					if ('type' in $$props) $$invalidate(1, type = $$props.type);
					if ('opticalSize' in $$props) $$invalidate(4, opticalSize = $$props.opticalSize);
					if ('grade' in $$props) $$invalidate(5, grade = $$props.grade);
					if ('weight' in $$props) $$invalidate(6, weight = $$props.weight);
					if ('filled' in $$props) $$invalidate(7, filled = $$props.filled);
					if ('class' in $$props) $$invalidate(2, className = $$props.class);
				};

				return [name, type, className, style, opticalSize, grade, weight, filled];
			}

			class MaterialSymbol extends SvelteComponent {
				constructor(options) {
					super();

					init(this, options, instance$2, create_fragment$2, safe_not_equal, {
						name: 0,
						type: 1,
						opticalSize: 4,
						grade: 5,
						weight: 6,
						filled: 7,
						class: 2
					});
				}
			}

			/* src\components\NavbarItem.svelte generated by Svelte v3.55.1 */

			function add_css$1(target) {
				append_styles(target, "svelte-1wtmupz", ".navbar-item.svelte-1wtmupz{flex:1;color:var(--text-color-primary);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;border-bottom:2px solid transparent}.navbar-item.svelte-1wtmupz:hover{background:rgba(255, 255, 255, 0.1)}.active.svelte-1wtmupz{background:rgba(255, 255, 255, 0.1);color:var(--color-secondary);border-bottom:2px solid var(--color-secondary)}");
			}

			function create_fragment$1(ctx) {
				let button;
				let materialsymbol;
				let t0;
				let t1;
				let current;
				let mounted;
				let dispose;

				materialsymbol = new MaterialSymbol({
						props: { name: /*icon*/ ctx[2], type: 'outlined' }
					});

				return {
					c() {
						button = element("button");
						create_component(materialsymbol.$$.fragment);
						t0 = space();
						t1 = text(/*title*/ ctx[1]);
						attr(button, "class", "navbar-item svelte-1wtmupz");
						toggle_class(button, "active", /*active*/ ctx[0]);
					},
					m(target, anchor) {
						insert(target, button, anchor);
						mount_component(materialsymbol, button, null);
						append(button, t0);
						append(button, t1);
						current = true;

						if (!mounted) {
							dispose = listen(button, "click", /*click_handler*/ ctx[5]);
							mounted = true;
						}
					},
					p(ctx, [dirty]) {
						if (!current || dirty & /*active*/ 1) {
							toggle_class(button, "active", /*active*/ ctx[0]);
						}
					},
					i(local) {
						if (current) return;
						transition_in(materialsymbol.$$.fragment, local);
						current = true;
					},
					o(local) {
						transition_out(materialsymbol.$$.fragment, local);
						current = false;
					},
					d(detaching) {
						if (detaching) detach(button);
						destroy_component(materialsymbol);
						mounted = false;
						dispose();
					}
				};
			}

			function instance$1($$self, $$props, $$invalidate) {
				let { navbarItem } = $$props;
				let { active } = $$props;
				const { title, icon, path } = navbarItem;

				const click_handler = () => {
					nt(path);
				};

				$$self.$$set = $$props => {
					if ('navbarItem' in $$props) $$invalidate(4, navbarItem = $$props.navbarItem);
					if ('active' in $$props) $$invalidate(0, active = $$props.active);
				};

				return [active, title, icon, path, navbarItem, click_handler];
			}

			class NavbarItem extends SvelteComponent {
				constructor(options) {
					super();
					init(this, options, instance$1, create_fragment$1, safe_not_equal, { navbarItem: 4, active: 0 }, add_css$1);
				}
			}

			var msApps = 'apps';
			var msCalendarMonth = 'calendar_month';

			/* src\App.svelte generated by Svelte v3.55.1 */

			function add_css(target) {
				append_styles(target, "svelte-1ayvmuu", ".navbar.svelte-1ayvmuu{background:var(--color-primary);height:var(--navbar-height);display:flex}");
			}

			function get_each_context(ctx, list, i) {
				const child_ctx = ctx.slice();
				child_ctx[3] = list[i];
				child_ctx[5] = i;
				return child_ctx;
			}

			// (22:4) {#each navbarItems as navbarItem, i}
			function create_each_block(ctx) {
				let navbaritem;
				let current;

				navbaritem = new NavbarItem({
						props: {
							navbarItem: /*navbarItem*/ ctx[3],
							active: /*pathname*/ ctx[0] === /*navbarItem*/ ctx[3].path
						}
					});

				return {
					c() {
						create_component(navbaritem.$$.fragment);
					},
					m(target, anchor) {
						mount_component(navbaritem, target, anchor);
						current = true;
					},
					p(ctx, dirty) {
						const navbaritem_changes = {};
						if (dirty & /*pathname*/ 1) navbaritem_changes.active = /*pathname*/ ctx[0] === /*navbarItem*/ ctx[3].path;
						navbaritem.$set(navbaritem_changes);
					},
					i(local) {
						if (current) return;
						transition_in(navbaritem.$$.fragment, local);
						current = true;
					},
					o(local) {
						transition_out(navbaritem.$$.fragment, local);
						current = false;
					},
					d(detaching) {
						destroy_component(navbaritem, detaching);
					}
				};
			}

			function create_fragment(ctx) {
				let div;
				let current;
				let each_value = /*navbarItems*/ ctx[1];
				let each_blocks = [];

				for (let i = 0; i < each_value.length; i += 1) {
					each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
				}

				const out = i => transition_out(each_blocks[i], 1, 1, () => {
					each_blocks[i] = null;
				});

				return {
					c() {
						div = element("div");

						for (let i = 0; i < each_blocks.length; i += 1) {
							each_blocks[i].c();
						}

						attr(div, "class", "navbar svelte-1ayvmuu");
					},
					m(target, anchor) {
						insert(target, div, anchor);

						for (let i = 0; i < each_blocks.length; i += 1) {
							each_blocks[i].m(div, null);
						}

						current = true;
					},
					p(ctx, [dirty]) {
						if (dirty & /*navbarItems, pathname*/ 3) {
							each_value = /*navbarItems*/ ctx[1];
							let i;

							for (i = 0; i < each_value.length; i += 1) {
								const child_ctx = get_each_context(ctx, each_value, i);

								if (each_blocks[i]) {
									each_blocks[i].p(child_ctx, dirty);
									transition_in(each_blocks[i], 1);
								} else {
									each_blocks[i] = create_each_block(child_ctx);
									each_blocks[i].c();
									transition_in(each_blocks[i], 1);
									each_blocks[i].m(div, null);
								}
							}

							group_outros();

							for (i = each_value.length; i < each_blocks.length; i += 1) {
								out(i);
							}

							check_outros();
						}
					},
					i(local) {
						if (current) return;

						for (let i = 0; i < each_value.length; i += 1) {
							transition_in(each_blocks[i]);
						}

						current = true;
					},
					o(local) {
						each_blocks = each_blocks.filter(Boolean);

						for (let i = 0; i < each_blocks.length; i += 1) {
							transition_out(each_blocks[i]);
						}

						current = false;
					},
					d(detaching) {
						if (detaching) detach(div);
						destroy_each(each_blocks, detaching);
					}
				};
			}

			function instance($$self, $$props, $$invalidate) {
				let pathname = window.location.pathname;

				const navbarItems = [
					{
						title: 'Расписание',
						icon: msCalendarMonth,
						path: '/timetable'
					},
					{
						title: 'Сервисы',
						icon: msApps,
						path: '/apps'
					}
				];

				const beforeMountRoutingHandler = () => {
					$$invalidate(0, pathname = window.location.pathname);
				};

				onMount(() => {
					window.addEventListener(SingleSpaEventName.BeforeMountRouting, beforeMountRoutingHandler);
				});

				onDestroy(() => {
					window.removeEventListener(SingleSpaEventName.BeforeMountRouting, beforeMountRoutingHandler);
				});

				return [pathname, navbarItems];
			}

			class App extends SvelteComponent {
				constructor(options) {
					super();
					init(this, options, instance, create_fragment, safe_not_equal, {}, add_css);
				}
			}

			const svelteLifecycles = singleSpaSvelte({
			  component: App,
			});

			const { bootstrap, mount, unmount } = svelteLifecycles; exports({ bootstrap: bootstrap, mount: mount, unmount: unmount });

		})
	};
}));
//# sourceMappingURL=app.js.map
