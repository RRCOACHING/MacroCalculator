/**
 * AutoNumeric.js v4.5.4
 * © 2009-2018 Robert J. Knothe, Alexandre Bonneau
 * Released under the MIT License.
 */
!(function (e, t) {
    "object" == typeof exports && "object" == typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? (exports.AutoNumeric = t()) : (e.AutoNumeric = t());
})(window, function () {
    return (function (i) {
        var n = {};
        function a(e) {
            if (n[e]) return n[e].exports;
            var t = (n[e] = { i: e, l: !1, exports: {} });
            return i[e].call(t.exports, t, t.exports, a), (t.l = !0), t.exports;
        }
        return (
            (a.m = i),
            (a.c = n),
            (a.d = function (e, t, i) {
                a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
            }),
            (a.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (a.t = function (t, e) {
                if ((1 & e && (t = a(t)), 8 & e)) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var i = Object.create(null);
                if ((a.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                    for (var n in t)
                        a.d(
                            i,
                            n,
                            function (e) {
                                return t[e];
                            }.bind(null, n)
                        );
                return i;
            }),
            (a.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return a.d(t, "a", t), t;
            }),
            (a.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (a.p = ""),
            a((a.s = 4))
        );
    })([
        function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var S = function (e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e))
                        return (function (e, t) {
                            var i = [],
                                n = !0,
                                a = !1,
                                r = void 0;
                            try {
                                for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (i.push(s.value), !t || i.length !== t); n = !0);
                            } catch (e) {
                                (a = !0), (r = e);
                            } finally {
                                try {
                                    !n && o.return && o.return();
                                } finally {
                                    if (a) throw r;
                                }
                            }
                            return i;
                        })(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                },
                y =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var i = arguments[t];
                            for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                        }
                        return e;
                    },
                b =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          },
                n = (function () {
                    function n(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function (e, t, i) {
                        return t && n(e.prototype, t), i && n(e, i), e;
                    };
                })(),
                D = s(i(1)),
                v = s(i(2)),
                a = s(i(5)),
                r = s(i(6));
            function s(e) {
                return e && e.__esModule ? e : { default: e };
            }
            function g(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
                    return i;
                }
                return Array.from(e);
            }
            var p = (function () {
                function I() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                        r = this,
                        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    !(function (e, t) {
                        if (!(e instanceof I)) throw new TypeError("Cannot call a class as a function");
                    })(this);
                    var n = I._setArgumentsValues(e, t, i),
                        a = n.domElement,
                        s = n.initialValue,
                        o = n.userOptions;
                    if (
                        ((this.domElement = a),
                        (this.defaultRawValue = ""),
                        this._setSettings(o, !1),
                        this._checkElement(),
                        (this.savedCancellableValue = null),
                        (this.historyTable = []),
                        (this.historyTableIndex = -1),
                        (this.onGoingRedo = !1),
                        (this.parentForm = this._getParentForm()),
                        !this.runOnce && this.settings.formatOnPageLoad)
                    )
                        this._formatDefaultValueOnPageLoad(s);
                    else {
                        var l = void 0;
                        if (D.default.isNull(s))
                            switch (this.settings.emptyInputBehavior) {
                                case I.options.emptyInputBehavior.min:
                                    l = this.settings.minimumValue;
                                    break;
                                case I.options.emptyInputBehavior.max:
                                    l = this.settings.maximumValue;
                                    break;
                                case I.options.emptyInputBehavior.zero:
                                    l = "0";
                                    break;
                                case I.options.emptyInputBehavior.focus:
                                case I.options.emptyInputBehavior.press:
                                case I.options.emptyInputBehavior.always:
                                case I.options.emptyInputBehavior.null:
                                    l = "";
                                    break;
                                default:
                                    l = this.settings.emptyInputBehavior;
                            }
                        else l = s;
                        this._setElementAndRawValue(l);
                    }
                    (this.runOnce = !0),
                        (this.hasEventListeners = !1),
                        (this.isInputElement || this.isContentEditable) && (this.settings.noEventListeners || this._createEventListeners(), this._setWritePermissions(!0)),
                        this._saveInitialValues(s),
                        (this.sessionStorageAvailable = this.constructor._storageTest()),
                        (this.storageNamePrefix = "AUTO_"),
                        this._setPersistentStorageName(),
                        (this.isFocused = !1),
                        (this.isWheelEvent = !1),
                        (this.isDropEvent = !1),
                        (this.isEditing = !1),
                        (this.rawValueOnFocus = void 0),
                        (this.internalModification = !1),
                        (this.attributeToWatch = this._getAttributeToWatch()),
                        (this.getterSetter = Object.getOwnPropertyDescriptor(this.domElement.__proto__, this.attributeToWatch)),
                        this._addWatcher(),
                        this.settings.createLocalList && this._createLocalList(),
                        this.constructor._addToGlobalList(this),
                        (this.global = {
                            set: function (t) {
                                var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                                r.autoNumericLocalList.forEach(function (e) {
                                    e.set(t, i);
                                });
                            },
                            setUnformatted: function (t) {
                                var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                                r.autoNumericLocalList.forEach(function (e) {
                                    e.setUnformatted(t, i);
                                });
                            },
                            get: function () {
                                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                                    t = [];
                                return (
                                    r.autoNumericLocalList.forEach(function (e) {
                                        t.push(e.get());
                                    }),
                                    r._executeCallback(t, e),
                                    t
                                );
                            },
                            getNumericString: function () {
                                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                                    t = [];
                                return (
                                    r.autoNumericLocalList.forEach(function (e) {
                                        t.push(e.getNumericString());
                                    }),
                                    r._executeCallback(t, e),
                                    t
                                );
                            },
                            getFormatted: function () {
                                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                                    t = [];
                                return (
                                    r.autoNumericLocalList.forEach(function (e) {
                                        t.push(e.getFormatted());
                                    }),
                                    r._executeCallback(t, e),
                                    t
                                );
                            },
                            getNumber: function () {
                                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                                    t = [];
                                return (
                                    r.autoNumericLocalList.forEach(function (e) {
                                        t.push(e.getNumber());
                                    }),
                                    r._executeCallback(t, e),
                                    t
                                );
                            },
                            getLocalized: function () {
                                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                                    t = [];
                                return (
                                    r.autoNumericLocalList.forEach(function (e) {
                                        t.push(e.getLocalized());
                                    }),
                                    r._executeCallback(t, e),
                                    t
                                );
                            },
                            reformat: function () {
                                r.autoNumericLocalList.forEach(function (e) {
                                    e.reformat();
                                });
                            },
                            unformat: function () {
                                r.autoNumericLocalList.forEach(function (e) {
                                    e.unformat();
                                });
                            },
                            unformatLocalized: function () {
                                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                r.autoNumericLocalList.forEach(function (e) {
                                    e.unformatLocalized(t);
                                });
                            },
                            update: function () {
                                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                                r.autoNumericLocalList.forEach(function (e) {
                                    e.update.apply(e, t);
                                });
                            },
                            isPristine: function () {
                                var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                                    i = !0;
                                return (
                                    r.autoNumericLocalList.forEach(function (e) {
                                        i && !e.isPristine(t) && (i = !1);
                                    }),
                                    i
                                );
                            },
                            clear: function () {
                                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                                r.autoNumericLocalList.forEach(function (e) {
                                    e.clear(t);
                                });
                            },
                            remove: function () {
                                r.autoNumericLocalList.forEach(function (e) {
                                    e.remove();
                                });
                            },
                            wipe: function () {
                                r.autoNumericLocalList.forEach(function (e) {
                                    e.wipe();
                                });
                            },
                            nuke: function () {
                                r.autoNumericLocalList.forEach(function (e) {
                                    e.nuke();
                                });
                            },
                            has: function (e) {
                                return e instanceof I ? r.autoNumericLocalList.has(e.node()) : r.autoNumericLocalList.has(e);
                            },
                            addObject: function (e) {
                                var t = void 0,
                                    i = void 0;
                                (i = e instanceof I ? ((t = e.node()), e) : I.getAutoNumericElement((t = e))), r._hasLocalList() || r._createLocalList();
                                var n = i._getLocalList();
                                0 === n.size && (i._createLocalList(), (n = i._getLocalList()));
                                var a = void 0;
                                (a = n instanceof Map ? D.default.mergeMaps(r._getLocalList(), n) : (r._addToLocalList(t, i), r._getLocalList())).forEach(function (e) {
                                    e._setLocalList(a);
                                });
                            },
                            removeObject: function (e) {
                                var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                                    i = void 0,
                                    n = void 0;
                                n = e instanceof I ? ((i = e.node()), e) : I.getAutoNumericElement((i = e));
                                var a = r.autoNumericLocalList;
                                r.autoNumericLocalList.delete(i),
                                    a.forEach(function (e) {
                                        e._setLocalList(r.autoNumericLocalList);
                                    }),
                                    t || i !== r.node() ? n._createLocalList() : n._setLocalList(new Map());
                            },
                            empty: function () {
                                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                                r.autoNumericLocalList.forEach(function (e) {
                                    t ? e._createLocalList() : e._setLocalList(new Map());
                                });
                            },
                            elements: function () {
                                var t = [];
                                return (
                                    r.autoNumericLocalList.forEach(function (e) {
                                        t.push(e.node());
                                    }),
                                    t
                                );
                            },
                            getList: function () {
                                return r.autoNumericLocalList;
                            },
                            size: function () {
                                return r.autoNumericLocalList.size;
                            },
                        }),
                        (this.options = {
                            reset: function () {
                                return (r.settings = { rawValue: r.defaultRawValue }), r.update(I.defaultSettings), r;
                            },
                            allowDecimalPadding: function (e) {
                                return r.update({ allowDecimalPadding: e }), r;
                            },
                            alwaysAllowDecimalCharacter: function (e) {
                                return r.update({ alwaysAllowDecimalCharacter: e }), r;
                            },
                            caretPositionOnFocus: function (e) {
                                return (r.settings.caretPositionOnFocus = e), r;
                            },
                            createLocalList: function (e) {
                                return (r.settings.createLocalList = e), r.settings.createLocalList ? r._hasLocalList() || r._createLocalList() : r._deleteLocalList(), r;
                            },
                            currencySymbol: function (e) {
                                return r.update({ currencySymbol: e }), r;
                            },
                            currencySymbolPlacement: function (e) {
                                return r.update({ currencySymbolPlacement: e }), r;
                            },
                            decimalCharacter: function (e) {
                                return r.update({ decimalCharacter: e }), r;
                            },
                            decimalCharacterAlternative: function (e) {
                                return (r.settings.decimalCharacterAlternative = e), r;
                            },
                            decimalPlaces: function (e) {
                                return (
                                    D.default.warning(
                                        "Using `options.decimalPlaces()` instead of calling the specific `options.decimalPlacesRawValue()`, `options.decimalPlacesShownOnFocus()` and `options.decimalPlacesShownOnBlur()` methods will reset those options.\nPlease call the specific methods if you do not want to reset those.",
                                        r.settings.showWarnings
                                    ),
                                    r.update({ decimalPlaces: e }),
                                    r
                                );
                            },
                            decimalPlacesRawValue: function (e) {
                                return r.update({ decimalPlacesRawValue: e }), r;
                            },
                            decimalPlacesShownOnBlur: function (e) {
                                return r.update({ decimalPlacesShownOnBlur: e }), r;
                            },
                            decimalPlacesShownOnFocus: function (e) {
                                return r.update({ decimalPlacesShownOnFocus: e }), r;
                            },
                            defaultValueOverride: function (e) {
                                return r.update({ defaultValueOverride: e }), r;
                            },
                            digitalGroupSpacing: function (e) {
                                return r.update({ digitalGroupSpacing: e }), r;
                            },
                            digitGroupSeparator: function (e) {
                                return r.update({ digitGroupSeparator: e }), r;
                            },
                            divisorWhenUnfocused: function (e) {
                                return r.update({ divisorWhenUnfocused: e }), r;
                            },
                            emptyInputBehavior: function (e) {
                                return (
                                    null === r.rawValue &&
                                        e !== I.options.emptyInputBehavior.null &&
                                        (D.default.warning(
                                            "You are trying to modify the `emptyInputBehavior` option to something different than `'null'` (" +
                                                e +
                                                "), but the element raw value is currently set to `null`. This would result in an invalid `rawValue`. In order to fix that, the element value has been changed to the empty string `''`.",
                                            r.settings.showWarnings
                                        ),
                                        (r.rawValue = "")),
                                    r.update({ emptyInputBehavior: e }),
                                    r
                                );
                            },
                            eventBubbles: function (e) {
                                return (r.settings.eventBubbles = e), r;
                            },
                            eventIsCancelable: function (e) {
                                return (r.settings.eventIsCancelable = e), r;
                            },
                            failOnUnknownOption: function (e) {
                                return (r.settings.failOnUnknownOption = e), r;
                            },
                            formatOnPageLoad: function (e) {
                                return (r.settings.formatOnPageLoad = e), r;
                            },
                            formulaMode: function (e) {
                                return (r.settings.formulaMode = e), r;
                            },
                            historySize: function (e) {
                                return (r.settings.historySize = e), r;
                            },
                            isCancellable: function (e) {
                                return (r.settings.isCancellable = e), r;
                            },
                            leadingZero: function (e) {
                                return r.update({ leadingZero: e }), r;
                            },
                            maximumValue: function (e) {
                                return r.update({ maximumValue: e }), r;
                            },
                            minimumValue: function (e) {
                                return r.update({ minimumValue: e }), r;
                            },
                            modifyValueOnWheel: function (e) {
                                return (r.settings.modifyValueOnWheel = e), r;
                            },
                            negativeBracketsTypeOnBlur: function (e) {
                                return r.update({ negativeBracketsTypeOnBlur: e }), r;
                            },
                            negativePositiveSignPlacement: function (e) {
                                return r.update({ negativePositiveSignPlacement: e }), r;
                            },
                            negativeSignCharacter: function (e) {
                                return r.update({ negativeSignCharacter: e }), r;
                            },
                            noEventListeners: function (e) {
                                return e === I.options.noEventListeners.noEvents && r.settings.noEventListeners === I.options.noEventListeners.addEvents && r._removeEventListeners(), r.update({ noEventListeners: e }), r;
                            },
                            onInvalidPaste: function (e) {
                                return (r.settings.onInvalidPaste = e), r;
                            },
                            outputFormat: function (e) {
                                return (r.settings.outputFormat = e), r;
                            },
                            overrideMinMaxLimits: function (e) {
                                return r.update({ overrideMinMaxLimits: e }), r;
                            },
                            positiveSignCharacter: function (e) {
                                return r.update({ positiveSignCharacter: e }), r;
                            },
                            rawValueDivisor: function (e) {
                                return r.update({ rawValueDivisor: e }), r;
                            },
                            readOnly: function (e) {
                                return (r.settings.readOnly = e), r._setWritePermissions(), r;
                            },
                            roundingMethod: function (e) {
                                return r.update({ roundingMethod: e }), r;
                            },
                            saveValueToSessionStorage: function (e) {
                                return r.update({ saveValueToSessionStorage: e }), r;
                            },
                            symbolWhenUnfocused: function (e) {
                                return r.update({ symbolWhenUnfocused: e }), r;
                            },
                            selectNumberOnly: function (e) {
                                return (r.settings.selectNumberOnly = e), r;
                            },
                            selectOnFocus: function (e) {
                                return (r.settings.selectOnFocus = e), r;
                            },
                            serializeSpaces: function (e) {
                                return (r.settings.serializeSpaces = e), r;
                            },
                            showOnlyNumbersOnFocus: function (e) {
                                return r.update({ showOnlyNumbersOnFocus: e }), r;
                            },
                            showPositiveSign: function (e) {
                                return r.update({ showPositiveSign: e }), r;
                            },
                            showWarnings: function (e) {
                                return (r.settings.showWarnings = e), r;
                            },
                            styleRules: function (e) {
                                return r.update({ styleRules: e }), r;
                            },
                            suffixText: function (e) {
                                return r.update({ suffixText: e }), r;
                            },
                            unformatOnHover: function (e) {
                                return (r.settings.unformatOnHover = e), r;
                            },
                            unformatOnSubmit: function (e) {
                                return (r.settings.unformatOnSubmit = e), r;
                            },
                            valuesToStrings: function (e) {
                                return r.update({ valuesToStrings: e }), r;
                            },
                            watchExternalChanges: function (e) {
                                return r.update({ watchExternalChanges: e }), r;
                            },
                            wheelOn: function (e) {
                                return (r.settings.wheelOn = e), r;
                            },
                            wheelStep: function (e) {
                                return (r.settings.wheelStep = e), r;
                            },
                        }),
                        this._triggerEvent(I.events.initialized, this.domElement, { newValue: D.default.getElementValue(this.domElement), newRawValue: this.rawValue, error: null, aNElement: this });
                }
                return (
                    n(
                        I,
                        [
                            {
                                key: "_saveInitialValues",
                                value: function (e) {
                                    (this.initialValueHtmlAttribute = D.default.scientificToDecimal(this.domElement.getAttribute("value"))),
                                        D.default.isNull(this.initialValueHtmlAttribute) && (this.initialValueHtmlAttribute = ""),
                                        (this.initialValue = e),
                                        D.default.isNull(this.initialValue) && (this.initialValue = "");
                                },
                            },
                            {
                                key: "_createEventListeners",
                                value: function () {
                                    var t = this;
                                    (this.formulaMode = !1),
                                        (this._onFocusInFunc = function (e) {
                                            t._onFocusIn(e);
                                        }),
                                        (this._onFocusInAndMouseEnterFunc = function (e) {
                                            t._onFocusInAndMouseEnter(e);
                                        }),
                                        (this._onFocusFunc = function () {
                                            t._onFocus();
                                        }),
                                        (this._onKeydownFunc = function (e) {
                                            t._onKeydown(e);
                                        }),
                                        (this._onKeypressFunc = function (e) {
                                            t._onKeypress(e);
                                        }),
                                        (this._onKeyupFunc = function (e) {
                                            t._onKeyup(e);
                                        }),
                                        (this._onFocusOutAndMouseLeaveFunc = function (e) {
                                            t._onFocusOutAndMouseLeave(e);
                                        }),
                                        (this._onPasteFunc = function (e) {
                                            t._onPaste(e);
                                        }),
                                        (this._onWheelFunc = function (e) {
                                            t._onWheel(e);
                                        }),
                                        (this._onDropFunc = function (e) {
                                            t._onDrop(e);
                                        }),
                                        (this._onKeydownGlobalFunc = function (e) {
                                            t._onKeydownGlobal(e);
                                        }),
                                        (this._onKeyupGlobalFunc = function (e) {
                                            t._onKeyupGlobal(e);
                                        }),
                                        this.domElement.addEventListener("focusin", this._onFocusInFunc, !1),
                                        this.domElement.addEventListener("focus", this._onFocusInAndMouseEnterFunc, !1),
                                        this.domElement.addEventListener("focus", this._onFocusFunc, !1),
                                        this.domElement.addEventListener("mouseenter", this._onFocusInAndMouseEnterFunc, !1),
                                        this.domElement.addEventListener("keydown", this._onKeydownFunc, !1),
                                        this.domElement.addEventListener("keypress", this._onKeypressFunc, !1),
                                        this.domElement.addEventListener("keyup", this._onKeyupFunc, !1),
                                        this.domElement.addEventListener("blur", this._onFocusOutAndMouseLeaveFunc, !1),
                                        this.domElement.addEventListener("mouseleave", this._onFocusOutAndMouseLeaveFunc, !1),
                                        this.domElement.addEventListener("paste", this._onPasteFunc, !1),
                                        this.domElement.addEventListener("wheel", this._onWheelFunc, !1),
                                        this.domElement.addEventListener("drop", this._onDropFunc, !1),
                                        this._setupFormListener(),
                                        (this.hasEventListeners = !0),
                                        I._doesGlobalListExists() || (document.addEventListener("keydown", this._onKeydownGlobalFunc, !1), document.addEventListener("keyup", this._onKeyupGlobalFunc, !1));
                                },
                            },
                            {
                                key: "_removeEventListeners",
                                value: function () {
                                    this.domElement.removeEventListener("focusin", this._onFocusInFunc, !1),
                                        this.domElement.removeEventListener("focus", this._onFocusInAndMouseEnterFunc, !1),
                                        this.domElement.removeEventListener("focus", this._onFocusFunc, !1),
                                        this.domElement.removeEventListener("mouseenter", this._onFocusInAndMouseEnterFunc, !1),
                                        this.domElement.removeEventListener("blur", this._onFocusOutAndMouseLeaveFunc, !1),
                                        this.domElement.removeEventListener("mouseleave", this._onFocusOutAndMouseLeaveFunc, !1),
                                        this.domElement.removeEventListener("keydown", this._onKeydownFunc, !1),
                                        this.domElement.removeEventListener("keypress", this._onKeypressFunc, !1),
                                        this.domElement.removeEventListener("keyup", this._onKeyupFunc, !1),
                                        this.domElement.removeEventListener("paste", this._onPasteFunc, !1),
                                        this.domElement.removeEventListener("wheel", this._onWheelFunc, !1),
                                        this.domElement.removeEventListener("drop", this._onDropFunc, !1),
                                        this._removeFormListener(),
                                        (this.hasEventListeners = !1),
                                        document.removeEventListener("keydown", this._onKeydownGlobalFunc, !1),
                                        document.removeEventListener("keyup", this._onKeyupGlobalFunc, !1);
                                },
                            },
                            {
                                key: "_updateEventListeners",
                                value: function () {
                                    this.settings.noEventListeners || this.hasEventListeners || this._createEventListeners(), this.settings.noEventListeners && this.hasEventListeners && this._removeEventListeners();
                                },
                            },
                            {
                                key: "_setupFormListener",
                                value: function () {
                                    var e = this;
                                    D.default.isNull(this.parentForm) ||
                                        ((this._onFormSubmitFunc = function () {
                                            e._onFormSubmit();
                                        }),
                                        (this._onFormResetFunc = function () {
                                            e._onFormReset();
                                        }),
                                        this._hasParentFormCounter()
                                            ? this._incrementParentFormCounter()
                                            : (this._initializeFormCounterToOne(),
                                              this.parentForm.addEventListener("submit", this._onFormSubmitFunc, !1),
                                              this.parentForm.addEventListener("reset", this._onFormResetFunc, !1),
                                              this._storeFormHandlerFunction()));
                                },
                            },
                            {
                                key: "_removeFormListener",
                                value: function () {
                                    if (!D.default.isNull(this.parentForm)) {
                                        var e = this._getParentFormCounter();
                                        1 === e
                                            ? (this.parentForm.removeEventListener("submit", this._getFormHandlerFunction().submitFn, !1),
                                              this.parentForm.removeEventListener("reset", this._getFormHandlerFunction().resetFn, !1),
                                              this._removeFormDataSetInfo())
                                            : 1 < e
                                            ? this._decrementParentFormCounter()
                                            : D.default.throwError("The AutoNumeric object count on the form is incoherent.");
                                    }
                                },
                            },
                            {
                                key: "_hasParentFormCounter",
                                value: function () {
                                    return "anCount" in this.parentForm.dataset;
                                },
                            },
                            {
                                key: "_getParentFormCounter",
                                value: function () {
                                    return Number(this.parentForm.dataset.anCount);
                                },
                            },
                            {
                                key: "_initializeFormCounterToOne",
                                value: function () {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                    this._getFormElement(e).dataset.anCount = 1;
                                },
                            },
                            {
                                key: "_incrementParentFormCounter",
                                value: function () {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                    this._getFormElement(e).dataset.anCount++;
                                },
                            },
                            {
                                key: "_decrementParentFormCounter",
                                value: function () {
                                    this.parentForm.dataset.anCount--;
                                },
                            },
                            {
                                key: "_hasFormHandlerFunction",
                                value: function () {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                    return "anFormHandler" in this._getFormElement(e).dataset;
                                },
                            },
                            {
                                key: "_getFormElement",
                                value: function () {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                    return D.default.isNull(e) ? this.parentForm : e;
                                },
                            },
                            {
                                key: "_storeFormHandlerFunction",
                                value: function () {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                    this.constructor._doesFormHandlerListExists() || this.constructor._createFormHandlerList();
                                    var t = D.default.randomString();
                                    (this._getFormElement(e).dataset.anFormHandler = t), window.aNFormHandlerMap.set(t, { submitFn: this._onFormSubmitFunc, resetFn: this._onFormResetFunc });
                                },
                            },
                            {
                                key: "_getFormHandlerKey",
                                value: function () {
                                    this._hasFormHandlerFunction() || D.default.throwError("Unable to retrieve the form handler name");
                                    var e = this.parentForm.dataset.anFormHandler;
                                    return "" === e && D.default.throwError("The form handler name is invalid"), e;
                                },
                            },
                            {
                                key: "_getFormHandlerFunction",
                                value: function () {
                                    var e = this._getFormHandlerKey();
                                    return window.aNFormHandlerMap.get(e);
                                },
                            },
                            {
                                key: "_removeFormDataSetInfo",
                                value: function () {
                                    this._decrementParentFormCounter(), window.aNFormHandlerMap.delete(this._getFormHandlerKey()), this.parentForm.removeAttribute("data-an-count"), this.parentForm.removeAttribute("data-an-form-handler");
                                },
                            },
                            {
                                key: "_setWritePermissions",
                                value: function () {
                                    (0 < arguments.length && void 0 !== arguments[0] && arguments[0] && this.domElement.readOnly) || this.settings.readOnly ? this._setReadOnly() : this._setReadWrite();
                                },
                            },
                            {
                                key: "_setReadOnly",
                                value: function () {
                                    this.isInputElement ? (this.domElement.readOnly = !0) : this.domElement.setAttribute("contenteditable", !1);
                                },
                            },
                            {
                                key: "_setReadWrite",
                                value: function () {
                                    this.isInputElement ? (this.domElement.readOnly = !1) : this.domElement.setAttribute("contenteditable", !0);
                                },
                            },
                            {
                                key: "_addWatcher",
                                value: function () {
                                    var t = this;
                                    if (!D.default.isUndefined(this.getterSetter)) {
                                        var e = this.getterSetter,
                                            i = e.set,
                                            n = e.get;
                                        Object.defineProperty(this.domElement, this.attributeToWatch, {
                                            configurable: !0,
                                            get: function () {
                                                return n.call(t.domElement);
                                            },
                                            set: function (e) {
                                                i.call(t.domElement, e), t.settings.watchExternalChanges && !t.internalModification && t.set(e);
                                            },
                                        });
                                    }
                                },
                            },
                            {
                                key: "_removeWatcher",
                                value: function () {
                                    var t = this;
                                    if (!D.default.isUndefined(this.getterSetter)) {
                                        var e = this.getterSetter,
                                            i = e.set,
                                            n = e.get;
                                        Object.defineProperty(this.domElement, this.attributeToWatch, {
                                            configurable: !0,
                                            get: function () {
                                                return n.call(t.domElement);
                                            },
                                            set: function (e) {
                                                i.call(t.domElement, e);
                                            },
                                        });
                                    }
                                },
                            },
                            {
                                key: "_getAttributeToWatch",
                                value: function () {
                                    var e = void 0;
                                    if (this.isInputElement) e = "value";
                                    else {
                                        var t = this.domElement.nodeType;
                                        t === Node.ELEMENT_NODE || t === Node.DOCUMENT_NODE || t === Node.DOCUMENT_FRAGMENT_NODE ? (e = "textContent") : t === Node.TEXT_NODE && (e = "nodeValue");
                                    }
                                    return e;
                                },
                            },
                            {
                                key: "_historyTableAdd",
                                value: function () {
                                    var e = 0 === this.historyTable.length;
                                    if (e || this.rawValue !== this._historyTableCurrentValueUsed()) {
                                        var t = !0;
                                        if (!e) {
                                            var i = this.historyTableIndex + 1;
                                            i < this.historyTable.length && this.rawValue === this.historyTable[i].value ? (t = !1) : D.default.arrayTrim(this.historyTable, this.historyTableIndex + 1);
                                        }
                                        if ((this.historyTableIndex++, t)) {
                                            var n = D.default.getElementSelection(this.domElement);
                                            (this.selectionStart = n.start),
                                                (this.selectionEnd = n.end),
                                                this.historyTable.push({ value: this.rawValue, start: this.selectionStart + 1, end: this.selectionEnd + 1 }),
                                                1 < this.historyTable.length && ((this.historyTable[this.historyTableIndex - 1].start = this.selectionStart), (this.historyTable[this.historyTableIndex - 1].end = this.selectionEnd));
                                        }
                                        this.historyTable.length > this.settings.historySize && this._historyTableForget();
                                    }
                                },
                            },
                            {
                                key: "_historyTableUndoOrRedo",
                                value: function () {
                                    var e = void 0;
                                    if (
                                        (0 < arguments.length && void 0 !== arguments[0] && !arguments[0]
                                            ? (e = this.historyTableIndex + 1 < this.historyTable.length) && this.historyTableIndex++
                                            : (e = 0 < this.historyTableIndex) && this.historyTableIndex--,
                                        e)
                                    ) {
                                        var t = this.historyTable[this.historyTableIndex];
                                        this.set(t.value, null, !1), D.default.setElementSelection(this.domElement, t.start, t.end);
                                    }
                                },
                            },
                            {
                                key: "_historyTableUndo",
                                value: function () {
                                    this._historyTableUndoOrRedo(!0);
                                },
                            },
                            {
                                key: "_historyTableRedo",
                                value: function () {
                                    this._historyTableUndoOrRedo(!1);
                                },
                            },
                            {
                                key: "_historyTableForget",
                                value: function () {
                                    for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1, t = [], i = 0; i < e; i++)
                                        t.push(this.historyTable.shift()), this.historyTableIndex--, this.historyTableIndex < 0 && (this.historyTableIndex = 0);
                                    return 1 === t.length ? t[0] : t;
                                },
                            },
                            {
                                key: "_historyTableCurrentValueUsed",
                                value: function () {
                                    var e = this.historyTableIndex;
                                    return e < 0 && (e = 0), D.default.isUndefinedOrNullOrEmpty(this.historyTable[e]) ? "" : this.historyTable[e].value;
                                },
                            },
                            {
                                key: "_parseStyleRules",
                                value: function () {
                                    var n = this;
                                    D.default.isUndefinedOrNullOrEmpty(this.settings.styleRules) ||
                                        "" === this.rawValue ||
                                        (D.default.isUndefinedOrNullOrEmpty(this.settings.styleRules.positive) ||
                                            (0 <= this.rawValue ? this._addCSSClass(this.settings.styleRules.positive) : this._removeCSSClass(this.settings.styleRules.positive)),
                                        D.default.isUndefinedOrNullOrEmpty(this.settings.styleRules.negative) ||
                                            (this.rawValue < 0 ? this._addCSSClass(this.settings.styleRules.negative) : this._removeCSSClass(this.settings.styleRules.negative)),
                                        D.default.isUndefinedOrNullOrEmpty(this.settings.styleRules.ranges) ||
                                            0 === this.settings.styleRules.ranges.length ||
                                            this.settings.styleRules.ranges.forEach(function (e) {
                                                n.rawValue >= e.min && n.rawValue < e.max ? n._addCSSClass(e.class) : n._removeCSSClass(e.class);
                                            }),
                                        D.default.isUndefinedOrNullOrEmpty(this.settings.styleRules.userDefined) ||
                                            0 === this.settings.styleRules.userDefined.length ||
                                            this.settings.styleRules.userDefined.forEach(function (e) {
                                                if (D.default.isFunction(e.callback))
                                                    if (D.default.isString(e.classes)) e.callback(n.rawValue) ? n._addCSSClass(e.classes) : n._removeCSSClass(e.classes);
                                                    else if (D.default.isArray(e.classes))
                                                        if (2 === e.classes.length) e.callback(n.rawValue) ? (n._addCSSClass(e.classes[0]), n._removeCSSClass(e.classes[1])) : (n._removeCSSClass(e.classes[0]), n._addCSSClass(e.classes[1]));
                                                        else if (2 < e.classes.length) {
                                                            var i = e.callback(n.rawValue);
                                                            D.default.isArray(i)
                                                                ? e.classes.forEach(function (e, t) {
                                                                      D.default.isInArray(t, i) ? n._addCSSClass(e) : n._removeCSSClass(e);
                                                                  })
                                                                : D.default.isInt(i)
                                                                ? e.classes.forEach(function (e, t) {
                                                                      t === i ? n._addCSSClass(e) : n._removeCSSClass(e);
                                                                  })
                                                                : D.default.isNull(i)
                                                                ? e.classes.forEach(function (e) {
                                                                      n._removeCSSClass(e);
                                                                  })
                                                                : D.default.throwError("The callback result is not an array nor a valid array index, " + (void 0 === i ? "undefined" : b(i)) + " given.");
                                                        } else D.default.throwError("The classes attribute is not valid for the `styleRules` option.");
                                                    else D.default.isUndefinedOrNullOrEmpty(e.classes) ? e.callback(n) : D.default.throwError("The callback/classes structure is not valid for the `styleRules` option.");
                                                else D.default.warning("The given `styleRules` callback is not a function, " + ("undefined" == typeof callback ? "undefined" : b(callback)) + " given.", n.settings.showWarnings);
                                            }));
                                },
                            },
                            {
                                key: "_addCSSClass",
                                value: function (e) {
                                    this.domElement.classList.add(e);
                                },
                            },
                            {
                                key: "_removeCSSClass",
                                value: function (e) {
                                    this.domElement.classList.remove(e);
                                },
                            },
                            {
                                key: "update",
                                value: function () {
                                    for (var t = this, e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                                    Array.isArray(i) && Array.isArray(i[0]) && (i = i[0]);
                                    var a = D.default.cloneObject(this.settings),
                                        r = this.rawValue,
                                        s = {};
                                    D.default.isUndefinedOrNullOrEmpty(i) || 0 === i.length
                                        ? (s = null)
                                        : 1 <= i.length &&
                                          i.forEach(function (e) {
                                              t.constructor._isPreDefinedOptionValid(e) && (e = t.constructor._getOptionObject(e)), y(s, e);
                                          });
                                    try {
                                        this._setSettings(s, !0), this._setWritePermissions(), this._updateEventListeners(), this.set(r);
                                    } catch (e) {
                                        return this._setSettings(a, !0), D.default.throwError("Unable to update the settings, those are invalid: [" + e + "]"), this;
                                    }
                                    return this;
                                },
                            },
                            {
                                key: "getSettings",
                                value: function () {
                                    return this.settings;
                                },
                            },
                            {
                                key: "set",
                                value: function (e) {
                                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                                        i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
                                    if (D.default.isUndefined(e)) return D.default.warning("You are trying to set an 'undefined' value ; an error could have occurred.", this.settings.showWarnings), this;
                                    if ((D.default.isNull(t) || this._setSettings(t, !0), null === e && this.settings.emptyInputBehavior !== I.options.emptyInputBehavior.null))
                                        return (
                                            D.default.warning(
                                                "You are trying to set the `null` value while the `emptyInputBehavior` option is set to " +
                                                    this.settings.emptyInputBehavior +
                                                    ". If you want to be able to set the `null` value, you need to change the 'emptyInputBehavior' option to `'null'`.",
                                                this.settings.showWarnings
                                            ),
                                            this
                                        );
                                    var n,
                                        a = void 0;
                                    if (null === e) return this._setElementAndRawValue(null, null, i), this._saveValueToPersistentStorage(), this;
                                    if (((a = this.constructor._toNumericValue(e, this.settings)), isNaN(Number(a))))
                                        return D.default.warning("The value you are trying to set results in `NaN`. The element value is set to the empty string instead.", this.settings.showWarnings), this.setValue("", i), this;
                                    if ("" === a)
                                        switch (this.settings.emptyInputBehavior) {
                                            case I.options.emptyInputBehavior.zero:
                                                a = 0;
                                                break;
                                            case I.options.emptyInputBehavior.min:
                                                a = this.settings.minimumValue;
                                                break;
                                            case I.options.emptyInputBehavior.max:
                                                a = this.settings.maximumValue;
                                                break;
                                            default:
                                                D.default.isNumber(this.settings.emptyInputBehavior) && (a = Number(this.settings.emptyInputBehavior));
                                        }
                                    if ("" === a) return (n = this.settings.emptyInputBehavior === I.options.emptyInputBehavior.always ? this.settings.currencySymbol : ""), this._setElementAndRawValue(n, "", i), this;
                                    var r = this.constructor._checkIfInRangeWithOverrideOption(a, this.settings),
                                        s = S(r, 2),
                                        o = s[0],
                                        l = s[1];
                                    if (o && l && this.settings.valuesToStrings && this._checkValuesToStrings(a)) return this._setElementAndRawValue(this.settings.valuesToStrings[a], a, i), this._saveValueToPersistentStorage(), this;
                                    if ((D.default.isZeroOrHasNoValue(a) && (a = "0"), o && l)) {
                                        var u = this.constructor._roundRawValue(a, this.settings);
                                        return (
                                            (u = this._trimLeadingAndTrailingZeros(u.replace(this.settings.decimalCharacter, "."))),
                                            (a = this._getRawValueToFormat(a)),
                                            (a = this.isFocused
                                                ? this.constructor._roundFormattedValueShownOnFocus(a, this.settings)
                                                : (this.settings.divisorWhenUnfocused && (a = (a /= this.settings.divisorWhenUnfocused).toString()), this.constructor._roundFormattedValueShownOnBlur(a, this.settings))),
                                            (a = this.constructor._modifyNegativeSignAndDecimalCharacterForFormattedValue(a, this.settings)),
                                            (a = this.constructor._addGroupSeparators(a, this.settings, this.isFocused, this.rawValue, u)),
                                            !this.isFocused && this.settings.symbolWhenUnfocused && (a = "" + a + this.settings.symbolWhenUnfocused),
                                            (this.settings.decimalPlacesShownOnFocus || this.settings.divisorWhenUnfocused) && this._saveValueToPersistentStorage(),
                                            this._setElementAndRawValue(a, u, i),
                                            this
                                        );
                                    }
                                    return (
                                        o || this._triggerEvent(I.events.minRangeExceeded, this.domElement),
                                        l || this._triggerEvent(I.events.maxRangeExceeded, this.domElement),
                                        D.default.throwError(
                                            "The value [" + a + "] being set falls outside of the minimumValue [" + this.settings.minimumValue + "] and maximumValue [" + this.settings.maximumValue + "] range set for this element"
                                        ),
                                        this._removeValueFromPersistentStorage(),
                                        this.setValue("", i),
                                        this
                                    );
                                },
                            },
                            {
                                key: "setUnformatted",
                                value: function (e) {
                                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                                    if (null === e || D.default.isUndefined(e)) return this;
                                    D.default.isNull(t) || this._setSettings(t, !0);
                                    var i = this.constructor._removeBrackets(e, this.settings),
                                        n = this.constructor._stripAllNonNumberCharacters(i, this.settings, !0, this.isFocused);
                                    D.default.isNumber(n) || D.default.throwError("The value is not a valid one, it's not a numeric string nor a recognized currency.");
                                    var a = this.constructor._checkIfInRangeWithOverrideOption(n, this.settings),
                                        r = S(a, 2),
                                        s = r[0],
                                        o = r[1];
                                    return s && o ? this.setValue(e) : D.default.throwError("The value is out of the range limits [" + this.settings.minimumValue + ", " + this.settings.maximumValue + "]."), this;
                                },
                            },
                            {
                                key: "setValue",
                                value: function (e) {
                                    var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                                    return this._setElementAndRawValue(e, t), this;
                                },
                            },
                            {
                                key: "_setRawValue",
                                value: function (e) {
                                    var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                                    if (this.rawValue !== e) {
                                        var i = this.rawValue;
                                        (this.rawValue = e),
                                            !D.default.isNull(this.settings.rawValueDivisor) &&
                                                0 !== this.settings.rawValueDivisor &&
                                                "" !== e &&
                                                null !== e &&
                                                this._isUserManuallyEditingTheValue() &&
                                                (this.rawValue /= this.settings.rawValueDivisor),
                                            this._triggerEvent(I.events.rawValueModified, this.domElement, { oldRawValue: i, newRawValue: this.rawValue, isPristine: this.isPristine(!0), error: null, aNElement: this }),
                                            this._parseStyleRules(),
                                            t && this._historyTableAdd();
                                    }
                                },
                            },
                            {
                                key: "_setElementValue",
                                value: function (e) {
                                    var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                                        i = D.default.getElementValue(this.domElement);
                                    return (
                                        e !== i &&
                                            ((this.internalModification = !0),
                                            D.default.setElementValue(this.domElement, e),
                                            (this.internalModification = !1),
                                            t &&
                                                this._triggerEvent(I.events.formatted, this.domElement, {
                                                    oldValue: i,
                                                    newValue: e,
                                                    oldRawValue: this.rawValue,
                                                    newRawValue: this.rawValue,
                                                    isPristine: this.isPristine(!1),
                                                    error: null,
                                                    aNElement: this,
                                                })),
                                        this
                                    );
                                },
                            },
                            {
                                key: "_setElementAndRawValue",
                                value: function (e) {
                                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                                        i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
                                    return D.default.isNull(t) ? (t = e) : D.default.isBoolean(t) && ((i = t), (t = e)), this._setElementValue(e), this._setRawValue(t, i), this;
                                },
                            },
                            {
                                key: "_getRawValueToFormat",
                                value: function (e) {
                                    return D.default.isNull(this.settings.rawValueDivisor) || 0 === this.settings.rawValueDivisor || "" === e || null === e ? e : e * this.settings.rawValueDivisor;
                                },
                            },
                            {
                                key: "_checkValuesToStrings",
                                value: function (e) {
                                    return this.constructor._checkValuesToStringsArray(e, this.valuesToStringsKeys);
                                },
                            },
                            {
                                key: "_isUserManuallyEditingTheValue",
                                value: function () {
                                    return (this.isFocused && this.isEditing) || this.isDropEvent;
                                },
                            },
                            {
                                key: "_executeCallback",
                                value: function (e, t) {
                                    !D.default.isNull(t) && D.default.isFunction(t) && t(e, this);
                                },
                            },
                            {
                                key: "_triggerEvent",
                                value: function (e) {
                                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document,
                                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                                    D.default.triggerEvent(e, t, i, this.settings.eventBubbles, this.settings.eventIsCancelable);
                                },
                            },
                            {
                                key: "get",
                                value: function () {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                    return this.getNumericString(e);
                                },
                            },
                            {
                                key: "getNumericString",
                                value: function () {
                                    var e,
                                        t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                    return (e = D.default.isNull(this.rawValue) ? null : D.default.trimPaddedZerosFromDecimalPlaces(this.rawValue)), this._executeCallback(e, t), e;
                                },
                            },
                            {
                                key: "getFormatted",
                                value: function () {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                    "value" in this.domElement || "textContent" in this.domElement || D.default.throwError("Unable to get the formatted string from the element.");
                                    var t = D.default.getElementValue(this.domElement);
                                    return this._executeCallback(t, e), t;
                                },
                            },
                            {
                                key: "getNumber",
                                value: function () {
                                    var e,
                                        t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                    return (e = null === this.rawValue ? null : this.constructor._toLocale(this.getNumericString(), "number", this.settings)), this._executeCallback(e, t), e;
                                },
                            },
                            {
                                key: "getLocalized",
                                value: function () {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                                        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                                    D.default.isFunction(e) && D.default.isNull(t) && ((t = e), (e = null));
                                    var i,
                                        n = void 0;
                                    "" != (n = D.default.isEmptyString(this.rawValue) ? "" : "" + Number(this.rawValue)) && 0 === Number(n) && this.settings.leadingZero !== I.options.leadingZero.keep && (n = "0"),
                                        (i = D.default.isNull(e) ? this.settings.outputFormat : e);
                                    var a = this.constructor._toLocale(n, i, this.settings);
                                    return this._executeCallback(a, t), a;
                                },
                            },
                            {
                                key: "reformat",
                                value: function () {
                                    return this.set(this.rawValue), this;
                                },
                            },
                            {
                                key: "unformat",
                                value: function () {
                                    return this._setElementValue(this.getNumericString()), this;
                                },
                            },
                            {
                                key: "unformatLocalized",
                                value: function () {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                    return this._setElementValue(this.getLocalized(e)), this;
                                },
                            },
                            {
                                key: "isPristine",
                                value: function () {
                                    return 0 < arguments.length && void 0 !== arguments[0] && !arguments[0] ? this.initialValueHtmlAttribute === this.getFormatted() : this.initialValue === this.getNumericString();
                                },
                            },
                            {
                                key: "select",
                                value: function () {
                                    return this.settings.selectNumberOnly ? this.selectNumber() : this._defaultSelectAll(), this;
                                },
                            },
                            {
                                key: "_defaultSelectAll",
                                value: function () {
                                    D.default.setElementSelection(this.domElement, 0, D.default.getElementValue(this.domElement).length);
                                },
                            },
                            {
                                key: "selectNumber",
                                value: function () {
                                    var e,
                                        t = D.default.getElementValue(this.domElement),
                                        i = t.length,
                                        n = this.settings.currencySymbol.length,
                                        a = this.settings.currencySymbolPlacement,
                                        r = D.default.isNegative(t, this.settings.negativeSignCharacter) ? 1 : 0,
                                        s = this.settings.suffixText.length;
                                    e = a === I.options.currencySymbolPlacement.suffix ? 0 : this.settings.negativePositiveSignPlacement === I.options.negativePositiveSignPlacement.left && 1 === r && 0 < n ? n + 1 : n;
                                    var o = void 0;
                                    if (a === I.options.currencySymbolPlacement.prefix) o = i - s;
                                    else
                                        switch (this.settings.negativePositiveSignPlacement) {
                                            case I.options.negativePositiveSignPlacement.left:
                                                o = i - (s + n);
                                                break;
                                            case I.options.negativePositiveSignPlacement.right:
                                                o = 0 < n ? i - (n + r + s) : i - (n + s);
                                                break;
                                            default:
                                                o = i - (n + s);
                                        }
                                    return D.default.setElementSelection(this.domElement, e, o), this;
                                },
                            },
                            {
                                key: "selectInteger",
                                value: function () {
                                    var e = 0,
                                        t = 0 <= this.rawValue;
                                    (this.settings.currencySymbolPlacement !== I.options.currencySymbolPlacement.prefix &&
                                        (this.settings.currencySymbolPlacement !== I.options.currencySymbolPlacement.suffix ||
                                            (this.settings.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.prefix &&
                                                this.settings.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.none))) ||
                                        (((this.settings.showPositiveSign && t) ||
                                            (!t && this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.prefix && this.settings.negativePositiveSignPlacement === I.options.negativePositiveSignPlacement.left)) &&
                                            (e += 1)),
                                        this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.prefix && (e += this.settings.currencySymbol.length);
                                    var i = D.default.getElementValue(this.domElement),
                                        n = i.indexOf(this.settings.decimalCharacter);
                                    return (
                                        -1 === n &&
                                            ((n = this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.suffix ? i.length - this.settings.currencySymbol.length : i.length),
                                            t ||
                                                (this.settings.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.suffix && this.settings.currencySymbolPlacement !== I.options.currencySymbolPlacement.suffix) ||
                                                (n -= 1),
                                            (n -= this.settings.suffixText.length)),
                                        D.default.setElementSelection(this.domElement, e, n),
                                        this
                                    );
                                },
                            },
                            {
                                key: "selectDecimal",
                                value: function () {
                                    var e,
                                        t = D.default.getElementValue(this.domElement).indexOf(this.settings.decimalCharacter),
                                        i = void 0;
                                    return (
                                        (i = -1 === t ? (t = 0) : ((t += 1), (e = this.isFocused ? this.settings.decimalPlacesShownOnFocus : this.settings.decimalPlacesShownOnBlur), t + Number(e))),
                                        D.default.setElementSelection(this.domElement, t, i),
                                        this
                                    );
                                },
                            },
                            {
                                key: "node",
                                value: function () {
                                    return this.domElement;
                                },
                            },
                            {
                                key: "parent",
                                value: function () {
                                    return this.domElement.parentNode;
                                },
                            },
                            {
                                key: "detach",
                                value: function () {
                                    var e,
                                        t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                    return (e = D.default.isNull(t) ? this.domElement : t.node()), this._removeFromLocalList(e), this;
                                },
                            },
                            {
                                key: "attach",
                                value: function (e) {
                                    var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                                    return this._addToLocalList(e.node()), t && e.update(this.settings), this;
                                },
                            },
                            {
                                key: "formatOther",
                                value: function (e) {
                                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                                    return this._formatOrUnformatOther(!0, e, t);
                                },
                            },
                            {
                                key: "unformatOther",
                                value: function (e) {
                                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                                    return this._formatOrUnformatOther(!1, e, t);
                                },
                            },
                            {
                                key: "_formatOrUnformatOther",
                                value: function (e, t) {
                                    var i,
                                        n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                                    i = D.default.isNull(n) ? this.settings : this._cloneAndMergeSettings(n);
                                    var a = void 0;
                                    if (D.default.isElement(t)) {
                                        var r = D.default.getElementValue(t);
                                        return (a = e ? I.format(r, i) : I.unformat(r, i)), D.default.setElementValue(t, a), null;
                                    }
                                    return e ? I.format(t, i) : I.unformat(t, i);
                                },
                            },
                            {
                                key: "init",
                                value: function (e) {
                                    var n = this,
                                        a = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                                        t = !1,
                                        i = [];
                                    if (
                                        (D.default.isString(e)
                                            ? (i = [].concat(g(document.querySelectorAll(e))))
                                            : D.default.isElement(e)
                                            ? (i.push(e), (t = !0))
                                            : D.default.isArray(e)
                                            ? (i = e)
                                            : D.default.throwError("The given parameters to the 'init' function are invalid."),
                                        0 === i.length)
                                    )
                                        return D.default.warning("No valid DOM elements were given hence no AutoNumeric object were instantiated.", !0), [];
                                    var r = this._getLocalList(),
                                        s = [];
                                    return (
                                        i.forEach(function (e) {
                                            var t = n.settings.createLocalList;
                                            a && (n.settings.createLocalList = !1);
                                            var i = new I(e, D.default.getElementValue(e), n.settings);
                                            a && (i._setLocalList(r), n._addToLocalList(e, i), (n.settings.createLocalList = t)), s.push(i);
                                        }),
                                        t ? s[0] : s
                                    );
                                },
                            },
                            {
                                key: "clear",
                                value: function () {
                                    if (0 < arguments.length && void 0 !== arguments[0] && arguments[0]) {
                                        var e = { emptyInputBehavior: I.options.emptyInputBehavior.focus };
                                        this.set("", e);
                                    } else this.set("");
                                    return this;
                                },
                            },
                            {
                                key: "remove",
                                value: function () {
                                    this._removeValueFromPersistentStorage(), this._removeEventListeners(), this._removeWatcher(), this._removeFromLocalList(this.domElement), this.constructor._removeFromGlobalList(this);
                                },
                            },
                            {
                                key: "wipe",
                                value: function () {
                                    this._setElementValue("", !1), this.remove();
                                },
                            },
                            {
                                key: "nuke",
                                value: function () {
                                    this.remove(), this.domElement.parentNode.removeChild(this.domElement);
                                },
                            },
                            {
                                key: "form",
                                value: function () {
                                    if ((0 < arguments.length && void 0 !== arguments[0] && arguments[0]) || D.default.isUndefinedOrNullOrEmpty(this.parentForm)) {
                                        var e = this._getParentForm();
                                        if (!D.default.isNull(e) && e !== this.parentForm) {
                                            var t = this._getFormAutoNumericChildren(this.parentForm);
                                            (this.parentForm.dataset.anCount = t.length), this._hasFormHandlerFunction(e) ? this._incrementParentFormCounter(e) : (this._storeFormHandlerFunction(e), this._initializeFormCounterToOne(e));
                                        }
                                        this.parentForm = e;
                                    }
                                    return this.parentForm;
                                },
                            },
                            {
                                key: "_getFormAutoNumericChildren",
                                value: function (e) {
                                    var t = this;
                                    return [].concat(g(e.querySelectorAll("input"))).filter(function (e) {
                                        return t.constructor.isManagedByAutoNumeric(e);
                                    });
                                },
                            },
                            {
                                key: "_getParentForm",
                                value: function () {
                                    if ("body" === this.domElement.tagName.toLowerCase()) return null;
                                    var e = this.domElement,
                                        t = void 0;
                                    do {
                                        if (((e = e.parentNode), D.default.isNull(e))) return null;
                                        if ("body" === (t = e.tagName ? e.tagName.toLowerCase() : "")) break;
                                    } while ("form" !== t);
                                    return "form" === t ? e : null;
                                },
                            },
                            {
                                key: "formNumericString",
                                value: function () {
                                    return this.constructor._serializeNumericString(this.form(), this.settings.serializeSpaces);
                                },
                            },
                            {
                                key: "formFormatted",
                                value: function () {
                                    return this.constructor._serializeFormatted(this.form(), this.settings.serializeSpaces);
                                },
                            },
                            {
                                key: "formLocalized",
                                value: function () {
                                    var e,
                                        t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                    return (e = D.default.isNull(t) ? this.settings.outputFormat : t), this.constructor._serializeLocalized(this.form(), this.settings.serializeSpaces, e);
                                },
                            },
                            {
                                key: "formArrayNumericString",
                                value: function () {
                                    return this.constructor._serializeNumericStringArray(this.form(), this.settings.serializeSpaces);
                                },
                            },
                            {
                                key: "formArrayFormatted",
                                value: function () {
                                    return this.constructor._serializeFormattedArray(this.form(), this.settings.serializeSpaces);
                                },
                            },
                            {
                                key: "formArrayLocalized",
                                value: function () {
                                    var e,
                                        t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                    return (e = D.default.isNull(t) ? this.settings.outputFormat : t), this.constructor._serializeLocalizedArray(this.form(), this.settings.serializeSpaces, e);
                                },
                            },
                            {
                                key: "formJsonNumericString",
                                value: function () {
                                    return JSON.stringify(this.formArrayNumericString());
                                },
                            },
                            {
                                key: "formJsonFormatted",
                                value: function () {
                                    return JSON.stringify(this.formArrayFormatted());
                                },
                            },
                            {
                                key: "formJsonLocalized",
                                value: function () {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                    return JSON.stringify(this.formArrayLocalized(e));
                                },
                            },
                            {
                                key: "formUnformat",
                                value: function () {
                                    return (
                                        this.constructor._getChildANInputElement(this.form()).forEach(function (e) {
                                            I.getAutoNumericElement(e).unformat();
                                        }),
                                        this
                                    );
                                },
                            },
                            {
                                key: "formUnformatLocalized",
                                value: function () {
                                    return (
                                        this.constructor._getChildANInputElement(this.form()).forEach(function (e) {
                                            I.getAutoNumericElement(e).unformatLocalized();
                                        }),
                                        this
                                    );
                                },
                            },
                            {
                                key: "formReformat",
                                value: function () {
                                    return (
                                        this.constructor._getChildANInputElement(this.form()).forEach(function (e) {
                                            I.getAutoNumericElement(e).reformat();
                                        }),
                                        this
                                    );
                                },
                            },
                            {
                                key: "formSubmitNumericString",
                                value: function () {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                    return (
                                        D.default.isNull(e)
                                            ? (this.formUnformat(), this.form().submit(), this.formReformat())
                                            : D.default.isFunction(e)
                                            ? e(this.formNumericString())
                                            : D.default.throwError("The given callback is not a function."),
                                        this
                                    );
                                },
                            },
                            {
                                key: "formSubmitFormatted",
                                value: function () {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                    return D.default.isNull(e) ? this.form().submit() : D.default.isFunction(e) ? e(this.formFormatted()) : D.default.throwError("The given callback is not a function."), this;
                                },
                            },
                            {
                                key: "formSubmitLocalized",
                                value: function () {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                                        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                                    return (
                                        D.default.isNull(t)
                                            ? (this.formUnformatLocalized(), this.form().submit(), this.formReformat())
                                            : D.default.isFunction(t)
                                            ? t(this.formLocalized(e))
                                            : D.default.throwError("The given callback is not a function."),
                                        this
                                    );
                                },
                            },
                            {
                                key: "formSubmitArrayNumericString",
                                value: function (e) {
                                    return D.default.isFunction(e) ? e(this.formArrayNumericString()) : D.default.throwError("The given callback is not a function."), this;
                                },
                            },
                            {
                                key: "formSubmitArrayFormatted",
                                value: function (e) {
                                    return D.default.isFunction(e) ? e(this.formArrayFormatted()) : D.default.throwError("The given callback is not a function."), this;
                                },
                            },
                            {
                                key: "formSubmitArrayLocalized",
                                value: function (e) {
                                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                                    return D.default.isFunction(e) ? e(this.formArrayLocalized(t)) : D.default.throwError("The given callback is not a function."), this;
                                },
                            },
                            {
                                key: "formSubmitJsonNumericString",
                                value: function (e) {
                                    return D.default.isFunction(e) ? e(this.formJsonNumericString()) : D.default.throwError("The given callback is not a function."), this;
                                },
                            },
                            {
                                key: "formSubmitJsonFormatted",
                                value: function (e) {
                                    return D.default.isFunction(e) ? e(this.formJsonFormatted()) : D.default.throwError("The given callback is not a function."), this;
                                },
                            },
                            {
                                key: "formSubmitJsonLocalized",
                                value: function (e) {
                                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                                    return D.default.isFunction(e) ? e(this.formJsonLocalized(t)) : D.default.throwError("The given callback is not a function."), this;
                                },
                            },
                            {
                                key: "_createLocalList",
                                value: function () {
                                    (this.autoNumericLocalList = new Map()), this._addToLocalList(this.domElement);
                                },
                            },
                            {
                                key: "_deleteLocalList",
                                value: function () {
                                    delete this.autoNumericLocalList;
                                },
                            },
                            {
                                key: "_setLocalList",
                                value: function (e) {
                                    this.autoNumericLocalList = e;
                                },
                            },
                            {
                                key: "_getLocalList",
                                value: function () {
                                    return this.autoNumericLocalList;
                                },
                            },
                            {
                                key: "_hasLocalList",
                                value: function () {
                                    return this.autoNumericLocalList instanceof Map && 0 !== this.autoNumericLocalList.size;
                                },
                            },
                            {
                                key: "_addToLocalList",
                                value: function (e) {
                                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                                    D.default.isNull(t) && (t = this),
                                        D.default.isUndefined(this.autoNumericLocalList)
                                            ? D.default.throwError("The local list provided does not exists when trying to add an element. [" + this.autoNumericLocalList + "] given.")
                                            : this.autoNumericLocalList.set(e, t);
                                },
                            },
                            {
                                key: "_removeFromLocalList",
                                value: function (e) {
                                    D.default.isUndefined(this.autoNumericLocalList)
                                        ? this.settings.createLocalList && D.default.throwError("The local list provided does not exists when trying to remove an element. [" + this.autoNumericLocalList + "] given.")
                                        : this.autoNumericLocalList.delete(e);
                                },
                            },
                            {
                                key: "_mergeSettings",
                                value: function () {
                                    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                                    y.apply(void 0, [this.settings].concat(t));
                                },
                            },
                            {
                                key: "_cloneAndMergeSettings",
                                value: function () {
                                    for (var e = {}, t = arguments.length, i = Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                                    return y.apply(void 0, [e, this.settings].concat(i)), e;
                                },
                            },
                            {
                                key: "_updatePredefinedOptions",
                                value: function (e) {
                                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                                    return D.default.isNull(t) ? this.update(e) : (this._mergeSettings(e, t), this.update(this.settings)), this;
                                },
                            },
                            {
                                key: "french",
                                value: function () {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                    return this._updatePredefinedOptions(I.getPredefinedOptions().French, e), this;
                                },
                            },
                            {
                                key: "northAmerican",
                                value: function () {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                    return this._updatePredefinedOptions(I.getPredefinedOptions().NorthAmerican, e), this;
                                },
                            },
                            {
                                key: "british",
                                value: function () {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                    return this._updatePredefinedOptions(I.getPredefinedOptions().British, e), this;
                                },
                            },
                            {
                                key: "swiss",
                                value: function () {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                    return this._updatePredefinedOptions(I.getPredefinedOptions().Swiss, e), this;
                                },
                            },
                            {
                                key: "japanese",
                                value: function () {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                    return this._updatePredefinedOptions(I.getPredefinedOptions().Japanese, e), this;
                                },
                            },
                            {
                                key: "spanish",
                                value: function () {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                    return this._updatePredefinedOptions(I.getPredefinedOptions().Spanish, e), this;
                                },
                            },
                            {
                                key: "chinese",
                                value: function () {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                    return this._updatePredefinedOptions(I.getPredefinedOptions().Chinese, e), this;
                                },
                            },
                            {
                                key: "brazilian",
                                value: function () {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                    return this._updatePredefinedOptions(I.getPredefinedOptions().Brazilian, e), this;
                                },
                            },
                            {
                                key: "_runCallbacksFoundInTheSettingsObject",
                                value: function () {
                                    for (var e in this.settings)
                                        if (this.settings.hasOwnProperty(e)) {
                                            var t = this.settings[e];
                                            if ("function" == typeof t) this.settings[e] = t(this, e);
                                            else {
                                                var i = this.domElement.getAttribute(e);
                                                (i = D.default.camelize(i)), "function" == typeof this.settings[i] && (this.settings[e] = i(this, e));
                                            }
                                        }
                                },
                            },
                            {
                                key: "_setTrailingNegativeSignInfo",
                                value: function () {
                                    this.isTrailingNegative =
                                        (this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.prefix && this.settings.negativePositiveSignPlacement === I.options.negativePositiveSignPlacement.suffix) ||
                                        (this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.suffix &&
                                            (this.settings.negativePositiveSignPlacement === I.options.negativePositiveSignPlacement.left || this.settings.negativePositiveSignPlacement === I.options.negativePositiveSignPlacement.right));
                                },
                            },
                            {
                                key: "_modifyNegativeSignAndDecimalCharacterForRawValue",
                                value: function (e) {
                                    return (
                                        "." !== this.settings.decimalCharacter && (e = e.replace(this.settings.decimalCharacter, ".")),
                                        "-" !== this.settings.negativeSignCharacter && this.settings.isNegativeSignAllowed && (e = e.replace(this.settings.negativeSignCharacter, "-")),
                                        e.match(/\d/) || (e += "0"),
                                        e
                                    );
                                },
                            },
                            {
                                key: "_initialCaretPosition",
                                value: function (e) {
                                    D.default.isNull(this.settings.caretPositionOnFocus) &&
                                        this.settings.selectOnFocus === I.options.selectOnFocus.doNotSelect &&
                                        D.default.throwError("`_initialCaretPosition()` should never be called when the `caretPositionOnFocus` option is `null`.");
                                    var t = this.rawValue < 0,
                                        i = D.default.isZeroOrHasNoValue(e),
                                        n = e.length,
                                        a = 0,
                                        r = 0,
                                        s = !1,
                                        o = 0;
                                    this.settings.caretPositionOnFocus !== I.options.caretPositionOnFocus.start &&
                                        ((a = (e = (e = (e = e.replace(this.settings.negativeSignCharacter, "")).replace(this.settings.positiveSignCharacter, "")).replace(this.settings.currencySymbol, "")).length),
                                        (s = D.default.contains(e, this.settings.decimalCharacter)),
                                        (this.settings.caretPositionOnFocus !== I.options.caretPositionOnFocus.decimalLeft && this.settings.caretPositionOnFocus !== I.options.caretPositionOnFocus.decimalRight) ||
                                            (o = s ? ((r = e.indexOf(this.settings.decimalCharacter)), this.settings.decimalCharacter.length) : ((r = a), 0)));
                                    var l = "";
                                    t ? (l = this.settings.negativeSignCharacter) : this.settings.showPositiveSign && !i && (l = this.settings.positiveSignCharacter);
                                    var u = l.length,
                                        c = this.settings.currencySymbol.length,
                                        h = void 0;
                                    if (this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.prefix) {
                                        if (this.settings.caretPositionOnFocus === I.options.caretPositionOnFocus.start)
                                            if (this.settings.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.none && (t || (!t && this.settings.showPositiveSign && !i)))
                                                switch (this.settings.negativePositiveSignPlacement) {
                                                    case I.options.negativePositiveSignPlacement.prefix:
                                                    case I.options.negativePositiveSignPlacement.left:
                                                    case I.options.negativePositiveSignPlacement.right:
                                                        h = u + c;
                                                        break;
                                                    case I.options.negativePositiveSignPlacement.suffix:
                                                        h = c;
                                                }
                                            else h = c;
                                        else if (this.settings.caretPositionOnFocus === I.options.caretPositionOnFocus.end)
                                            if (this.settings.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.none && (t || (!t && this.settings.showPositiveSign && !i)))
                                                switch (this.settings.negativePositiveSignPlacement) {
                                                    case I.options.negativePositiveSignPlacement.prefix:
                                                    case I.options.negativePositiveSignPlacement.left:
                                                    case I.options.negativePositiveSignPlacement.right:
                                                        h = n;
                                                        break;
                                                    case I.options.negativePositiveSignPlacement.suffix:
                                                        h = c + a;
                                                }
                                            else h = n;
                                        else if (this.settings.caretPositionOnFocus === I.options.caretPositionOnFocus.decimalLeft)
                                            if (this.settings.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.none && (t || (!t && this.settings.showPositiveSign && !i)))
                                                switch (this.settings.negativePositiveSignPlacement) {
                                                    case I.options.negativePositiveSignPlacement.prefix:
                                                    case I.options.negativePositiveSignPlacement.left:
                                                    case I.options.negativePositiveSignPlacement.right:
                                                        h = u + c + r;
                                                        break;
                                                    case I.options.negativePositiveSignPlacement.suffix:
                                                        h = c + r;
                                                }
                                            else h = c + r;
                                        else if (this.settings.caretPositionOnFocus === I.options.caretPositionOnFocus.decimalRight)
                                            if (this.settings.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.none && (t || (!t && this.settings.showPositiveSign && !i)))
                                                switch (this.settings.negativePositiveSignPlacement) {
                                                    case I.options.negativePositiveSignPlacement.prefix:
                                                    case I.options.negativePositiveSignPlacement.left:
                                                    case I.options.negativePositiveSignPlacement.right:
                                                        h = u + c + r + o;
                                                        break;
                                                    case I.options.negativePositiveSignPlacement.suffix:
                                                        h = c + r + o;
                                                }
                                            else h = c + r + o;
                                    } else if (this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.suffix)
                                        if (this.settings.caretPositionOnFocus === I.options.caretPositionOnFocus.start)
                                            if (this.settings.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.none && (t || (!t && this.settings.showPositiveSign && !i)))
                                                switch (this.settings.negativePositiveSignPlacement) {
                                                    case I.options.negativePositiveSignPlacement.suffix:
                                                    case I.options.negativePositiveSignPlacement.right:
                                                    case I.options.negativePositiveSignPlacement.left:
                                                        h = 0;
                                                        break;
                                                    case I.options.negativePositiveSignPlacement.prefix:
                                                        h = u;
                                                }
                                            else h = 0;
                                        else if (this.settings.caretPositionOnFocus === I.options.caretPositionOnFocus.end)
                                            if (this.settings.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.none && (t || (!t && this.settings.showPositiveSign && !i)))
                                                switch (this.settings.negativePositiveSignPlacement) {
                                                    case I.options.negativePositiveSignPlacement.suffix:
                                                    case I.options.negativePositiveSignPlacement.right:
                                                    case I.options.negativePositiveSignPlacement.left:
                                                        h = a;
                                                        break;
                                                    case I.options.negativePositiveSignPlacement.prefix:
                                                        h = u + a;
                                                }
                                            else h = a;
                                        else if (this.settings.caretPositionOnFocus === I.options.caretPositionOnFocus.decimalLeft)
                                            if (this.settings.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.none && (t || (!t && this.settings.showPositiveSign && !i)))
                                                switch (this.settings.negativePositiveSignPlacement) {
                                                    case I.options.negativePositiveSignPlacement.suffix:
                                                    case I.options.negativePositiveSignPlacement.right:
                                                    case I.options.negativePositiveSignPlacement.left:
                                                        h = r;
                                                        break;
                                                    case I.options.negativePositiveSignPlacement.prefix:
                                                        h = u + r;
                                                }
                                            else h = r;
                                        else if (this.settings.caretPositionOnFocus === I.options.caretPositionOnFocus.decimalRight)
                                            if (this.settings.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.none && (t || (!t && this.settings.showPositiveSign && !i)))
                                                switch (this.settings.negativePositiveSignPlacement) {
                                                    case I.options.negativePositiveSignPlacement.suffix:
                                                    case I.options.negativePositiveSignPlacement.right:
                                                    case I.options.negativePositiveSignPlacement.left:
                                                        h = r + o;
                                                        break;
                                                    case I.options.negativePositiveSignPlacement.prefix:
                                                        h = u + r + o;
                                                }
                                            else h = r + o;
                                    return h;
                                },
                            },
                            {
                                key: "_keepAnOriginalSettingsCopy",
                                value: function () {
                                    (this.originalDigitGroupSeparator = this.settings.digitGroupSeparator), (this.originalCurrencySymbol = this.settings.currencySymbol), (this.originalSuffixText = this.settings.suffixText);
                                },
                            },
                            {
                                key: "_trimLeadingAndTrailingZeros",
                                value: function (e) {
                                    if ("" === e || null === e) return e;
                                    if (this.settings.leadingZero !== I.options.leadingZero.keep) {
                                        if (0 === Number(e)) return "0";
                                        e = e.replace(/^(-)?0+(?=\d)/g, "$1");
                                    }
                                    return D.default.contains(e, ".") && (e = e.replace(/(\.[0-9]*?)0+$/, "$1")), e.replace(/\.$/, "");
                                },
                            },
                            {
                                key: "_setPersistentStorageName",
                                value: function () {
                                    this.settings.saveValueToSessionStorage &&
                                        ("" === this.domElement.name || D.default.isUndefined(this.domElement.name)
                                            ? (this.rawValueStorageName = "" + this.storageNamePrefix + this.domElement.id)
                                            : (this.rawValueStorageName = "" + this.storageNamePrefix + decodeURIComponent(this.domElement.name)));
                                },
                            },
                            {
                                key: "_saveValueToPersistentStorage",
                                value: function () {
                                    this.settings.saveValueToSessionStorage &&
                                        (this.sessionStorageAvailable ? sessionStorage.setItem(this.rawValueStorageName, this.rawValue) : (document.cookie = this.rawValueStorageName + "=" + this.rawValue + "; expires= ; path=/"));
                                },
                            },
                            {
                                key: "_getValueFromPersistentStorage",
                                value: function () {
                                    return this.settings.saveValueToSessionStorage
                                        ? this.sessionStorageAvailable
                                            ? sessionStorage.getItem(this.rawValueStorageName)
                                            : this.constructor._readCookie(this.rawValueStorageName)
                                        : (D.default.warning("`_getValueFromPersistentStorage()` is called but `settings.saveValueToSessionStorage` is false. There must be an error that needs fixing.", this.settings.showWarnings), null);
                                },
                            },
                            {
                                key: "_removeValueFromPersistentStorage",
                                value: function () {
                                    if (this.settings.saveValueToSessionStorage)
                                        if (this.sessionStorageAvailable) sessionStorage.removeItem(this.rawValueStorageName);
                                        else {
                                            var e = new Date();
                                            e.setTime(e.getTime() - 864e5);
                                            var t = "; expires=" + e.toUTCString();
                                            document.cookie = this.rawValueStorageName + "='' ;" + t + "; path=/";
                                        }
                                },
                            },
                            {
                                key: "_getDefaultValue",
                                value: function (e) {
                                    var t = e.getAttribute("value");
                                    return D.default.isNull(t) ? "" : t;
                                },
                            },
                            {
                                key: "_onFocusInAndMouseEnter",
                                value: function (e) {
                                    if (((this.isEditing = !1), !this.formulaMode && this.settings.unformatOnHover && "mouseenter" === e.type && e.altKey)) this.constructor._unformatAltHovered(this);
                                    else if (
                                        ("focus" === e.type && ((this.isFocused = !0), (this.rawValueOnFocus = this.rawValue)),
                                        "focus" === e.type && this.settings.unformatOnHover && this.hoveredWithAlt && this.constructor._reformatAltHovered(this),
                                        "focus" === e.type || ("mouseenter" === e.type && !this.isFocused))
                                    ) {
                                        var t = null;
                                        this.settings.emptyInputBehavior === I.options.emptyInputBehavior.focus &&
                                            this.rawValue < 0 &&
                                            null !== this.settings.negativeBracketsTypeOnBlur &&
                                            this.settings.isNegativeSignAllowed &&
                                            (t = this.constructor._removeBrackets(D.default.getElementValue(this.domElement), this.settings));
                                        var i = this._getRawValueToFormat(this.rawValue);
                                        if ("" !== i) {
                                            var n = this.constructor._roundFormattedValueShownOnFocusOrBlur(i, this.settings, this.isFocused);
                                            t =
                                                this.settings.showOnlyNumbersOnFocus === I.options.showOnlyNumbersOnFocus.onlyNumbers
                                                    ? ((this.settings.digitGroupSeparator = ""), (this.settings.currencySymbol = ""), (this.settings.suffixText = ""), n.replace(".", this.settings.decimalCharacter))
                                                    : D.default.isNull(n)
                                                    ? ""
                                                    : this.constructor._addGroupSeparators(n.replace(".", this.settings.decimalCharacter), this.settings, this.isFocused, i);
                                        }
                                        D.default.isNull(t) ? (this.valueOnFocus = "") : (this.valueOnFocus = t), (this.lastVal = this.valueOnFocus);
                                        var a = this.constructor._isElementValueEmptyOrOnlyTheNegativeSign(this.valueOnFocus, this.settings),
                                            r = this.constructor._orderValueCurrencySymbolAndSuffixText(this.valueOnFocus, this.settings, !0),
                                            s = a && "" !== r && this.settings.emptyInputBehavior === I.options.emptyInputBehavior.focus;
                                        s && (t = r),
                                            D.default.isNull(t) || this._setElementValue(t),
                                            s && r === this.settings.currencySymbol && this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.suffix && D.default.setElementSelection(e.target, 0);
                                    }
                                },
                            },
                            {
                                key: "_onFocus",
                                value: function () {
                                    this.settings.isCancellable && this._saveCancellableValue();
                                },
                            },
                            {
                                key: "_onFocusIn",
                                value: function (e) {
                                    this.settings.selectOnFocus
                                        ? this.select()
                                        : D.default.isNull(this.settings.caretPositionOnFocus) || D.default.setElementSelection(e.target, this._initialCaretPosition(D.default.getElementValue(this.domElement)));
                                },
                            },
                            {
                                key: "_enterFormulaMode",
                                value: function () {
                                    this.settings.formulaMode && ((this.formulaMode = !0), D.default.setElementValue(this.domElement, "="), D.default.setElementSelection(this.domElement, 1));
                                },
                            },
                            {
                                key: "_exitFormulaMode",
                                value: function () {
                                    var t = D.default.getElementValue(this.domElement);
                                    t = t.replace(/^\s*=/, "");
                                    var e = void 0;
                                    try {
                                        var i = new r.default(t, this.settings.decimalCharacter);
                                        e = new a.default().evaluate(i);
                                    } catch (e) {
                                        return this._triggerEvent(I.events.invalidFormula, this.domElement, { formula: t, aNElement: this }), this.reformat(), void (this.formulaMode = !1);
                                    }
                                    this._triggerEvent(I.events.validFormula, this.domElement, { formula: t, result: e, aNElement: this }), this.set(e), (this.formulaMode = !1);
                                },
                            },
                            {
                                key: "_acceptNonPrintableKeysInFormulaMode",
                                value: function () {
                                    return (
                                        this.eventKey === v.default.keyName.Backspace ||
                                        this.eventKey === v.default.keyName.Delete ||
                                        this.eventKey === v.default.keyName.LeftArrow ||
                                        this.eventKey === v.default.keyName.RightArrow ||
                                        this.eventKey === v.default.keyName.Home ||
                                        this.eventKey === v.default.keyName.End
                                    );
                                },
                            },
                            {
                                key: "_onKeydown",
                                value: function (e) {
                                    if (((this.formatted = !1), (this.isEditing = !0), this.formulaMode || this.isFocused || !this.settings.unformatOnHover || !e.altKey || this.domElement !== D.default.getHoveredElement())) {
                                        if (
                                            (this._updateEventKeyInfo(e),
                                            (this.initialValueOnKeydown = D.default.getElementValue(e.target)),
                                            (this.initialRawValueOnKeydown = this.rawValue),
                                            (this.keydownEventCounter += 1),
                                            1 === this.keydownEventCounter && (this.initialRawValueOnFirstKeydown = this.rawValue),
                                            this.formulaMode)
                                        ) {
                                            if (this.eventKey === v.default.keyName.Esc) return (this.formulaMode = !1), void this.reformat();
                                            if (this.eventKey === v.default.keyName.Enter) return void this._exitFormulaMode();
                                            if (this._acceptNonPrintableKeysInFormulaMode()) return;
                                        } else if (this.eventKey === v.default.keyName.Equal) return void this._enterFormulaMode();
                                        if (this.domElement.readOnly || this.settings.readOnly || this.domElement.disabled) this.processed = !0;
                                        else {
                                            this.eventKey === v.default.keyName.Esc &&
                                                (e.preventDefault(),
                                                this.settings.isCancellable && this.rawValue !== this.savedCancellableValue && (this.set(this.savedCancellableValue), this._triggerEvent(I.events.native.input, e.target)),
                                                this.select());
                                            var t = D.default.getElementValue(e.target);
                                            this.eventKey === v.default.keyName.Enter &&
                                                this.rawValue !== this.rawValueOnFocus &&
                                                (this._triggerEvent(I.events.native.change, e.target), (this.valueOnFocus = t), (this.rawValueOnFocus = this.rawValue), this.settings.isCancellable && this._saveCancellableValue()),
                                                this._updateInternalProperties(e),
                                                this._processNonPrintableKeysAndShortcuts(e)
                                                    ? (this.processed = !0)
                                                    : (this.eventKey !== v.default.keyName.Backspace && this.eventKey !== v.default.keyName.Delete) ||
                                                      (this._processCharacterDeletion(),
                                                      (this.processed = !0),
                                                      this._formatValue(e),
                                                      (t = D.default.getElementValue(e.target)) !== this.lastVal && this.throwInput && (this._triggerEvent(I.events.native.input, e.target), e.preventDefault()),
                                                      (this.lastVal = t),
                                                      (this.throwInput = !0));
                                        }
                                    } else this.constructor._unformatAltHovered(this);
                                },
                            },
                            {
                                key: "_onKeypress",
                                value: function (e) {
                                    if (this.formulaMode) {
                                        if (this._acceptNonPrintableKeysInFormulaMode()) return;
                                        if (this.settings.formulaChars.test(this.eventKey)) return;
                                        e.preventDefault();
                                    } else if (this.eventKey !== v.default.keyName.Insert) {
                                        var t = this.processed;
                                        if ((this._updateInternalProperties(e), !this._processNonPrintableKeysAndShortcuts(e)))
                                            if (t) e.preventDefault();
                                            else {
                                                if (this._processCharacterInsertion()) {
                                                    this._formatValue(e);
                                                    var i = D.default.getElementValue(e.target);
                                                    if (i !== this.lastVal && this.throwInput) this._triggerEvent(I.events.native.input, e.target), e.preventDefault();
                                                    else {
                                                        if (
                                                            (this.eventKey === this.settings.decimalCharacter || this.eventKey === this.settings.decimalCharacterAlternative) &&
                                                            D.default.getElementSelection(e.target).start === D.default.getElementSelection(e.target).end &&
                                                            D.default.getElementSelection(e.target).start === i.indexOf(this.settings.decimalCharacter)
                                                        ) {
                                                            var n = D.default.getElementSelection(e.target).start + 1;
                                                            D.default.setElementSelection(e.target, n);
                                                        }
                                                        e.preventDefault();
                                                    }
                                                    return (this.lastVal = D.default.getElementValue(e.target)), void (this.throwInput = !0);
                                                }
                                                e.preventDefault();
                                            }
                                    }
                                },
                            },
                            {
                                key: "_onKeyup",
                                value: function (e) {
                                    this.isEditing = !1;
                                    var t = 1 < this.keydownEventCounter;
                                    if (((this.keydownEventCounter = 0), !this.formulaMode))
                                        if (this.settings.isCancellable && this.eventKey === v.default.keyName.Esc) e.preventDefault();
                                        else {
                                            if (this.eventKey === v.default.keyName.Z || this.eventKey === v.default.keyName.z) {
                                                if (e.ctrlKey && e.shiftKey) return e.preventDefault(), this._historyTableRedo(), void (this.onGoingRedo = !0);
                                                if (e.ctrlKey && !e.shiftKey) {
                                                    if (!this.onGoingRedo) return e.preventDefault(), void this._historyTableUndo();
                                                    this.onGoingRedo = !1;
                                                }
                                            }
                                            if ((this.onGoingRedo && (e.ctrlKey || e.shiftKey) && (this.onGoingRedo = !1), (e.ctrlKey || e.metaKey) && this.eventKey === v.default.keyName.x)) {
                                                var i = D.default.getElementSelection(this.domElement).start,
                                                    n = this.constructor._toNumericValue(D.default.getElementValue(e.target), this.settings);
                                                this.set(n), this._setCaretPosition(i);
                                            }
                                            if (this.eventKey === v.default.keyName.Alt && this.settings.unformatOnHover && this.hoveredWithAlt) this.constructor._reformatAltHovered(this);
                                            else {
                                                this._updateInternalProperties(e);
                                                var a = this._processNonPrintableKeysAndShortcuts(e);
                                                delete this.valuePartsBeforePaste;
                                                var r = D.default.getElementValue(e.target);
                                                if (
                                                    !a &&
                                                    (t || "" !== r) &&
                                                    (r === this.settings.currencySymbol
                                                        ? this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.suffix
                                                            ? D.default.setElementSelection(e.target, 0)
                                                            : D.default.setElementSelection(e.target, this.settings.currencySymbol.length)
                                                        : this.eventKey === v.default.keyName.Tab && D.default.setElementSelection(e.target, 0, r.length),
                                                    (r === this.settings.suffixText || ("" === this.rawValue && "" !== this.settings.currencySymbol && "" !== this.settings.suffixText)) && D.default.setElementSelection(e.target, 0),
                                                    null !== this.settings.decimalPlacesShownOnFocus && this._saveValueToPersistentStorage(),
                                                    this.formatted || this._formatValue(e),
                                                    this._saveRawValueForAndroid(),
                                                    ((t && r !== this.initialRawValueOnFirstKeydown) || r !== this.initialValueOnKeydown) &&
                                                        this._triggerEvent(I.events.formatted, e.target, {
                                                            oldValue: this.initialValueOnKeydown,
                                                            newValue: r,
                                                            oldRawValue: this.initialRawValueOnKeydown,
                                                            newRawValue: this.rawValue,
                                                            isPristine: this.isPristine(!1),
                                                            error: null,
                                                            aNElement: this,
                                                        }),
                                                    1 < this.historyTable.length)
                                                ) {
                                                    var s = D.default.getElementSelection(this.domElement);
                                                    (this.selectionStart = s.start),
                                                        (this.selectionEnd = s.end),
                                                        (this.historyTable[this.historyTableIndex].start = this.selectionStart),
                                                        (this.historyTable[this.historyTableIndex].end = this.selectionEnd);
                                                }
                                            }
                                        }
                                },
                            },
                            {
                                key: "_saveRawValueForAndroid",
                                value: function () {
                                    if (this.eventKey === v.default.keyName.AndroidDefault) {
                                        var e = this.constructor._stripAllNonNumberCharactersExceptCustomDecimalChar(this.getFormatted(), this.settings, !0, this.isFocused);
                                        (e = this.constructor._convertToNumericString(e, this.settings)), this._setRawValue(e);
                                    }
                                },
                            },
                            {
                                key: "_onFocusOutAndMouseLeave",
                                value: function (e) {
                                    if (((this.isEditing = !1), "mouseleave" !== e.type || !this.formulaMode))
                                        if (this.settings.unformatOnHover && "mouseleave" === e.type && this.hoveredWithAlt) this.constructor._reformatAltHovered(this);
                                        else if (("mouseleave" === e.type && !this.isFocused) || "blur" === e.type) {
                                            "blur" === e.type && this.formulaMode && this._exitFormulaMode(),
                                                this._saveValueToPersistentStorage(),
                                                this.settings.showOnlyNumbersOnFocus === I.options.showOnlyNumbersOnFocus.onlyNumbers &&
                                                    ((this.settings.digitGroupSeparator = this.originalDigitGroupSeparator),
                                                    (this.settings.currencySymbol = this.originalCurrencySymbol),
                                                    (this.settings.suffixText = this.originalSuffixText));
                                            var t = this._getRawValueToFormat(this.rawValue),
                                                i = D.default.isNull(t),
                                                n = this.constructor._checkIfInRangeWithOverrideOption(t, this.settings),
                                                a = S(n, 2),
                                                r = a[0],
                                                s = a[1],
                                                o = !1;
                                            if (
                                                ("" === t ||
                                                    i ||
                                                    (r || this._triggerEvent(I.events.minRangeExceeded, this.domElement),
                                                    s || this._triggerEvent(I.events.maxRangeExceeded, this.domElement),
                                                    this.settings.valuesToStrings && this._checkValuesToStrings(t) && (this._setElementValue(this.settings.valuesToStrings[t]), (o = !0))),
                                                !o)
                                            ) {
                                                var l = void 0;
                                                if (((l = i || "" === t ? t : String(t)), "" === t || i)) {
                                                    if ("" === t)
                                                        switch (this.settings.emptyInputBehavior) {
                                                            case I.options.emptyInputBehavior.zero:
                                                                this._setRawValue("0"), (l = this.constructor._roundValue("0", this.settings, 0));
                                                                break;
                                                            case I.options.emptyInputBehavior.min:
                                                                this._setRawValue(this.settings.minimumValue), (l = this.constructor._roundFormattedValueShownOnFocusOrBlur(this.settings.minimumValue, this.settings, this.isFocused));
                                                                break;
                                                            case I.options.emptyInputBehavior.max:
                                                                this._setRawValue(this.settings.maximumValue), (l = this.constructor._roundFormattedValueShownOnFocusOrBlur(this.settings.maximumValue, this.settings, this.isFocused));
                                                                break;
                                                            default:
                                                                D.default.isNumber(this.settings.emptyInputBehavior) &&
                                                                    (this._setRawValue(this.settings.emptyInputBehavior),
                                                                    (l = this.constructor._roundFormattedValueShownOnFocusOrBlur(this.settings.emptyInputBehavior, this.settings, this.isFocused)));
                                                        }
                                                } else
                                                    r && s && !this.constructor._isElementValueEmptyOrOnlyTheNegativeSign(t, this.settings)
                                                        ? ((l = this._modifyNegativeSignAndDecimalCharacterForRawValue(l)),
                                                          this.settings.divisorWhenUnfocused && !D.default.isNull(l) && (l = (l /= this.settings.divisorWhenUnfocused).toString()),
                                                          (l = this.constructor._roundFormattedValueShownOnBlur(l, this.settings)),
                                                          (l = this.constructor._modifyNegativeSignAndDecimalCharacterForFormattedValue(l, this.settings)))
                                                        : (r || this._triggerEvent(I.events.minRangeExceeded, this.domElement), s || this._triggerEvent(I.events.maxRangeExceeded, this.domElement));
                                                var u = this.constructor._orderValueCurrencySymbolAndSuffixText(l, this.settings, !1);
                                                this.constructor._isElementValueEmptyOrOnlyTheNegativeSign(l, this.settings) ||
                                                    (i && this.settings.emptyInputBehavior === I.options.emptyInputBehavior.null) ||
                                                    (u = this.constructor._addGroupSeparators(l, this.settings, !1, t)),
                                                    (u === t && "" !== t && this.settings.allowDecimalPadding !== I.options.allowDecimalPadding.never && this.settings.allowDecimalPadding !== I.options.allowDecimalPadding.floats) ||
                                                        (this.settings.symbolWhenUnfocused && "" !== t && null !== t && (u = "" + u + this.settings.symbolWhenUnfocused), this._setElementValue(u));
                                            }
                                            "blur" === e.type && this._onBlur(e);
                                        }
                                },
                            },
                            {
                                key: "_onPaste",
                                value: function (e) {
                                    if ((e.preventDefault(), !(this.settings.readOnly || this.domElement.readOnly || this.domElement.disabled))) {
                                        var t,
                                            i = void 0;
                                        window.clipboardData && window.clipboardData.getData
                                            ? (i = window.clipboardData.getData("Text"))
                                            : e.clipboardData && e.clipboardData.getData
                                            ? (i = e.clipboardData.getData("text/plain"))
                                            : D.default.throwError("Unable to retrieve the pasted value. Please use a modern browser (ie. Firefox or Chromium)."),
                                            (t = e.target.tagName ? e.target : e.explicitOriginalTarget);
                                        var n = D.default.getElementValue(t),
                                            a = t.selectionStart || 0,
                                            r = t.selectionEnd || 0,
                                            s = r - a;
                                        if (s === n.length) {
                                            var o = this._preparePastedText(i),
                                                l = D.default.arabicToLatinNumbers(o, !1, !1, !1);
                                            return "." === l || "" === l || ("." !== l && !D.default.isNumber(l))
                                                ? ((this.formatted = !0), void (this.settings.onInvalidPaste === I.options.onInvalidPaste.error && D.default.throwError("The pasted value '" + i + "' is not a valid paste content.")))
                                                : (this.set(l), (this.formatted = !0), void this._triggerEvent(I.events.native.input, t));
                                        }
                                        var u = D.default.isNegativeStrict(i, this.settings.negativeSignCharacter);
                                        u && (i = i.slice(1, i.length));
                                        var c,
                                            h = this._preparePastedText(i);
                                        if ("." !== (c = "." === h ? "." : D.default.arabicToLatinNumbers(h, !1, !1, !1)) && (!D.default.isNumber(c) || "" === c))
                                            return (this.formatted = !0), void (this.settings.onInvalidPaste === I.options.onInvalidPaste.error && D.default.throwError("The pasted value '" + i + "' is not a valid paste content."));
                                        var d,
                                            m = void 0,
                                            f = D.default.isNegativeStrict(this.getNumericString(), this.settings.negativeSignCharacter),
                                            g = void 0;
                                        d = !(!u || f) && (f = !0);
                                        var v = n.slice(0, a),
                                            p = n.slice(r, n.length);
                                        (g = a !== r ? this._preparePastedText(v + p) : this._preparePastedText(n)),
                                            f && (g = D.default.setRawNegativeSign(g)),
                                            (m = D.default.convertCharacterCountToIndexPosition(D.default.countNumberCharactersOnTheCaretLeftSide(n, a, this.settings.decimalCharacter))),
                                            d && m++;
                                        var y = g.slice(0, m),
                                            S = g.slice(m, g.length),
                                            b = !1;
                                        "." === c && (D.default.contains(y, ".") && ((b = !0), (y = y.replace(".", ""))), (S = S.replace(".", "")));
                                        var w = !1;
                                        switch (("" === y && "-" === S && ((y = "-"), (w = !(S = ""))), this.settings.onInvalidPaste)) {
                                            case I.options.onInvalidPaste.truncate:
                                            case I.options.onInvalidPaste.replace:
                                                for (
                                                    var P = D.default.parseStr(this.settings.minimumValue), O = D.default.parseStr(this.settings.maximumValue), k = g, N = 0, E = y;
                                                    N < c.length && ((g = (E += c[N]) + S), this.constructor._checkIfInRange(g, P, O));

                                                )
                                                    (k = g), N++;
                                                if (((m += N), w && m++, this.settings.onInvalidPaste === I.options.onInvalidPaste.truncate)) {
                                                    (g = k), b && m--;
                                                    break;
                                                }
                                                for (var _ = m, C = k.length; N < c.length && _ < C; )
                                                    if ("." !== k[_]) {
                                                        if (((g = D.default.replaceCharAt(k, _, c[N])), !this.constructor._checkIfInRange(g, P, O))) break;
                                                        (k = g), N++, _++;
                                                    } else _++;
                                                (m = _), b && m--, (g = k);
                                                break;
                                            case I.options.onInvalidPaste.error:
                                            case I.options.onInvalidPaste.ignore:
                                            case I.options.onInvalidPaste.clamp:
                                            default:
                                                if (((g = "" + y + c + S), a === r)) m = D.default.convertCharacterCountToIndexPosition(D.default.countNumberCharactersOnTheCaretLeftSide(n, a, this.settings.decimalCharacter)) + c.length;
                                                else if ("" === S) (m = D.default.convertCharacterCountToIndexPosition(D.default.countNumberCharactersOnTheCaretLeftSide(n, a, this.settings.decimalCharacter)) + c.length), w && m++;
                                                else {
                                                    var F = D.default.convertCharacterCountToIndexPosition(D.default.countNumberCharactersOnTheCaretLeftSide(n, r, this.settings.decimalCharacter)),
                                                        x = D.default.getElementValue(t).slice(a, r);
                                                    m = F - s + D.default.countCharInText(this.settings.digitGroupSeparator, x) + c.length;
                                                }
                                                d && m++, b && m--;
                                        }
                                        if (D.default.isNumber(g) && "" !== g) {
                                            var V = !1,
                                                T = !1;
                                            try {
                                                this.set(g), (V = !0);
                                            } catch (e) {
                                                var A = void 0;
                                                switch (this.settings.onInvalidPaste) {
                                                    case I.options.onInvalidPaste.clamp:
                                                        A = D.default.clampToRangeLimits(g, this.settings);
                                                        try {
                                                            this.set(A);
                                                        } catch (e) {
                                                            D.default.throwError("Fatal error: Unable to set the clamped value '" + A + "'.");
                                                        }
                                                        (V = T = !0), (g = A);
                                                        break;
                                                    case I.options.onInvalidPaste.error:
                                                    case I.options.onInvalidPaste.truncate:
                                                    case I.options.onInvalidPaste.replace:
                                                        D.default.throwError(
                                                            "The pasted value '" +
                                                                i +
                                                                "' results in a value '" +
                                                                g +
                                                                "' that is outside of the minimum [" +
                                                                this.settings.minimumValue +
                                                                "] and maximum [" +
                                                                this.settings.maximumValue +
                                                                "] value range."
                                                        );
                                                    case I.options.onInvalidPaste.ignore:
                                                    default:
                                                        return;
                                                }
                                            }
                                            var L = D.default.getElementValue(t),
                                                B = void 0;
                                            if (V)
                                                switch (this.settings.onInvalidPaste) {
                                                    case I.options.onInvalidPaste.clamp:
                                                        if (T) {
                                                            this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.suffix
                                                                ? D.default.setElementSelection(t, L.length - this.settings.currencySymbol.length)
                                                                : D.default.setElementSelection(t, L.length);
                                                            break;
                                                        }
                                                    case I.options.onInvalidPaste.error:
                                                    case I.options.onInvalidPaste.ignore:
                                                    case I.options.onInvalidPaste.truncate:
                                                    case I.options.onInvalidPaste.replace:
                                                    default:
                                                        (B = D.default.findCaretPositionInFormattedNumber(g, m, L, this.settings.decimalCharacter)), D.default.setElementSelection(t, B);
                                                }
                                            V && n !== L && this._triggerEvent(I.events.native.input, t);
                                        } else this.settings.onInvalidPaste === I.options.onInvalidPaste.error && D.default.throwError("The pasted value '" + i + "' would result into an invalid content '" + g + "'.");
                                    }
                                },
                            },
                            {
                                key: "_onBlur",
                                value: function (e) {
                                    (this.isFocused = !1), (this.isEditing = !1), this.rawValue !== this.rawValueOnFocus && this._triggerEvent(I.events.native.change, e.target), (this.rawValueOnFocus = void 0);
                                },
                            },
                            {
                                key: "_onWheel",
                                value: function (e) {
                                    this.formulaMode ||
                                        this.settings.readOnly ||
                                        this.domElement.readOnly ||
                                        this.domElement.disabled ||
                                        (this.settings.modifyValueOnWheel &&
                                            (this.settings.wheelOn === I.options.wheelOn.focus
                                                ? this.isFocused
                                                    ? e.shiftKey || this.wheelAction(e)
                                                    : e.shiftKey && this.wheelAction(e)
                                                : this.settings.wheelOn === I.options.wheelOn.hover
                                                ? e.shiftKey
                                                    ? (e.preventDefault(), window.scrollBy(0, D.default.isNegativeStrict(String(e.deltaY)) ? -50 : 50))
                                                    : this.wheelAction(e)
                                                : D.default.throwError("Unknown `wheelOn` option.")));
                                },
                            },
                            {
                                key: "wheelAction",
                                value: function (e) {
                                    this.isWheelEvent = !0;
                                    var t = e.target.selectionStart || 0,
                                        i = e.target.selectionEnd || 0,
                                        n = this.rawValue,
                                        a = void 0;
                                    if (
                                        (D.default.isUndefinedOrNullOrEmpty(n)
                                            ? 0 < this.settings.minimumValue || this.settings.maximumValue < 0
                                                ? D.default.isWheelUpEvent(e)
                                                    ? (a = this.settings.minimumValue)
                                                    : D.default.isWheelDownEvent(e)
                                                    ? (a = this.settings.maximumValue)
                                                    : D.default.throwError("The event is not a 'wheel' event.")
                                                : (a = 0)
                                            : (a = n),
                                        (a = +a),
                                        D.default.isNumber(this.settings.wheelStep))
                                    ) {
                                        var r = +this.settings.wheelStep;
                                        D.default.isWheelUpEvent(e) ? (a += r) : D.default.isWheelDownEvent(e) && (a -= r);
                                    } else
                                        D.default.isWheelUpEvent(e)
                                            ? (a = D.default.addAndRoundToNearestAuto(a, this.settings.decimalPlacesRawValue))
                                            : D.default.isWheelDownEvent(e) && (a = D.default.subtractAndRoundToNearestAuto(a, this.settings.decimalPlacesRawValue));
                                    (a = D.default.clampToRangeLimits(a, this.settings)) !== +n && (this.set(a), this._triggerEvent(I.events.native.input, e.target)), e.preventDefault(), this._setSelection(t, i), (this.isWheelEvent = !1);
                                },
                            },
                            {
                                key: "_onDrop",
                                value: function (e) {
                                    if (!this.formulaMode) {
                                        var t;
                                        (this.isDropEvent = !0), e.preventDefault(), (t = D.default.isIE11() ? "text" : "text/plain");
                                        var i = e.dataTransfer.getData(t),
                                            n = this.unformatOther(i);
                                        this.set(n), (this.isDropEvent = !1);
                                    }
                                },
                            },
                            {
                                key: "_onFormSubmit",
                                value: function () {
                                    var t = this;
                                    return (
                                        this._getFormAutoNumericChildren(this.parentForm)
                                            .map(function (e) {
                                                return t.constructor.getAutoNumericElement(e);
                                            })
                                            .forEach(function (e) {
                                                return e._unformatOnSubmit();
                                            }),
                                        !0
                                    );
                                },
                            },
                            {
                                key: "_onFormReset",
                                value: function () {
                                    var i = this;
                                    this._getFormAutoNumericChildren(this.parentForm)
                                        .map(function (e) {
                                            return i.constructor.getAutoNumericElement(e);
                                        })
                                        .forEach(function (e) {
                                            var t = i._getDefaultValue(e.node());
                                            setTimeout(function () {
                                                return e.set(t);
                                            }, 0);
                                        });
                                },
                            },
                            {
                                key: "_unformatOnSubmit",
                                value: function () {
                                    this.settings.unformatOnSubmit && this._setElementValue(this.rawValue);
                                },
                            },
                            {
                                key: "_onKeydownGlobal",
                                value: function (e) {
                                    if (D.default.character(e) === v.default.keyName.Alt) {
                                        var t = D.default.getHoveredElement();
                                        if (I.isManagedByAutoNumeric(t)) {
                                            var i = I.getAutoNumericElement(t);
                                            !i.formulaMode && i.settings.unformatOnHover && this.constructor._unformatAltHovered(i);
                                        }
                                    }
                                },
                            },
                            {
                                key: "_onKeyupGlobal",
                                value: function (e) {
                                    if (D.default.character(e) === v.default.keyName.Alt) {
                                        var t = D.default.getHoveredElement();
                                        if (I.isManagedByAutoNumeric(t)) {
                                            var i = I.getAutoNumericElement(t);
                                            if (i.formulaMode || !i.settings.unformatOnHover) return;
                                            this.constructor._reformatAltHovered(i);
                                        }
                                    }
                                },
                            },
                            {
                                key: "_isElementTagSupported",
                                value: function () {
                                    return (
                                        D.default.isElement(this.domElement) || D.default.throwError("The DOM element is not valid, " + this.domElement + " given."),
                                        D.default.isInArray(this.domElement.tagName.toLowerCase(), this.allowedTagList)
                                    );
                                },
                            },
                            {
                                key: "_isInputElement",
                                value: function () {
                                    return "input" === this.domElement.tagName.toLowerCase();
                                },
                            },
                            {
                                key: "_isInputTypeSupported",
                                value: function () {
                                    return "text" === this.domElement.type || "hidden" === this.domElement.type || "tel" === this.domElement.type || D.default.isUndefinedOrNullOrEmpty(this.domElement.type);
                                },
                            },
                            {
                                key: "_checkElement",
                                value: function () {
                                    var e = this.domElement.tagName.toLowerCase();
                                    this._isElementTagSupported() || D.default.throwError("The <" + e + "> tag is not supported by autoNumeric"),
                                        this._isInputElement()
                                            ? (this._isInputTypeSupported() || D.default.throwError('The input type "' + this.domElement.type + '" is not supported by autoNumeric'), (this.isInputElement = !0))
                                            : ((this.isInputElement = !1), (this.isContentEditable = this.domElement.hasAttribute("contenteditable") && "true" === this.domElement.getAttribute("contenteditable")));
                                },
                            },
                            {
                                key: "_formatDefaultValueOnPageLoad",
                                value: function () {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                                        t = !0,
                                        i = void 0;
                                    if ((D.default.isNull(e) ? ((i = D.default.getElementValue(this.domElement).trim()), this.domElement.setAttribute("value", i)) : (i = e), this.isInputElement || this.isContentEditable)) {
                                        var n = this.constructor._toNumericValue(i, this.settings);
                                        if (this.domElement.hasAttribute("value") && "" !== this.domElement.getAttribute("value")) {
                                            if (
                                                (null !== this.settings.defaultValueOverride && this.settings.defaultValueOverride.toString() !== i) ||
                                                (null === this.settings.defaultValueOverride && "" !== i && i !== this.domElement.getAttribute("value")) ||
                                                ("" !== i && "hidden" === this.domElement.getAttribute("type") && !D.default.isNumber(n))
                                            ) {
                                                if (
                                                    (this.settings.saveValueToSessionStorage &&
                                                        (null !== this.settings.decimalPlacesShownOnFocus || this.settings.divisorWhenUnfocused) &&
                                                        this._setRawValue(this._getValueFromPersistentStorage()),
                                                    !this.settings.saveValueToSessionStorage)
                                                ) {
                                                    var a = this.constructor._removeBrackets(i, this.settings);
                                                    (this.settings.negativePositiveSignPlacement === I.options.negativePositiveSignPlacement.suffix ||
                                                        (this.settings.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.prefix &&
                                                            this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.suffix)) &&
                                                    "" !== this.settings.negativeSignCharacter &&
                                                    D.default.isNegative(i, this.settings.negativeSignCharacter)
                                                        ? this._setRawValue("-" + this.constructor._stripAllNonNumberCharacters(a, this.settings, !0, this.isFocused))
                                                        : this._setRawValue(this.constructor._stripAllNonNumberCharacters(a, this.settings, !0, this.isFocused));
                                                }
                                                t = !1;
                                            }
                                        } else isNaN(Number(n)) || 1 / 0 === n ? D.default.throwError("The value [" + i + "] used in the input is not a valid value autoNumeric can work with.") : (this.set(n), (t = !1));
                                        if ("" === i)
                                            switch (this.settings.emptyInputBehavior) {
                                                case I.options.emptyInputBehavior.focus:
                                                case I.options.emptyInputBehavior.null:
                                                case I.options.emptyInputBehavior.press:
                                                    break;
                                                case I.options.emptyInputBehavior.always:
                                                    this._setElementValue(this.settings.currencySymbol);
                                                    break;
                                                case I.options.emptyInputBehavior.min:
                                                    this.set(this.settings.minimumValue);
                                                    break;
                                                case I.options.emptyInputBehavior.max:
                                                    this.set(this.settings.maximumValue);
                                                    break;
                                                case I.options.emptyInputBehavior.zero:
                                                    this.set("0");
                                                    break;
                                                default:
                                                    this.set(this.settings.emptyInputBehavior);
                                            }
                                        else t && i === this.domElement.getAttribute("value") && this.set(i);
                                    } else (null !== this.settings.defaultValueOverride && this.settings.defaultValueOverride !== i) || this.set(i);
                                },
                            },
                            {
                                key: "_calculateVMinAndVMaxIntegerSizes",
                                value: function () {
                                    var e = this.settings.maximumValue.toString().split("."),
                                        t = S(e, 1)[0],
                                        i = this.settings.minimumValue || 0 === this.settings.minimumValue ? this.settings.minimumValue.toString().split(".") : [],
                                        n = S(i, 1)[0];
                                    (t = t.replace(this.settings.negativeSignCharacter, "")),
                                        (n = n.replace(this.settings.negativeSignCharacter, "")),
                                        (this.settings.mIntPos = Math.max(t.length, 1)),
                                        (this.settings.mIntNeg = Math.max(n.length, 1));
                                },
                            },
                            {
                                key: "_calculateValuesToStringsKeys",
                                value: function () {
                                    this.settings.valuesToStrings ? (this.valuesToStringsKeys = Object.keys(this.settings.valuesToStrings)) : (this.valuesToStringsKeys = []);
                                },
                            },
                            {
                                key: "_transformOptionsValuesToDefaultTypes",
                                value: function () {
                                    for (var e in this.settings)
                                        if (this.settings.hasOwnProperty(e)) {
                                            var t = this.settings[e];
                                            ("true" !== t && "false" !== t) || (this.settings[e] = "true" === t), "number" == typeof t && (this.settings[e] = t.toString());
                                        }
                                },
                            },
                            {
                                key: "_setSettings",
                                value: function (e) {
                                    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                                    (!t && D.default.isNull(e)) || this.constructor._convertOldOptionsToNewOnes(e),
                                        t
                                            ? ("decimalPlacesRawValue" in e && (this.settings.originalDecimalPlacesRawValue = e.decimalPlacesRawValue),
                                              "decimalPlaces" in e && (this.settings.originalDecimalPlaces = e.decimalPlaces),
                                              this.constructor._calculateDecimalPlacesOnUpdate(e, this.settings),
                                              this._mergeSettings(e))
                                            : ((this.settings = {}),
                                              this._mergeSettings(this.constructor.getDefaultConfig(), this.domElement.dataset, e, { rawValue: this.defaultRawValue }),
                                              (this.caretFix = !1),
                                              (this.throwInput = !0),
                                              (this.allowedTagList = v.default.allowedTagList),
                                              (this.runOnce = !1),
                                              (this.hoveredWithAlt = !1)),
                                        this._transformOptionsValuesToDefaultTypes(),
                                        this._runCallbacksFoundInTheSettingsObject(),
                                        this.constructor._correctNegativePositiveSignPlacementOption(this.settings),
                                        this.constructor._correctCaretPositionOnFocusAndSelectOnFocusOptions(this.settings),
                                        this.constructor._setNegativePositiveSignPermissions(this.settings),
                                        t ||
                                            (D.default.isNull(e) || !e.decimalPlaces ? (this.settings.originalDecimalPlaces = null) : (this.settings.originalDecimalPlaces = e.decimalPlaces),
                                            (this.settings.originalDecimalPlacesRawValue = this.settings.decimalPlacesRawValue),
                                            this.constructor._calculateDecimalPlacesOnInit(this.settings)),
                                        this._calculateVMinAndVMaxIntegerSizes(),
                                        this._setTrailingNegativeSignInfo(),
                                        (this.regex = {}),
                                        this.constructor._cachesUsualRegularExpressions(this.settings, this.regex),
                                        this.constructor._setBrackets(this.settings),
                                        this._calculateValuesToStringsKeys(),
                                        D.default.isEmptyObj(this.settings) && D.default.throwError("Unable to set the settings, those are invalid ; an empty object was given."),
                                        this.constructor.validate(this.settings, !1, e),
                                        this._keepAnOriginalSettingsCopy();
                                },
                            },
                            {
                                key: "_preparePastedText",
                                value: function (e) {
                                    return this.constructor._stripAllNonNumberCharacters(e, this.settings, !0, this.isFocused);
                                },
                            },
                            {
                                key: "_updateInternalProperties",
                                value: function () {
                                    (this.selection = D.default.getElementSelection(this.domElement)), (this.processed = !1);
                                },
                            },
                            {
                                key: "_updateEventKeyInfo",
                                value: function (e) {
                                    this.eventKey = D.default.character(e);
                                },
                            },
                            {
                                key: "_saveCancellableValue",
                                value: function () {
                                    this.savedCancellableValue = this.rawValue;
                                },
                            },
                            {
                                key: "_setSelection",
                                value: function (e, t) {
                                    (e = Math.max(e, 0)), (t = Math.min(t, D.default.getElementValue(this.domElement).length)), (this.selection = { start: e, end: t, length: t - e }), D.default.setElementSelection(this.domElement, e, t);
                                },
                            },
                            {
                                key: "_setCaretPosition",
                                value: function (e) {
                                    this._setSelection(e, e);
                                },
                            },
                            {
                                key: "_getLeftAndRightPartAroundTheSelection",
                                value: function () {
                                    var e = D.default.getElementValue(this.domElement);
                                    return [e.substring(0, this.selection.start), e.substring(this.selection.end, e.length)];
                                },
                            },
                            {
                                key: "_getUnformattedLeftAndRightPartAroundTheSelection",
                                value: function () {
                                    var e = this._getLeftAndRightPartAroundTheSelection(),
                                        t = S(e, 2),
                                        i = t[0],
                                        n = t[1];
                                    if ("" === i && "" === n) return ["", ""];
                                    var a = !0;
                                    return (
                                        (this.eventKey !== v.default.keyName.Hyphen && this.eventKey !== v.default.keyName.Minus) || 0 !== Number(i) || (a = !1),
                                        this.isTrailingNegative &&
                                            ((D.default.isNegative(n, this.settings.negativeSignCharacter) && !D.default.isNegative(i, this.settings.negativeSignCharacter)) ||
                                                ("" === n && D.default.isNegative(i, this.settings.negativeSignCharacter, !0))) &&
                                            ((i = i.replace(this.settings.negativeSignCharacter, "")), (n = n.replace(this.settings.negativeSignCharacter, "")), (i = i.replace("-", "")), (n = n.replace("-", "")), (i = "-" + i)),
                                        [(i = I._stripAllNonNumberCharactersExceptCustomDecimalChar(i, this.settings, a, this.isFocused)), (n = I._stripAllNonNumberCharactersExceptCustomDecimalChar(n, this.settings, !1, this.isFocused))]
                                    );
                                },
                            },
                            {
                                key: "_normalizeParts",
                                value: function (e, t) {
                                    var i = !0;
                                    (this.eventKey !== v.default.keyName.Hyphen && this.eventKey !== v.default.keyName.Minus) || 0 !== Number(e) || (i = !1),
                                        this.isTrailingNegative &&
                                            D.default.isNegative(t, this.settings.negativeSignCharacter) &&
                                            !D.default.isNegative(e, this.settings.negativeSignCharacter) &&
                                            ((e = "-" + e), (t = t.replace(this.settings.negativeSignCharacter, ""))),
                                        (e = I._stripAllNonNumberCharactersExceptCustomDecimalChar(e, this.settings, i, this.isFocused)),
                                        (t = I._stripAllNonNumberCharactersExceptCustomDecimalChar(t, this.settings, !1, this.isFocused)),
                                        this.settings.leadingZero !== I.options.leadingZero.deny ||
                                            (this.eventKey !== v.default.keyName.num0 && this.eventKey !== v.default.keyName.numpad0) ||
                                            0 !== Number(e) ||
                                            D.default.contains(e, this.settings.decimalCharacter) ||
                                            "" === t ||
                                            (e = e.substring(0, e.length - 1));
                                    var n = e + t;
                                    if (this.settings.decimalCharacter) {
                                        var a = n.match(new RegExp("^" + this.regex.aNegRegAutoStrip + "\\" + this.settings.decimalCharacter));
                                        a && (n = (e = e.replace(a[1], a[1] + "0")) + t);
                                    }
                                    return [e, t, n];
                                },
                            },
                            {
                                key: "_setValueParts",
                                value: function (e, t) {
                                    var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                                        n = this._normalizeParts(e, t),
                                        a = S(n, 3),
                                        r = a[0],
                                        s = a[1],
                                        o = a[2],
                                        l = I._checkIfInRangeWithOverrideOption(o, this.settings),
                                        u = S(l, 2),
                                        c = u[0],
                                        h = u[1];
                                    if (c && h) {
                                        var d = I._truncateDecimalPlaces(o, this.settings, i, this.settings.decimalPlacesRawValue).replace(this.settings.decimalCharacter, ".");
                                        if ("" === d || d === this.settings.negativeSignCharacter) {
                                            var m = void 0;
                                            switch (this.settings.emptyInputBehavior) {
                                                case I.options.emptyInputBehavior.focus:
                                                case I.options.emptyInputBehavior.press:
                                                case I.options.emptyInputBehavior.always:
                                                    m = "";
                                                    break;
                                                case I.options.emptyInputBehavior.min:
                                                    m = this.settings.minimumValue;
                                                    break;
                                                case I.options.emptyInputBehavior.max:
                                                    m = this.settings.maximumValue;
                                                    break;
                                                case I.options.emptyInputBehavior.zero:
                                                    m = "0";
                                                    break;
                                                case I.options.emptyInputBehavior.null:
                                                    m = null;
                                                    break;
                                                default:
                                                    m = this.settings.emptyInputBehavior;
                                            }
                                            this._setRawValue(m);
                                        } else this._setRawValue(this._trimLeadingAndTrailingZeros(d));
                                        var f = I._truncateDecimalPlaces(o, this.settings, i, this.settings.decimalPlacesShownOnFocus),
                                            g = r.length;
                                        return (
                                            g > f.length && (g = f.length),
                                            1 === g && "0" === r && this.settings.leadingZero === I.options.leadingZero.deny && (g = "" === s || ("0" === r && "" !== s) ? 1 : 0),
                                            this._setElementValue(f, !1),
                                            this._setCaretPosition(g),
                                            !0
                                        );
                                    }
                                    return c ? h || this._triggerEvent(I.events.maxRangeExceeded, this.domElement) : this._triggerEvent(I.events.minRangeExceeded, this.domElement), !1;
                                },
                            },
                            {
                                key: "_getSignPosition",
                                value: function () {
                                    var e = void 0;
                                    if (this.settings.currencySymbol) {
                                        var t = this.settings.currencySymbol.length,
                                            i = D.default.getElementValue(this.domElement);
                                        if (this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.prefix)
                                            e = this.settings.negativeSignCharacter && i && i.charAt(0) === this.settings.negativeSignCharacter ? [1, t + 1] : [0, t];
                                        else {
                                            var n = i.length;
                                            e = [n - t, n];
                                        }
                                    } else e = [1e3, -1];
                                    return e;
                                },
                            },
                            {
                                key: "_expandSelectionOnSign",
                                value: function () {
                                    var e = this._getSignPosition(),
                                        t = S(e, 2),
                                        i = t[0],
                                        n = t[1],
                                        a = this.selection;
                                    a.start < n &&
                                        a.end > i &&
                                        ((a.start < i || a.end > n) && D.default.getElementValue(this.domElement).substring(Math.max(a.start, i), Math.min(a.end, n)).match(/^\s*$/)
                                            ? a.start < i
                                                ? this._setSelection(a.start, i)
                                                : this._setSelection(n, a.end)
                                            : this._setSelection(Math.min(a.start, i), Math.max(a.end, n)));
                                },
                            },
                            {
                                key: "_checkPaste",
                                value: function () {
                                    if (!this.formatted && !D.default.isUndefined(this.valuePartsBeforePaste)) {
                                        var e = this.valuePartsBeforePaste,
                                            t = this._getLeftAndRightPartAroundTheSelection(),
                                            i = S(t, 2),
                                            n = i[0],
                                            a = i[1];
                                        delete this.valuePartsBeforePaste;
                                        var r = n.substr(0, e[0].length) + I._stripAllNonNumberCharactersExceptCustomDecimalChar(n.substr(e[0].length), this.settings, !0, this.isFocused);
                                        this._setValueParts(r, a, !0) || (this._setElementValue(e.join(""), !1), this._setCaretPosition(e[0].length));
                                    }
                                },
                            },
                            {
                                key: "_processNonPrintableKeysAndShortcuts",
                                value: function (e) {
                                    if (((e.ctrlKey || e.metaKey) && "keyup" === e.type && !D.default.isUndefined(this.valuePartsBeforePaste)) || (e.shiftKey && this.eventKey === v.default.keyName.Insert)) return this._checkPaste(), !1;
                                    if (this.constructor._shouldSkipEventKey(this.eventKey)) return !0;
                                    if ((e.ctrlKey || e.metaKey) && this.eventKey === v.default.keyName.a) return this.settings.selectNumberOnly && (e.preventDefault(), this.selectNumber()), !0;
                                    if ((e.ctrlKey || e.metaKey) && (this.eventKey === v.default.keyName.c || this.eventKey === v.default.keyName.v || this.eventKey === v.default.keyName.x))
                                        return (
                                            "keydown" === e.type && this._expandSelectionOnSign(),
                                            (this.eventKey !== v.default.keyName.v && this.eventKey !== v.default.keyName.Insert) ||
                                                ("keydown" === e.type || "keypress" === e.type
                                                    ? D.default.isUndefined(this.valuePartsBeforePaste) && (this.valuePartsBeforePaste = this._getLeftAndRightPartAroundTheSelection())
                                                    : this._checkPaste()),
                                            "keydown" === e.type || "keypress" === e.type || this.eventKey === v.default.keyName.c
                                        );
                                    if (e.ctrlKey || e.metaKey) return !(this.eventKey === v.default.keyName.Z || this.eventKey === v.default.keyName.z);
                                    if (this.eventKey !== v.default.keyName.LeftArrow && this.eventKey !== v.default.keyName.RightArrow) return D.default.isInArray(this.eventKey, v.default.keyName._directionKeys);
                                    if ("keydown" === e.type && !e.shiftKey) {
                                        var t = D.default.getElementValue(this.domElement);
                                        this.eventKey !== v.default.keyName.LeftArrow || (t.charAt(this.selection.start - 2) !== this.settings.digitGroupSeparator && t.charAt(this.selection.start - 2) !== this.settings.decimalCharacter)
                                            ? this.eventKey !== v.default.keyName.RightArrow ||
                                              (t.charAt(this.selection.start + 1) !== this.settings.digitGroupSeparator && t.charAt(this.selection.start + 1) !== this.settings.decimalCharacter) ||
                                              this._setCaretPosition(this.selection.start + 1)
                                            : this._setCaretPosition(this.selection.start - 1);
                                    }
                                    return !0;
                                },
                            },
                            {
                                key: "_processCharacterDeletionIfTrailingNegativeSign",
                                value: function (e) {
                                    var t = S(e, 2),
                                        i = t[0],
                                        n = t[1],
                                        a = D.default.getElementValue(this.domElement),
                                        r = D.default.isNegative(a, this.settings.negativeSignCharacter);
                                    if (
                                        (this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.prefix &&
                                            this.settings.negativePositiveSignPlacement === I.options.negativePositiveSignPlacement.suffix &&
                                            (this.eventKey === v.default.keyName.Backspace
                                                ? ((this.caretFix = this.selection.start >= a.indexOf(this.settings.suffixText) && "" !== this.settings.suffixText),
                                                  "-" === a.charAt(this.selection.start - 1) ? (i = i.substring(1)) : this.selection.start <= a.length - this.settings.suffixText.length && (i = i.substring(0, i.length - 1)))
                                                : ((this.caretFix = this.selection.start >= a.indexOf(this.settings.suffixText) && "" !== this.settings.suffixText),
                                                  this.selection.start >= a.indexOf(this.settings.currencySymbol) + this.settings.currencySymbol.length && (n = n.substring(1, n.length)),
                                                  D.default.isNegative(i, this.settings.negativeSignCharacter) && "-" === a.charAt(this.selection.start) && (i = i.substring(1)))),
                                        this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.suffix)
                                    )
                                        switch (this.settings.negativePositiveSignPlacement) {
                                            case I.options.negativePositiveSignPlacement.left:
                                                (this.caretFix = this.selection.start >= a.indexOf(this.settings.negativeSignCharacter) + this.settings.negativeSignCharacter.length),
                                                    this.eventKey === v.default.keyName.Backspace
                                                        ? this.selection.start === a.indexOf(this.settings.negativeSignCharacter) + this.settings.negativeSignCharacter.length && r
                                                            ? (i = i.substring(1))
                                                            : "-" !== i && (this.selection.start <= a.indexOf(this.settings.negativeSignCharacter) || !r) && (i = i.substring(0, i.length - 1))
                                                        : ("-" === i[0] && (n = n.substring(1)), this.selection.start === a.indexOf(this.settings.negativeSignCharacter) && r && (i = i.substring(1)));
                                                break;
                                            case I.options.negativePositiveSignPlacement.right:
                                                (this.caretFix = this.selection.start >= a.indexOf(this.settings.negativeSignCharacter) + this.settings.negativeSignCharacter.length),
                                                    this.eventKey === v.default.keyName.Backspace
                                                        ? this.selection.start === a.indexOf(this.settings.negativeSignCharacter) + this.settings.negativeSignCharacter.length
                                                            ? (i = i.substring(1))
                                                            : "-" !== i && this.selection.start <= a.indexOf(this.settings.negativeSignCharacter) - this.settings.currencySymbol.length
                                                            ? (i = i.substring(0, i.length - 1))
                                                            : "" === i || r || (i = i.substring(0, i.length - 1))
                                                        : ((this.caretFix = this.selection.start >= a.indexOf(this.settings.currencySymbol) && "" !== this.settings.currencySymbol),
                                                          this.selection.start === a.indexOf(this.settings.negativeSignCharacter) && (i = i.substring(1)),
                                                          (n = n.substring(1)));
                                        }
                                    return [i, n];
                                },
                            },
                            {
                                key: "_processCharacterDeletion",
                                value: function () {
                                    var e = void 0,
                                        t = void 0;
                                    if (this.selection.length) {
                                        this._expandSelectionOnSign();
                                        var i = this._getUnformattedLeftAndRightPartAroundTheSelection(),
                                            n = S(i, 2);
                                        (e = n[0]), (t = n[1]);
                                    } else {
                                        var a = this._getUnformattedLeftAndRightPartAroundTheSelection(),
                                            r = S(a, 2);
                                        if (
                                            ((e = r[0]),
                                            (t = r[1]),
                                            "" === e && "" === t && (this.throwInput = !1),
                                            this.isTrailingNegative && D.default.isNegative(D.default.getElementValue(this.domElement), this.settings.negativeSignCharacter))
                                        ) {
                                            var s = this._processCharacterDeletionIfTrailingNegativeSign([e, t]),
                                                o = S(s, 2);
                                            (e = o[0]), (t = o[1]);
                                        } else this.eventKey === v.default.keyName.Backspace ? (e = e.substring(0, e.length - 1)) : (t = t.substring(1, t.length));
                                    }
                                    this._setValueParts(e, t);
                                },
                            },
                            {
                                key: "_isDecimalCharacterInsertionAllowed",
                                value: function () {
                                    return String(this.settings.decimalPlacesShownOnFocus) !== String(I.options.decimalPlacesShownOnFocus.none) && String(this.settings.decimalPlaces) !== String(I.options.decimalPlaces.none);
                                },
                            },
                            {
                                key: "_processCharacterInsertion",
                                value: function () {
                                    var e = this._getUnformattedLeftAndRightPartAroundTheSelection(),
                                        t = S(e, 2),
                                        i = t[0],
                                        n = t[1];
                                    if (
                                        (this.eventKey !== v.default.keyName.AndroidDefault && (this.throwInput = !0),
                                        this.eventKey === this.settings.decimalCharacter || (this.settings.decimalCharacterAlternative && this.eventKey === this.settings.decimalCharacterAlternative))
                                    ) {
                                        if (!this._isDecimalCharacterInsertionAllowed() || !this.settings.decimalCharacter) return !1;
                                        if (this.settings.alwaysAllowDecimalCharacter) (i = i.replace(this.settings.decimalCharacter, "")), (n = n.replace(this.settings.decimalCharacter, ""));
                                        else {
                                            if (D.default.contains(i, this.settings.decimalCharacter)) return !0;
                                            if (0 < n.indexOf(this.settings.decimalCharacter)) return !0;
                                            0 === n.indexOf(this.settings.decimalCharacter) && (n = n.substr(1));
                                        }
                                        return (
                                            this.settings.negativeSignCharacter &&
                                                D.default.contains(n, this.settings.negativeSignCharacter) &&
                                                ((i = "" + this.settings.negativeSignCharacter + i), (n = n.replace(this.settings.negativeSignCharacter, ""))),
                                            this._setValueParts(i + this.settings.decimalCharacter, n),
                                            !0
                                        );
                                    }
                                    if (("-" === this.eventKey || "+" === this.eventKey) && this.settings.isNegativeSignAllowed)
                                        return (
                                            "" === i && D.default.contains(n, "-") ? (n = n.replace("-", "")) : (i = D.default.isNegativeStrict(i, "-") ? i.replace("-", "") : "" + this.settings.negativeSignCharacter + i),
                                            this._setValueParts(i, n),
                                            !0
                                        );
                                    var a = Number(this.eventKey);
                                    return 0 <= a && a <= 9
                                        ? (this.settings.isNegativeSignAllowed && "" === i && D.default.contains(n, "-") && ((i = "-"), (n = n.substring(1, n.length))),
                                          this.settings.maximumValue <= 0 &&
                                              this.settings.minimumValue < this.settings.maximumValue &&
                                              !D.default.contains(D.default.getElementValue(this.domElement), this.settings.negativeSignCharacter) &&
                                              "0" !== this.eventKey &&
                                              (i = "-" + i),
                                          this._setValueParts("" + i + this.eventKey, n),
                                          !0)
                                        : (this.throwInput = !1);
                                },
                            },
                            {
                                key: "_formatValue",
                                value: function (e) {
                                    var t = D.default.getElementValue(this.domElement),
                                        i = this._getUnformattedLeftAndRightPartAroundTheSelection(),
                                        n = S(i, 1)[0];
                                    if (
                                        ("" === this.settings.digitGroupSeparator || ("" !== this.settings.digitGroupSeparator && !D.default.contains(t, this.settings.digitGroupSeparator))) &&
                                        ("" === this.settings.currencySymbol || ("" !== this.settings.currencySymbol && !D.default.contains(t, this.settings.currencySymbol)))
                                    ) {
                                        var a = t.split(this.settings.decimalCharacter),
                                            r = S(a, 1)[0],
                                            s = "";
                                        D.default.isNegative(r, this.settings.negativeSignCharacter) && ((s = this.settings.negativeSignCharacter), (r = r.replace(this.settings.negativeSignCharacter, "")), (n = n.replace("-", ""))),
                                            "" === s && r.length > this.settings.mIntPos && "0" === n.charAt(0) && (n = n.slice(1)),
                                            s === this.settings.negativeSignCharacter && r.length > this.settings.mIntNeg && "0" === n.charAt(0) && (n = n.slice(1)),
                                            this.isTrailingNegative || (n = "" + s + n);
                                    }
                                    var o = this.constructor._addGroupSeparators(t, this.settings, this.isFocused, this.rawValue),
                                        l = o.length;
                                    if (o) {
                                        var u = n.split("");
                                        if (
                                            (this.settings.negativePositiveSignPlacement === I.options.negativePositiveSignPlacement.suffix ||
                                                (this.settings.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.prefix && this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.suffix)) &&
                                            u[0] === this.settings.negativeSignCharacter &&
                                            !this.settings.isNegativeSignAllowed &&
                                            (u.shift(),
                                            (this.eventKey === v.default.keyName.Backspace || this.eventKey === v.default.keyName.Delete) &&
                                                this.caretFix &&
                                                (((this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.suffix && this.settings.negativePositiveSignPlacement === I.options.negativePositiveSignPlacement.left) ||
                                                    (this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.prefix && this.settings.negativePositiveSignPlacement === I.options.negativePositiveSignPlacement.suffix)) &&
                                                    (u.push(this.settings.negativeSignCharacter), (this.caretFix = "keydown" === e.type)),
                                                this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.suffix && this.settings.negativePositiveSignPlacement === I.options.negativePositiveSignPlacement.right))
                                        ) {
                                            var c = this.settings.currencySymbol.split(""),
                                                h = ["\\", "^", "$", ".", "|", "?", "*", "+", "(", ")", "["],
                                                d = [];
                                            c.forEach(function (e, t) {
                                                (t = c[e]), D.default.isInArray(t, h) ? d.push("\\" + t) : d.push(t);
                                            }),
                                                this.eventKey === v.default.keyName.Backspace && "-" === this.settings.negativeSignCharacter && d.push("-"),
                                                u.push(d.join("")),
                                                (this.caretFix = "keydown" === e.type);
                                        }
                                        for (var m = 0; m < u.length; m++) u[m].match("\\d") || (u[m] = "\\" + u[m]);
                                        var f = new RegExp("^.*?" + u.join(".*?")),
                                            g = o.match(f);
                                        g
                                            ? ((l = g[0].length),
                                              this.settings.showPositiveSign &&
                                                  (0 === l && g.input.charAt(0) === this.settings.positiveSignCharacter && (l = 1 === g.input.indexOf(this.settings.currencySymbol) ? this.settings.currencySymbol.length + 1 : 1),
                                                  0 === l && g.input.charAt(this.settings.currencySymbol.length) === this.settings.positiveSignCharacter && (l = this.settings.currencySymbol.length + 1)),
                                              ((0 === l && o.charAt(0) !== this.settings.negativeSignCharacter) || (1 === l && o.charAt(0) === this.settings.negativeSignCharacter)) &&
                                                  this.settings.currencySymbol &&
                                                  this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.prefix &&
                                                  (l = this.settings.currencySymbol.length + (D.default.isNegativeStrict(o, this.settings.negativeSignCharacter) ? 1 : 0)))
                                            : (this.settings.currencySymbol && this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.suffix && (l -= this.settings.currencySymbol.length),
                                              this.settings.suffixText && (l -= this.settings.suffixText.length));
                                    }
                                    o !== t && (this._setElementValue(o, !1), this._setCaretPosition(l)), (this.formatted = !0);
                                },
                            },
                        ],
                        [
                            {
                                key: "version",
                                value: function () {
                                    return "4.5.4";
                                },
                            },
                            {
                                key: "_setArgumentsValues",
                                value: function (e, t, i) {
                                    D.default.isNull(e) && D.default.throwError("At least one valid parameter is needed in order to initialize an AutoNumeric object");
                                    var n = D.default.isElement(e),
                                        a = D.default.isString(e),
                                        r = D.default.isObject(t),
                                        s = Array.isArray(t) && 0 < t.length,
                                        o = D.default.isNumberOrArabic(t) || "" === t,
                                        l = this._isPreDefinedOptionValid(t),
                                        u = D.default.isNull(t),
                                        c = D.default.isEmptyString(t),
                                        h = D.default.isObject(i),
                                        d = Array.isArray(i) && 0 < i.length,
                                        m = D.default.isNull(i),
                                        f = this._isPreDefinedOptionValid(i),
                                        g = void 0,
                                        v = void 0,
                                        p = void 0;
                                    return (
                                        n && u && m
                                            ? ((g = e), (v = p = null))
                                            : n && o && m
                                            ? ((g = e), (p = t), (v = null))
                                            : n && r && m
                                            ? ((g = e), (p = null), (v = t))
                                            : n && l && m
                                            ? ((g = e), (p = null), (v = this._getOptionObject(t)))
                                            : n && s && m
                                            ? ((g = e), (p = null), (v = this.mergeOptions(t)))
                                            : n && (u || c) && h
                                            ? ((g = e), (p = null), (v = i))
                                            : n && (u || c) && d
                                            ? ((g = e), (p = null), (v = this.mergeOptions(i)))
                                            : a && u && m
                                            ? ((g = document.querySelector(e)), (v = p = null))
                                            : a && r && m
                                            ? ((g = document.querySelector(e)), (p = null), (v = t))
                                            : a && l && m
                                            ? ((g = document.querySelector(e)), (p = null), (v = this._getOptionObject(t)))
                                            : a && s && m
                                            ? ((g = document.querySelector(e)), (p = null), (v = this.mergeOptions(t)))
                                            : a && (u || c) && h
                                            ? ((g = document.querySelector(e)), (p = null), (v = i))
                                            : a && (u || c) && d
                                            ? ((g = document.querySelector(e)), (p = null), (v = this.mergeOptions(i)))
                                            : a && o && m
                                            ? ((g = document.querySelector(e)), (p = t), (v = null))
                                            : a && o && h
                                            ? ((g = document.querySelector(e)), (p = t), (v = i))
                                            : a && o && f
                                            ? ((g = document.querySelector(e)), (p = t), (v = this._getOptionObject(i)))
                                            : a && o && d
                                            ? ((g = document.querySelector(e)), (p = t), (v = this.mergeOptions(i)))
                                            : n && o && h
                                            ? ((g = e), (p = t), (v = i))
                                            : n && o && f
                                            ? ((g = e), (p = t), (v = this._getOptionObject(i)))
                                            : n && o && d
                                            ? ((g = e), (p = t), (v = this.mergeOptions(i)))
                                            : D.default.throwError("The parameters given to the AutoNumeric object are not valid, '" + e + "', '" + t + "' and '" + i + "' given."),
                                        D.default.isNull(g) && D.default.throwError("The selector '" + e + "' did not select any valid DOM element. Please check on which element you called AutoNumeric."),
                                        { domElement: g, initialValue: p, userOptions: v }
                                    );
                                },
                            },
                            {
                                key: "mergeOptions",
                                value: function (e) {
                                    var t = this,
                                        i = {};
                                    return (
                                        e.forEach(function (e) {
                                            y(i, t._getOptionObject(e));
                                        }),
                                        i
                                    );
                                },
                            },
                            {
                                key: "_isPreDefinedOptionValid",
                                value: function (e) {
                                    return I.predefinedOptions.hasOwnProperty(e);
                                },
                            },
                            {
                                key: "_getOptionObject",
                                value: function (e) {
                                    var t = void 0;
                                    return (
                                        D.default.isString(e)
                                            ? null == (t = I.getPredefinedOptions()[e]) && D.default.warning("The given pre-defined option [" + e + "] is not recognized by autoNumeric. Please check that pre-defined option name.", !0)
                                            : (t = e),
                                        t
                                    );
                                },
                            },
                            {
                                key: "_doesFormHandlerListExists",
                                value: function () {
                                    var e = b(window.aNFormHandlerMap);
                                    return "undefined" !== e && "object" === e;
                                },
                            },
                            {
                                key: "_createFormHandlerList",
                                value: function () {
                                    window.aNFormHandlerMap = new Map();
                                },
                            },
                            {
                                key: "_checkValuesToStringsArray",
                                value: function (e, t) {
                                    return D.default.isInArray(String(e), t);
                                },
                            },
                            {
                                key: "_checkValuesToStringsSettings",
                                value: function (e, t) {
                                    return this._checkValuesToStringsArray(e, Object.keys(t.valuesToStrings));
                                },
                            },
                            {
                                key: "_checkStringsToValuesSettings",
                                value: function (e, t) {
                                    return this._checkValuesToStringsArray(e, Object.values(t.valuesToStrings));
                                },
                            },
                            {
                                key: "_unformatAltHovered",
                                value: function (e) {
                                    (e.hoveredWithAlt = !0), e.unformat();
                                },
                            },
                            {
                                key: "_reformatAltHovered",
                                value: function (e) {
                                    (e.hoveredWithAlt = !1), e.reformat();
                                },
                            },
                            {
                                key: "_getChildANInputElement",
                                value: function (e) {
                                    var t = this,
                                        i = e.getElementsByTagName("input"),
                                        n = [];
                                    return (
                                        Array.prototype.slice.call(i, 0).forEach(function (e) {
                                            t.test(e) && n.push(e);
                                        }),
                                        n
                                    );
                                },
                            },
                            {
                                key: "test",
                                value: function (e) {
                                    return this._isInGlobalList(D.default.domElement(e));
                                },
                            },
                            {
                                key: "_createWeakMap",
                                value: function (e) {
                                    window[e] = new WeakMap();
                                },
                            },
                            {
                                key: "_createGlobalList",
                                value: function () {
                                    (this.autoNumericGlobalListName = "autoNumericGlobalList"), this._createWeakMap(this.autoNumericGlobalListName);
                                },
                            },
                            {
                                key: "_doesGlobalListExists",
                                value: function () {
                                    var e = b(window[this.autoNumericGlobalListName]);
                                    return "undefined" !== e && "object" === e;
                                },
                            },
                            {
                                key: "_addToGlobalList",
                                value: function (e) {
                                    this._doesGlobalListExists() || this._createGlobalList();
                                    var t = e.node();
                                    if (this._isInGlobalList(t)) {
                                        if (this._getFromGlobalList(t) === this) return;
                                        D.default.warning(
                                            "A reference to the DOM element you just initialized already exists in the global AutoNumeric element list. Please make sure to not initialize the same DOM element multiple times.",
                                            e.getSettings().showWarnings
                                        );
                                    }
                                    window[this.autoNumericGlobalListName].set(t, e);
                                },
                            },
                            {
                                key: "_removeFromGlobalList",
                                value: function (e) {
                                    this._doesGlobalListExists() && window[this.autoNumericGlobalListName].delete(e.node());
                                },
                            },
                            {
                                key: "_getFromGlobalList",
                                value: function (e) {
                                    return this._doesGlobalListExists() ? window[this.autoNumericGlobalListName].get(e) : null;
                                },
                            },
                            {
                                key: "_isInGlobalList",
                                value: function (e) {
                                    return !!this._doesGlobalListExists() && window[this.autoNumericGlobalListName].has(e);
                                },
                            },
                            {
                                key: "validate",
                                value: function (e) {
                                    var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                                    (!D.default.isUndefinedOrNullOrEmpty(e) && D.default.isObject(e)) || D.default.throwError("The userOptions are invalid ; it should be a valid object, [" + e + "] given.");
                                    var n = D.default.isObject(i);
                                    n || D.default.isNull(i) || D.default.throwError("The 'originalOptions' parameter is invalid ; it should either be a valid option object or `null`, [" + e + "] given."),
                                        D.default.isNull(e) || this._convertOldOptionsToNewOnes(e);
                                    var a = void 0;
                                    (a = t ? y({}, this.getDefaultConfig(), e) : e),
                                        D.default.isTrueOrFalseString(a.showWarnings) ||
                                            D.default.isBoolean(a.showWarnings) ||
                                            D.default.throwError("The debug option 'showWarnings' is invalid ; it should be either 'true' or 'false', [" + a.showWarnings + "] given.");
                                    var r,
                                        s = /^[0-9]+$/,
                                        o = /[0-9]+/,
                                        l = /^-?[0-9]+(\.?[0-9]+)?$/,
                                        u = /^[0-9]+(\.?[0-9]+)?$/;
                                    D.default.isTrueOrFalseString(a.allowDecimalPadding) ||
                                        D.default.isBoolean(a.allowDecimalPadding) ||
                                        a.allowDecimalPadding === I.options.allowDecimalPadding.floats ||
                                        D.default.throwError("The decimal padding option 'allowDecimalPadding' is invalid ; it should either be `false`, `true` or `'floats'`, [" + a.allowDecimalPadding + "] given."),
                                        (a.allowDecimalPadding !== I.options.allowDecimalPadding.never && "false" !== a.allowDecimalPadding) ||
                                            (a.decimalPlaces === I.options.decimalPlaces.none &&
                                                a.decimalPlacesShownOnBlur === I.options.decimalPlacesShownOnBlur.none &&
                                                a.decimalPlacesShownOnFocus === I.options.decimalPlacesShownOnFocus.none) ||
                                            D.default.warning(
                                                "Setting 'allowDecimalPadding' to [" +
                                                    a.allowDecimalPadding +
                                                    "] will override the current 'decimalPlaces*' settings [" +
                                                    a.decimalPlaces +
                                                    ", " +
                                                    a.decimalPlacesShownOnBlur +
                                                    " and " +
                                                    a.decimalPlacesShownOnFocus +
                                                    "].",
                                                a.showWarnings
                                            ),
                                        D.default.isTrueOrFalseString(a.alwaysAllowDecimalCharacter) ||
                                            D.default.isBoolean(a.alwaysAllowDecimalCharacter) ||
                                            D.default.throwError("The option 'alwaysAllowDecimalCharacter' is invalid ; it should either be `true` or `false`, [" + a.alwaysAllowDecimalCharacter + "] given."),
                                        D.default.isNull(a.caretPositionOnFocus) ||
                                            D.default.isInArray(a.caretPositionOnFocus, [
                                                I.options.caretPositionOnFocus.start,
                                                I.options.caretPositionOnFocus.end,
                                                I.options.caretPositionOnFocus.decimalLeft,
                                                I.options.caretPositionOnFocus.decimalRight,
                                            ]) ||
                                            D.default.throwError(
                                                "The display on empty string option 'caretPositionOnFocus' is invalid ; it should either be `null`, 'focus', 'press', 'always' or 'zero', [" + a.caretPositionOnFocus + "] given."
                                            ),
                                        (r = n ? i : this._correctCaretPositionOnFocusAndSelectOnFocusOptions(e)),
                                        D.default.isNull(r) ||
                                            r.caretPositionOnFocus === I.options.caretPositionOnFocus.doNoForceCaretPosition ||
                                            r.selectOnFocus !== I.options.selectOnFocus.select ||
                                            D.default.warning(
                                                "The 'selectOnFocus' option is set to 'select', which is in conflict with the 'caretPositionOnFocus' which is set to '" +
                                                    r.caretPositionOnFocus +
                                                    "'. As a result, if this has been called when instantiating an AutoNumeric object, the 'selectOnFocus' option is forced to 'doNotSelect'.",
                                                a.showWarnings
                                            ),
                                        D.default.isInArray(a.digitGroupSeparator, [
                                            I.options.digitGroupSeparator.comma,
                                            I.options.digitGroupSeparator.dot,
                                            I.options.digitGroupSeparator.normalSpace,
                                            I.options.digitGroupSeparator.thinSpace,
                                            I.options.digitGroupSeparator.narrowNoBreakSpace,
                                            I.options.digitGroupSeparator.noBreakSpace,
                                            I.options.digitGroupSeparator.noSeparator,
                                            I.options.digitGroupSeparator.apostrophe,
                                            I.options.digitGroupSeparator.arabicThousandsSeparator,
                                            I.options.digitGroupSeparator.dotAbove,
                                            I.options.digitGroupSeparator.privateUseTwo,
                                        ]) ||
                                            D.default.throwError(
                                                "The thousand separator character option 'digitGroupSeparator' is invalid ; it should be ',', '.', '٬', '˙', \"'\", '', ' ', ' ', ' ', ' ' or empty (''), [" +
                                                    a.digitGroupSeparator +
                                                    "] given."
                                            ),
                                        D.default.isTrueOrFalseString(a.showOnlyNumbersOnFocus) ||
                                            D.default.isBoolean(a.showOnlyNumbersOnFocus) ||
                                            D.default.throwError("The 'showOnlyNumbersOnFocus' option is invalid ; it should be either 'true' or 'false', [" + a.showOnlyNumbersOnFocus + "] given."),
                                        D.default.isInArray(a.digitalGroupSpacing, [I.options.digitalGroupSpacing.two, I.options.digitalGroupSpacing.twoScaled, I.options.digitalGroupSpacing.three, I.options.digitalGroupSpacing.four]) ||
                                            (2 <= a.digitalGroupSpacing && a.digitalGroupSpacing <= 4) ||
                                            D.default.throwError("The grouping separator option for thousands 'digitalGroupSpacing' is invalid ; it should be '2', '2s', '3', or '4', [" + a.digitalGroupSpacing + "] given."),
                                        D.default.isInArray(a.decimalCharacter, [
                                            I.options.decimalCharacter.comma,
                                            I.options.decimalCharacter.dot,
                                            I.options.decimalCharacter.middleDot,
                                            I.options.decimalCharacter.arabicDecimalSeparator,
                                            I.options.decimalCharacter.decimalSeparatorKeySymbol,
                                        ]) || D.default.throwError("The decimal separator character option 'decimalCharacter' is invalid ; it should be '.', ',', '·', '⎖' or '٫', [" + a.decimalCharacter + "] given."),
                                        a.decimalCharacter === a.digitGroupSeparator &&
                                            D.default.throwError(
                                                "autoNumeric will not function properly when the decimal character 'decimalCharacter' [" +
                                                    a.decimalCharacter +
                                                    "] and the thousand separator 'digitGroupSeparator' [" +
                                                    a.digitGroupSeparator +
                                                    "] are the same character."
                                            ),
                                        D.default.isNull(a.decimalCharacterAlternative) ||
                                            D.default.isString(a.decimalCharacterAlternative) ||
                                            D.default.throwError("The alternate decimal separator character option 'decimalCharacterAlternative' is invalid ; it should be a string, [" + a.decimalCharacterAlternative + "] given."),
                                        "" === a.currencySymbol ||
                                            D.default.isString(a.currencySymbol) ||
                                            D.default.throwError("The currency symbol option 'currencySymbol' is invalid ; it should be a string, [" + a.currencySymbol + "] given."),
                                        D.default.isInArray(a.currencySymbolPlacement, [I.options.currencySymbolPlacement.prefix, I.options.currencySymbolPlacement.suffix]) ||
                                            D.default.throwError(
                                                "The placement of the currency sign option 'currencySymbolPlacement' is invalid ; it should either be 'p' (prefix) or 's' (suffix), [" + a.currencySymbolPlacement + "] given."
                                            ),
                                        D.default.isInArray(a.negativePositiveSignPlacement, [
                                            I.options.negativePositiveSignPlacement.prefix,
                                            I.options.negativePositiveSignPlacement.suffix,
                                            I.options.negativePositiveSignPlacement.left,
                                            I.options.negativePositiveSignPlacement.right,
                                            I.options.negativePositiveSignPlacement.none,
                                        ]) ||
                                            D.default.throwError(
                                                "The placement of the negative sign option 'negativePositiveSignPlacement' is invalid ; it should either be 'p' (prefix), 's' (suffix), 'l' (left), 'r' (right) or 'null', [" +
                                                    a.negativePositiveSignPlacement +
                                                    "] given."
                                            ),
                                        D.default.isTrueOrFalseString(a.showPositiveSign) ||
                                            D.default.isBoolean(a.showPositiveSign) ||
                                            D.default.throwError("The show positive sign option 'showPositiveSign' is invalid ; it should be either 'true' or 'false', [" + a.showPositiveSign + "] given."),
                                        (!D.default.isString(a.suffixText) || ("" !== a.suffixText && (D.default.isNegative(a.suffixText, a.negativeSignCharacter) || o.test(a.suffixText)))) &&
                                            D.default.throwError(
                                                "The additional suffix option 'suffixText' is invalid ; it should not contains the negative sign '" + a.negativeSignCharacter + "' nor any numerical characters, [" + a.suffixText + "] given."
                                            ),
                                        (!D.default.isString(a.negativeSignCharacter) || 1 !== a.negativeSignCharacter.length || D.default.isUndefinedOrNullOrEmpty(a.negativeSignCharacter) || o.test(a.negativeSignCharacter)) &&
                                            D.default.throwError(
                                                "The negative sign character option 'negativeSignCharacter' is invalid ; it should be a single character, and cannot be any numerical characters, [" + a.negativeSignCharacter + "] given."
                                            ),
                                        (!D.default.isString(a.positiveSignCharacter) || 1 !== a.positiveSignCharacter.length || D.default.isUndefinedOrNullOrEmpty(a.positiveSignCharacter) || o.test(a.positiveSignCharacter)) &&
                                            D.default.throwError(
                                                "The positive sign character option 'positiveSignCharacter' is invalid ; it should be a single character, and cannot be any numerical characters, [" +
                                                    a.positiveSignCharacter +
                                                    "] given.\nIf you want to hide the positive sign character, you need to set the `showPositiveSign` option to `true`."
                                            ),
                                        a.negativeSignCharacter === a.positiveSignCharacter &&
                                            D.default.throwError("The positive 'positiveSignCharacter' and negative 'negativeSignCharacter' sign characters cannot be identical ; [" + a.negativeSignCharacter + "] given.");
                                    var c = D.default.isNull(a.negativeBracketsTypeOnBlur) ? ["", ""] : a.negativeBracketsTypeOnBlur.split(","),
                                        h = S(c, 2),
                                        d = h[0],
                                        m = h[1];
                                    if (
                                        ((D.default.contains(a.digitGroupSeparator, a.negativeSignCharacter) ||
                                            D.default.contains(a.decimalCharacter, a.negativeSignCharacter) ||
                                            D.default.contains(a.decimalCharacterAlternative, a.negativeSignCharacter) ||
                                            D.default.contains(d, a.negativeSignCharacter) ||
                                            D.default.contains(m, a.negativeSignCharacter) ||
                                            D.default.contains(a.suffixText, a.negativeSignCharacter)) &&
                                            D.default.throwError(
                                                "The negative sign character option 'negativeSignCharacter' is invalid ; it should not be equal or a part of the digit separator, the decimal character, the decimal character alternative, the negative brackets or the suffix text, [" +
                                                    a.negativeSignCharacter +
                                                    "] given."
                                            ),
                                        (D.default.contains(a.digitGroupSeparator, a.positiveSignCharacter) ||
                                            D.default.contains(a.decimalCharacter, a.positiveSignCharacter) ||
                                            D.default.contains(a.decimalCharacterAlternative, a.positiveSignCharacter) ||
                                            D.default.contains(d, a.positiveSignCharacter) ||
                                            D.default.contains(m, a.positiveSignCharacter) ||
                                            D.default.contains(a.suffixText, a.positiveSignCharacter)) &&
                                            D.default.throwError(
                                                "The positive sign character option 'positiveSignCharacter' is invalid ; it should not be equal or a part of the digit separator, the decimal character, the decimal character alternative, the negative brackets or the suffix text, [" +
                                                    a.positiveSignCharacter +
                                                    "] given."
                                            ),
                                        D.default.isNull(a.overrideMinMaxLimits) ||
                                            D.default.isInArray(a.overrideMinMaxLimits, [I.options.overrideMinMaxLimits.ceiling, I.options.overrideMinMaxLimits.floor, I.options.overrideMinMaxLimits.ignore]) ||
                                            D.default.throwError("The override min & max limits option 'overrideMinMaxLimits' is invalid ; it should either be 'ceiling', 'floor' or 'ignore', [" + a.overrideMinMaxLimits + "] given."),
                                        (D.default.isString(a.maximumValue) && l.test(a.maximumValue)) ||
                                            D.default.throwError("The maximum possible value option 'maximumValue' is invalid ; it should be a string that represents a positive or negative number, [" + a.maximumValue + "] given."),
                                        (D.default.isString(a.minimumValue) && l.test(a.minimumValue)) ||
                                            D.default.throwError("The minimum possible value option 'minimumValue' is invalid ; it should be a string that represents a positive or negative number, [" + a.minimumValue + "] given."),
                                        parseFloat(a.minimumValue) > parseFloat(a.maximumValue) &&
                                            D.default.throwError(
                                                "The minimum possible value option is greater than the maximum possible value option ; 'minimumValue' [" + a.minimumValue + "] should be smaller than 'maximumValue' [" + a.maximumValue + "]."
                                            ),
                                        (D.default.isInt(a.decimalPlaces) && 0 <= a.decimalPlaces) ||
                                            (D.default.isString(a.decimalPlaces) && s.test(a.decimalPlaces)) ||
                                            D.default.throwError("The number of decimal places option 'decimalPlaces' is invalid ; it should be a positive integer, [" + a.decimalPlaces + "] given."),
                                        D.default.isNull(a.decimalPlacesRawValue) ||
                                            (D.default.isInt(a.decimalPlacesRawValue) && 0 <= a.decimalPlacesRawValue) ||
                                            (D.default.isString(a.decimalPlacesRawValue) && s.test(a.decimalPlacesRawValue)) ||
                                            D.default.throwError(
                                                "The number of decimal places for the raw value option 'decimalPlacesRawValue' is invalid ; it should be a positive integer or `null`, [" + a.decimalPlacesRawValue + "] given."
                                            ),
                                        this._validateDecimalPlacesRawValue(a),
                                        D.default.isNull(a.decimalPlacesShownOnFocus) ||
                                            s.test(String(a.decimalPlacesShownOnFocus)) ||
                                            D.default.throwError(
                                                "The number of expanded decimal places option 'decimalPlacesShownOnFocus' is invalid ; it should be a positive integer or `null`, [" + a.decimalPlacesShownOnFocus + "] given."
                                            ),
                                        !D.default.isNull(a.decimalPlacesShownOnFocus) &&
                                            Number(a.decimalPlaces) > Number(a.decimalPlacesShownOnFocus) &&
                                            D.default.warning(
                                                "The extended decimal places 'decimalPlacesShownOnFocus' [" +
                                                    a.decimalPlacesShownOnFocus +
                                                    "] should be greater than the 'decimalPlaces' [" +
                                                    a.decimalPlaces +
                                                    "] value. Currently, this will limit the ability of your user to manually change some of the decimal places. Do you really want to do that?",
                                                a.showWarnings
                                            ),
                                        ((D.default.isNull(a.divisorWhenUnfocused) || u.test(a.divisorWhenUnfocused)) &&
                                            0 !== a.divisorWhenUnfocused &&
                                            "0" !== a.divisorWhenUnfocused &&
                                            1 !== a.divisorWhenUnfocused &&
                                            "1" !== a.divisorWhenUnfocused) ||
                                            D.default.throwError("The divisor option 'divisorWhenUnfocused' is invalid ; it should be a positive number higher than one, preferably an integer, [" + a.divisorWhenUnfocused + "] given."),
                                        D.default.isNull(a.decimalPlacesShownOnBlur) ||
                                            s.test(a.decimalPlacesShownOnBlur) ||
                                            D.default.throwError(
                                                "The number of decimals shown when unfocused option 'decimalPlacesShownOnBlur' is invalid ; it should be a positive integer or `null`, [" + a.decimalPlacesShownOnBlur + "] given."
                                            ),
                                        D.default.isNull(a.symbolWhenUnfocused) ||
                                            D.default.isString(a.symbolWhenUnfocused) ||
                                            D.default.throwError("The symbol to show when unfocused option 'symbolWhenUnfocused' is invalid ; it should be a string, [" + a.symbolWhenUnfocused + "] given."),
                                        D.default.isTrueOrFalseString(a.saveValueToSessionStorage) ||
                                            D.default.isBoolean(a.saveValueToSessionStorage) ||
                                            D.default.throwError("The save to session storage option 'saveValueToSessionStorage' is invalid ; it should be either 'true' or 'false', [" + a.saveValueToSessionStorage + "] given."),
                                        D.default.isInArray(a.onInvalidPaste, [
                                            I.options.onInvalidPaste.error,
                                            I.options.onInvalidPaste.ignore,
                                            I.options.onInvalidPaste.clamp,
                                            I.options.onInvalidPaste.truncate,
                                            I.options.onInvalidPaste.replace,
                                        ]) ||
                                            D.default.throwError(
                                                "The paste behavior option 'onInvalidPaste' is invalid ; it should either be 'error', 'ignore', 'clamp', 'truncate' or 'replace' (cf. documentation), [" + a.onInvalidPaste + "] given."
                                            ),
                                        D.default.isInArray(a.roundingMethod, [
                                            I.options.roundingMethod.halfUpSymmetric,
                                            I.options.roundingMethod.halfUpAsymmetric,
                                            I.options.roundingMethod.halfDownSymmetric,
                                            I.options.roundingMethod.halfDownAsymmetric,
                                            I.options.roundingMethod.halfEvenBankersRounding,
                                            I.options.roundingMethod.upRoundAwayFromZero,
                                            I.options.roundingMethod.downRoundTowardZero,
                                            I.options.roundingMethod.toCeilingTowardPositiveInfinity,
                                            I.options.roundingMethod.toFloorTowardNegativeInfinity,
                                            I.options.roundingMethod.toNearest05,
                                            I.options.roundingMethod.toNearest05Alt,
                                            I.options.roundingMethod.upToNext05,
                                            I.options.roundingMethod.downToNext05,
                                        ]) ||
                                            D.default.throwError(
                                                "The rounding method option 'roundingMethod' is invalid ; it should either be 'S', 'A', 's', 'a', 'B', 'U', 'D', 'C', 'F', 'N05', 'CHF', 'U05' or 'D05' (cf. documentation), [" +
                                                    a.roundingMethod +
                                                    "] given."
                                            ),
                                        D.default.isNull(a.negativeBracketsTypeOnBlur) ||
                                            D.default.isInArray(a.negativeBracketsTypeOnBlur, [
                                                I.options.negativeBracketsTypeOnBlur.parentheses,
                                                I.options.negativeBracketsTypeOnBlur.brackets,
                                                I.options.negativeBracketsTypeOnBlur.chevrons,
                                                I.options.negativeBracketsTypeOnBlur.curlyBraces,
                                                I.options.negativeBracketsTypeOnBlur.angleBrackets,
                                                I.options.negativeBracketsTypeOnBlur.japaneseQuotationMarks,
                                                I.options.negativeBracketsTypeOnBlur.halfBrackets,
                                                I.options.negativeBracketsTypeOnBlur.whiteSquareBrackets,
                                                I.options.negativeBracketsTypeOnBlur.quotationMarks,
                                                I.options.negativeBracketsTypeOnBlur.guillemets,
                                            ]) ||
                                            D.default.throwError(
                                                "The brackets for negative values option 'negativeBracketsTypeOnBlur' is invalid ; it should either be '(,)', '[,]', '<,>', '{,}', '〈,〉', '｢,｣', '⸤,⸥', '⟦,⟧', '‹,›' or '«,»', [" +
                                                    a.negativeBracketsTypeOnBlur +
                                                    "] given."
                                            ),
                                        ((D.default.isString(a.emptyInputBehavior) || D.default.isNumber(a.emptyInputBehavior)) &&
                                            (D.default.isInArray(a.emptyInputBehavior, [
                                                I.options.emptyInputBehavior.focus,
                                                I.options.emptyInputBehavior.press,
                                                I.options.emptyInputBehavior.always,
                                                I.options.emptyInputBehavior.min,
                                                I.options.emptyInputBehavior.max,
                                                I.options.emptyInputBehavior.zero,
                                                I.options.emptyInputBehavior.null,
                                            ]) ||
                                                l.test(a.emptyInputBehavior))) ||
                                            D.default.throwError(
                                                "The display on empty string option 'emptyInputBehavior' is invalid ; it should either be 'focus', 'press', 'always', 'min', 'max', 'zero', 'null', a number, or a string that represents a number, [" +
                                                    a.emptyInputBehavior +
                                                    "] given."
                                            ),
                                        a.emptyInputBehavior === I.options.emptyInputBehavior.zero &&
                                            (0 < a.minimumValue || a.maximumValue < 0) &&
                                            D.default.throwError(
                                                "The 'emptyInputBehavior' option is set to 'zero', but this value is outside of the range defined by 'minimumValue' and 'maximumValue' [" + a.minimumValue + ", " + a.maximumValue + "]."
                                            ),
                                        l.test(String(a.emptyInputBehavior)))
                                    ) {
                                        var f = this._checkIfInRangeWithOverrideOption(a.emptyInputBehavior, a),
                                            g = S(f, 2),
                                            v = g[0],
                                            p = g[1];
                                        (v && p) ||
                                            D.default.throwError(
                                                "The 'emptyInputBehavior' option is set to a number or a string that represents a number, but its value [" +
                                                    a.emptyInputBehavior +
                                                    "] is outside of the range defined by the 'minimumValue' and 'maximumValue' options [" +
                                                    a.minimumValue +
                                                    ", " +
                                                    a.maximumValue +
                                                    "]."
                                            );
                                    }
                                    D.default.isTrueOrFalseString(a.eventBubbles) ||
                                        D.default.isBoolean(a.eventBubbles) ||
                                        D.default.throwError("The event bubbles option 'eventBubbles' is invalid ; it should be either 'true' or 'false', [" + a.eventBubbles + "] given."),
                                        D.default.isTrueOrFalseString(a.eventIsCancelable) ||
                                            D.default.isBoolean(a.eventIsCancelable) ||
                                            D.default.throwError("The event is cancelable option 'eventIsCancelable' is invalid ; it should be either 'true' or 'false', [" + a.eventIsCancelable + "] given."),
                                        D.default.isInArray(a.leadingZero, [I.options.leadingZero.allow, I.options.leadingZero.deny, I.options.leadingZero.keep]) ||
                                            D.default.throwError("The leading zero behavior option 'leadingZero' is invalid ; it should either be 'allow', 'deny' or 'keep', [" + a.leadingZero + "] given."),
                                        D.default.isTrueOrFalseString(a.formatOnPageLoad) ||
                                            D.default.isBoolean(a.formatOnPageLoad) ||
                                            D.default.throwError("The format on initialization option 'formatOnPageLoad' is invalid ; it should be either 'true' or 'false', [" + a.formatOnPageLoad + "] given."),
                                        D.default.isTrueOrFalseString(a.formulaMode) ||
                                            D.default.isBoolean(a.formulaMode) ||
                                            D.default.throwError("The formula mode option 'formulaMode' is invalid ; it should be either 'true' or 'false', [" + a.formulaMode + "] given."),
                                        (s.test(a.historySize) && 0 !== a.historySize) || D.default.throwError("The history size option 'historySize' is invalid ; it should be a positive integer, [" + a.historySize + "] given."),
                                        D.default.isTrueOrFalseString(a.selectNumberOnly) ||
                                            D.default.isBoolean(a.selectNumberOnly) ||
                                            D.default.throwError("The select number only option 'selectNumberOnly' is invalid ; it should be either 'true' or 'false', [" + a.selectNumberOnly + "] given."),
                                        D.default.isTrueOrFalseString(a.selectOnFocus) ||
                                            D.default.isBoolean(a.selectOnFocus) ||
                                            D.default.throwError("The select on focus option 'selectOnFocus' is invalid ; it should be either 'true' or 'false', [" + a.selectOnFocus + "] given."),
                                        D.default.isNull(a.defaultValueOverride) ||
                                            "" === a.defaultValueOverride ||
                                            l.test(a.defaultValueOverride) ||
                                            D.default.throwError(
                                                "The unformatted default value option 'defaultValueOverride' is invalid ; it should be a string that represents a positive or negative number, [" + a.defaultValueOverride + "] given."
                                            ),
                                        D.default.isTrueOrFalseString(a.unformatOnSubmit) ||
                                            D.default.isBoolean(a.unformatOnSubmit) ||
                                            D.default.throwError("The remove formatting on submit option 'unformatOnSubmit' is invalid ; it should be either 'true' or 'false', [" + a.unformatOnSubmit + "] given."),
                                        D.default.isNull(a.valuesToStrings) ||
                                            D.default.isObject(a.valuesToStrings) ||
                                            D.default.throwError("The option 'valuesToStrings' is invalid ; it should be an object, ideally with 'key -> value' entries, [" + a.valuesToStrings + "] given."),
                                        D.default.isNull(a.outputFormat) ||
                                            D.default.isInArray(a.outputFormat, [
                                                I.options.outputFormat.string,
                                                I.options.outputFormat.number,
                                                I.options.outputFormat.dot,
                                                I.options.outputFormat.negativeDot,
                                                I.options.outputFormat.comma,
                                                I.options.outputFormat.negativeComma,
                                                I.options.outputFormat.dotNegative,
                                                I.options.outputFormat.commaNegative,
                                            ]) ||
                                            D.default.throwError(
                                                "The custom locale format option 'outputFormat' is invalid ; it should either be null, 'string', 'number', '.', '-.', ',', '-,', '.-' or ',-', [" + a.outputFormat + "] given."
                                            ),
                                        D.default.isTrueOrFalseString(a.isCancellable) ||
                                            D.default.isBoolean(a.isCancellable) ||
                                            D.default.throwError("The cancellable behavior option 'isCancellable' is invalid ; it should be either 'true' or 'false', [" + a.isCancellable + "] given."),
                                        D.default.isTrueOrFalseString(a.modifyValueOnWheel) ||
                                            D.default.isBoolean(a.modifyValueOnWheel) ||
                                            D.default.throwError("The increment/decrement on mouse wheel option 'modifyValueOnWheel' is invalid ; it should be either 'true' or 'false', [" + a.modifyValueOnWheel + "] given."),
                                        D.default.isTrueOrFalseString(a.watchExternalChanges) ||
                                            D.default.isBoolean(a.watchExternalChanges) ||
                                            D.default.throwError("The option 'watchExternalChanges' is invalid ; it should be either 'true' or 'false', [" + a.watchExternalChanges + "] given."),
                                        D.default.isInArray(a.wheelOn, [I.options.wheelOn.focus, I.options.wheelOn.hover]) ||
                                            D.default.throwError("The wheel behavior option 'wheelOn' is invalid ; it should either be 'focus' or 'hover', [" + a.wheelOn + "] given."),
                                        ((!D.default.isString(a.wheelStep) && !D.default.isNumber(a.wheelStep)) || ("progressive" !== a.wheelStep && !u.test(a.wheelStep)) || 0 === Number(a.wheelStep)) &&
                                            D.default.throwError(
                                                "The wheel step value option 'wheelStep' is invalid ; it should either be the string 'progressive', or a number or a string that represents a positive number (excluding zero), [" +
                                                    a.wheelStep +
                                                    "] given."
                                            ),
                                        D.default.isInArray(a.serializeSpaces, [I.options.serializeSpaces.plus, I.options.serializeSpaces.percent]) ||
                                            D.default.throwError("The space replacement character option 'serializeSpaces' is invalid ; it should either be '+' or '%20', [" + a.serializeSpaces + "] given."),
                                        D.default.isTrueOrFalseString(a.noEventListeners) ||
                                            D.default.isBoolean(a.noEventListeners) ||
                                            D.default.throwError("The option 'noEventListeners' that prevent the creation of event listeners is invalid ; it should be either 'true' or 'false', [" + a.noEventListeners + "] given."),
                                        D.default.isNull(a.styleRules) ||
                                            (D.default.isObject(a.styleRules) &&
                                                (a.styleRules.hasOwnProperty("positive") || a.styleRules.hasOwnProperty("negative") || a.styleRules.hasOwnProperty("ranges") || a.styleRules.hasOwnProperty("userDefined"))) ||
                                            D.default.throwError(
                                                "The option 'styleRules' is invalid ; it should be a correctly structured object, with one or more 'positive', 'negative', 'ranges' or 'userDefined' attributes, [" + a.styleRules + "] given."
                                            ),
                                        D.default.isNull(a.styleRules) ||
                                            !a.styleRules.hasOwnProperty("userDefined") ||
                                            D.default.isNull(a.styleRules.userDefined) ||
                                            a.styleRules.userDefined.forEach(function (e) {
                                                e.hasOwnProperty("callback") &&
                                                    !D.default.isFunction(e.callback) &&
                                                    D.default.throwError("The callback defined in the `userDefined` attribute is not a function, " + b(e.callback) + " given.");
                                            }),
                                        ((D.default.isNull(a.rawValueDivisor) || u.test(a.rawValueDivisor)) && 0 !== a.rawValueDivisor && "0" !== a.rawValueDivisor && 1 !== a.rawValueDivisor && "1" !== a.rawValueDivisor) ||
                                            D.default.throwError("The raw value divisor option 'rawValueDivisor' is invalid ; it should be a positive number higher than one, preferably an integer, [" + a.rawValueDivisor + "] given."),
                                        D.default.isTrueOrFalseString(a.readOnly) ||
                                            D.default.isBoolean(a.readOnly) ||
                                            D.default.throwError("The option 'readOnly' is invalid ; it should be either 'true' or 'false', [" + a.readOnly + "] given."),
                                        D.default.isTrueOrFalseString(a.unformatOnHover) ||
                                            D.default.isBoolean(a.unformatOnHover) ||
                                            D.default.throwError("The option 'unformatOnHover' is invalid ; it should be either 'true' or 'false', [" + a.unformatOnHover + "] given."),
                                        D.default.isTrueOrFalseString(a.failOnUnknownOption) ||
                                            D.default.isBoolean(a.failOnUnknownOption) ||
                                            D.default.throwError("The debug option 'failOnUnknownOption' is invalid ; it should be either 'true' or 'false', [" + a.failOnUnknownOption + "] given."),
                                        D.default.isTrueOrFalseString(a.createLocalList) ||
                                            D.default.isBoolean(a.createLocalList) ||
                                            D.default.throwError("The debug option 'createLocalList' is invalid ; it should be either 'true' or 'false', [" + a.createLocalList + "] given.");
                                },
                            },
                            {
                                key: "_validateDecimalPlacesRawValue",
                                value: function (e) {
                                    D.default.isNull(e.decimalPlacesRawValue) ||
                                        (e.decimalPlacesRawValue < e.decimalPlaces &&
                                            D.default.warning(
                                                "The number of decimal places to store in the raw value [" +
                                                    e.decimalPlacesRawValue +
                                                    "] is lower than the ones to display [" +
                                                    e.decimalPlaces +
                                                    "]. This will likely confuse your users.\nTo solve that, you'd need to either set `decimalPlacesRawValue` to `null`, or set a number of decimal places for the raw value equal of bigger than `decimalPlaces`.",
                                                e.showWarnings
                                            ),
                                        e.decimalPlacesRawValue < e.decimalPlacesShownOnFocus &&
                                            D.default.warning(
                                                "The number of decimal places to store in the raw value [" +
                                                    e.decimalPlacesRawValue +
                                                    "] is lower than the ones shown on focus [" +
                                                    e.decimalPlacesShownOnFocus +
                                                    "]. This will likely confuse your users.\nTo solve that, you'd need to either set `decimalPlacesRawValue` to `null`, or set a number of decimal places for the raw value equal of bigger than `decimalPlacesShownOnFocus`.",
                                                e.showWarnings
                                            ),
                                        e.decimalPlacesRawValue < e.decimalPlacesShownOnBlur &&
                                            D.default.warning(
                                                "The number of decimal places to store in the raw value [" +
                                                    e.decimalPlacesRawValue +
                                                    "] is lower than the ones shown when unfocused [" +
                                                    e.decimalPlacesShownOnBlur +
                                                    "]. This will likely confuse your users.\nTo solve that, you'd need to either set `decimalPlacesRawValue` to `null`, or set a number of decimal places for the raw value equal of bigger than `decimalPlacesShownOnBlur`.",
                                                e.showWarnings
                                            ));
                                },
                            },
                            {
                                key: "areSettingsValid",
                                value: function (e) {
                                    var t = !0;
                                    try {
                                        this.validate(e, !0);
                                    } catch (e) {
                                        t = !1;
                                    }
                                    return t;
                                },
                            },
                            {
                                key: "getDefaultConfig",
                                value: function () {
                                    return I.defaultSettings;
                                },
                            },
                            {
                                key: "getPredefinedOptions",
                                value: function () {
                                    return I.predefinedOptions;
                                },
                            },
                            {
                                key: "_generateOptionsObjectFromOptionsArray",
                                value: function (e) {
                                    var t = this,
                                        i = void 0;
                                    return (
                                        D.default.isUndefinedOrNullOrEmpty(e) || 0 === e.length
                                            ? (i = null)
                                            : ((i = {}),
                                              1 === e.length && Array.isArray(e[0])
                                                  ? e[0].forEach(function (e) {
                                                        y(i, t._getOptionObject(e));
                                                    })
                                                  : 1 <= e.length &&
                                                    e.forEach(function (e) {
                                                        y(i, t._getOptionObject(e));
                                                    })),
                                        i
                                    );
                                },
                            },
                            {
                                key: "format",
                                value: function (e) {
                                    if (D.default.isUndefined(e) || null === e) return null;
                                    var t;
                                    (t = D.default.isElement(e) ? D.default.getElementValue(e) : e),
                                        D.default.isString(t) || D.default.isNumber(t) || D.default.throwError('The value "' + t + '" being "set" is not numeric and therefore cannot be used appropriately.');
                                    for (var i = arguments.length, n = Array(1 < i ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a];
                                    var r = this._generateOptionsObjectFromOptionsArray(n),
                                        s = y({}, this.getDefaultConfig(), r);
                                    (s.isNegativeSignAllowed = t < 0), (s.isPositiveSignAllowed = 0 <= t), this._setBrackets(s), this._cachesUsualRegularExpressions(s, {});
                                    var o = this._toNumericValue(t, s);
                                    isNaN(Number(o)) && D.default.throwError("The value [" + o + "] that you are trying to format is not a recognized number.");
                                    var l = this._checkIfInRangeWithOverrideOption(o, s),
                                        u = S(l, 2),
                                        c = u[0],
                                        h = u[1];
                                    return (
                                        (c && h) ||
                                            (D.default.triggerEvent(
                                                I.events.formatted,
                                                document,
                                                { oldValue: null, newValue: null, oldRawValue: null, newRawValue: null, isPristine: null, error: "Range test failed", aNElement: null },
                                                !0,
                                                !0
                                            ),
                                            D.default.throwError("The value [" + o + "] being set falls outside of the minimumValue [" + s.minimumValue + "] and maximumValue [" + s.maximumValue + "] range set for this element")),
                                        s.valuesToStrings && this._checkValuesToStringsSettings(t, s)
                                            ? s.valuesToStrings[t]
                                            : (this._correctNegativePositiveSignPlacementOption(s),
                                              this._calculateDecimalPlacesOnInit(s),
                                              D.default.isUndefinedOrNullOrEmpty(s.rawValueDivisor) || 0 === s.rawValueDivisor || "" === o || null === o || (o *= s.rawValueDivisor),
                                              (o = this._roundFormattedValueShownOnFocus(o, s)),
                                              (o = this._modifyNegativeSignAndDecimalCharacterForFormattedValue(o, s)),
                                              (o = this._addGroupSeparators(o, s, !1, o)))
                                    );
                                },
                            },
                            {
                                key: "formatAndSet",
                                value: function (e) {
                                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                                        i = this.format(e, t);
                                    return D.default.setElementValue(e, i), i;
                                },
                            },
                            {
                                key: "unformat",
                                value: function (e) {
                                    if (D.default.isNumberStrict(e)) return e;
                                    var t = void 0;
                                    if ("" === (t = D.default.isElement(e) ? D.default.getElementValue(e) : e)) return "";
                                    if (D.default.isUndefined(t) || null === t) return null;
                                    (D.default.isArray(t) || D.default.isObject(t)) && D.default.throwError("A number or a string representing a number is needed to be able to unformat it, [" + t + "] given.");
                                    for (var i = arguments.length, n = Array(1 < i ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a];
                                    var r = this._generateOptionsObjectFromOptionsArray(n),
                                        s = y({}, this.getDefaultConfig(), r);
                                    if (((s.isNegativeSignAllowed = !1), (s.isPositiveSignAllowed = !0), (t = t.toString()), s.valuesToStrings && this._checkStringsToValuesSettings(t, s)))
                                        return D.default.objectKeyLookup(s.valuesToStrings, t);
                                    if (D.default.isNegative(t, s.negativeSignCharacter)) (s.isNegativeSignAllowed = !0), (s.isPositiveSignAllowed = !1);
                                    else if (!D.default.isNull(s.negativeBracketsTypeOnBlur)) {
                                        var o = s.negativeBracketsTypeOnBlur.split(","),
                                            l = S(o, 2);
                                        (s.firstBracket = l[0]),
                                            (s.lastBracket = l[1]),
                                            t.charAt(0) === s.firstBracket && t.charAt(t.length - 1) === s.lastBracket && ((s.isNegativeSignAllowed = !0), (s.isPositiveSignAllowed = !1), (t = this._removeBrackets(t, s, !1)));
                                    }
                                    return (
                                        (t = this._convertToNumericString(t, s)),
                                        new RegExp("[^+-0123456789.]", "gi").test(t)
                                            ? NaN
                                            : (this._correctNegativePositiveSignPlacementOption(s),
                                              s.decimalPlacesRawValue ? (s.originalDecimalPlacesRawValue = s.decimalPlacesRawValue) : (s.originalDecimalPlacesRawValue = s.decimalPlaces),
                                              this._calculateDecimalPlacesOnInit(s),
                                              D.default.isUndefinedOrNullOrEmpty(s.rawValueDivisor) || 0 === s.rawValueDivisor || "" === t || null === t || (t /= s.rawValueDivisor),
                                              (t = (t = this._roundRawValue(t, s)).replace(s.decimalCharacter, ".")),
                                              (t = this._toLocale(t, s.outputFormat, s)))
                                    );
                                },
                            },
                            {
                                key: "unformatAndSet",
                                value: function (e) {
                                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                                        i = this.unformat(e, t);
                                    return D.default.setElementValue(e, i), i;
                                },
                            },
                            {
                                key: "localize",
                                value: function (e) {
                                    var t,
                                        i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                                        n = void 0;
                                    return "" === (n = D.default.isElement(e) ? D.default.getElementValue(e) : e)
                                        ? ""
                                        : (D.default.isNull(i) && (i = I.defaultSettings),
                                          (n = this.unformat(n, i)),
                                          0 === Number(n) && i.leadingZero !== I.options.leadingZero.keep && (n = "0"),
                                          (t = D.default.isNull(i) ? i.outputFormat : I.defaultSettings.outputFormat),
                                          this._toLocale(n, t, i));
                                },
                            },
                            {
                                key: "localizeAndSet",
                                value: function (e) {
                                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                                        i = this.localize(e, t);
                                    return D.default.setElementValue(e, i), i;
                                },
                            },
                            {
                                key: "isManagedByAutoNumeric",
                                value: function (e) {
                                    return this._isInGlobalList(D.default.domElement(e));
                                },
                            },
                            {
                                key: "getAutoNumericElement",
                                value: function (e) {
                                    var t = D.default.domElement(e);
                                    return this.isManagedByAutoNumeric(t) ? this._getFromGlobalList(t) : null;
                                },
                            },
                            {
                                key: "set",
                                value: function (e, t) {
                                    var i,
                                        n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                                        a = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
                                        r = D.default.domElement(e);
                                    return this.isManagedByAutoNumeric(r)
                                        ? this.getAutoNumericElement(r).set(t, n, a)
                                        : ((i = !(!D.default.isNull(n) && n.hasOwnProperty("showWarnings")) || n.showWarnings), D.default.warning("Impossible to find an AutoNumeric object for the given DOM element or selector.", i), null);
                                },
                            },
                            {
                                key: "getNumericString",
                                value: function (e) {
                                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                                    return this._get(e, "getNumericString", t);
                                },
                            },
                            {
                                key: "getFormatted",
                                value: function (e) {
                                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                                    return this._get(e, "getFormatted", t);
                                },
                            },
                            {
                                key: "getNumber",
                                value: function (e) {
                                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                                    return this._get(e, "getNumber", t);
                                },
                            },
                            {
                                key: "_get",
                                value: function (e, t) {
                                    var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                                        n = D.default.domElement(e);
                                    return this.isManagedByAutoNumeric(n) || D.default.throwError("Impossible to find an AutoNumeric object for the given DOM element or selector."), this.getAutoNumericElement(n)[t](i);
                                },
                            },
                            {
                                key: "getLocalized",
                                value: function (e) {
                                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                                        n = D.default.domElement(e);
                                    return this.isManagedByAutoNumeric(n) || D.default.throwError("Impossible to find an AutoNumeric object for the given DOM element or selector."), this.getAutoNumericElement(n).getLocalized(t, i);
                                },
                            },
                            {
                                key: "_stripAllNonNumberCharacters",
                                value: function (e, t, i, n) {
                                    return this._stripAllNonNumberCharactersExceptCustomDecimalChar(e, t, i, n).replace(t.decimalCharacter, ".");
                                },
                            },
                            {
                                key: "_stripAllNonNumberCharactersExceptCustomDecimalChar",
                                value: function (e, t, i, n) {
                                    var a = (e = (e = this._normalizeCurrencySuffixAndNegativeSignCharacters(e, t)).replace(t.allowedAutoStrip, "")).match(t.numRegAutoStrip);
                                    if (((e = a ? [a[1], a[2], a[3]].join("") : ""), t.leadingZero === I.options.leadingZero.allow || t.leadingZero === I.options.leadingZero.keep)) {
                                        var r = "",
                                            s = e.split(t.decimalCharacter),
                                            o = S(s, 2),
                                            l = o[0],
                                            u = o[1],
                                            c = l;
                                        D.default.contains(c, t.negativeSignCharacter) && ((r = t.negativeSignCharacter), (c = c.replace(t.negativeSignCharacter, ""))),
                                            "" === r && c.length > t.mIntPos && "0" === c.charAt(0) && (c = c.slice(1)),
                                            "" !== r && c.length > t.mIntNeg && "0" === c.charAt(0) && (c = c.slice(1)),
                                            (e = "" + r + c + (D.default.isUndefined(u) ? "" : t.decimalCharacter + u));
                                    }
                                    return ((i && t.leadingZero === I.options.leadingZero.deny) || (!n && t.leadingZero === I.options.leadingZero.allow)) && (e = e.replace(t.stripReg, "$1$2")), e;
                                },
                            },
                            {
                                key: "_toggleNegativeBracket",
                                value: function (e, t, i) {
                                    return i ? this._removeBrackets(e, t) : this._addBrackets(e, t);
                                },
                            },
                            {
                                key: "_addBrackets",
                                value: function (e, t) {
                                    return D.default.isNull(t.negativeBracketsTypeOnBlur) ? e : "" + t.firstBracket + e.replace(t.negativeSignCharacter, "") + t.lastBracket;
                                },
                            },
                            {
                                key: "_removeBrackets",
                                value: function (e, t) {
                                    var i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                                        n = void 0;
                                    return D.default.isNull(t.negativeBracketsTypeOnBlur) || e.charAt(0) !== t.firstBracket
                                        ? e
                                        : ((n = (n = e.replace(t.firstBracket, "")).replace(t.lastBracket, "")),
                                          i ? ((n = n.replace(t.currencySymbol, "")), this._mergeCurrencySignNegativePositiveSignAndValue(n, t, !0, !1)) : "" + t.negativeSignCharacter + n);
                                },
                            },
                            {
                                key: "_setBrackets",
                                value: function (e) {
                                    if (D.default.isNull(e.negativeBracketsTypeOnBlur)) (e.firstBracket = ""), (e.lastBracket = "");
                                    else {
                                        var t = e.negativeBracketsTypeOnBlur.split(","),
                                            i = S(t, 2),
                                            n = i[0],
                                            a = i[1];
                                        (e.firstBracket = n), (e.lastBracket = a);
                                    }
                                },
                            },
                            {
                                key: "_convertToNumericString",
                                value: function (e, t) {
                                    (e = this._removeBrackets(e, t, !1)),
                                        (e = (e = this._normalizeCurrencySuffixAndNegativeSignCharacters(e, t)).replace(new RegExp("[" + t.digitGroupSeparator + "]", "g"), "")),
                                        "." !== t.decimalCharacter && (e = e.replace(t.decimalCharacter, ".")),
                                        D.default.isNegative(e) && e.lastIndexOf("-") === e.length - 1 && (e = "-" + (e = e.replace("-", ""))),
                                        t.showPositiveSign && (e = e.replace(t.positiveSignCharacter, ""));
                                    var i = t.leadingZero !== I.options.leadingZero.keep,
                                        n = D.default.arabicToLatinNumbers(e, i, !1, !1);
                                    return isNaN(n) || (e = n.toString()), e;
                                },
                            },
                            {
                                key: "_normalizeCurrencySuffixAndNegativeSignCharacters",
                                value: function (e, t) {
                                    return (
                                        (e = String(e)),
                                        t.currencySymbol !== I.options.currencySymbol.none && (e = e.replace(t.currencySymbol, "")),
                                        t.suffixText !== I.options.suffixText.none && (e = e.replace(t.suffixText, "")),
                                        t.negativeSignCharacter !== I.options.negativeSignCharacter.hyphen && (e = e.replace(t.negativeSignCharacter, "-")),
                                        e
                                    );
                                },
                            },
                            {
                                key: "_toLocale",
                                value: function (e, t, i) {
                                    if (D.default.isNull(t) || t === I.options.outputFormat.string) return e;
                                    var n = void 0;
                                    switch (t) {
                                        case I.options.outputFormat.number:
                                            n = Number(e);
                                            break;
                                        case I.options.outputFormat.dotNegative:
                                            n = D.default.isNegative(e) ? e.replace("-", "") + "-" : e;
                                            break;
                                        case I.options.outputFormat.comma:
                                        case I.options.outputFormat.negativeComma:
                                            n = e.replace(".", ",");
                                            break;
                                        case I.options.outputFormat.commaNegative:
                                            (n = e.replace(".", ",")), (n = D.default.isNegative(n) ? n.replace("-", "") + "-" : n);
                                            break;
                                        case I.options.outputFormat.dot:
                                        case I.options.outputFormat.negativeDot:
                                            n = e;
                                            break;
                                        default:
                                            D.default.throwError("The given outputFormat [" + t + "] option is not recognized.");
                                    }
                                    return t !== I.options.outputFormat.number && "-" !== i.negativeSignCharacter && (n = n.replace("-", i.negativeSignCharacter)), n;
                                },
                            },
                            {
                                key: "_modifyNegativeSignAndDecimalCharacterForFormattedValue",
                                value: function (e, t) {
                                    return "-" !== t.negativeSignCharacter && (e = e.replace("-", t.negativeSignCharacter)), "." !== t.decimalCharacter && (e = e.replace(".", t.decimalCharacter)), e;
                                },
                            },
                            {
                                key: "_isElementValueEmptyOrOnlyTheNegativeSign",
                                value: function (e, t) {
                                    return "" === e || e === t.negativeSignCharacter;
                                },
                            },
                            {
                                key: "_orderValueCurrencySymbolAndSuffixText",
                                value: function (e, t, i) {
                                    var n = void 0;
                                    if (t.emptyInputBehavior === I.options.emptyInputBehavior.always || i)
                                        switch (t.negativePositiveSignPlacement) {
                                            case I.options.negativePositiveSignPlacement.left:
                                            case I.options.negativePositiveSignPlacement.prefix:
                                            case I.options.negativePositiveSignPlacement.none:
                                                n = e + t.currencySymbol + t.suffixText;
                                                break;
                                            default:
                                                n = t.currencySymbol + e + t.suffixText;
                                        }
                                    else n = e;
                                    return n;
                                },
                            },
                            {
                                key: "_addGroupSeparators",
                                value: function (e, t, i, n) {
                                    var a,
                                        r = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : null;
                                    if (
                                        ((a = D.default.isNull(r) ? D.default.isNegative(e, t.negativeSignCharacter) || D.default.isNegativeWithBrackets(e, t.firstBracket, t.lastBracket) : r < 0),
                                        (e = this._stripAllNonNumberCharactersExceptCustomDecimalChar(e, t, !1, i)),
                                        this._isElementValueEmptyOrOnlyTheNegativeSign(e, t))
                                    )
                                        return this._orderValueCurrencySymbolAndSuffixText(e, t, !0);
                                    var s = D.default.isZeroOrHasNoValue(e);
                                    a && (e = e.replace("-", "")), (t.digitalGroupSpacing = t.digitalGroupSpacing.toString());
                                    var o = void 0;
                                    switch (t.digitalGroupSpacing) {
                                        case I.options.digitalGroupSpacing.two:
                                            o = /(\d)((\d)(\d{2}?)+)$/;
                                            break;
                                        case I.options.digitalGroupSpacing.twoScaled:
                                            o = /(\d)((?:\d{2}){0,2}\d{3}(?:(?:\d{2}){2}\d{3})*?)$/;
                                            break;
                                        case I.options.digitalGroupSpacing.four:
                                            o = /(\d)((\d{4}?)+)$/;
                                            break;
                                        case I.options.digitalGroupSpacing.three:
                                        default:
                                            o = /(\d)((\d{3}?)+)$/;
                                    }
                                    var l,
                                        u = e.split(t.decimalCharacter),
                                        c = S(u, 2),
                                        h = c[0],
                                        d = c[1];
                                    if (t.decimalCharacterAlternative && D.default.isUndefined(d)) {
                                        var m = e.split(t.decimalCharacterAlternative),
                                            f = S(m, 2);
                                        (h = f[0]), (d = f[1]);
                                    }
                                    if ("" !== t.digitGroupSeparator) for (; o.test(h); ) h = h.replace(o, "$1" + t.digitGroupSeparator + "$2");
                                    return (
                                        (e = 0 === (l = i ? t.decimalPlacesShownOnFocus : t.decimalPlacesShownOnBlur) || D.default.isUndefined(d) ? h : (d.length > l && (d = d.substring(0, l)), "" + h + t.decimalCharacter + d)),
                                        (e = I._mergeCurrencySignNegativePositiveSignAndValue(e, t, a, s)),
                                        D.default.isNull(r) && (r = n),
                                        null !== t.negativeBracketsTypeOnBlur && (r < 0 || D.default.isNegativeStrict(e, t.negativeSignCharacter)) && (e = this._toggleNegativeBracket(e, t, i)),
                                        t.suffixText ? "" + e + t.suffixText : e
                                    );
                                },
                            },
                            {
                                key: "_mergeCurrencySignNegativePositiveSignAndValue",
                                value: function (e, t, i, n) {
                                    var a = "";
                                    i ? (a = t.negativeSignCharacter) : t.showPositiveSign && !n && (a = t.positiveSignCharacter);
                                    var r = void 0;
                                    if (t.currencySymbolPlacement === I.options.currencySymbolPlacement.prefix)
                                        if (t.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.none && (i || (!i && t.showPositiveSign && !n)))
                                            switch (t.negativePositiveSignPlacement) {
                                                case I.options.negativePositiveSignPlacement.prefix:
                                                case I.options.negativePositiveSignPlacement.left:
                                                    r = "" + a + t.currencySymbol + e;
                                                    break;
                                                case I.options.negativePositiveSignPlacement.right:
                                                    r = "" + t.currencySymbol + a + e;
                                                    break;
                                                case I.options.negativePositiveSignPlacement.suffix:
                                                    r = "" + t.currencySymbol + e + a;
                                            }
                                        else r = t.currencySymbol + e;
                                    else if (t.currencySymbolPlacement === I.options.currencySymbolPlacement.suffix)
                                        if (t.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.none && (i || (!i && t.showPositiveSign && !n)))
                                            switch (t.negativePositiveSignPlacement) {
                                                case I.options.negativePositiveSignPlacement.suffix:
                                                case I.options.negativePositiveSignPlacement.right:
                                                    r = "" + e + t.currencySymbol + a;
                                                    break;
                                                case I.options.negativePositiveSignPlacement.left:
                                                    r = "" + e + a + t.currencySymbol;
                                                    break;
                                                case I.options.negativePositiveSignPlacement.prefix:
                                                    r = "" + a + e + t.currencySymbol;
                                            }
                                        else r = e + t.currencySymbol;
                                    return r;
                                },
                            },
                            {
                                key: "_truncateZeros",
                                value: function (e, t) {
                                    var i = void 0;
                                    switch (t) {
                                        case 0:
                                            i = /(\.(?:\d*[1-9])?)0*$/;
                                            break;
                                        case 1:
                                            i = /(\.\d(?:\d*[1-9])?)0*$/;
                                            break;
                                        default:
                                            i = new RegExp("(\\.\\d{" + t + "}(?:\\d*[1-9])?)0*");
                                    }
                                    return (e = e.replace(i, "$1")), 0 === t && (e = e.replace(/\.$/, "")), e;
                                },
                            },
                            {
                                key: "_roundRawValue",
                                value: function (e, t) {
                                    return this._roundValue(e, t, t.decimalPlacesRawValue);
                                },
                            },
                            {
                                key: "_roundFormattedValueShownOnFocus",
                                value: function (e, t) {
                                    return this._roundValue(e, t, Number(t.decimalPlacesShownOnFocus));
                                },
                            },
                            {
                                key: "_roundFormattedValueShownOnBlur",
                                value: function (e, t) {
                                    return this._roundValue(e, t, Number(t.decimalPlacesShownOnBlur));
                                },
                            },
                            {
                                key: "_roundFormattedValueShownOnFocusOrBlur",
                                value: function (e, t, i) {
                                    return i ? this._roundFormattedValueShownOnFocus(e, t) : this._roundFormattedValueShownOnBlur(e, t);
                                },
                            },
                            {
                                key: "_roundValue",
                                value: function (e, t, i) {
                                    if (D.default.isNull(e)) return e;
                                    if (
                                        ((e = "" === e ? "0" : e.toString()),
                                        t.roundingMethod === I.options.roundingMethod.toNearest05 ||
                                            t.roundingMethod === I.options.roundingMethod.toNearest05Alt ||
                                            t.roundingMethod === I.options.roundingMethod.upToNext05 ||
                                            t.roundingMethod === I.options.roundingMethod.downToNext05)
                                    )
                                        return this._roundCloseTo05(e, t);
                                    var n,
                                        a = I._prepareValueForRounding(e, t),
                                        r = S(a, 2),
                                        s = r[0],
                                        o = (e = r[1]).lastIndexOf("."),
                                        l = -1 === o,
                                        u = e.split(".");
                                    if (!(0 < S(u, 2)[1] || (t.allowDecimalPadding !== I.options.allowDecimalPadding.never && t.allowDecimalPadding !== I.options.allowDecimalPadding.floats))) return 0 === Number(e) ? e : "" + s + e;
                                    n = t.allowDecimalPadding === I.options.allowDecimalPadding.always || t.allowDecimalPadding === I.options.allowDecimalPadding.floats ? i : 0;
                                    var c,
                                        h = l ? e.length - 1 : o,
                                        d = e.length - 1 - h,
                                        m = "";
                                    if (d <= i) {
                                        if (((m = e), d < n)) {
                                            l && (m = "" + m + t.decimalCharacter);
                                            for (var f = "000000"; d < n; ) (m += f = f.substring(0, n - d)), (d += f.length);
                                        } else n < d ? (m = this._truncateZeros(m, n)) : 0 === d && 0 === n && (m = m.replace(/\.$/, ""));
                                        return 0 === Number(m) ? m : "" + s + m;
                                    }
                                    c = l ? i - 1 : Number(i) + Number(o);
                                    var g,
                                        v = Number(e.charAt(c + 1)),
                                        p = e.substring(0, c + 1).split("");
                                    if (((g = "." === e.charAt(c) ? e.charAt(c - 1) % 2 : e.charAt(c) % 2), this._shouldRoundUp(v, t, s, g)))
                                        for (var y = p.length - 1; 0 <= y; y -= 1)
                                            if ("." !== p[y]) {
                                                if (((p[y] = +p[y] + 1), p[y] < 10)) break;
                                                0 < y && (p[y] = "0");
                                            }
                                    return (p = p.slice(0, c + 1)), (m = this._truncateZeros(p.join(""), n)), 0 === Number(m) ? m : "" + s + m;
                                },
                            },
                            {
                                key: "_roundCloseTo05",
                                value: function (e, t) {
                                    switch (t.roundingMethod) {
                                        case I.options.roundingMethod.toNearest05:
                                        case I.options.roundingMethod.toNearest05Alt:
                                            e = (Math.round(20 * e) / 20).toString();
                                            break;
                                        case I.options.roundingMethod.upToNext05:
                                            e = (Math.ceil(20 * e) / 20).toString();
                                            break;
                                        default:
                                            e = (Math.floor(20 * e) / 20).toString();
                                    }
                                    return D.default.contains(e, ".") ? (e.length - e.indexOf(".") < 3 ? e + "0" : e) : e + ".00";
                                },
                            },
                            {
                                key: "_prepareValueForRounding",
                                value: function (e, t) {
                                    var i = "";
                                    return (
                                        D.default.isNegativeStrict(e, "-") && ((i = "-"), (e = e.replace("-", ""))),
                                        e.match(/^\d/) || (e = "0" + e),
                                        0 === Number(e) && (i = ""),
                                        ((0 < Number(e) && t.leadingZero !== I.options.leadingZero.keep) || (0 < e.length && t.leadingZero === I.options.leadingZero.allow)) && (e = e.replace(/^0*(\d)/, "$1")),
                                        [i, e]
                                    );
                                },
                            },
                            {
                                key: "_shouldRoundUp",
                                value: function (e, t, i, n) {
                                    return (
                                        (4 < e && t.roundingMethod === I.options.roundingMethod.halfUpSymmetric) ||
                                        (4 < e && t.roundingMethod === I.options.roundingMethod.halfUpAsymmetric && "" === i) ||
                                        (5 < e && t.roundingMethod === I.options.roundingMethod.halfUpAsymmetric && "-" === i) ||
                                        (5 < e && t.roundingMethod === I.options.roundingMethod.halfDownSymmetric) ||
                                        (5 < e && t.roundingMethod === I.options.roundingMethod.halfDownAsymmetric && "" === i) ||
                                        (4 < e && t.roundingMethod === I.options.roundingMethod.halfDownAsymmetric && "-" === i) ||
                                        (5 < e && t.roundingMethod === I.options.roundingMethod.halfEvenBankersRounding) ||
                                        (5 === e && t.roundingMethod === I.options.roundingMethod.halfEvenBankersRounding && 1 === n) ||
                                        (0 < e && t.roundingMethod === I.options.roundingMethod.toCeilingTowardPositiveInfinity && "" === i) ||
                                        (0 < e && t.roundingMethod === I.options.roundingMethod.toFloorTowardNegativeInfinity && "-" === i) ||
                                        (0 < e && t.roundingMethod === I.options.roundingMethod.upRoundAwayFromZero)
                                    );
                                },
                            },
                            {
                                key: "_truncateDecimalPlaces",
                                value: function (e, t, i, n) {
                                    i && (e = this._roundFormattedValueShownOnFocus(e, t));
                                    var a = e.split(t.decimalCharacter),
                                        r = S(a, 2),
                                        s = r[0],
                                        o = r[1];
                                    if (o && o.length > n)
                                        if (0 < n) {
                                            var l = o.substring(0, n);
                                            e = "" + s + t.decimalCharacter + l;
                                        } else e = s;
                                    return e;
                                },
                            },
                            {
                                key: "_checkIfInRangeWithOverrideOption",
                                value: function (e, t) {
                                    if (D.default.isNull(e) && t.emptyInputBehavior === I.options.emptyInputBehavior.null) return [!0, !0];
                                    e = (e = e.toString()).replace(",", ".");
                                    var i = D.default.parseStr(t.minimumValue),
                                        n = D.default.parseStr(t.maximumValue),
                                        a = D.default.parseStr(e),
                                        r = void 0;
                                    switch (t.overrideMinMaxLimits) {
                                        case I.options.overrideMinMaxLimits.floor:
                                            r = [-1 < D.default.testMinMax(i, a), !0];
                                            break;
                                        case I.options.overrideMinMaxLimits.ceiling:
                                            r = [!0, D.default.testMinMax(n, a) < 1];
                                            break;
                                        case I.options.overrideMinMaxLimits.ignore:
                                            r = [!0, !0];
                                            break;
                                        default:
                                            r = [-1 < D.default.testMinMax(i, a), D.default.testMinMax(n, a) < 1];
                                    }
                                    return r;
                                },
                            },
                            {
                                key: "_readCookie",
                                value: function (e) {
                                    for (var t = e + "=", i = document.cookie.split(";"), n = "", a = 0; a < i.length; a += 1) {
                                        for (n = i[a]; " " === n.charAt(0); ) n = n.substring(1, n.length);
                                        if (0 === n.indexOf(t)) return n.substring(t.length, n.length);
                                    }
                                    return null;
                                },
                            },
                            {
                                key: "_storageTest",
                                value: function () {
                                    var e = "modernizr";
                                    try {
                                        return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0;
                                    } catch (e) {
                                        return !1;
                                    }
                                },
                            },
                            {
                                key: "_correctNegativePositiveSignPlacementOption",
                                value: function (e) {
                                    if (D.default.isNull(e.negativePositiveSignPlacement))
                                        if (D.default.isUndefined(e) || !D.default.isUndefinedOrNullOrEmpty(e.negativePositiveSignPlacement) || D.default.isUndefinedOrNullOrEmpty(e.currencySymbol))
                                            e.negativePositiveSignPlacement = I.options.negativePositiveSignPlacement.left;
                                        else
                                            switch (e.currencySymbolPlacement) {
                                                case I.options.currencySymbolPlacement.suffix:
                                                    e.negativePositiveSignPlacement = I.options.negativePositiveSignPlacement.prefix;
                                                    break;
                                                case I.options.currencySymbolPlacement.prefix:
                                                    e.negativePositiveSignPlacement = I.options.negativePositiveSignPlacement.left;
                                            }
                                },
                            },
                            {
                                key: "_correctCaretPositionOnFocusAndSelectOnFocusOptions",
                                value: function (e) {
                                    return D.default.isNull(e)
                                        ? null
                                        : (!D.default.isUndefinedOrNullOrEmpty(e.caretPositionOnFocus) && D.default.isUndefinedOrNullOrEmpty(e.selectOnFocus) && (e.selectOnFocus = I.options.selectOnFocus.doNotSelect),
                                          D.default.isUndefinedOrNullOrEmpty(e.caretPositionOnFocus) &&
                                              !D.default.isUndefinedOrNullOrEmpty(e.selectOnFocus) &&
                                              e.selectOnFocus === I.options.selectOnFocus.select &&
                                              (e.caretPositionOnFocus = I.options.caretPositionOnFocus.doNoForceCaretPosition),
                                          e);
                                },
                            },
                            {
                                key: "_calculateDecimalPlacesOnInit",
                                value: function (e) {
                                    this._validateDecimalPlacesRawValue(e),
                                        e.decimalPlacesShownOnFocus === I.options.decimalPlacesShownOnFocus.useDefault && (e.decimalPlacesShownOnFocus = e.decimalPlaces),
                                        e.decimalPlacesShownOnBlur === I.options.decimalPlacesShownOnBlur.useDefault && (e.decimalPlacesShownOnBlur = e.decimalPlaces),
                                        e.decimalPlacesRawValue === I.options.decimalPlacesRawValue.useDefault && (e.decimalPlacesRawValue = e.decimalPlaces);
                                    var t = 0;
                                    e.rawValueDivisor && e.rawValueDivisor !== I.options.rawValueDivisor.none && (t = String(e.rawValueDivisor).length - 1) < 0 && (t = 0),
                                        (e.decimalPlacesRawValue = Math.max(Math.max(e.decimalPlacesShownOnBlur, e.decimalPlacesShownOnFocus) + t, Number(e.originalDecimalPlacesRawValue) + t));
                                },
                            },
                            {
                                key: "_calculateDecimalPlacesOnUpdate",
                                value: function (e) {
                                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                                    this._validateDecimalPlacesRawValue(e), D.default.isNull(t) && D.default.throwError("When updating the settings, the previous ones should be passed as an argument.");
                                    var i = "decimalPlaces" in e;
                                    if (i || "decimalPlacesRawValue" in e || "decimalPlacesShownOnFocus" in e || "decimalPlacesShownOnBlur" in e || "rawValueDivisor" in e) {
                                        i
                                            ? (("decimalPlacesShownOnFocus" in e && e.decimalPlacesShownOnFocus !== I.options.decimalPlacesShownOnFocus.useDefault) || (e.decimalPlacesShownOnFocus = e.decimalPlaces),
                                              ("decimalPlacesShownOnBlur" in e && e.decimalPlacesShownOnBlur !== I.options.decimalPlacesShownOnBlur.useDefault) || (e.decimalPlacesShownOnBlur = e.decimalPlaces),
                                              ("decimalPlacesRawValue" in e && e.decimalPlacesRawValue !== I.options.decimalPlacesRawValue.useDefault) || (e.decimalPlacesRawValue = e.decimalPlaces))
                                            : (D.default.isUndefined(e.decimalPlacesShownOnFocus) && (e.decimalPlacesShownOnFocus = t.decimalPlacesShownOnFocus),
                                              D.default.isUndefined(e.decimalPlacesShownOnBlur) && (e.decimalPlacesShownOnBlur = t.decimalPlacesShownOnBlur));
                                        var n = 0;
                                        e.rawValueDivisor && e.rawValueDivisor !== I.options.rawValueDivisor.none && (n = String(e.rawValueDivisor).length - 1) < 0 && (n = 0),
                                            e.decimalPlaces || e.decimalPlacesRawValue
                                                ? (e.decimalPlacesRawValue = Math.max(Math.max(e.decimalPlacesShownOnBlur, e.decimalPlacesShownOnFocus) + n, Number(e.decimalPlacesRawValue) + n))
                                                : (e.decimalPlacesRawValue = Math.max(Math.max(e.decimalPlacesShownOnBlur, e.decimalPlacesShownOnFocus) + n, Number(t.originalDecimalPlacesRawValue) + n));
                                    }
                                },
                            },
                            {
                                key: "_cachesUsualRegularExpressions",
                                value: function (e, t) {
                                    var i;
                                    (i = e.negativeSignCharacter !== I.options.negativeSignCharacter.hyphen ? "([-\\" + e.negativeSignCharacter + "]?)" : "(-?)"),
                                        (t.aNegRegAutoStrip = i),
                                        (e.allowedAutoStrip = new RegExp("[^-0123456789\\" + e.decimalCharacter + "]", "g")),
                                        (e.numRegAutoStrip = new RegExp(i + "(?:\\" + e.decimalCharacter + "?([0-9]+\\" + e.decimalCharacter + "[0-9]+)|([0-9]*(?:\\" + e.decimalCharacter + "[0-9]*)?))")),
                                        (e.stripReg = new RegExp("^" + t.aNegRegAutoStrip + "0*([0-9])")),
                                        (e.formulaChars = new RegExp("[0-9" + e.decimalCharacter + "+\\-*/() ]"));
                                },
                            },
                            {
                                key: "_convertOldOptionsToNewOnes",
                                value: function (e) {
                                    var t = {
                                        aSep: "digitGroupSeparator",
                                        nSep: "showOnlyNumbersOnFocus",
                                        dGroup: "digitalGroupSpacing",
                                        aDec: "decimalCharacter",
                                        altDec: "decimalCharacterAlternative",
                                        aSign: "currencySymbol",
                                        pSign: "currencySymbolPlacement",
                                        pNeg: "negativePositiveSignPlacement",
                                        aSuffix: "suffixText",
                                        oLimits: "overrideMinMaxLimits",
                                        vMax: "maximumValue",
                                        vMin: "minimumValue",
                                        mDec: "decimalPlacesOverride",
                                        eDec: "decimalPlacesShownOnFocus",
                                        scaleDecimal: "decimalPlacesShownOnBlur",
                                        aStor: "saveValueToSessionStorage",
                                        mRound: "roundingMethod",
                                        aPad: "allowDecimalPadding",
                                        nBracket: "negativeBracketsTypeOnBlur",
                                        wEmpty: "emptyInputBehavior",
                                        lZero: "leadingZero",
                                        aForm: "formatOnPageLoad",
                                        sNumber: "selectNumberOnly",
                                        anDefault: "defaultValueOverride",
                                        unSetOnSubmit: "unformatOnSubmit",
                                        outputType: "outputFormat",
                                        debug: "showWarnings",
                                        allowDecimalPadding: !0,
                                        alwaysAllowDecimalCharacter: !0,
                                        caretPositionOnFocus: !0,
                                        createLocalList: !0,
                                        currencySymbol: !0,
                                        currencySymbolPlacement: !0,
                                        decimalCharacter: !0,
                                        decimalCharacterAlternative: !0,
                                        decimalPlaces: !0,
                                        decimalPlacesRawValue: !0,
                                        decimalPlacesShownOnBlur: !0,
                                        decimalPlacesShownOnFocus: !0,
                                        defaultValueOverride: !0,
                                        digitalGroupSpacing: !0,
                                        digitGroupSeparator: !0,
                                        divisorWhenUnfocused: !0,
                                        emptyInputBehavior: !0,
                                        eventBubbles: !0,
                                        eventIsCancelable: !0,
                                        failOnUnknownOption: !0,
                                        formatOnPageLoad: !0,
                                        formulaMode: !0,
                                        historySize: !0,
                                        isCancellable: !0,
                                        leadingZero: !0,
                                        maximumValue: !0,
                                        minimumValue: !0,
                                        modifyValueOnWheel: !0,
                                        negativeBracketsTypeOnBlur: !0,
                                        negativePositiveSignPlacement: !0,
                                        negativeSignCharacter: !0,
                                        noEventListeners: !0,
                                        onInvalidPaste: !0,
                                        outputFormat: !0,
                                        overrideMinMaxLimits: !0,
                                        positiveSignCharacter: !0,
                                        rawValueDivisor: !0,
                                        readOnly: !0,
                                        roundingMethod: !0,
                                        saveValueToSessionStorage: !0,
                                        selectNumberOnly: !0,
                                        selectOnFocus: !0,
                                        serializeSpaces: !0,
                                        showOnlyNumbersOnFocus: !0,
                                        showPositiveSign: !0,
                                        showWarnings: !0,
                                        styleRules: !0,
                                        suffixText: !0,
                                        symbolWhenUnfocused: !0,
                                        unformatOnHover: !0,
                                        unformatOnSubmit: !0,
                                        valuesToStrings: !0,
                                        watchExternalChanges: !0,
                                        wheelOn: !0,
                                        wheelStep: !0,
                                        allowedAutoStrip: !0,
                                        formulaChars: !0,
                                        isNegativeSignAllowed: !0,
                                        isPositiveSignAllowed: !0,
                                        mIntNeg: !0,
                                        mIntPos: !0,
                                        numRegAutoStrip: !0,
                                        originalDecimalPlaces: !0,
                                        originalDecimalPlacesRawValue: !0,
                                        stripReg: !0,
                                    };
                                    for (var i in e)
                                        if (e.hasOwnProperty(i)) {
                                            if (!0 === t[i]) continue;
                                            t.hasOwnProperty(i)
                                                ? (D.default.warning("You are using the deprecated option name '" + i + "'. Please use '" + t[i] + "' instead from now on. The old option name will be dropped very soon™.", !0),
                                                  (e[t[i]] = e[i]),
                                                  delete e[i])
                                                : e.failOnUnknownOption && D.default.throwError("Option name '" + i + "' is unknown. Please fix the options passed to autoNumeric");
                                        }
                                    "mDec" in e &&
                                        D.default.warning(
                                            "The old `mDec` option has been deprecated in favor of more accurate options ; `decimalPlaces`, `decimalPlacesRawValue`, `decimalPlacesShownOnFocus` and `decimalPlacesShownOnBlur`.",
                                            !0
                                        );
                                },
                            },
                            {
                                key: "_setNegativePositiveSignPermissions",
                                value: function (e) {
                                    (e.isNegativeSignAllowed = e.minimumValue < 0), (e.isPositiveSignAllowed = 0 <= e.maximumValue);
                                },
                            },
                            {
                                key: "_toNumericValue",
                                value: function (e, t) {
                                    var i = void 0;
                                    return (
                                        D.default.isNumber(Number(e))
                                            ? (i = D.default.scientificToDecimal(e))
                                            : ((i = this._convertToNumericString(e.toString(), t)),
                                              D.default.isNumber(Number(i)) || (D.default.warning('The given value "' + e + '" cannot be converted to a numeric one and therefore cannot be used appropriately.', t.showWarnings), (i = NaN))),
                                        i
                                    );
                                },
                            },
                            {
                                key: "_checkIfInRange",
                                value: function (e, t, i) {
                                    var n = D.default.parseStr(e);
                                    return -1 < D.default.testMinMax(t, n) && D.default.testMinMax(i, n) < 1;
                                },
                            },
                            {
                                key: "_shouldSkipEventKey",
                                value: function (e) {
                                    var t = D.default.isInArray(e, v.default.keyName._allFnKeys),
                                        i = e === v.default.keyName.OSLeft || e === v.default.keyName.OSRight,
                                        n = e === v.default.keyName.ContextMenu,
                                        a = D.default.isInArray(e, v.default.keyName._someNonPrintableKeys),
                                        r = e === v.default.keyName.NumLock || e === v.default.keyName.ScrollLock || e === v.default.keyName.Insert || e === v.default.keyName.Command,
                                        s = e === v.default.keyName.Unidentified;
                                    return t || i || n || a || s || r;
                                },
                            },
                            {
                                key: "_serialize",
                                value: function (e) {
                                    var a = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                                        r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "unformatted",
                                        s = this,
                                        t = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "+",
                                        o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : null,
                                        l = [];
                                    "object" === (void 0 === e ? "undefined" : b(e)) &&
                                        "form" === e.nodeName.toLowerCase() &&
                                        Array.prototype.slice.call(e.elements).forEach(function (t) {
                                            if (t.name && !t.disabled && -1 === ["file", "reset", "submit", "button"].indexOf(t.type))
                                                if ("select-multiple" === t.type)
                                                    Array.prototype.slice.call(t.options).forEach(function (e) {
                                                        e.selected && (a ? l.push({ name: t.name, value: e.value }) : l.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(e.value)));
                                                    });
                                                else if (-1 === ["checkbox", "radio"].indexOf(t.type) || t.checked) {
                                                    var e = void 0;
                                                    if (s.isManagedByAutoNumeric(t)) {
                                                        var i = void 0;
                                                        switch (r) {
                                                            case "unformatted":
                                                                (i = s.getAutoNumericElement(t)), D.default.isNull(i) || (e = s.unformat(t, i.getSettings()));
                                                                break;
                                                            case "localized":
                                                                if (((i = s.getAutoNumericElement(t)), !D.default.isNull(i))) {
                                                                    var n = D.default.cloneObject(i.getSettings());
                                                                    D.default.isNull(o) || (n.outputFormat = o), (e = s.localize(t, n));
                                                                }
                                                                break;
                                                            case "formatted":
                                                            default:
                                                                e = t.value;
                                                        }
                                                    } else e = t.value;
                                                    D.default.isUndefined(e) && D.default.throwError("This error should never be hit. If it has, something really wrong happened!"),
                                                        a ? l.push({ name: t.name, value: e }) : l.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(e));
                                                }
                                        });
                                    var i = void 0;
                                    return a ? (i = l) : ((i = l.join("&")), "+" === t && (i = i.replace(/%20/g, "+"))), i;
                                },
                            },
                            {
                                key: "_serializeNumericString",
                                value: function (e) {
                                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "+";
                                    return this._serialize(e, !1, "unformatted", t);
                                },
                            },
                            {
                                key: "_serializeFormatted",
                                value: function (e) {
                                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "+";
                                    return this._serialize(e, !1, "formatted", t);
                                },
                            },
                            {
                                key: "_serializeLocalized",
                                value: function (e) {
                                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "+",
                                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                                    return this._serialize(e, !1, "localized", t, i);
                                },
                            },
                            {
                                key: "_serializeNumericStringArray",
                                value: function (e) {
                                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "+";
                                    return this._serialize(e, !0, "unformatted", t);
                                },
                            },
                            {
                                key: "_serializeFormattedArray",
                                value: function (e) {
                                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "+";
                                    return this._serialize(e, !0, "formatted", t);
                                },
                            },
                            {
                                key: "_serializeLocalizedArray",
                                value: function (e) {
                                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "+",
                                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                                    return this._serialize(e, !0, "localized", t, i);
                                },
                            },
                        ]
                    ),
                    I
                );
            })();
            ((t.default = p).multiple = function (e) {
                var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                    t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                    n = [];
                if ((D.default.isObject(i) && ((t = i), (i = null)), D.default.isString(e))) e = [].concat(g(document.querySelectorAll(e)));
                else if (D.default.isObject(e)) {
                    e.hasOwnProperty("rootElement") || D.default.throwError("The object passed to the 'multiple' function is invalid ; no 'rootElement' attribute found.");
                    var a = [].concat(g(e.rootElement.querySelectorAll("input")));
                    e = e.hasOwnProperty("exclude") ? (Array.isArray(e.exclude) || D.default.throwError("The 'exclude' array passed to the 'multiple' function is invalid."), D.default.filterOut(a, e.exclude)) : a;
                } else D.default.isArray(e) || D.default.throwError("The given parameters to the 'multiple' function are invalid.");
                if (0 === e.length) {
                    var r = !0;
                    return !D.default.isNull(t) && D.default.isBoolean(t.showWarnings) && (r = t.showWarnings), D.default.warning("No valid DOM elements were given hence no AutoNumeric object were instantiated.", r), [];
                }
                var s = D.default.isArray(i) && 1 <= i.length,
                    o = !1,
                    l = !1;
                if (s) {
                    var u = b(Number(i[0]));
                    (o = "number" === u && !isNaN(Number(i[0]))) || (("string" === u || isNaN(u) || "object" === u) && (l = !0));
                }
                var c,
                    h = !1;
                if (D.default.isArray(t) && 1 <= t.length) {
                    var d = b(t[0]);
                    ("string" !== d && "object" !== d) || (h = !0);
                }
                c = l ? p.mergeOptions(i) : h ? p.mergeOptions(t) : t;
                var m = D.default.isNumber(i),
                    f = void 0;
                return (
                    o && (f = i.length),
                    e.forEach(function (e, t) {
                        m ? n.push(new p(e, i, c)) : o && t <= f ? n.push(new p(e, i[t], c)) : n.push(new p(e, null, c));
                    }),
                    n
                );
            }),
                (function () {
                    function e(e, t) {
                        t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
                        var i = document.createEvent("CustomEvent");
                        return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
                    }
                    Array.from ||
                        (Array.from = function (e) {
                            return [].slice.call(e);
                        }),
                        "undefined" != typeof window && "function" != typeof window.CustomEvent && ((e.prototype = window.Event.prototype), (window.CustomEvent = e));
                })(),
                (e.exports = t.default);
        },
        function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n,
                a =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var i = arguments[t];
                            for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                        }
                        return e;
                    },
                m = function (e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e))
                        return (function (e, t) {
                            var i = [],
                                n = !0,
                                a = !1,
                                r = void 0;
                            try {
                                for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (i.push(s.value), !t || i.length !== t); n = !0);
                            } catch (e) {
                                (a = !0), (r = e);
                            } finally {
                                try {
                                    !n && o.return && o.return();
                                } finally {
                                    if (a) throw r;
                                }
                            }
                            return i;
                        })(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                },
                s =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          },
                o = (function () {
                    function n(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function (e, t, i) {
                        return t && n(e.prototype, t), i && n(e, i), e;
                    };
                })(),
                l = (n = i(2)) && n.__esModule ? n : { default: n };
            function u(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
                    return i;
                }
                return Array.from(e);
            }
            var r = (function () {
                function r() {
                    !(function (e, t) {
                        if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
                    })(this);
                }
                return (
                    o(r, null, [
                        {
                            key: "isNull",
                            value: function (e) {
                                return null === e;
                            },
                        },
                        {
                            key: "isUndefined",
                            value: function (e) {
                                return void 0 === e;
                            },
                        },
                        {
                            key: "isUndefinedOrNullOrEmpty",
                            value: function (e) {
                                return null == e || "" === e;
                            },
                        },
                        {
                            key: "isString",
                            value: function (e) {
                                return "string" == typeof e || e instanceof String;
                            },
                        },
                        {
                            key: "isEmptyString",
                            value: function (e) {
                                return "" === e;
                            },
                        },
                        {
                            key: "isBoolean",
                            value: function (e) {
                                return "boolean" == typeof e;
                            },
                        },
                        {
                            key: "isTrueOrFalseString",
                            value: function (e) {
                                var t = String(e).toLowerCase();
                                return "true" === t || "false" === t;
                            },
                        },
                        {
                            key: "isObject",
                            value: function (e) {
                                return "object" === (void 0 === e ? "undefined" : s(e)) && null !== e && !Array.isArray(e);
                            },
                        },
                        {
                            key: "isEmptyObj",
                            value: function (e) {
                                for (var t in e) if (e.hasOwnProperty(t)) return !1;
                                return !0;
                            },
                        },
                        {
                            key: "isNumberStrict",
                            value: function (e) {
                                return "number" == typeof e;
                            },
                        },
                        {
                            key: "isNumber",
                            value: function (e) {
                                return !this.isArray(e) && !isNaN(parseFloat(e)) && isFinite(e);
                            },
                        },
                        {
                            key: "isDigit",
                            value: function (e) {
                                return /\d/.test(e);
                            },
                        },
                        {
                            key: "isNumberOrArabic",
                            value: function (e) {
                                var t = this.arabicToLatinNumbers(e, !1, !0, !0);
                                return this.isNumber(t);
                            },
                        },
                        {
                            key: "isInt",
                            value: function (e) {
                                return "number" == typeof e && parseFloat(e) === parseInt(e, 10) && !isNaN(e);
                            },
                        },
                        {
                            key: "isFunction",
                            value: function (e) {
                                return "function" == typeof e;
                            },
                        },
                        {
                            key: "isIE11",
                            value: function () {
                                return !!window.MSInputMethodContext && !!document.documentMode;
                            },
                        },
                        {
                            key: "contains",
                            value: function (e, t) {
                                return !(!this.isString(e) || !this.isString(t) || "" === e || "" === t) && -1 !== e.indexOf(t);
                            },
                        },
                        {
                            key: "isInArray",
                            value: function (e, t) {
                                return !(!this.isArray(t) || t === [] || this.isUndefined(e)) && -1 !== t.indexOf(e);
                            },
                        },
                        {
                            key: "isArray",
                            value: function (e) {
                                if ("[object Array]" === Object.prototype.toString.call([])) return Array.isArray(e) || ("object" === (void 0 === e ? "undefined" : s(e)) && "[object Array]" === Object.prototype.toString.call(e));
                                throw new Error("toString message changed for Object Array");
                            },
                        },
                        {
                            key: "isElement",
                            value: function (e) {
                                return "undefined" != typeof Element && e instanceof Element;
                            },
                        },
                        {
                            key: "isInputElement",
                            value: function (e) {
                                return this.isElement(e) && "input" === e.tagName.toLowerCase();
                            },
                        },
                        {
                            key: "decimalPlaces",
                            value: function (e) {
                                var t = e.split("."),
                                    i = m(t, 2)[1];
                                return this.isUndefined(i) ? 0 : i.length;
                            },
                        },
                        {
                            key: "indexFirstNonZeroDecimalPlace",
                            value: function (e) {
                                var t = String(Math.abs(e)).split("."),
                                    i = m(t, 2)[1];
                                if (this.isUndefined(i)) return 0;
                                var n = i.lastIndexOf("0");
                                return -1 === n ? (n = 0) : (n += 2), n;
                            },
                        },
                        {
                            key: "keyCodeNumber",
                            value: function (e) {
                                return void 0 === e.which ? e.keyCode : e.which;
                            },
                        },
                        {
                            key: "character",
                            value: function (e) {
                                var t = void 0;
                                if ("Unidentified" === e.key || void 0 === e.key || this.isSeleniumBot()) {
                                    var i = this.keyCodeNumber(e);
                                    if (i === l.default.keyCode.AndroidDefault) return l.default.keyName.AndroidDefault;
                                    var n = l.default.fromCharCodeKeyCode[i];
                                    t = r.isUndefinedOrNullOrEmpty(n) ? String.fromCharCode(i) : n;
                                } else {
                                    var a = void 0;
                                    switch (e.key) {
                                        case "Add":
                                            t = l.default.keyName.NumpadPlus;
                                            break;
                                        case "Apps":
                                            t = l.default.keyName.ContextMenu;
                                            break;
                                        case "Crsel":
                                            t = l.default.keyName.CrSel;
                                            break;
                                        case "Decimal":
                                            t = l.default.keyName.NumpadDot;
                                            break;
                                        case "Del":
                                            t = ("firefox" === (a = this.browser()).name && a.version <= 36) || ("ie" === a.name && a.version <= 9) ? l.default.keyName.Dot : l.default.keyName.Delete;
                                            break;
                                        case "Divide":
                                            t = l.default.keyName.NumpadSlash;
                                            break;
                                        case "Down":
                                            t = l.default.keyName.DownArrow;
                                            break;
                                        case "Esc":
                                            t = l.default.keyName.Esc;
                                            break;
                                        case "Exsel":
                                            t = l.default.keyName.ExSel;
                                            break;
                                        case "Left":
                                            t = l.default.keyName.LeftArrow;
                                            break;
                                        case "Meta":
                                        case "Super":
                                            t = l.default.keyName.OSLeft;
                                            break;
                                        case "Multiply":
                                            t = l.default.keyName.NumpadMultiply;
                                            break;
                                        case "Right":
                                            t = l.default.keyName.RightArrow;
                                            break;
                                        case "Spacebar":
                                            t = l.default.keyName.Space;
                                            break;
                                        case "Subtract":
                                            t = l.default.keyName.NumpadMinus;
                                            break;
                                        case "Up":
                                            t = l.default.keyName.UpArrow;
                                            break;
                                        default:
                                            t = e.key;
                                    }
                                }
                                return t;
                            },
                        },
                        {
                            key: "browser",
                            value: function () {
                                var e = navigator.userAgent,
                                    t = void 0,
                                    i = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                                return /trident/i.test(i[1])
                                    ? { name: "ie", version: (t = /\brv[ :]+(\d+)/g.exec(e) || [])[1] || "" }
                                    : "Chrome" === i[1] && null !== (t = e.match(/\b(OPR|Edge)\/(\d+)/))
                                    ? { name: t[1].replace("OPR", "opera"), version: t[2] }
                                    : ((i = i[2] ? [i[1], i[2]] : [navigator.appName, navigator.appVersion, "-?"]), null !== (t = e.match(/version\/(\d+)/i)) && i.splice(1, 1, t[1]), { name: i[0].toLowerCase(), version: i[1] });
                            },
                        },
                        {
                            key: "isSeleniumBot",
                            value: function () {
                                return !0 === window.navigator.webdriver;
                            },
                        },
                        {
                            key: "isNegative",
                            value: function (e) {
                                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "-",
                                    i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
                                return e === t || ("" !== e && (r.isNumber(e) ? e < 0 : i ? this.contains(e, t) : this.isNegativeStrict(e, t)));
                            },
                        },
                        {
                            key: "isNegativeStrict",
                            value: function (e) {
                                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "-";
                                return e.charAt(0) === t;
                            },
                        },
                        {
                            key: "isNegativeWithBrackets",
                            value: function (e, t, i) {
                                return e.charAt(0) === t && this.contains(e, i);
                            },
                        },
                        {
                            key: "isZeroOrHasNoValue",
                            value: function (e) {
                                return !/[1-9]/g.test(e);
                            },
                        },
                        {
                            key: "setRawNegativeSign",
                            value: function (e) {
                                return this.isNegativeStrict(e, "-") ? e : "-" + e;
                            },
                        },
                        {
                            key: "replaceCharAt",
                            value: function (e, t, i) {
                                return "" + e.substr(0, t) + i + e.substr(t + i.length);
                            },
                        },
                        {
                            key: "clampToRangeLimits",
                            value: function (e, t) {
                                return Math.max(t.minimumValue, Math.min(t.maximumValue, e));
                            },
                        },
                        {
                            key: "countNumberCharactersOnTheCaretLeftSide",
                            value: function (e, t, i) {
                                for (var n = new RegExp("[0-9" + i + "-]"), a = 0, r = 0; r < t; r++) n.test(e[r]) && a++;
                                return a;
                            },
                        },
                        {
                            key: "findCaretPositionInFormattedNumber",
                            value: function (e, t, i, n) {
                                var a = i.length,
                                    r = e.length,
                                    s = void 0,
                                    o = 0;
                                for (s = 0; s < a && o < r && o < t; s++) (e[o] === i[s] || ("." === e[o] && i[s] === n)) && o++;
                                return s;
                            },
                        },
                        {
                            key: "countCharInText",
                            value: function (e, t) {
                                for (var i = 0, n = 0; n < t.length; n++) t[n] === e && i++;
                                return i;
                            },
                        },
                        {
                            key: "convertCharacterCountToIndexPosition",
                            value: function (e) {
                                return Math.max(e, e - 1);
                            },
                        },
                        {
                            key: "getElementSelection",
                            value: function (e) {
                                var t = {},
                                    i = void 0;
                                try {
                                    i = this.isUndefined(e.selectionStart);
                                } catch (e) {
                                    i = !1;
                                }
                                try {
                                    if (i) {
                                        var n = window.getSelection().getRangeAt(0);
                                        (t.start = n.startOffset), (t.end = n.endOffset), (t.length = t.end - t.start);
                                    } else (t.start = e.selectionStart), (t.end = e.selectionEnd), (t.length = t.end - t.start);
                                } catch (e) {
                                    (t.start = 0), (t.end = 0), (t.length = 0);
                                }
                                return t;
                            },
                        },
                        {
                            key: "setElementSelection",
                            value: function (e, t) {
                                var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                                if ((this.isUndefinedOrNullOrEmpty(i) && (i = t), this.isInputElement(e))) e.setSelectionRange(t, i);
                                else if (!r.isNull(e.firstChild)) {
                                    var n = document.createRange();
                                    n.setStart(e.firstChild, t), n.setEnd(e.firstChild, i);
                                    var a = window.getSelection();
                                    a.removeAllRanges(), a.addRange(n);
                                }
                            },
                        },
                        {
                            key: "throwError",
                            value: function (e) {
                                throw new Error(e);
                            },
                        },
                        {
                            key: "warning",
                            value: function (e) {
                                (!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]) && console.warn("Warning: " + e);
                            },
                        },
                        {
                            key: "isWheelUpEvent",
                            value: function (e) {
                                return e.deltaY || this.throwError("The event passed as a parameter is not a valid wheel event, '" + e.type + "' given."), e.deltaY < 0;
                            },
                        },
                        {
                            key: "isWheelDownEvent",
                            value: function (e) {
                                return e.deltaY || this.throwError("The event passed as a parameter is not a valid wheel event, '" + e.type + "' given."), 0 < e.deltaY;
                            },
                        },
                        {
                            key: "forceDecimalPlaces",
                            value: function (e, t) {
                                var i = String(e).split("."),
                                    n = m(i, 2),
                                    a = n[0],
                                    r = n[1];
                                return r ? a + "." + r.substr(0, t) : e;
                            },
                        },
                        {
                            key: "roundToNearest",
                            value: function (e) {
                                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1e3;
                                return 0 === e ? 0 : (0 === t && this.throwError("The `stepPlace` used to round is equal to `0`. This value must not be equal to zero."), Math.round(e / t) * t);
                            },
                        },
                        {
                            key: "modifyAndRoundToNearestAuto",
                            value: function (e, t, i) {
                                e = Number(this.forceDecimalPlaces(e, i));
                                var n = Math.abs(e);
                                if (0 <= n && n < 1) {
                                    var a = Math.pow(10, -i);
                                    if (0 === e) return t ? a : -a;
                                    var r,
                                        s,
                                        o = i,
                                        l = this.indexFirstNonZeroDecimalPlace(e);
                                    return (r = o - 1 <= l ? a : Math.pow(10, -(l + 1))), (s = t ? e + r : e - r), this.roundToNearest(s, r);
                                }
                                e = parseInt(e, 10);
                                var u = Math.abs(e).toString().length,
                                    c = void 0;
                                switch (u) {
                                    case 1:
                                        c = 0;
                                        break;
                                    case 2:
                                    case 3:
                                        c = 1;
                                        break;
                                    case 4:
                                    case 5:
                                        c = 2;
                                        break;
                                    default:
                                        c = u - 3;
                                }
                                var h,
                                    d = Math.pow(10, c);
                                return (h = t ? e + d : e - d) <= 10 && -10 <= h ? h : this.roundToNearest(h, d);
                            },
                        },
                        {
                            key: "addAndRoundToNearestAuto",
                            value: function (e, t) {
                                return this.modifyAndRoundToNearestAuto(e, !0, t);
                            },
                        },
                        {
                            key: "subtractAndRoundToNearestAuto",
                            value: function (e, t) {
                                return this.modifyAndRoundToNearestAuto(e, !1, t);
                            },
                        },
                        {
                            key: "arabicToLatinNumbers",
                            value: function (e) {
                                var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                                    i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                                    n = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
                                if (this.isNull(e)) return e;
                                var a = e.toString();
                                if ("" === a) return e;
                                if (null === a.match(/[٠١٢٣٤٥٦٧٨٩۴۵۶]/g)) return t && (a = Number(a)), a;
                                i && (a = a.replace(/٫/, ".")),
                                    n && (a = a.replace(/٬/g, "")),
                                    (a = a
                                        .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (e) {
                                            return e.charCodeAt(0) - 1632;
                                        })
                                        .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (e) {
                                            return e.charCodeAt(0) - 1776;
                                        }));
                                var r = Number(a);
                                return isNaN(r) ? r : (t && (a = r), a);
                            },
                        },
                        {
                            key: "triggerEvent",
                            value: function (e) {
                                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document,
                                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                                    n = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
                                    a = !(4 < arguments.length && void 0 !== arguments[4]) || arguments[4],
                                    r = void 0;
                                window.CustomEvent ? (r = new CustomEvent(e, { detail: i, bubbles: n, cancelable: a })) : (r = document.createEvent("CustomEvent")).initCustomEvent(e, n, a, { detail: i }), t.dispatchEvent(r);
                            },
                        },
                        {
                            key: "parseStr",
                            value: function (e) {
                                var t = {},
                                    i = void 0,
                                    n = void 0,
                                    a = void 0,
                                    r = void 0;
                                if (
                                    (0 === e && 1 / e < 0 && (e = "-0"),
                                    (e = e.toString()),
                                    this.isNegativeStrict(e, "-") ? ((e = e.slice(1)), (t.s = -1)) : (t.s = 1),
                                    -1 < (i = e.indexOf(".")) && (e = e.replace(".", "")),
                                    i < 0 && (i = e.length),
                                    (n = -1 === e.search(/[1-9]/i) ? e.length : e.search(/[1-9]/i)) === (a = e.length))
                                )
                                    (t.e = 0), (t.c = [0]);
                                else {
                                    for (r = a - 1; "0" === e.charAt(r); r -= 1) a -= 1;
                                    for (a -= 1, t.e = i - n - 1, t.c = [], i = 0; n <= a; n += 1) (t.c[i] = +e.charAt(n)), (i += 1);
                                }
                                return t;
                            },
                        },
                        {
                            key: "testMinMax",
                            value: function (e, t) {
                                var i = t.c,
                                    n = e.c,
                                    a = t.s,
                                    r = e.s,
                                    s = t.e,
                                    o = e.e;
                                if (!i[0] || !n[0]) return i[0] ? a : n[0] ? -r : 0;
                                if (a !== r) return a;
                                var l = a < 0;
                                if (s !== o) return (o < s) ^ l ? 1 : -1;
                                for (a = -1, r = (s = i.length) < (o = n.length) ? s : o, a += 1; a < r; a += 1) if (i[a] !== n[a]) return (i[a] > n[a]) ^ l ? 1 : -1;
                                return s === o ? 0 : (o < s) ^ l ? 1 : -1;
                            },
                        },
                        {
                            key: "randomString",
                            value: function () {
                                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 5;
                                return Math.random().toString(36).substr(2, e);
                            },
                        },
                        {
                            key: "domElement",
                            value: function (e) {
                                return r.isString(e) ? document.querySelector(e) : e;
                            },
                        },
                        {
                            key: "getElementValue",
                            value: function (e) {
                                return "input" === e.tagName.toLowerCase() ? e.value : this.text(e);
                            },
                        },
                        {
                            key: "setElementValue",
                            value: function (e) {
                                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                                "input" === e.tagName.toLowerCase() ? (e.value = t) : (e.textContent = t);
                            },
                        },
                        {
                            key: "cloneObject",
                            value: function (e) {
                                return a({}, e);
                            },
                        },
                        {
                            key: "camelize",
                            value: function (e) {
                                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "-",
                                    i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                                    n = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3];
                                if (this.isNull(e)) return null;
                                i && (e = e.replace(/^data-/, ""));
                                var a = e.split(t).map(function (e) {
                                    return "" + e.charAt(0).toUpperCase() + e.slice(1);
                                });
                                return (a = a.join("")), n && (a = "" + a.charAt(0).toLowerCase() + a.slice(1)), a;
                            },
                        },
                        {
                            key: "text",
                            value: function (e) {
                                var t = e.nodeType;
                                return t === Node.ELEMENT_NODE || t === Node.DOCUMENT_NODE || t === Node.DOCUMENT_FRAGMENT_NODE ? e.textContent : t === Node.TEXT_NODE ? e.nodeValue : "";
                            },
                        },
                        {
                            key: "setText",
                            value: function (e, t) {
                                var i = e.nodeType;
                                (i !== Node.ELEMENT_NODE && i !== Node.DOCUMENT_NODE && i !== Node.DOCUMENT_FRAGMENT_NODE) || (e.textContent = t);
                            },
                        },
                        {
                            key: "filterOut",
                            value: function (e, t) {
                                var i = this;
                                return e.filter(function (e) {
                                    return !i.isInArray(e, t);
                                });
                            },
                        },
                        {
                            key: "trimPaddedZerosFromDecimalPlaces",
                            value: function (e) {
                                if ("" === (e = String(e))) return "";
                                var t = e.split("."),
                                    i = m(t, 2),
                                    n = i[0],
                                    a = i[1];
                                if (this.isUndefinedOrNullOrEmpty(a)) return n;
                                var r = a.replace(/0+$/g, "");
                                return "" === r ? n : n + "." + r;
                            },
                        },
                        {
                            key: "getHoveredElement",
                            value: function () {
                                var e = [].concat(u(document.querySelectorAll(":hover")));
                                return e[e.length - 1];
                            },
                        },
                        {
                            key: "arrayTrim",
                            value: function (e, t) {
                                var i = e.length;
                                return 0 === i || i < t ? e : t < 0 ? [] : ((e.length = parseInt(t, 10)), e);
                            },
                        },
                        {
                            key: "arrayUnique",
                            value: function () {
                                var e;
                                return [].concat(u(new Set((e = []).concat.apply(e, arguments))));
                            },
                        },
                        {
                            key: "mergeMaps",
                            value: function () {
                                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                                return new Map(
                                    t.reduce(function (e, t) {
                                        return e.concat([].concat(u(t)));
                                    }, [])
                                );
                            },
                        },
                        {
                            key: "objectKeyLookup",
                            value: function (e, t) {
                                var i = Object.entries(e).find(function (e) {
                                        return e[1] === t;
                                    }),
                                    n = null;
                                return void 0 !== i && (n = i[0]), n;
                            },
                        },
                        {
                            key: "insertAt",
                            value: function (e, t, i) {
                                if (i > (e = String(e)).length) throw new Error("The given index is out of the string range.");
                                if (1 !== t.length) throw new Error("The given string `char` should be only one character long.");
                                return "" === e && 0 === i ? t : "" + e.slice(0, i) + t + e.slice(i);
                            },
                        },
                        {
                            key: "scientificToDecimal",
                            value: function (e) {
                                var t = Number(e);
                                if (isNaN(t)) return NaN;
                                if (((e = String(e)), !this.contains(e, "e") && !this.contains(e, "E"))) return e;
                                var i = e.split(/e/i),
                                    n = m(i, 2),
                                    a = n[0],
                                    r = n[1],
                                    s = a < 0;
                                s && (a = a.replace("-", ""));
                                var o = +r < 0;
                                o && (r = r.replace("-", ""));
                                var l = a.split(/\./),
                                    u = m(l, 2),
                                    c = u[0],
                                    h = u[1],
                                    d = void 0;
                                return (
                                    (d = o
                                        ? "" + (d = c.length > r ? this.insertAt(c, ".", c.length - r) : "0." + "0".repeat(r - c.length) + c) + (h || "")
                                        : h
                                        ? ((a = "" + c + h), r < h.length ? this.insertAt(a, ".", +r + c.length) : "" + a + "0".repeat(r - h.length))
                                        : "" + (a = a.replace(".", "")) + "0".repeat(Number(r))),
                                    s && (d = "-" + d),
                                    d
                                );
                            },
                        },
                    ]),
                    r
                );
            })();
            (t.default = r), (e.exports = t.default);
        },
        function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = {
                allowedTagList: [
                    "b",
                    "caption",
                    "cite",
                    "code",
                    "const",
                    "dd",
                    "del",
                    "div",
                    "dfn",
                    "dt",
                    "em",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "input",
                    "ins",
                    "kdb",
                    "label",
                    "li",
                    "option",
                    "output",
                    "p",
                    "q",
                    "s",
                    "sample",
                    "span",
                    "strong",
                    "td",
                    "th",
                    "u",
                ],
            };
            Object.freeze(n.allowedTagList),
                Object.defineProperty(n, "allowedTagList", { configurable: !1, writable: !1 }),
                (n.keyCode = {
                    Backspace: 8,
                    Tab: 9,
                    Enter: 13,
                    Shift: 16,
                    Ctrl: 17,
                    Alt: 18,
                    Pause: 19,
                    CapsLock: 20,
                    Esc: 27,
                    Space: 32,
                    PageUp: 33,
                    PageDown: 34,
                    End: 35,
                    Home: 36,
                    LeftArrow: 37,
                    UpArrow: 38,
                    RightArrow: 39,
                    DownArrow: 40,
                    Insert: 45,
                    Delete: 46,
                    num0: 48,
                    num1: 49,
                    num2: 50,
                    num3: 51,
                    num4: 52,
                    num5: 53,
                    num6: 54,
                    num7: 55,
                    num8: 56,
                    num9: 57,
                    a: 65,
                    b: 66,
                    c: 67,
                    d: 68,
                    e: 69,
                    f: 70,
                    g: 71,
                    h: 72,
                    i: 73,
                    j: 74,
                    k: 75,
                    l: 76,
                    m: 77,
                    n: 78,
                    o: 79,
                    p: 80,
                    q: 81,
                    r: 82,
                    s: 83,
                    t: 84,
                    u: 85,
                    v: 86,
                    w: 87,
                    x: 88,
                    y: 89,
                    z: 90,
                    OSLeft: 91,
                    OSRight: 92,
                    ContextMenu: 93,
                    numpad0: 96,
                    numpad1: 97,
                    numpad2: 98,
                    numpad3: 99,
                    numpad4: 100,
                    numpad5: 101,
                    numpad6: 102,
                    numpad7: 103,
                    numpad8: 104,
                    numpad9: 105,
                    MultiplyNumpad: 106,
                    PlusNumpad: 107,
                    MinusNumpad: 109,
                    DotNumpad: 110,
                    SlashNumpad: 111,
                    F1: 112,
                    F2: 113,
                    F3: 114,
                    F4: 115,
                    F5: 116,
                    F6: 117,
                    F7: 118,
                    F8: 119,
                    F9: 120,
                    F10: 121,
                    F11: 122,
                    F12: 123,
                    NumLock: 144,
                    ScrollLock: 145,
                    HyphenFirefox: 173,
                    MyComputer: 182,
                    MyCalculator: 183,
                    Semicolon: 186,
                    Equal: 187,
                    Comma: 188,
                    Hyphen: 189,
                    Dot: 190,
                    Slash: 191,
                    Backquote: 192,
                    LeftBracket: 219,
                    Backslash: 220,
                    RightBracket: 221,
                    Quote: 222,
                    Command: 224,
                    AltGraph: 225,
                    AndroidDefault: 229,
                }),
                Object.freeze(n.keyCode),
                Object.defineProperty(n, "keyCode", { configurable: !1, writable: !1 }),
                (n.fromCharCodeKeyCode = {
                    0: "LaunchCalculator",
                    8: "Backspace",
                    9: "Tab",
                    13: "Enter",
                    16: "Shift",
                    17: "Ctrl",
                    18: "Alt",
                    19: "Pause",
                    20: "CapsLock",
                    27: "Escape",
                    32: " ",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "ArrowLeft",
                    38: "ArrowUp",
                    39: "ArrowRight",
                    40: "ArrowDown",
                    45: "Insert",
                    46: "Delete",
                    48: "0",
                    49: "1",
                    50: "2",
                    51: "3",
                    52: "4",
                    53: "5",
                    54: "6",
                    55: "7",
                    56: "8",
                    57: "9",
                    91: "OS",
                    92: "OSRight",
                    93: "ContextMenu",
                    96: "0",
                    97: "1",
                    98: "2",
                    99: "3",
                    100: "4",
                    101: "5",
                    102: "6",
                    103: "7",
                    104: "8",
                    105: "9",
                    106: "*",
                    107: "+",
                    109: "-",
                    110: ".",
                    111: "/",
                    112: "F1",
                    113: "F2",
                    114: "F3",
                    115: "F4",
                    116: "F5",
                    117: "F6",
                    118: "F7",
                    119: "F8",
                    120: "F9",
                    121: "F10",
                    122: "F11",
                    123: "F12",
                    144: "NumLock",
                    145: "ScrollLock",
                    173: "-",
                    182: "MyComputer",
                    183: "MyCalculator",
                    186: ";",
                    187: "=",
                    188: ",",
                    189: "-",
                    190: ".",
                    191: "/",
                    192: "`",
                    219: "[",
                    220: "\\",
                    221: "]",
                    222: "'",
                    224: "Meta",
                    225: "AltGraph",
                }),
                Object.freeze(n.fromCharCodeKeyCode),
                Object.defineProperty(n, "fromCharCodeKeyCode", { configurable: !1, writable: !1 }),
                (n.keyName = {
                    Unidentified: "Unidentified",
                    AndroidDefault: "AndroidDefault",
                    Alt: "Alt",
                    AltGr: "AltGraph",
                    CapsLock: "CapsLock",
                    Ctrl: "Control",
                    Fn: "Fn",
                    FnLock: "FnLock",
                    Hyper: "Hyper",
                    Meta: "Meta",
                    OSLeft: "OS",
                    OSRight: "OS",
                    Command: "OS",
                    NumLock: "NumLock",
                    ScrollLock: "ScrollLock",
                    Shift: "Shift",
                    Super: "Super",
                    Symbol: "Symbol",
                    SymbolLock: "SymbolLock",
                    Enter: "Enter",
                    Tab: "Tab",
                    Space: " ",
                    LeftArrow: "ArrowLeft",
                    UpArrow: "ArrowUp",
                    RightArrow: "ArrowRight",
                    DownArrow: "ArrowDown",
                    End: "End",
                    Home: "Home",
                    PageUp: "PageUp",
                    PageDown: "PageDown",
                    Backspace: "Backspace",
                    Clear: "Clear",
                    Copy: "Copy",
                    CrSel: "CrSel",
                    Cut: "Cut",
                    Delete: "Delete",
                    EraseEof: "EraseEof",
                    ExSel: "ExSel",
                    Insert: "Insert",
                    Paste: "Paste",
                    Redo: "Redo",
                    Undo: "Undo",
                    Accept: "Accept",
                    Again: "Again",
                    Attn: "Attn",
                    Cancel: "Cancel",
                    ContextMenu: "ContextMenu",
                    Esc: "Escape",
                    Execute: "Execute",
                    Find: "Find",
                    Finish: "Finish",
                    Help: "Help",
                    Pause: "Pause",
                    Play: "Play",
                    Props: "Props",
                    Select: "Select",
                    ZoomIn: "ZoomIn",
                    ZoomOut: "ZoomOut",
                    BrightnessDown: "BrightnessDown",
                    BrightnessUp: "BrightnessUp",
                    Eject: "Eject",
                    LogOff: "LogOff",
                    Power: "Power",
                    PowerOff: "PowerOff",
                    PrintScreen: "PrintScreen",
                    Hibernate: "Hibernate",
                    Standby: "Standby",
                    WakeUp: "WakeUp",
                    Compose: "Compose",
                    Dead: "Dead",
                    F1: "F1",
                    F2: "F2",
                    F3: "F3",
                    F4: "F4",
                    F5: "F5",
                    F6: "F6",
                    F7: "F7",
                    F8: "F8",
                    F9: "F9",
                    F10: "F10",
                    F11: "F11",
                    F12: "F12",
                    Print: "Print",
                    num0: "0",
                    num1: "1",
                    num2: "2",
                    num3: "3",
                    num4: "4",
                    num5: "5",
                    num6: "6",
                    num7: "7",
                    num8: "8",
                    num9: "9",
                    a: "a",
                    b: "b",
                    c: "c",
                    d: "d",
                    e: "e",
                    f: "f",
                    g: "g",
                    h: "h",
                    i: "i",
                    j: "j",
                    k: "k",
                    l: "l",
                    m: "m",
                    n: "n",
                    o: "o",
                    p: "p",
                    q: "q",
                    r: "r",
                    s: "s",
                    t: "t",
                    u: "u",
                    v: "v",
                    w: "w",
                    x: "x",
                    y: "y",
                    z: "z",
                    A: "A",
                    B: "B",
                    C: "C",
                    D: "D",
                    E: "E",
                    F: "F",
                    G: "G",
                    H: "H",
                    I: "I",
                    J: "J",
                    K: "K",
                    L: "L",
                    M: "M",
                    N: "N",
                    O: "O",
                    P: "P",
                    Q: "Q",
                    R: "R",
                    S: "S",
                    T: "T",
                    U: "U",
                    V: "V",
                    W: "W",
                    X: "X",
                    Y: "Y",
                    Z: "Z",
                    Semicolon: ";",
                    Equal: "=",
                    Comma: ",",
                    Hyphen: "-",
                    Minus: "-",
                    Plus: "+",
                    Dot: ".",
                    Slash: "/",
                    Backquote: "`",
                    LeftParenthesis: "(",
                    RightParenthesis: ")",
                    LeftBracket: "[",
                    RightBracket: "]",
                    Backslash: "\\",
                    Quote: "'",
                    numpad0: "0",
                    numpad1: "1",
                    numpad2: "2",
                    numpad3: "3",
                    numpad4: "4",
                    numpad5: "5",
                    numpad6: "6",
                    numpad7: "7",
                    numpad8: "8",
                    numpad9: "9",
                    NumpadDot: ".",
                    NumpadDotAlt: ",",
                    NumpadMultiply: "*",
                    NumpadPlus: "+",
                    NumpadMinus: "-",
                    NumpadSubtract: "-",
                    NumpadSlash: "/",
                    NumpadDotObsoleteBrowsers: "Decimal",
                    NumpadMultiplyObsoleteBrowsers: "Multiply",
                    NumpadPlusObsoleteBrowsers: "Add",
                    NumpadMinusObsoleteBrowsers: "Subtract",
                    NumpadSlashObsoleteBrowsers: "Divide",
                    _allFnKeys: ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"],
                    _someNonPrintableKeys: ["Tab", "Enter", "Shift", "ShiftLeft", "ShiftRight", "Control", "ControlLeft", "ControlRight", "Alt", "AltLeft", "AltRight", "Pause", "CapsLock", "Escape"],
                    _directionKeys: ["PageUp", "PageDown", "End", "Home", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp"],
                }),
                Object.freeze(n.keyName._allFnKeys),
                Object.freeze(n.keyName._someNonPrintableKeys),
                Object.freeze(n.keyName._directionKeys),
                Object.freeze(n.keyName),
                Object.defineProperty(n, "keyName", { configurable: !1, writable: !1 }),
                Object.freeze(n),
                (t.default = n),
                (e.exports = t.default);
        },
        function (e, t, i) {
            "use strict";
            var n,
                a = s(i(0)),
                r = s(i(1));
            function s(e) {
                return e && e.__esModule ? e : { default: e };
            }
            (a.default.options = {
                allowDecimalPadding: { always: !0, never: !1, floats: "floats" },
                alwaysAllowDecimalCharacter: { alwaysAllow: !0, doNotAllow: !1 },
                caretPositionOnFocus: { start: "start", end: "end", decimalLeft: "decimalLeft", decimalRight: "decimalRight", doNoForceCaretPosition: null },
                createLocalList: { createList: !0, doNotCreateList: !1 },
                currencySymbol: {
                    none: "",
                    currencySign: "¤",
                    austral: "₳",
                    australCentavo: "¢",
                    baht: "฿",
                    cedi: "₵",
                    cent: "¢",
                    colon: "₡",
                    cruzeiro: "₢",
                    dollar: "$",
                    dong: "₫",
                    drachma: "₯",
                    dram: "​֏",
                    european: "₠",
                    euro: "€",
                    florin: "ƒ",
                    franc: "₣",
                    guarani: "₲",
                    hryvnia: "₴",
                    kip: "₭",
                    att: "ອັດ",
                    lepton: "Λ.",
                    lira: "₺",
                    liraOld: "₤",
                    lari: "₾",
                    mark: "ℳ",
                    mill: "₥",
                    naira: "₦",
                    peseta: "₧",
                    peso: "₱",
                    pfennig: "₰",
                    pound: "£",
                    real: "R$",
                    riel: "៛",
                    ruble: "₽",
                    rupee: "₹",
                    rupeeOld: "₨",
                    shekel: "₪",
                    shekelAlt: "ש״ח‎‎",
                    taka: "৳",
                    tenge: "₸",
                    togrog: "₮",
                    won: "₩",
                    yen: "¥",
                },
                currencySymbolPlacement: { prefix: "p", suffix: "s" },
                decimalCharacter: { comma: ",", dot: ".", middleDot: "·", arabicDecimalSeparator: "٫", decimalSeparatorKeySymbol: "⎖" },
                decimalCharacterAlternative: { none: null, comma: ",", dot: "." },
                decimalPlaces: { none: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6 },
                decimalPlacesRawValue: { useDefault: null, none: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6 },
                decimalPlacesShownOnBlur: { useDefault: null, none: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6 },
                decimalPlacesShownOnFocus: { useDefault: null, none: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6 },
                defaultValueOverride: { doNotOverride: null },
                digitalGroupSpacing: { two: "2", twoScaled: "2s", three: "3", four: "4" },
                digitGroupSeparator: { comma: ",", dot: ".", normalSpace: " ", thinSpace: " ", narrowNoBreakSpace: " ", noBreakSpace: " ", noSeparator: "", apostrophe: "'", arabicThousandsSeparator: "٬", dotAbove: "˙", privateUseTwo: "’" },
                divisorWhenUnfocused: { none: null, percentage: 100, permille: 1e3, basisPoint: 1e4 },
                emptyInputBehavior: { focus: "focus", press: "press", always: "always", zero: "zero", min: "min", max: "max", null: "null" },
                eventBubbles: { bubbles: !0, doesNotBubble: !1 },
                eventIsCancelable: { isCancelable: !0, isNotCancelable: !1 },
                failOnUnknownOption: { fail: !0, ignore: !1 },
                formatOnPageLoad: { format: !0, doNotFormat: !1 },
                formulaMode: { enabled: !0, disabled: !1 },
                historySize: { verySmall: 5, small: 10, medium: 20, large: 50, veryLarge: 100, insane: Number.MAX_SAFE_INTEGER },
                isCancellable: { cancellable: !0, notCancellable: !1 },
                leadingZero: { allow: "allow", deny: "deny", keep: "keep" },
                maximumValue: { tenTrillions: "10000000000000", oneBillion: "1000000000", zero: "0" },
                minimumValue: { tenTrillions: "-10000000000000", oneBillion: "-1000000000", zero: "0" },
                modifyValueOnWheel: { modifyValue: !0, doNothing: !1 },
                negativeBracketsTypeOnBlur: {
                    parentheses: "(,)",
                    brackets: "[,]",
                    chevrons: "<,>",
                    curlyBraces: "{,}",
                    angleBrackets: "〈,〉",
                    japaneseQuotationMarks: "｢,｣",
                    halfBrackets: "⸤,⸥",
                    whiteSquareBrackets: "⟦,⟧",
                    quotationMarks: "‹,›",
                    guillemets: "«,»",
                    none: null,
                },
                negativePositiveSignPlacement: { prefix: "p", suffix: "s", left: "l", right: "r", none: null },
                negativeSignCharacter: { hyphen: "-", minus: "−", heavyMinus: "➖", fullWidthHyphen: "－", circledMinus: "⊖", squaredMinus: "⊟", triangleMinus: "⨺", plusMinus: "±", minusPlus: "∓", dotMinus: "∸", minusTilde: "≂", not: "¬" },
                noEventListeners: { noEvents: !0, addEvents: !1 },
                onInvalidPaste: { error: "error", ignore: "ignore", clamp: "clamp", truncate: "truncate", replace: "replace" },
                outputFormat: { string: "string", number: "number", dot: ".", negativeDot: "-.", comma: ",", negativeComma: "-,", dotNegative: ".-", commaNegative: ",-", none: null },
                overrideMinMaxLimits: { ceiling: "ceiling", floor: "floor", ignore: "ignore", doNotOverride: null },
                positiveSignCharacter: {
                    plus: "+",
                    fullWidthPlus: "＋",
                    heavyPlus: "➕",
                    doublePlus: "⧺",
                    triplePlus: "⧻",
                    circledPlus: "⊕",
                    squaredPlus: "⊞",
                    trianglePlus: "⨹",
                    plusMinus: "±",
                    minusPlus: "∓",
                    dotPlus: "∔",
                    altHebrewPlus: "﬩",
                    normalSpace: " ",
                    thinSpace: " ",
                    narrowNoBreakSpace: " ",
                    noBreakSpace: " ",
                },
                rawValueDivisor: { none: null, percentage: 100, permille: 1e3, basisPoint: 1e4 },
                readOnly: { readOnly: !0, readWrite: !1 },
                roundingMethod: {
                    halfUpSymmetric: "S",
                    halfUpAsymmetric: "A",
                    halfDownSymmetric: "s",
                    halfDownAsymmetric: "a",
                    halfEvenBankersRounding: "B",
                    upRoundAwayFromZero: "U",
                    downRoundTowardZero: "D",
                    toCeilingTowardPositiveInfinity: "C",
                    toFloorTowardNegativeInfinity: "F",
                    toNearest05: "N05",
                    toNearest05Alt: "CHF",
                    upToNext05: "U05",
                    downToNext05: "D05",
                },
                saveValueToSessionStorage: { save: !0, doNotSave: !1 },
                selectNumberOnly: { selectNumbersOnly: !0, selectAll: !1 },
                selectOnFocus: { select: !0, doNotSelect: !1 },
                serializeSpaces: { plus: "+", percent: "%20" },
                showOnlyNumbersOnFocus: { onlyNumbers: !0, showAll: !1 },
                showPositiveSign: { show: !0, hide: !1 },
                showWarnings: { show: !0, hide: !1 },
                styleRules: {
                    none: null,
                    positiveNegative: { positive: "autoNumeric-positive", negative: "autoNumeric-negative" },
                    range0To100With4Steps: {
                        ranges: [
                            { min: 0, max: 25, class: "autoNumeric-red" },
                            { min: 25, max: 50, class: "autoNumeric-orange" },
                            { min: 50, max: 75, class: "autoNumeric-yellow" },
                            { min: 75, max: 100, class: "autoNumeric-green" },
                        ],
                    },
                    evenOdd: {
                        userDefined: [
                            {
                                callback: function (e) {
                                    return e % 2 == 0;
                                },
                                classes: ["autoNumeric-even", "autoNumeric-odd"],
                            },
                        ],
                    },
                    rangeSmallAndZero: {
                        userDefined: [
                            {
                                callback: function (e) {
                                    return -1 <= e && e < 0 ? 0 : 0 === Number(e) ? 1 : 0 < e && e <= 1 ? 2 : null;
                                },
                                classes: ["autoNumeric-small-negative", "autoNumeric-zero", "autoNumeric-small-positive"],
                            },
                        ],
                    },
                },
                suffixText: { none: "", percentage: "%", permille: "‰", basisPoint: "‱" },
                symbolWhenUnfocused: { none: null, percentage: "%", permille: "‰", basisPoint: "‱" },
                unformatOnHover: { unformat: !0, doNotUnformat: !1 },
                unformatOnSubmit: { unformat: !0, keepCurrentValue: !1 },
                valuesToStrings: { none: null, zeroDash: { 0: "-" }, oneAroundZero: { "-1": "Min", 1: "Max" } },
                watchExternalChanges: { watch: !0, doNotWatch: !1 },
                wheelOn: { focus: "focus", hover: "hover" },
                wheelStep: { progressive: "progressive" },
            }),
                (n = a.default.options),
                Object.getOwnPropertyNames(n).forEach(function (e) {
                    "valuesToStrings" === e
                        ? Object.getOwnPropertyNames(n.valuesToStrings).forEach(function (e) {
                              r.default.isIE11() || null === n.valuesToStrings[e] || Object.freeze(n.valuesToStrings[e]);
                          })
                        : "styleRules" !== e && (r.default.isIE11() || null === n[e] || Object.freeze(n[e]));
                }),
                Object.freeze(n),
                Object.defineProperty(a.default, "options", { configurable: !1, writable: !1 });
        },
        function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = a(i(0));
            function a(e) {
                return e && e.__esModule ? e : { default: e };
            }
            a(i(10)), a(i(3)), a(i(11)), a(i(12)), (t.default = n.default), (e.exports = t.default);
        },
        function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = (function () {
                    function n(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function (e, t, i) {
                        return t && n(e.prototype, t), i && n(e, i), e;
                    };
                })(),
                a = (function () {
                    function i(e) {
                        if (
                            ((function (e, t) {
                                if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function");
                            })(this),
                            null === e)
                        )
                            throw new Error("Invalid AST");
                    }
                    return (
                        n(i, [
                            {
                                key: "evaluate",
                                value: function (e) {
                                    if (null == e) throw new Error("Invalid AST sub-tree");
                                    if ("number" === e.type) return e.value;
                                    if ("unaryMinus" === e.type) return -this.evaluate(e.left);
                                    var t = this.evaluate(e.left),
                                        i = this.evaluate(e.right);
                                    switch (e.type) {
                                        case "op_+":
                                            return Number(t) + Number(i);
                                        case "op_-":
                                            return t - i;
                                        case "op_*":
                                            return t * i;
                                        case "op_/":
                                            return t / i;
                                        default:
                                            throw new Error("Invalid operator '" + e.type + "'");
                                    }
                                },
                            },
                        ]),
                        i
                    );
                })();
            (t.default = a), (e.exports = t.default);
        },
        function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = (function () {
                    function n(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function (e, t, i) {
                        return t && n(e.prototype, t), i && n(e, i), e;
                    };
                })(),
                a = s(i(7)),
                r = s(i(8));
            function s(e) {
                return e && e.__esModule ? e : { default: e };
            }
            var o = (function () {
                function i(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : ".";
                    return (
                        (function (e, t) {
                            if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function");
                        })(this),
                        (this.text = e),
                        (this.decimalCharacter = t),
                        (this.lexer = new r.default(e)),
                        (this.token = this.lexer.getNextToken(this.decimalCharacter)),
                        this._exp()
                    );
                }
                return (
                    n(i, [
                        {
                            key: "_exp",
                            value: function () {
                                var e = this._term(),
                                    t = this._moreExp();
                                return a.default.createNode("op_+", e, t);
                            },
                        },
                        {
                            key: "_moreExp",
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                switch (this.token.type) {
                                    case "+":
                                        return (this.token = this.lexer.getNextToken(this.decimalCharacter)), (e = this._term()), (t = this._moreExp()), a.default.createNode("op_+", t, e);
                                    case "-":
                                        return (this.token = this.lexer.getNextToken(this.decimalCharacter)), (e = this._term()), (t = this._moreExp()), a.default.createNode("op_-", t, e);
                                }
                                return a.default.createLeaf(0);
                            },
                        },
                        {
                            key: "_term",
                            value: function () {
                                var e = this._factor(),
                                    t = this._moreTerms();
                                return a.default.createNode("op_*", e, t);
                            },
                        },
                        {
                            key: "_moreTerms",
                            value: function () {
                                var e = void 0,
                                    t = void 0;
                                switch (this.token.type) {
                                    case "*":
                                        return (this.token = this.lexer.getNextToken(this.decimalCharacter)), (e = this._factor()), (t = this._moreTerms()), a.default.createNode("op_*", t, e);
                                    case "/":
                                        return (this.token = this.lexer.getNextToken(this.decimalCharacter)), (e = this._factor()), (t = this._moreTerms()), a.default.createNode("op_/", t, e);
                                }
                                return a.default.createLeaf(1);
                            },
                        },
                        {
                            key: "_factor",
                            value: function () {
                                var e = void 0,
                                    t = void 0,
                                    i = void 0;
                                switch (this.token.type) {
                                    case "num":
                                        return (i = this.token.value), (this.token = this.lexer.getNextToken(this.decimalCharacter)), a.default.createLeaf(i);
                                    case "-":
                                        return (this.token = this.lexer.getNextToken(this.decimalCharacter)), (t = this._factor()), a.default.createUnaryNode(t);
                                    case "(":
                                        return (this.token = this.lexer.getNextToken(this.decimalCharacter)), (e = this._exp()), this._match(")"), e;
                                    default:
                                        throw new Error("Unexpected token '" + this.token.symbol + "' with type '" + this.token.type + "' at position '" + this.token.index + "' in the factor function");
                                }
                            },
                        },
                        {
                            key: "_match",
                            value: function (e) {
                                var t = this.lexer.getIndex() - 1;
                                if (this.text[t] !== e) throw new Error("Unexpected token '" + this.token.symbol + "' at position '" + t + "' in the match function");
                                this.token = this.lexer.getNextToken(this.decimalCharacter);
                            },
                        },
                    ]),
                    i
                );
            })();
            (t.default = o), (e.exports = t.default);
        },
        function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = (function () {
                    function n(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function (e, t, i) {
                        return t && n(e.prototype, t), i && n(e, i), e;
                    };
                })(),
                a = (function () {
                    function a() {
                        !(function (e, t) {
                            if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function");
                        })(this);
                    }
                    return (
                        n(a, null, [
                            {
                                key: "createNode",
                                value: function (e, t, i) {
                                    var n = new a();
                                    return (n.type = e), (n.left = t), (n.right = i), n;
                                },
                            },
                            {
                                key: "createUnaryNode",
                                value: function (e) {
                                    var t = new a();
                                    return (t.type = "unaryMinus"), (t.left = e), (t.right = null), t;
                                },
                            },
                            {
                                key: "createLeaf",
                                value: function (e) {
                                    var t = new a();
                                    return (t.type = "number"), (t.value = e), t;
                                },
                            },
                        ]),
                        a
                    );
                })();
            (t.default = a), (e.exports = t.default);
        },
        function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = (function () {
                    function n(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function (e, t, i) {
                        return t && n(e.prototype, t), i && n(e, i), e;
                    };
                })(),
                a = s(i(1)),
                r = s(i(9));
            function s(e) {
                return e && e.__esModule ? e : { default: e };
            }
            var o = (function () {
                function i(e) {
                    !(function (e, t) {
                        if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function");
                    })(this),
                        (this.text = e),
                        (this.textLength = e.length),
                        (this.index = 0),
                        (this.token = new r.default("Error", 0, 0));
                }
                return (
                    n(i, [
                        {
                            key: "_skipSpaces",
                            value: function () {
                                for (; " " === this.text[this.index] && this.index <= this.textLength; ) this.index++;
                            },
                        },
                        {
                            key: "getIndex",
                            value: function () {
                                return this.index;
                            },
                        },
                        {
                            key: "getNextToken",
                            value: function () {
                                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".";
                                if ((this._skipSpaces(), this.textLength === this.index)) return (this.token.type = "EOT"), this.token;
                                if (a.default.isDigit(this.text[this.index])) return (this.token.type = "num"), (this.token.value = this._getNumber(e)), this.token;
                                switch (((this.token.type = "Error"), this.text[this.index])) {
                                    case "+":
                                        this.token.type = "+";
                                        break;
                                    case "-":
                                        this.token.type = "-";
                                        break;
                                    case "*":
                                        this.token.type = "*";
                                        break;
                                    case "/":
                                        this.token.type = "/";
                                        break;
                                    case "(":
                                        this.token.type = "(";
                                        break;
                                    case ")":
                                        this.token.type = ")";
                                }
                                if ("Error" === this.token.type) throw new Error("Unexpected token '" + this.token.symbol + "' at position '" + this.token.index + "' in the token function");
                                return (this.token.symbol = this.text[this.index]), this.index++, this.token;
                            },
                        },
                        {
                            key: "_getNumber",
                            value: function (e) {
                                this._skipSpaces();
                                for (var t = this.index; this.index <= this.textLength && a.default.isDigit(this.text[this.index]); ) this.index++;
                                for (this.text[this.index] === e && this.index++; this.index <= this.textLength && a.default.isDigit(this.text[this.index]); ) this.index++;
                                if (this.index === t) throw new Error("No number has been found while it was expected");
                                return this.text.substring(t, this.index).replace(e, ".");
                            },
                        },
                    ]),
                    i
                );
            })();
            (t.default = o), (e.exports = t.default);
        },
        function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = function i(e, t, n) {
                    !(function (e, t) {
                        if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function");
                    })(this),
                        (this.type = e),
                        (this.value = t),
                        (this.symbol = n);
                }),
                (e.exports = t.default);
        },
        function (e, t, i) {
            "use strict";
            var n,
                a = (n = i(0)) && n.__esModule ? n : { default: n };
            (a.default.events = {
                initialized: "autoNumeric:initialized",
                invalidFormula: "autoNumeric:invalidFormula",
                formatted: "autoNumeric:formatted",
                rawValueModified: "autoNumeric:rawValueModified",
                minRangeExceeded: "autoNumeric:minExceeded",
                maxRangeExceeded: "autoNumeric:maxExceeded",
                native: { input: "input", change: "change" },
                validFormula: "autoNumeric:validFormula",
            }),
                Object.freeze(a.default.events.native),
                Object.freeze(a.default.events),
                Object.defineProperty(a.default, "events", { configurable: !1, writable: !1 });
        },
        function (e, t, i) {
            "use strict";
            var n = a(i(0));
            function a(e) {
                return e && e.__esModule ? e : { default: e };
            }
            a(i(3)),
                (n.default.defaultSettings = {
                    allowDecimalPadding: n.default.options.allowDecimalPadding.always,
                    alwaysAllowDecimalCharacter: n.default.options.alwaysAllowDecimalCharacter.doNotAllow,
                    caretPositionOnFocus: n.default.options.caretPositionOnFocus.doNoForceCaretPosition,
                    createLocalList: n.default.options.createLocalList.createList,
                    currencySymbol: n.default.options.currencySymbol.none,
                    currencySymbolPlacement: n.default.options.currencySymbolPlacement.prefix,
                    decimalCharacter: n.default.options.decimalCharacter.dot,
                    decimalCharacterAlternative: n.default.options.decimalCharacterAlternative.none,
                    decimalPlaces: n.default.options.decimalPlaces.two,
                    decimalPlacesRawValue: n.default.options.decimalPlacesRawValue.useDefault,
                    decimalPlacesShownOnBlur: n.default.options.decimalPlacesShownOnBlur.useDefault,
                    decimalPlacesShownOnFocus: n.default.options.decimalPlacesShownOnFocus.useDefault,
                    defaultValueOverride: n.default.options.defaultValueOverride.doNotOverride,
                    digitalGroupSpacing: n.default.options.digitalGroupSpacing.three,
                    digitGroupSeparator: n.default.options.digitGroupSeparator.comma,
                    divisorWhenUnfocused: n.default.options.divisorWhenUnfocused.none,
                    emptyInputBehavior: n.default.options.emptyInputBehavior.focus,
                    eventBubbles: n.default.options.eventBubbles.bubbles,
                    eventIsCancelable: n.default.options.eventIsCancelable.isCancelable,
                    failOnUnknownOption: n.default.options.failOnUnknownOption.ignore,
                    formatOnPageLoad: n.default.options.formatOnPageLoad.format,
                    formulaMode: n.default.options.formulaMode.disabled,
                    historySize: n.default.options.historySize.medium,
                    isCancellable: n.default.options.isCancellable.cancellable,
                    leadingZero: n.default.options.leadingZero.deny,
                    maximumValue: n.default.options.maximumValue.tenTrillions,
                    minimumValue: n.default.options.minimumValue.tenTrillions,
                    modifyValueOnWheel: n.default.options.modifyValueOnWheel.modifyValue,
                    negativeBracketsTypeOnBlur: n.default.options.negativeBracketsTypeOnBlur.none,
                    negativePositiveSignPlacement: n.default.options.negativePositiveSignPlacement.none,
                    negativeSignCharacter: n.default.options.negativeSignCharacter.hyphen,
                    noEventListeners: n.default.options.noEventListeners.addEvents,
                    onInvalidPaste: n.default.options.onInvalidPaste.error,
                    outputFormat: n.default.options.outputFormat.none,
                    overrideMinMaxLimits: n.default.options.overrideMinMaxLimits.doNotOverride,
                    positiveSignCharacter: n.default.options.positiveSignCharacter.plus,
                    rawValueDivisor: n.default.options.rawValueDivisor.none,
                    readOnly: n.default.options.readOnly.readWrite,
                    roundingMethod: n.default.options.roundingMethod.halfUpSymmetric,
                    saveValueToSessionStorage: n.default.options.saveValueToSessionStorage.doNotSave,
                    selectNumberOnly: n.default.options.selectNumberOnly.selectNumbersOnly,
                    selectOnFocus: n.default.options.selectOnFocus.select,
                    serializeSpaces: n.default.options.serializeSpaces.plus,
                    showOnlyNumbersOnFocus: n.default.options.showOnlyNumbersOnFocus.showAll,
                    showPositiveSign: n.default.options.showPositiveSign.hide,
                    showWarnings: n.default.options.showWarnings.show,
                    styleRules: n.default.options.styleRules.none,
                    suffixText: n.default.options.suffixText.none,
                    symbolWhenUnfocused: n.default.options.symbolWhenUnfocused.none,
                    unformatOnHover: n.default.options.unformatOnHover.unformat,
                    unformatOnSubmit: n.default.options.unformatOnSubmit.keepCurrentValue,
                    valuesToStrings: n.default.options.valuesToStrings.none,
                    watchExternalChanges: n.default.options.watchExternalChanges.doNotWatch,
                    wheelOn: n.default.options.wheelOn.focus,
                    wheelStep: n.default.options.wheelStep.progressive,
                }),
                Object.freeze(n.default.defaultSettings),
                Object.defineProperty(n.default, "defaultSettings", { configurable: !1, writable: !1 });
        },
        function (e, t, i) {
            "use strict";
            var n = r(i(0)),
                a = r(i(1));
            function r(e) {
                return e && e.__esModule ? e : { default: e };
            }
            var s = {
                    digitGroupSeparator: n.default.options.digitGroupSeparator.dot,
                    decimalCharacter: n.default.options.decimalCharacter.comma,
                    decimalCharacterAlternative: n.default.options.decimalCharacterAlternative.dot,
                    currencySymbol: " €",
                    currencySymbolPlacement: n.default.options.currencySymbolPlacement.suffix,
                    negativePositiveSignPlacement: n.default.options.negativePositiveSignPlacement.prefix,
                },
                o = {
                    digitGroupSeparator: n.default.options.digitGroupSeparator.comma,
                    decimalCharacter: n.default.options.decimalCharacter.dot,
                    currencySymbol: n.default.options.currencySymbol.dollar,
                    currencySymbolPlacement: n.default.options.currencySymbolPlacement.prefix,
                    negativePositiveSignPlacement: n.default.options.negativePositiveSignPlacement.right,
                },
                l = {
                    digitGroupSeparator: n.default.options.digitGroupSeparator.comma,
                    decimalCharacter: n.default.options.decimalCharacter.dot,
                    currencySymbol: n.default.options.currencySymbol.yen,
                    currencySymbolPlacement: n.default.options.currencySymbolPlacement.prefix,
                    negativePositiveSignPlacement: n.default.options.negativePositiveSignPlacement.right,
                };
            a.default.cloneObject(s).formulaMode = n.default.options.formulaMode.enabled;
            var u = a.default.cloneObject(s);
            u.minimumValue = 0;
            var c = a.default.cloneObject(s);
            (c.maximumValue = 0), (c.negativePositiveSignPlacement = n.default.options.negativePositiveSignPlacement.prefix);
            var h = a.default.cloneObject(s);
            h.digitGroupSeparator = n.default.options.digitGroupSeparator.normalSpace;
            var d = a.default.cloneObject(h);
            d.minimumValue = 0;
            var m = a.default.cloneObject(h);
            (m.maximumValue = 0), (m.negativePositiveSignPlacement = n.default.options.negativePositiveSignPlacement.prefix);
            var f = a.default.cloneObject(s);
            (f.currencySymbol = n.default.options.currencySymbol.none), (f.suffixText = " " + n.default.options.suffixText.percentage), (f.wheelStep = 1e-4), (f.rawValueDivisor = n.default.options.rawValueDivisor.percentage);
            var g = a.default.cloneObject(f);
            g.minimumValue = 0;
            var v = a.default.cloneObject(f);
            (v.maximumValue = 0), (v.negativePositiveSignPlacement = n.default.options.negativePositiveSignPlacement.prefix);
            var p = a.default.cloneObject(f);
            p.decimalPlaces = 3;
            var y = a.default.cloneObject(g);
            y.decimalPlaces = 3;
            var S = a.default.cloneObject(v);
            (S.decimalPlaces = 3), (a.default.cloneObject(o).formulaMode = n.default.options.formulaMode.enabled);
            var b = a.default.cloneObject(o);
            b.minimumValue = 0;
            var w = a.default.cloneObject(o);
            (w.maximumValue = 0), (w.negativePositiveSignPlacement = n.default.options.negativePositiveSignPlacement.prefix);
            var P = a.default.cloneObject(w);
            P.negativeBracketsTypeOnBlur = n.default.options.negativeBracketsTypeOnBlur.parentheses;
            var O = a.default.cloneObject(o);
            (O.currencySymbol = n.default.options.currencySymbol.none), (O.suffixText = n.default.options.suffixText.percentage), (O.wheelStep = 1e-4), (O.rawValueDivisor = n.default.options.rawValueDivisor.percentage);
            var k = a.default.cloneObject(O);
            k.minimumValue = 0;
            var N = a.default.cloneObject(O);
            (N.maximumValue = 0), (N.negativePositiveSignPlacement = n.default.options.negativePositiveSignPlacement.prefix);
            var E = a.default.cloneObject(O);
            E.decimalPlaces = 3;
            var _ = a.default.cloneObject(k);
            _.decimalPlaces = 3;
            var C = a.default.cloneObject(N);
            C.decimalPlaces = 3;
            var F = a.default.cloneObject(s);
            (F.currencySymbol = n.default.options.currencySymbol.lira),
                (n.default.predefinedOptions = {
                    euro: s,
                    euroPos: u,
                    euroNeg: c,
                    euroSpace: h,
                    euroSpacePos: d,
                    euroSpaceNeg: m,
                    percentageEU2dec: f,
                    percentageEU2decPos: g,
                    percentageEU2decNeg: v,
                    percentageEU3dec: p,
                    percentageEU3decPos: y,
                    percentageEU3decNeg: S,
                    dollar: o,
                    dollarPos: b,
                    dollarNeg: w,
                    dollarNegBrackets: P,
                    percentageUS2dec: O,
                    percentageUS2decPos: k,
                    percentageUS2decNeg: N,
                    percentageUS3dec: E,
                    percentageUS3decPos: _,
                    percentageUS3decNeg: C,
                    French: s,
                    Spanish: s,
                    NorthAmerican: o,
                    British: {
                        digitGroupSeparator: n.default.options.digitGroupSeparator.comma,
                        decimalCharacter: n.default.options.decimalCharacter.dot,
                        currencySymbol: n.default.options.currencySymbol.pound,
                        currencySymbolPlacement: n.default.options.currencySymbolPlacement.prefix,
                        negativePositiveSignPlacement: n.default.options.negativePositiveSignPlacement.right,
                    },
                    Swiss: {
                        digitGroupSeparator: n.default.options.digitGroupSeparator.apostrophe,
                        decimalCharacter: n.default.options.decimalCharacter.dot,
                        currencySymbol: " CHF",
                        currencySymbolPlacement: n.default.options.currencySymbolPlacement.suffix,
                        negativePositiveSignPlacement: n.default.options.negativePositiveSignPlacement.prefix,
                    },
                    Japanese: l,
                    Chinese: l,
                    Brazilian: {
                        digitGroupSeparator: n.default.options.digitGroupSeparator.dot,
                        decimalCharacter: n.default.options.decimalCharacter.comma,
                        currencySymbol: n.default.options.currencySymbol.real,
                        currencySymbolPlacement: n.default.options.currencySymbolPlacement.prefix,
                        negativePositiveSignPlacement: n.default.options.negativePositiveSignPlacement.right,
                    },
                    Turkish: F,
                    dotDecimalCharCommaSeparator: { digitGroupSeparator: n.default.options.digitGroupSeparator.comma, decimalCharacter: n.default.options.decimalCharacter.dot },
                    commaDecimalCharDotSeparator: {
                        digitGroupSeparator: n.default.options.digitGroupSeparator.dot,
                        decimalCharacter: n.default.options.decimalCharacter.comma,
                        decimalCharacterAlternative: n.default.options.decimalCharacterAlternative.dot,
                    },
                    integer: { decimalPlaces: 0 },
                    integerPos: { minimumValue: n.default.options.minimumValue.zero, decimalPlaces: 0 },
                    integerNeg: { maximumValue: n.default.options.maximumValue.zero, decimalPlaces: 0 },
                    float: { allowDecimalPadding: n.default.options.allowDecimalPadding.never },
                    floatPos: { allowDecimalPadding: n.default.options.allowDecimalPadding.never, minimumValue: n.default.options.minimumValue.zero, maximumValue: n.default.options.maximumValue.tenTrillions },
                    floatNeg: { allowDecimalPadding: n.default.options.allowDecimalPadding.never, minimumValue: n.default.options.minimumValue.tenTrillions, maximumValue: n.default.options.maximumValue.zero },
                    numeric: { digitGroupSeparator: n.default.options.digitGroupSeparator.noSeparator, decimalCharacter: n.default.options.decimalCharacter.dot, currencySymbol: n.default.options.currencySymbol.none },
                    numericPos: {
                        digitGroupSeparator: n.default.options.digitGroupSeparator.noSeparator,
                        decimalCharacter: n.default.options.decimalCharacter.dot,
                        currencySymbol: n.default.options.currencySymbol.none,
                        minimumValue: n.default.options.minimumValue.zero,
                        maximumValue: n.default.options.maximumValue.tenTrillions,
                    },
                    numericNeg: {
                        digitGroupSeparator: n.default.options.digitGroupSeparator.noSeparator,
                        decimalCharacter: n.default.options.decimalCharacter.dot,
                        currencySymbol: n.default.options.currencySymbol.none,
                        minimumValue: n.default.options.minimumValue.tenTrillions,
                        maximumValue: n.default.options.maximumValue.zero,
                    },
                }),
                Object.getOwnPropertyNames(n.default.predefinedOptions).forEach(function (e) {
                    Object.freeze(n.default.predefinedOptions[e]);
                }),
                Object.freeze(n.default.predefinedOptions),
                Object.defineProperty(n.default, "predefinedOptions", { configurable: !1, writable: !1 });
        },
    ]);
});
//# sourceMappingURL=autoNumeric.min.js.map
