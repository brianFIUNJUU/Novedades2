import {
  __commonJS
} from "./chunk-SIIEUOVM.js";

// node_modules/leaflet-easyprint/dist/bundle.js
var require_bundle = __commonJS({
  "node_modules/leaflet-easyprint/dist/bundle.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? e() : "function" == typeof define && define.amd ? define(e) : e();
    }(0, function() {
      "use strict";
      function t(t2, e2) {
        return e2 = {
          exports: {}
        }, t2(e2, e2.exports), e2.exports;
      }
      var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = t(function(t2) {
        !function(e2) {
          function n2(t3, e3) {
            function n3(t4) {
              return e3.bgcolor && (t4.style.backgroundColor = e3.bgcolor), e3.width && (t4.style.width = e3.width + "px"), e3.height && (t4.style.height = e3.height + "px"), e3.style && Object.keys(e3.style).forEach(function(n4) {
                t4.style[n4] = e3.style[n4];
              }), t4;
            }
            return e3 = e3 || {}, s(e3), Promise.resolve(t3).then(function(t4) {
              return u(t4, e3.filter, true);
            }).then(c).then(d).then(n3).then(function(n4) {
              return g(n4, e3.width || h.width(t3), e3.height || h.height(t3));
            });
          }
          function i2(t3, e3) {
            return l(t3, e3 || {}).then(function(e4) {
              return e4.getContext("2d").getImageData(0, 0, h.width(t3), h.height(t3)).data;
            });
          }
          function o(t3, e3) {
            return l(t3, e3 || {}).then(function(t4) {
              return t4.toDataURL();
            });
          }
          function r(t3, e3) {
            return e3 = e3 || {}, l(t3, e3).then(function(t4) {
              return t4.toDataURL("image/jpeg", e3.quality || 1);
            });
          }
          function a(t3, e3) {
            return l(t3, e3 || {}).then(h.canvasToBlob);
          }
          function s(t3) {
            void 0 === t3.imagePlaceholder ? w.impl.options.imagePlaceholder = M.imagePlaceholder : w.impl.options.imagePlaceholder = t3.imagePlaceholder, void 0 === t3.cacheBust ? w.impl.options.cacheBust = M.cacheBust : w.impl.options.cacheBust = t3.cacheBust;
          }
          function l(t3, e3) {
            function i3(t4) {
              var n3 = document.createElement("canvas");
              if (n3.width = e3.width || h.width(t4), n3.height = e3.height || h.height(t4), e3.bgcolor) {
                var i4 = n3.getContext("2d");
                i4.fillStyle = e3.bgcolor, i4.fillRect(0, 0, n3.width, n3.height);
              }
              return n3;
            }
            return n2(t3, e3).then(h.makeImage).then(h.delay(100)).then(function(e4) {
              var n3 = i3(t3);
              return n3.getContext("2d").drawImage(e4, 0, 0), n3;
            });
          }
          function u(t3, e3, n3) {
            function i3(t4) {
              return t4 instanceof HTMLCanvasElement ? h.makeImage(t4.toDataURL()) : t4.cloneNode(false);
            }
            function o2(t4, e4, n4) {
              var i4 = t4.childNodes;
              return 0 === i4.length ? Promise.resolve(e4) : function(t5, e5, n5) {
                var i5 = Promise.resolve();
                return e5.forEach(function(e6) {
                  i5 = i5.then(function() {
                    return u(e6, n5);
                  }).then(function(e7) {
                    e7 && t5.appendChild(e7);
                  });
                }), i5;
              }(e4, h.asArray(i4), n4).then(function() {
                return e4;
              });
            }
            function r2(t4, e4) {
              function n4() {
                !function(t5, e5) {
                  t5.cssText ? e5.cssText = t5.cssText : function(t6, e6) {
                    h.asArray(t6).forEach(function(n5) {
                      e6.setProperty(n5, t6.getPropertyValue(n5), t6.getPropertyPriority(n5));
                    });
                  }(t5, e5);
                }(window.getComputedStyle(t4), e4.style);
              }
              function i4() {
                function n5(n6) {
                  var i5 = window.getComputedStyle(t4, n6), o4 = i5.getPropertyValue("content");
                  if ("" !== o4 && "none" !== o4) {
                    var r4 = h.uid();
                    e4.className = e4.className + " " + r4;
                    var a2 = document.createElement("style");
                    a2.appendChild(function(t5, e5, n7) {
                      var i6 = "." + t5 + ":" + e5, o5 = n7.cssText ? function(t6) {
                        var e6 = t6.getPropertyValue("content");
                        return t6.cssText + " content: " + e6 + ";";
                      }(n7) : function(t6) {
                        function e6(e7) {
                          return e7 + ": " + t6.getPropertyValue(e7) + (t6.getPropertyPriority(e7) ? " !important" : "");
                        }
                        return h.asArray(t6).map(e6).join("; ") + ";";
                      }(n7);
                      return document.createTextNode(i6 + "{" + o5 + "}");
                    }(r4, n6, i5)), e4.appendChild(a2);
                  }
                }
                [":before", ":after"].forEach(function(t5) {
                  n5(t5);
                });
              }
              function o3() {
                t4 instanceof HTMLTextAreaElement && (e4.innerHTML = t4.value), t4 instanceof HTMLInputElement && e4.setAttribute("value", t4.value);
              }
              function r3() {
                e4 instanceof SVGElement && (e4.setAttribute("xmlns", "http://www.w3.org/2000/svg"), e4 instanceof SVGRectElement && ["width", "height"].forEach(function(t5) {
                  var n5 = e4.getAttribute(t5);
                  n5 && e4.style.setProperty(t5, n5);
                }));
              }
              return e4 instanceof Element ? Promise.resolve().then(n4).then(i4).then(o3).then(r3).then(function() {
                return e4;
              }) : e4;
            }
            return n3 || !e3 || e3(t3) ? Promise.resolve(t3).then(i3).then(function(n4) {
              return o2(t3, n4, e3);
            }).then(function(e4) {
              return r2(t3, e4);
            }) : Promise.resolve();
          }
          function c(t3) {
            return p.resolveAll().then(function(e3) {
              var n3 = document.createElement("style");
              return t3.appendChild(n3), n3.appendChild(document.createTextNode(e3)), t3;
            });
          }
          function d(t3) {
            return f.inlineAll(t3).then(function() {
              return t3;
            });
          }
          function g(t3, e3, n3) {
            return Promise.resolve(t3).then(function(t4) {
              return t4.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), new XMLSerializer().serializeToString(t4);
            }).then(h.escapeXhtml).then(function(t4) {
              return '<foreignObject x="0" y="0" width="100%" height="100%">' + t4 + "</foreignObject>";
            }).then(function(t4) {
              return '<svg xmlns="http://www.w3.org/2000/svg" width="' + e3 + '" height="' + n3 + '">' + t4 + "</svg>";
            }).then(function(t4) {
              return "data:image/svg+xml;charset=utf-8," + t4;
            });
          }
          var h = /* @__PURE__ */ function() {
            function t3() {
              var t4 = "application/font-woff", e4 = "image/jpeg";
              return {
                woff: t4,
                woff2: t4,
                ttf: "application/font-truetype",
                eot: "application/vnd.ms-fontobject",
                png: "image/png",
                jpg: e4,
                jpeg: e4,
                gif: "image/gif",
                tiff: "image/tiff",
                svg: "image/svg+xml"
              };
            }
            function e3(t4) {
              var e4 = /\.([^\.\/]*?)$/g.exec(t4);
              return e4 ? e4[1] : "";
            }
            function n3(n4) {
              var i4 = e3(n4).toLowerCase();
              return t3()[i4] || "";
            }
            function i3(t4) {
              return -1 !== t4.search(/^(data:)/);
            }
            function o2(t4) {
              return new Promise(function(e4) {
                for (var n4 = window.atob(t4.toDataURL().split(",")[1]), i4 = n4.length, o3 = new Uint8Array(i4), r3 = 0; r3 < i4; r3++) o3[r3] = n4.charCodeAt(r3);
                e4(new Blob([o3], {
                  type: "image/png"
                }));
              });
            }
            function r2(t4) {
              return t4.toBlob ? new Promise(function(e4) {
                t4.toBlob(e4);
              }) : o2(t4);
            }
            function a2(t4, e4) {
              var n4 = document.implementation.createHTMLDocument(), i4 = n4.createElement("base");
              n4.head.appendChild(i4);
              var o3 = n4.createElement("a");
              return n4.body.appendChild(o3), i4.href = e4, o3.href = t4, o3.href;
            }
            function s2(t4) {
              return new Promise(function(e4, n4) {
                var i4 = new Image();
                i4.onload = function() {
                  e4(i4);
                }, i4.onerror = n4, i4.src = t4;
              });
            }
            function l2(t4) {
              var e4 = 3e4;
              return w.impl.options.cacheBust && (t4 += (/\?/.test(t4) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime()), new Promise(function(n4) {
                function i4() {
                  if (4 === a3.readyState) {
                    if (200 !== a3.status) return void (s3 ? n4(s3) : r3("cannot fetch resource: " + t4 + ", status: " + a3.status));
                    var e5 = new FileReader();
                    e5.onloadend = function() {
                      var t5 = e5.result.split(/,/)[1];
                      n4(t5);
                    }, e5.readAsDataURL(a3.response);
                  }
                }
                function o3() {
                  s3 ? n4(s3) : r3("timeout of " + e4 + "ms occured while fetching resource: " + t4);
                }
                function r3(t5) {
                  console.error(t5), n4("");
                }
                var a3 = new XMLHttpRequest();
                a3.onreadystatechange = i4, a3.ontimeout = o3, a3.responseType = "blob", a3.timeout = e4, a3.open("GET", t4, true), a3.send();
                var s3;
                if (w.impl.options.imagePlaceholder) {
                  var l3 = w.impl.options.imagePlaceholder.split(/,/);
                  l3 && l3[1] && (s3 = l3[1]);
                }
              });
            }
            function u2(t4, e4) {
              return "data:" + e4 + ";base64," + t4;
            }
            function c2(t4) {
              return t4.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
            }
            function d2(t4) {
              return function(e4) {
                return new Promise(function(n4) {
                  setTimeout(function() {
                    n4(e4);
                  }, t4);
                });
              };
            }
            function g2(t4) {
              for (var e4 = [], n4 = t4.length, i4 = 0; i4 < n4; i4++) e4.push(t4[i4]);
              return e4;
            }
            function h2(t4) {
              return t4.replace(/#/g, "%23").replace(/\n/g, "%0A");
            }
            function m2(t4) {
              var e4 = f2(t4, "border-left-width"), n4 = f2(t4, "border-right-width");
              return t4.scrollWidth + e4 + n4;
            }
            function p2(t4) {
              var e4 = f2(t4, "border-top-width"), n4 = f2(t4, "border-bottom-width");
              return t4.scrollHeight + e4 + n4;
            }
            function f2(t4, e4) {
              var n4 = window.getComputedStyle(t4).getPropertyValue(e4);
              return parseFloat(n4.replace("px", ""));
            }
            return {
              escape: c2,
              parseExtension: e3,
              mimeType: n3,
              dataAsUrl: u2,
              isDataUrl: i3,
              canvasToBlob: r2,
              resolveUrl: a2,
              getAndEncode: l2,
              uid: /* @__PURE__ */ function() {
                var t4 = 0;
                return function() {
                  return "u" + function() {
                    return ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
                  }() + t4++;
                };
              }(),
              delay: d2,
              asArray: g2,
              escapeXhtml: h2,
              makeImage: s2,
              width: m2,
              height: p2
            };
          }(), m = /* @__PURE__ */ function() {
            function t3(t4) {
              return -1 !== t4.search(o2);
            }
            function e3(t4) {
              for (var e4, n4 = []; null !== (e4 = o2.exec(t4)); ) n4.push(e4[1]);
              return n4.filter(function(t5) {
                return !h.isDataUrl(t5);
              });
            }
            function n3(t4, e4, n4, i4) {
              function o3(t5) {
                return new RegExp(`(url\\(['"]?)(` + h.escape(t5) + `)(['"]?\\))`, "g");
              }
              return Promise.resolve(e4).then(function(t5) {
                return n4 ? h.resolveUrl(t5, n4) : t5;
              }).then(i4 || h.getAndEncode).then(function(t5) {
                return h.dataAsUrl(t5, h.mimeType(e4));
              }).then(function(n5) {
                return t4.replace(o3(e4), "$1" + n5 + "$3");
              });
            }
            function i3(i4, o3, r2) {
              return function() {
                return !t3(i4);
              }() ? Promise.resolve(i4) : Promise.resolve(i4).then(e3).then(function(t4) {
                var e4 = Promise.resolve(i4);
                return t4.forEach(function(t5) {
                  e4 = e4.then(function(e5) {
                    return n3(e5, t5, o3, r2);
                  });
                }), e4;
              });
            }
            var o2 = /url\(['"]?([^'"]+?)['"]?\)/g;
            return {
              inlineAll: i3,
              shouldProcess: t3,
              impl: {
                readUrls: e3,
                inline: n3
              }
            };
          }(), p = /* @__PURE__ */ function() {
            function t3() {
              return e3(document).then(function(t4) {
                return Promise.all(t4.map(function(t5) {
                  return t5.resolve();
                }));
              }).then(function(t4) {
                return t4.join("\n");
              });
            }
            function e3() {
              function t4(t5) {
                return t5.filter(function(t6) {
                  return t6.type === CSSRule.FONT_FACE_RULE;
                }).filter(function(t6) {
                  return m.shouldProcess(t6.style.getPropertyValue("src"));
                });
              }
              function e4(t5) {
                var e5 = [];
                return t5.forEach(function(t6) {
                  try {
                    h.asArray(t6.cssRules || []).forEach(e5.push.bind(e5));
                  } catch (e6) {
                    console.log("Error while reading CSS rules from " + t6.href, e6.toString());
                  }
                }), e5;
              }
              function n3(t5) {
                return {
                  resolve: function() {
                    var e5 = (t5.parentStyleSheet || {}).href;
                    return m.inlineAll(t5.cssText, e5);
                  },
                  src: function() {
                    return t5.style.getPropertyValue("src");
                  }
                };
              }
              return Promise.resolve(h.asArray(document.styleSheets)).then(e4).then(t4).then(function(t5) {
                return t5.map(n3);
              });
            }
            return {
              resolveAll: t3,
              impl: {
                readAll: e3
              }
            };
          }(), f = /* @__PURE__ */ function() {
            function t3(t4) {
              function e4(e5) {
                return h.isDataUrl(t4.src) ? Promise.resolve() : Promise.resolve(t4.src).then(e5 || h.getAndEncode).then(function(e6) {
                  return h.dataAsUrl(e6, h.mimeType(t4.src));
                }).then(function(e6) {
                  return new Promise(function(n3, i3) {
                    t4.onload = n3, t4.onerror = i3, t4.src = e6;
                  });
                });
              }
              return {
                inline: e4
              };
            }
            function e3(n3) {
              return n3 instanceof Element ? function(t4) {
                var e4 = t4.style.getPropertyValue("background");
                return e4 ? m.inlineAll(e4).then(function(e5) {
                  t4.style.setProperty("background", e5, t4.style.getPropertyPriority("background"));
                }).then(function() {
                  return t4;
                }) : Promise.resolve(t4);
              }(n3).then(function() {
                return n3 instanceof HTMLImageElement ? t3(n3).inline() : Promise.all(h.asArray(n3.childNodes).map(function(t4) {
                  return e3(t4);
                }));
              }) : Promise.resolve(n3);
            }
            return {
              inlineAll: e3,
              impl: {
                newImage: t3
              }
            };
          }(), M = {
            imagePlaceholder: void 0,
            cacheBust: false
          }, w = {
            toSvg: n2,
            toPng: o,
            toJpeg: r,
            toBlob: a,
            toPixelData: i2,
            impl: {
              fontFaces: p,
              images: f,
              util: h,
              inliner: m,
              options: {}
            }
          };
          t2.exports = w;
        }();
      }), i = t(function(t2) {
        var n2 = n2 || function(t3) {
          if (!(void 0 === t3 || "undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
            var e2 = t3.document, n3 = function() {
              return t3.URL || t3.webkitURL || t3;
            }, i2 = e2.createElementNS("http://www.w3.org/1999/xhtml", "a"), o = "download" in i2, r = function(t4) {
              var e3 = new MouseEvent("click");
              t4.dispatchEvent(e3);
            }, a = /constructor/i.test(t3.HTMLElement) || t3.safari, s = /CriOS\/[\d]+/.test(navigator.userAgent), l = function(e3) {
              (t3.setImmediate || t3.setTimeout)(function() {
                throw e3;
              }, 0);
            }, u = function(t4) {
              var e3 = function() {
                "string" == typeof t4 ? n3().revokeObjectURL(t4) : t4.remove();
              };
              setTimeout(e3, 4e4);
            }, c = function(t4, e3, n4) {
              e3 = [].concat(e3);
              for (var i3 = e3.length; i3--; ) {
                var o2 = t4["on" + e3[i3]];
                if ("function" == typeof o2) try {
                  o2.call(t4, n4 || t4);
                } catch (t5) {
                  l(t5);
                }
              }
            }, d = function(t4) {
              return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t4.type) ? new Blob([String.fromCharCode(65279), t4], {
                type: t4.type
              }) : t4;
            }, g = function(e3, l2, g2) {
              g2 || (e3 = d(e3));
              var h2, m2 = this, p = e3.type, f = "application/octet-stream" === p, M = function() {
                c(m2, "writestart progress write writeend".split(" "));
              };
              if (m2.readyState = m2.INIT, o) return h2 = n3().createObjectURL(e3), void setTimeout(function() {
                i2.href = h2, i2.download = l2, r(i2), M(), u(h2), m2.readyState = m2.DONE;
              });
              !function() {
                if ((s || f && a) && t3.FileReader) {
                  var i3 = new FileReader();
                  return i3.onloadend = function() {
                    var e4 = s ? i3.result : i3.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                    t3.open(e4, "_blank") || (t3.location.href = e4), e4 = void 0, m2.readyState = m2.DONE, M();
                  }, i3.readAsDataURL(e3), void (m2.readyState = m2.INIT);
                }
                if (h2 || (h2 = n3().createObjectURL(e3)), f) t3.location.href = h2;
                else {
                  t3.open(h2, "_blank") || (t3.location.href = h2);
                }
                m2.readyState = m2.DONE, M(), u(h2);
              }();
            }, h = g.prototype, m = function(t4, e3, n4) {
              return new g(t4, e3 || t4.name || "download", n4);
            };
            return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(t4, e3, n4) {
              return e3 = e3 || t4.name || "download", n4 || (t4 = d(t4)), navigator.msSaveOrOpenBlob(t4, e3);
            } : (h.abort = function() {
            }, h.readyState = h.INIT = 0, h.WRITING = 1, h.DONE = 2, h.error = h.onwritestart = h.onprogress = h.onwrite = h.onabort = h.onerror = h.onwriteend = null, m);
          }
        }("undefined" != typeof self && self || "undefined" != typeof window && window || e.content);
        t2.exports && (t2.exports.saveAs = n2);
      });
      L.Control.EasyPrint = L.Control.extend({
        options: {
          title: "Print map",
          position: "topleft",
          sizeModes: ["Current"],
          filename: "map",
          exportOnly: false,
          hidden: false,
          tileWait: 500,
          hideControlContainer: true,
          hideClasses: [],
          customWindowTitle: window.document.title,
          spinnerBgCOlor: "#0DC5C1",
          customSpinnerClass: "epLoader",
          defaultSizeTitles: {
            Current: "Current Size",
            A4Landscape: "A4 Landscape",
            A4Portrait: "A4 Portrait"
          }
        },
        onAdd: function() {
          this.mapContainer = this._map.getContainer(), this.options.sizeModes = this.options.sizeModes.map(function(t3) {
            return "Current" === t3 ? {
              name: this.options.defaultSizeTitles.Current,
              className: "CurrentSize"
            } : "A4Landscape" === t3 ? {
              height: this._a4PageSize.height,
              width: this._a4PageSize.width,
              name: this.options.defaultSizeTitles.A4Landscape,
              className: "A4Landscape page"
            } : "A4Portrait" === t3 ? {
              height: this._a4PageSize.width,
              width: this._a4PageSize.height,
              name: this.options.defaultSizeTitles.A4Portrait,
              className: "A4Portrait page"
            } : t3;
          }, this);
          var t2 = L.DomUtil.create("div", "leaflet-control-easyPrint leaflet-bar leaflet-control");
          if (!this.options.hidden) {
            this._addCss(), L.DomEvent.addListener(t2, "mouseover", this._togglePageSizeButtons, this), L.DomEvent.addListener(t2, "mouseout", this._togglePageSizeButtons, this);
            var e2 = "leaflet-control-easyPrint-button";
            this.options.exportOnly && (e2 += "-export"), this.link = L.DomUtil.create("a", e2, t2), this.link.id = "leafletEasyPrint", this.link.title = this.options.title, this.holder = L.DomUtil.create("ul", "easyPrintHolder", t2), this.options.sizeModes.forEach(function(t3) {
              var e3 = L.DomUtil.create("li", "easyPrintSizeMode", this.holder);
              e3.title = t3.name;
              L.DomUtil.create("a", t3.className, e3);
              L.DomEvent.addListener(e3, "click", this.printMap, this);
            }, this), L.DomEvent.disableClickPropagation(t2);
          }
          return t2;
        },
        printMap: function(t2, e2) {
          e2 && (this.options.filename = e2), this.options.exportOnly || (this._page = window.open("", "_blank", "toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=10, top=10, width=200, height=250, visible=none"), this._page.document.write(this._createSpinner(this.options.customWindowTitle, this.options.customSpinnerClass, this.options.spinnerBgCOlor))), this.originalState = {
            mapWidth: this.mapContainer.style.width,
            widthWasAuto: false,
            widthWasPercentage: false,
            mapHeight: this.mapContainer.style.height,
            zoom: this._map.getZoom(),
            center: this._map.getCenter()
          }, "auto" === this.originalState.mapWidth ? (this.originalState.mapWidth = this._map.getSize().x + "px", this.originalState.widthWasAuto = true) : this.originalState.mapWidth.includes("%") && (this.originalState.percentageWidth = this.originalState.mapWidth, this.originalState.widthWasPercentage = true, this.originalState.mapWidth = this._map.getSize().x + "px"), this._map.fire("easyPrint-start", {
            event: t2
          }), this.options.hidden || this._togglePageSizeButtons({
            type: null
          }), this.options.hideControlContainer && this._toggleControls(), this.options.hideClasses.length > 0 && this._toggleClasses(this.options.hideClasses);
          var n2 = "string" != typeof t2 ? t2.target.className : t2;
          if ("CurrentSize" === n2) return this._printOpertion(n2);
          this.outerContainer = this._createOuterContainer(this.mapContainer), this.originalState.widthWasAuto && (this.outerContainer.style.width = this.originalState.mapWidth), this._createImagePlaceholder(n2);
        },
        _createImagePlaceholder: function(t2) {
          var e2 = this;
          n.toPng(this.mapContainer, {
            width: parseInt(this.originalState.mapWidth.replace("px")),
            height: parseInt(this.originalState.mapHeight.replace("px"))
          }).then(function(n2) {
            e2.blankDiv = document.createElement("div");
            var i2 = e2.blankDiv;
            e2.outerContainer.parentElement.insertBefore(i2, e2.outerContainer), i2.className = "epHolder", i2.style.backgroundImage = 'url("' + n2 + '")', i2.style.position = "absolute", i2.style.zIndex = 1011, i2.style.display = "initial", i2.style.width = e2.originalState.mapWidth, i2.style.height = e2.originalState.mapHeight, e2._resizeAndPrintMap(t2);
          }).catch(function(t3) {
            console.error("oops, something went wrong!", t3);
          });
        },
        _resizeAndPrintMap: function(t2) {
          this.outerContainer.style.opacity = 0;
          var e2 = this.options.sizeModes.filter(function(e3) {
            return e3.className === t2;
          });
          e2 = e2[0], this.mapContainer.style.width = e2.width + "px", this.mapContainer.style.height = e2.height + "px", this.mapContainer.style.width > this.mapContainer.style.height ? this.orientation = "portrait" : this.orientation = "landscape", this._map.setView(this.originalState.center), this._map.setZoom(this.originalState.zoom), this._map.invalidateSize(), this.options.tileLayer ? this._pausePrint(t2) : this._printOpertion(t2);
        },
        _pausePrint: function(t2) {
          var e2 = this, n2 = setInterval(function() {
            e2.options.tileLayer.isLoading() || (clearInterval(n2), e2._printOpertion(t2));
          }, e2.options.tileWait);
        },
        _printOpertion: function(t2) {
          var e2 = this, o = this.mapContainer.style.width;
          (this.originalState.widthWasAuto && "CurrentSize" === t2 || this.originalState.widthWasPercentage && "CurrentSize" === t2) && (o = this.originalState.mapWidth), n.toPng(e2.mapContainer, {
            width: parseInt(o),
            height: parseInt(e2.mapContainer.style.height.replace("px"))
          }).then(function(t3) {
            var n2 = e2._dataURItoBlob(t3);
            e2.options.exportOnly ? i.saveAs(n2, e2.options.filename + ".png") : e2._sendToBrowserPrint(t3, e2.orientation), e2._toggleControls(true), e2._toggleClasses(e2.options.hideClasses, true), e2.outerContainer && (e2.originalState.widthWasAuto ? e2.mapContainer.style.width = "auto" : e2.originalState.widthWasPercentage ? e2.mapContainer.style.width = e2.originalState.percentageWidth : e2.mapContainer.style.width = e2.originalState.mapWidth, e2.mapContainer.style.height = e2.originalState.mapHeight, e2._removeOuterContainer(e2.mapContainer, e2.outerContainer, e2.blankDiv), e2._map.invalidateSize(), e2._map.setView(e2.originalState.center), e2._map.setZoom(e2.originalState.zoom)), e2._map.fire("easyPrint-finished");
          }).catch(function(t3) {
            console.error("Print operation failed", t3);
          });
        },
        _sendToBrowserPrint: function(t2, e2) {
          this._page.resizeTo(600, 800);
          var n2 = this._createNewWindow(t2, e2, this);
          this._page.document.body.innerHTML = "", this._page.document.write(n2), this._page.document.close();
        },
        _createSpinner: function(t2, e2, n2) {
          return "<html><head><title>" + t2 + "</title></head><body><style>\n      body{\n        background: " + n2 + `;
      }
      .epLoader,
      .epLoader:before,
      .epLoader:after {
        border-radius: 50%;
      }
      .epLoader {
        color: #ffffff;
        font-size: 11px;
        text-indent: -99999em;
        margin: 55px auto;
        position: relative;
        width: 10em;
        height: 10em;
        box-shadow: inset 0 0 0 1em;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
      }
      .epLoader:before,
      .epLoader:after {
        position: absolute;
        content: '';
      }
      .epLoader:before {
        width: 5.2em;
        height: 10.2em;
        background: #0dc5c1;
        border-radius: 10.2em 0 0 10.2em;
        top: -0.1em;
        left: -0.1em;
        -webkit-transform-origin: 5.2em 5.1em;
        transform-origin: 5.2em 5.1em;
        -webkit-animation: load2 2s infinite ease 1.5s;
        animation: load2 2s infinite ease 1.5s;
      }
      .epLoader:after {
        width: 5.2em;
        height: 10.2em;
        background: #0dc5c1;
        border-radius: 0 10.2em 10.2em 0;
        top: -0.1em;
        left: 5.1em;
        -webkit-transform-origin: 0px 5.1em;
        transform-origin: 0px 5.1em;
        -webkit-animation: load2 2s infinite ease;
        animation: load2 2s infinite ease;
      }
      @-webkit-keyframes load2 {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      @keyframes load2 {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      </style>
    <div class="` + e2 + '">Loading...</div></body></html>';
        },
        _createNewWindow: function(t2, e2, n2) {
          return "<html><head>\n        <style>@media print {\n          img { max-width: 98%!important; max-height: 98%!important; }\n          @page { size: " + e2 + `;}}
        </style>
        <script>function step1(){
        setTimeout('step2()', 10);}
        function step2(){window.print();window.close()}
        <\/script></head><body onload='step1()'>
        <img src="` + t2 + '" style="display:block; margin:auto;"></body></html>';
        },
        _createOuterContainer: function(t2) {
          var e2 = document.createElement("div");
          return t2.parentNode.insertBefore(e2, t2), t2.parentNode.removeChild(t2), e2.appendChild(t2), e2.style.width = t2.style.width, e2.style.height = t2.style.height, e2.style.display = "inline-block", e2.style.overflow = "hidden", e2;
        },
        _removeOuterContainer: function(t2, e2, n2) {
          e2.parentNode && (e2.parentNode.insertBefore(t2, e2), e2.parentNode.removeChild(n2), e2.parentNode.removeChild(e2));
        },
        _addCss: function() {
          var t2 = document.createElement("style");
          t2.type = "text/css", t2.innerHTML = ".leaflet-control-easyPrint-button { \n      background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMTI4LDMyaDI1NnY2NEgxMjhWMzJ6IE00ODAsMTI4SDMyYy0xNy42LDAtMzIsMTQuNC0zMiwzMnYxNjBjMCwxNy42LDE0LjM5OCwzMiwzMiwzMmg5NnYxMjhoMjU2VjM1Mmg5NiAgIGMxNy42LDAsMzItMTQuNCwzMi0zMlYxNjBDNTEyLDE0Mi40LDQ5Ny42LDEyOCw0ODAsMTI4eiBNMzUyLDQ0OEgxNjBWMjg4aDE5MlY0NDh6IE00ODcuMTk5LDE3NmMwLDEyLjgxMy0xMC4zODcsMjMuMi0yMy4xOTcsMjMuMiAgIGMtMTIuODEyLDAtMjMuMjAxLTEwLjM4Ny0yMy4yMDEtMjMuMnMxMC4zODktMjMuMiwyMy4xOTktMjMuMkM0NzYuODE0LDE1Mi44LDQ4Ny4xOTksMTYzLjE4Nyw0ODcuMTk5LDE3NnoiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);\n      background-size: 16px 16px; \n      cursor: pointer; \n    }\n    .leaflet-control-easyPrint-button-export { \n      background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQzMy41IDQzMy41IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MzMuNSA0MzMuNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnIGlkPSJmaWxlLWRvd25sb2FkIj4KCQk8cGF0aCBkPSJNMzk1LjI1LDE1M2gtMTAyVjBoLTE1M3YxNTNoLTEwMmwxNzguNSwxNzguNUwzOTUuMjUsMTUzeiBNMzguMjUsMzgyLjV2NTFoMzU3di01MUgzOC4yNXoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);\n      background-size: 16px 16px; \n      cursor: pointer; \n    }\n    .easyPrintHolder a {\n      background-size: 16px 16px;\n      cursor: pointer;\n    }\n    .easyPrintHolder .CurrentSize{\n      background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTZweCIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiPgogIDxnPgogICAgPGcgZmlsbD0iIzFEMUQxQiI+CiAgICAgIDxwYXRoIGQ9Ik0yNS4yNTUsMzUuOTA1TDQuMDE2LDU3LjE0NVY0Ni41OWMwLTEuMTA4LTAuODk3LTIuMDA4LTIuMDA4LTIuMDA4QzAuODk4LDQ0LjU4MiwwLDQ1LjQ4MSwwLDQ2LjU5djE1LjQwMiAgICBjMCwwLjI2MSwwLjA1MywwLjUyMSwwLjE1NSwwLjc2N2MwLjIwMywwLjQ5MiwwLjU5NCwwLjg4MiwxLjA4NiwxLjA4N0MxLjQ4Niw2My45NDcsMS43NDcsNjQsMi4wMDgsNjRoMTUuNDAzICAgIGMxLjEwOSwwLDIuMDA4LTAuODk4LDIuMDA4LTIuMDA4cy0wLjg5OC0yLjAwOC0yLjAwOC0yLjAwOEg2Ljg1NWwyMS4yMzgtMjEuMjRjMC43ODQtMC43ODQsMC43ODQtMi4wNTUsMC0yLjgzOSAgICBTMjYuMDM5LDM1LjEyMSwyNS4yNTUsMzUuOTA1eiIgZmlsbD0iIzAwMDAwMCIvPgogICAgICA8cGF0aCBkPSJtNjMuODQ1LDEuMjQxYy0wLjIwMy0wLjQ5MS0wLjU5NC0wLjg4Mi0xLjA4Ni0xLjA4Ny0wLjI0NS0wLjEwMS0wLjUwNi0wLjE1NC0wLjc2Ny0wLjE1NGgtMTUuNDAzYy0xLjEwOSwwLTIuMDA4LDAuODk4LTIuMDA4LDIuMDA4czAuODk4LDIuMDA4IDIuMDA4LDIuMDA4aDEwLjU1NmwtMjEuMjM4LDIxLjI0Yy0wLjc4NCwwLjc4NC0wLjc4NCwyLjA1NSAwLDIuODM5IDAuMzkyLDAuMzkyIDAuOTA2LDAuNTg5IDEuNDIsMC41ODlzMS4wMjctMC4xOTcgMS40MTktMC41ODlsMjEuMjM4LTIxLjI0djEwLjU1NWMwLDEuMTA4IDAuODk3LDIuMDA4IDIuMDA4LDIuMDA4IDEuMTA5LDAgMi4wMDgtMC44OTkgMi4wMDgtMi4wMDh2LTE1LjQwMmMwLTAuMjYxLTAuMDUzLTAuNTIyLTAuMTU1LTAuNzY3eiIgZmlsbD0iIzAwMDAwMCIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==)\n    }\n    .easyPrintHolder .page {\n      background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ0NC44MzMgNDQ0LjgzMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDQ0LjgzMyA0NDQuODMzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNTUuMjUsNDQ0LjgzM2gzMzQuMzMzYzkuMzUsMCwxNy03LjY1LDE3LTE3VjEzOS4xMTdjMC00LjgxNy0xLjk4My05LjM1LTUuMzgzLTEyLjQ2N0wyNjkuNzMzLDQuNTMzICAgIEMyNjYuNjE3LDEuNywyNjIuMzY3LDAsMjU4LjExNywwSDU1LjI1Yy05LjM1LDAtMTcsNy42NS0xNywxN3Y0MTAuODMzQzM4LjI1LDQzNy4xODMsNDUuOSw0NDQuODMzLDU1LjI1LDQ0NC44MzN6ICAgICBNMzcyLjU4MywxNDYuNDgzdjAuODVIMjU2LjQxN3YtMTA4LjhMMzcyLjU4MywxNDYuNDgzeiBNNzIuMjUsMzRoMTUwLjE2N3YxMzAuMzMzYzAsOS4zNSw3LjY1LDE3LDE3LDE3aDEzMy4xNjd2MjI5LjVINzIuMjVWMzR6ICAgICIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=);\n    }\n    .easyPrintHolder .A4Landscape { \n      transform: rotate(-90deg);\n    }\n\n    .leaflet-control-easyPrint-button{\n      display: inline-block;\n    }\n    .easyPrintHolder{\n      margin-top:-31px;\n      margin-bottom: -5px;\n      margin-left: 30px;\n      padding-left: 0px;\n      display: none;\n    }\n\n    .easyPrintSizeMode {\n      display: inline-block;\n    }\n    .easyPrintHolder .easyPrintSizeMode a {\n      border-radius: 0px;\n    }\n\n    .easyPrintHolder .easyPrintSizeMode:last-child a{\n      border-top-right-radius: 2px;\n      border-bottom-right-radius: 2px;\n      margin-left: -1px;\n    }\n\n    .easyPrintPortrait:hover, .easyPrintLandscape:hover{\n      background-color: #757570;\n      cursor: pointer;\n    }", document.body.appendChild(t2);
        },
        _dataURItoBlob: function(t2) {
          for (var e2 = atob(t2.split(",")[1]), n2 = t2.split(",")[0].split(":")[1].split(";")[0], i2 = new ArrayBuffer(e2.length), o = new DataView(i2), r = 0; r < e2.length; r++) o.setUint8(r, e2.charCodeAt(r));
          return new Blob([i2], {
            type: n2
          });
        },
        _togglePageSizeButtons: function(t2) {
          var e2 = this.holder.style, n2 = this.link.style;
          "mouseover" === t2.type ? (e2.display = "block", n2.borderTopRightRadius = "0", n2.borderBottomRightRadius = "0") : (e2.display = "none", n2.borderTopRightRadius = "2px", n2.borderBottomRightRadius = "2px");
        },
        _toggleControls: function(t2) {
          var e2 = document.getElementsByClassName("leaflet-control-container")[0];
          if (t2) return e2.style.display = "block";
          e2.style.display = "none";
        },
        _toggleClasses: function(t2, e2) {
          t2.forEach(function(t3) {
            var n2 = document.getElementsByClassName(t3)[0];
            if (e2) return n2.style.display = "block";
            n2.style.display = "none";
          });
        },
        _a4PageSize: {
          height: 715,
          width: 1045
        }
      }), L.easyPrint = function(t2) {
        return new L.Control.EasyPrint(t2);
      };
    });
  }
});
export default require_bundle();
//# sourceMappingURL=leaflet-easyprint.js.map
