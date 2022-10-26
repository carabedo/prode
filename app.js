(function(e) {
    
    function t(t) {
        for (var s, n, i = t[0], c = t[1], u = t[2], d = 0, p = []; d < i.length; d++)
            n = i[d],
            Object.prototype.hasOwnProperty.call(o, n) && o[n] && p.push(o[n][0]),
            o[n] = 0;
        for (s in c)
            Object.prototype.hasOwnProperty.call(c, s) && (e[s] = c[s]);
        l && l(t);
        while (p.length)
            p.shift()();
        return r.push.apply(r, u || []),
        a()
    }
    function a() {
        for (var e, t = 0; t < r.length; t++) {
            for (var a = r[t], s = !0, i = 1; i < a.length; i++) {
                var c = a[i];
                0 !== o[c] && (s = !1)
            }
            s && (r.splice(t--, 1),
            e = n(n.s = a[0]))
        }
        return e
    }
    var s = {}
      , o = {
        "app~d0ae3f07": 0
    }
      , r = [];
    function n(t) {
        if (s[t])
            return s[t].exports;
        var a = s[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, n),
        a.l = !0,
        a.exports
    }
    
    n.m = e,
    n.c = s,
    n.d = function(e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }
    ,
    n.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (n.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var s in e)
                n.d(a, s, function(t) {
                    return e[t]
                }
                .bind(null, s));
        return a
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "https://especialess3.lanacion.com.ar/interactivos/22/10/pronostico-mundial-2022/";
    var i = window["jsonpHtmlLibre"] = window["jsonpHtmlLibre"] || []
      , c = i.push.bind(i);
    i.push = t,
    i = i.slice();
    for (var u = 0; u < i.length; u++)
        t(i[u]);
    var l = c;
    r.push([0, "chunk-vendors~253ae210", "chunk-vendors~d939e436", "chunk-vendors~fdc6512a", "chunk-vendors~7dcdd765", "chunk-vendors~d2305125"]),
    a()
}
)({
    0: function(e, t, a) {
        e.exports = a("56d7")
    },
    "0a79": function(e, t, a) {},
    "1d3c": function(e, t, a) {},
    "2b44": function(e, t, a) {
        "use strict";
        var s = a("350f")
          , o = a.n(s);
        o.a
    },
    "2fbc": function(e, t, a) {},
    "350f": function(e, t, a) {},
    "35d5": function(e, t, a) {},
    3890: function(e, t, a) {},
    "47b2": function(e, t, a) {
        "use strict";
        var s = a("7642")
          , o = a.n(s);
        o.a
    },
    "480b": function(e, t, a) {},
    "4c20": function(e, t, a) {
        "use strict";
        var s = a("9130")
          , o = a.n(s);
        o.a
    },
    5111: function(e, t, a) {
        "use strict";
        var s = a("1d3c")
          , o = a.n(s);
        o.a
    },
    "56d7": function(e, t, a) {
        "use strict";
        a.r(t);
        a("e623"),
        a("e379"),
        a("5dc8"),
        a("37e1");
        var s = a("2b0e")
          , o = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                attrs: {
                    id: "app"
                }
            }, [e._m(0), a("Redes", {
                staticClass: "redes-header",
                attrs: {
                    textoRedes: "Pronóstico del Mundial - Acertá todos los resultados y ganá con el simulador de LA NACION"
                }
            }), a("Menu"), e.haveErrorMsg ? a("div", {
                staticClass: "prode_error"
            }, [e._v(" " + e._s(e.errorMsg) + " "), a("a", {
                attrs: {
                    href: ""
                },
                on: {
                    click: e.closeErrorMsg
                }
            }, [e._v("Cerrar")])]) : e._e(), a("div", {
                staticClass: "content"
            }, [a("div", {
                staticClass: "pronostico-container",
                attrs: {
                    id: "pronosticoContainer"
                }
            }, [a("Alerta", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showAlerta,
                    expression: "showAlerta"
                }],
                attrs: {
                    userLogued: e.userLogued,
                    esInvitacion: e.isValidInvitation
                },
                on: {
                    alertNo: e.hideAlerta,
                    unirme: e.addUserToAGroup
                }
            }), e.haveCookies && !e.predictionsLoaded ? a("Loader") : e._e(), e.haveCookies ? e._e() : a("PronosticoOffline"), e.haveCookies ? a("router-view") : e._e(), a("TerminosYCondiciones")], 1)])], 1)
        }
          , r = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                attrs: {
                    id: "error-alert"
                }
            }, [a("span", [e._v("¡Oops! "), a("br"), a("br"), e._v(" Estamos realizando tareas de mantenimiento. "), a("br"), e._v(" Intentá de nuevo mas tarde.")])])
        }
        ]
          , n = (a("4160"),
        a("baa5"),
        a("fb6a"),
        a("b0c0"),
        a("c1f9"),
        a("d3b7"),
        a("ac1f"),
        a("3ca3"),
        a("841c"),
        a("159b"),
        a("ddb0"),
        a("2b3d"),
        a("5319"),
        {
            methods: {
                bucketImage: function(e, t, a) {
                    var s = t ? "w" + t : ""
                      , o = a ? "q" + a : ""
                      , r = /bucket[a-z]?[0-9]?\.glanacion(.+)?\.(jpg|jpeg|png|gif)/i
                      , n = /\.(jpg|jpeg|png|gif)/i
                      , i = r.test(e)
                      , c = i ? e.replace(n, s + o + ".$1") : e;
                    return c.replace("http:", "https:")
                }
            }
        })
          , i = (a("99af"),
        {
            methods: {
                urlLn: function(e, t, a) {
                    return "aml" === e ? "https://archieml.lanacion.com.ar/archiemldocs?doc_id=".concat(t) : "https://olcreativa.lanacion.com.ar/dev/get_url/api.php?key2=".concat(t, "&gid=").concat(a || 0)
                }
            }
        })
          , c = {
            base: "https://x14blnzsqf.execute-api.us-east-2.amazonaws.com/",
            user: "usuario",
            userGroups: "usuario/grupo",
            fixture: "fixture",
            group: "grupo",
            ranking: "ranking",
            invitation: "grupo/invitacion"
        }
          , u = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                attrs: {
                    id: "menu"
                }
            }, [e._m(0), a("div", {
                staticClass: "menu-container"
            }, [a("ul", {
                attrs: {
                    id: "menu-principal"
                }
            }, [a("router-link", {
                class: "pronostico",
                attrs: {
                    tag: "li",
                    "active-class": "active",
                    to: "/pronostico/" + e.groupSelected.key
                },
                nativeOn: {
                    click: function(t) {
                        return e.alertOrScroll()
                    }
                }
            }, [e._v(" Mirá tu "), a("br"), e._v("pronóstico ")]), a("router-link", {
                attrs: {
                    tag: "li",
                    "active-class": "active",
                    to: "/gruposUsuario"
                },
                nativeOn: {
                    click: function(t) {
                        return e.alertOrScroll()
                    }
                }
            }, [e._v(" Tus "), a("br"), e._v("rankings ")]), a("router-link", {
                attrs: {
                    tag: "li",
                    "active-class": "active",
                    to: "/armaUnTorneo"
                },
                nativeOn: {
                    click: function(t) {
                        return e.alertOrScroll()
                    }
                }
            }, [e._v(" Armá "), a("br"), e._v("un torneo ")])], 1), a("ul", {
                attrs: {
                    id: "menu-grupos"
                }
            }, [e.userLogued ? e._e() : e._e() , e._l(e.groupLetters, (function(t, s) {
                return a("router-link", {
                    key: s,
                    class: {
                        active: e.isSelected(t.key),
                        eliminatoria: t.elim,
                        completed: e.predictionsStates[t.key]
                    },
                    attrs: {
                        to: "/pronostico/" + t.key,
                        "active-class": "active",
                        tag: "li"
                    },
                    domProps: {
                        innerHTML: e._s(t.menu)
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.setGroupSelected()
                        }
                    }
                })
            }
            ))], 2)])])
        }
          , l = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "sponsor-container"
            }, [a("div", {
                staticClass: "sponsors"
            }, [])])
        }
        ]
          , d = (a("7db0"),
        window.innerWidth,
        {
            name: "Menu",
            data: function() {
                return {}
            },
            props: [],
            mounted: function() {
                this.checkScroll()
            },
            computed: {
                groupSelected: function() {
                    return this.$store.state.contexto.groupSelected
                },
                groupLetters: function() {
                    return this.$store.state.contexto.groupLetters
                },
                currentRouteName: function() {
                    return this.$route.name
                },
                userLogued: function() {
                    return this.$store.getters["user/userLogued"]
                },
                predictionsStates: function() {
                    return this.$store.getters["predictions/getPredictionsStates"]
                },
                isMobile: function() {
                    return window.innerWidth < 700
                }
            },
            methods: {
                setGroupSelected: function() {
                    var e = this;
                    if (this.$store.getters["predictions/isPredictionEnable"]) {
                        var t = this.$store.getters["predictions/getValidPredictionsSelected"];
                        this.$store.dispatch("predictions/savePredictionAction", t)
                    }
                    var a = this.groupLetters.find((function(t) {
                        return t.key == e.$route.params.id
                    }
                    ));
                    void 0 != a ? (this.$store.commit("contexto/setGroupSelected", a),
                    this.fireScroll()) : this.$store.commit("contexto/setGroupSelected", this.groupLetters[0]),
                    this.checkScroll()
                },
                alertOrScroll: function() {
                    this.userLogued ? this.fireScroll() : this.fireScroll()
                },
                showAlert: function() {
                    this.$store.commit("contexto/setShowAlertLogin", !0)
                },
                fireScroll: function() {
                    var e = 240;
                    window.scrollTo({
                        top: e,
                        behavior: "smooth"
                    })
                },
                isSelected: function(e) {
                    return e == this.groupSelected.key && "Home" == this.currentRouteName
                },
                checkScroll: function() {
                    if (this.isMobile) {
                        var e = this.$router.currentRoute.params.id
                          , t = document.getElementById("menu-grupos")
                          , a = "eighth" == e || "fourth" == e || "semi" == e || "final" == e;
                        null != t && a ? t.scrollTo({
                            left: 350,
                            behavior: "smooth"
                        }) : t.scrollTo({
                            left: 0,
                            behavior: "smooth"
                        })
                    }
                }
            },
            created: function() {
                this.setGroupSelected()
            }
        })
          , p = d
          , m = (a("bb78"),
        a("2877"))
          , g = Object(m["a"])(p, u, l, !1, null, null, null)
          , v = g.exports
          , h = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return 
        }
          , f = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("ol", {
                attrs: {
                    type: "a"
                }
            }, [a("li", [e._v("")]), a("li", [e._v(""), a("a", {
                attrs: {
                    href: "",
                    title: "",
                    target: "_blank"
                }
            }, [e._v("")])]), a("li", [e._v("Acepten recibir newsletters de LN Deportes, del Mundial y comunicaciones comerciales")]), a("li", [e._v("Completen los pronósticos deportivos que consideren para cada uno de los partidos que se jueguen del Mundial.")])])
        }
        , function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("p", {
                staticClass: "reglas-texto"
            }, [])
        }
        , function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("p", {
                staticClass: "reglas-texto"
            }, [])
        }
        , function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("p", {
                staticClass: "reglas-texto"
            }, [])
        }
        , function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("p", {
                staticClass: "reglas-texto"
            }, [e._v("")])
        }
        , function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("p", {
                staticClass: "reglas-texto"
            }, [e._v("")])
        }
        ]
          , _ = {
            name: "TerminosCondiciones",
            data: function() {
                return {
                    open: !1
                }
            },
            props: [],
            mounted: function() {},
            methods: {
                openBox: function() {
                    this.open = !this.open
                }
            }
        }
          , b = _
          , C = (a("2b44"),
        Object(m["a"])(b, h, f, !1, null, null, null))
          , G = C.exports
          , k = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return 
        }
          , P = []
          , A = (a("c975"),
        {
            name: "Redes",
            props: {
                textoRedes: {
                    required: !0
                },
                hashtag: {
                    required: !1
                },
                isDark: {
                    required: !1,
                    default: !0
                }
            },
            data: function() {
                return {
                    theme: {
                        "btn-blancos": !this.isDark,
                        "btn-negros": this.isDark
                    }
                }
            },
            computed: {
                urlNota: function() {
                    var e = location.href;
                    return encodeURIComponent(e)
                },
                notaId: function() {
                    var e = this.urlNota.indexOf("nid") + 3;
                    return this.urlNota.substring(e)
                }
            },
            methods: {
                shareWH: function() {
                    var e = "https://api.whatsapp.com/send?text=".concat(this.textoRedes, " --\x3e ").concat(this.urlNota);
                    this.trackSocial("whatsapp"),
                    window.open(e, "_blank")
                },
                shareTW: function() {
                    var e = "https://twitter.com/share?url=".concat(this.urlNota, "&text=").concat(this.textoRedes, "&hashtags=").concat(this.hashtag || "", "&via=lanacion&size=large");
                    this.trackSocial("twitter"),
                    window.open(e, "_blank", "width=555,height=400")
                },
                shareFB: function() {
                    var e = "https://www.facebook.com/sharer/sharer.php?u=".concat(this.urlNota);
                    this.trackSocial("facebook"),
                    window.open(e, "_blank", "width=555,height=400")
                },
                trackSocial: function(e) {
                    var t = {
                        event: "shareItem",
                        socialAction: "Share",
                        socialNetwork: e
                    };
                    this.track(t)
                },
                trackEvent: function(e, t) {
                    var a = {
                        event: "trackEvent",
                        eventCategory: e,
                        eventAction: t,
                        eventLabel: this.notaId
                    };
                    this.track(a)
                },
                track: function(e) {
                    window.dataLayer || (window.dataLayer = []),
                    window.dataLayer.push(e)
                }
            }
        })
          , y = A
          , w = (a("7414"),
        Object(m["a"])(y, k, P, !1, null, null, null))
          , S = w.exports
          , x = function() {
            var e = this , t = e.$createElement, a = e._self._c || t;
            return e
            //fin del return
            }
          , E = []
          , I = {
            name: "Alerta",
            data: function() {
                return {}
            },
            props: ["esInvitacion", "userLogued"],
            computed: {
                mainTitle: function() {
                    return this.esInvitacion ? ":)" : ":("
                },
                message: function() {
                    var e = "";
                    this.esInvitacion && (e = "Recibiste una invitación para el torneo ".concat(this.torneoInvitation.name, " administrado por  ").concat(this.torneoInvitation.user_name_admin, ". "));
                    var t = this.userLogued ? "logeado" : "nologeado";
                    return e + t
                },
                isProcessing: function() {
                    return this.$store.state.contexto.isProcessing
                },
                btnMessage: function() {
                    return this.isProcessing ? "GUARDANDO..." : "UNIRME"
                },
                callbackURL: function() {
                    var e = document.location;
                    return window.btoa(e)
                },
                torneoInvitation: function() {
                    return this.$store.state.userGroups.invitationGroup
                }
            },
            methods: {
                rechazarGrupo: function() {
                    this.$emit("alertNo"),
                    this.$router.push("/pronostico/A")
                }
            }
        }
          , O = I
          , q = (a("5111"),
           Object(m["a"])(O, x, E, !1, null, null, null))
          , L = q.exports
          , U = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "app-loader",
                attrs: {
                    id: "wrapper_preload"
                }
            }, [a("div", {
                attrs: {
                    id: "logo_wrapper_ln"
                }
            }, [a("svg", {
                attrs: {
                    height: "49px",
                    id: "Layer_1",
                    viewBox: "290.139 372.445 41 49",
                    width: "41px",
                    "enable-background": "new 290.139 372.445 41 49",
                    version: "1.1",
                    x: "0px",
                    "xml:space": "preserve",
                    y: "0px"
                }
            }, [a("g", [a("g", [a("path", {
                attrs: {
                    d: "M326.779,393.904v-0.891h-4.801v0.891h0.346c0.966,0,1.49,0.344,1.49,1.05v5.732h0.192l-6.191-7.674 h-5.612v0.891h0.094c0.734,0,1.478,0.573,1.478,1.454v8.425c0,1.125-0.632,1.325-1.31,1.325h-0.005h-0.321v0.889l4.836,0.017 l-0.051-0.905h-0.14c-1.218,0-1.701-0.176-1.701-1.227v-8.34h-0.188l8.404,10.455h1.837v-11.101c0-0.463,0.413-0.993,1.397-0.993 L326.779,393.904L326.779,393.904z M299.457,405.997h11.641v-5.162h-0.962v0.555c0,2.952-2.037,3.719-4.59,3.719h-0.457v-11.205 h2.139v-0.891h-7.77v0.891h1.938v11.205h-1.938L299.457,405.997L299.457,405.997z",
                    fill: "#3b111a"
                }
            })])])])]), a("svg", {
                attrs: {
                    height: "56",
                    id: "loader_spinner",
                    viewBox: "0 0 48 48",
                    width: "56",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [a("defs", [a("linearGradient", {
                attrs: {
                    id: "spinner-gradient-a",
                    x1: "49.892%",
                    x2: "55.03%",
                    y1: "58.241%",
                    y2: "89.889%"
                }
            }, [a("stop", {
                staticStyle: {
                    "stop-color": "#3b111a"
                },
                attrs: {
                    offset: "0%"
                }
            }), a("stop", {
                staticStyle: {
                    "stop-color": "#3b111a"
                },
                attrs: {
                    offset: "30.44%",
                    "stop-opacity": ".60"
                }
            }), a("stop", {
                staticStyle: {
                    "stop-color": "#3b111a"
                },
                attrs: {
                    offset: "100%",
                    "stop-opacity": "0"
                }
            })], 1)], 1), a("g", {
                attrs: {
                    fill: "none",
                    transform: "translate(-8 -8)"
                }
            }, [a("path", {
                attrs: {
                    d: "M32,56 C18.745166,56 8,45.254834 8,32 C8,18.745166 18.745166,8 32,8 C45.254834,8 56,18.745166 56,32 C56,45.254834 45.254834,56 32,56 Z M32,52 C43.045695,52 52,43.045695 52,32 C52,20.954305 43.045695,12 32,12 C20.954305,12 12,20.954305 12,32 C12,43.045695 20.954305,52 32,52 Z"
                }
            }), a("path", {
                attrs: {
                    d: "M56,32 C56,33.1045695 55.1045695,34 54,34 C52.8954305,34 52,33.1045695 52,32 C52,20.954305 43.045695,12 32,12 C20.954305,12 12,20.954305 12,32 C12,43.045695 20.954305,52 32,52 C33.1045695,52 34,52.8954305 34,54 C34,55.1045695 33.1045695,56 32,56 C18.745166,56 8,45.254834 8,32 C8,18.745166 18.745166,8 32,8 C45.254834,8 56,18.745166 56,32 Z",
                    fill: "url(#spinner-gradient-a)",
                    transform: "rotate(45 32 32)"
                }
            })])])])
        }
          , M = []
          , N = {
            name: "app-loader",
            props: [],
            data: function() {
                return {}
            },
            computed: {},
            methods: {}
        }
          , T = N
          , $ = (a("a071"),
        Object(m["a"])(T, U, M, !1, null, null, null))
          , D = $.exports
          , R = a("2b27")
          , j = a.n(R)
          , z = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "grupo-partidos",
                attrs: {
                    id: "pronostico-wrapper"
                },
                on: {
                    click: function(t) {
                        return e.showAlert()
                    }
                }
            }, [e._m(0), e._m(1)])
        }
          , B = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "titulos nohaypartidos"
            }, [a("div", {
                staticClass: "nombre-grupo"
            }, [e._v("A")]), a("div", {
                staticClass: "completa"
            }, [e._v("COMPLETA"), a("br"), e._v("TU PRONÓSTICO")]), a("button", {
                staticClass: "ver-reglas"
            }, [e._v(" VER REGLAS ")])])
        }
        , function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "partidos-container A"
            }, [a("div", [a("div", {
                staticClass: "partido",
                attrs: {
                    id: "2277789"
                }
            }, [a("div", {
                staticClass: "wrapper-pais"
            }, [a("button", {
                staticClass: "btnMobile mas mostrar active"
            }), a("div", {
                staticClass: "pais equipo1"
            }, [e._v("Qatar")]), a("button", {
                staticClass: "btnMobile menos mostrar active"
            })]), a("div", {
                staticClass: "pronostico"
            }, [a("div", {
                staticClass: "puntos izquierda"
            }), a("div", {
                staticClass: "puntos elegir"
            }, [a("span", [e._v("ELEGÍ UN GANADOR")])]), a("div", {
                staticClass: "wrapper-inputs"
            }, [a("div", [a("input", {
                attrs: {
                    type: "tel",
                    id: "equipo1",
                    name: "prEquipo1",
                    maxlength: "1",
                    autocomplete: "off"
                }
            }), a("input", {
                attrs: {
                    type: "tel",
                    id: "equipo2",
                    name: "prEquipo2",
                    maxlength: "1",
                    autocomplete: "off"
                }
            })]), a("label", {
                attrs: {
                    for: "winner_12277789"
                }
            }, [a("span", {
                staticClass: "penal_1"
            })]), a("label", {
                attrs: {
                    for: "winner_22277789"
                }
            }, [a("span", {
                staticClass: "penal_2"
            })])]), a("div", {
                staticClass: "status fecha-hora"
            }, [e._v(" DOM. 20 NOV. / 13:00 Hs. ")])]), a("div", {
                staticClass: "wrapper-pais derecha"
            }, [a("button", {
                staticClass: "btnMobile mas mostrar active"
            }), a("div", {
                staticClass: "pais equipo2"
            }, [e._v("Ecuador")]), a("button", {
                staticClass: "btnMobile menos mostrar active"
            })])])]), a("div", [a("div", {
                staticClass: "partido",
                attrs: {
                    id: "2277790"
                }
            }, [a("div", {
                staticClass: "wrapper-pais"
            }, [a("button", {
                staticClass: "btnMobile mas mostrar active"
            }), a("div", {
                staticClass: "pais equipo1"
            }, [e._v("Senegal")]), a("button", {
                staticClass: "btnMobile menos mostrar active"
            })]), a("div", {
                staticClass: "pronostico"
            }, [a("div", {
                staticClass: "puntos izquierda"
            }), a("div", {
                staticClass: "puntos elegir"
            }, [a("span", [e._v("ELEGÍ UN GANADOR")])]), a("div", {
                staticClass: "wrapper-inputs"
            }, [a("div", [a("input", {
                attrs: {
                    type: "tel",
                    id: "equipo1",
                    name: "prEquipo1",
                    maxlength: "1",
                    autocomplete: "off"
                }
            }), a("input", {
                attrs: {
                    type: "tel",
                    id: "equipo2",
                    name: "prEquipo2",
                    maxlength: "1",
                    autocomplete: "off"
                }
            })]), a("label", {
                attrs: {
                    for: "winner_12277790"
                }
            }, [a("span", {
                staticClass: "penal_1"
            })]), a("label", {
                attrs: {
                    for: "winner_22277790"
                }
            }, [a("span", {
                staticClass: "penal_2"
            })])]), a("div", {
                staticClass: "status fecha-hora"
            }, [e._v(" LUN. 21 NOV. / 13:00 Hs. ")])]), a("div", {
                staticClass: "wrapper-pais derecha"
            }, [a("button", {
                staticClass: "btnMobile mas mostrar active"
            }), a("div", {
                staticClass: "pais equipo2"
            }, [e._v("Holanda")]), a("button", {
                staticClass: "btnMobile menos mostrar active"
            })])])]), a("div", [a("div", {
                staticClass: "partido",
                attrs: {
                    id: "2277807"
                }
            }, [a("div", {
                staticClass: "wrapper-pais"
            }, [a("button", {
                staticClass: "btnMobile mas mostrar active"
            }), a("div", {
                staticClass: "pais equipo1"
            }, [e._v("Qatar")]), a("button", {
                staticClass: "btnMobile menos mostrar active"
            })]), a("div", {
                staticClass: "pronostico"
            }, [a("div", {
                staticClass: "puntos izquierda"
            }), a("div", {
                staticClass: "puntos elegir"
            }, [a("span", [e._v("ELEGÍ UN GANADOR")])]), a("div", {
                staticClass: "wrapper-inputs"
            }, [a("div", [a("input", {
                attrs: {
                    type: "tel",
                    id: "equipo1",
                    name: "prEquipo1",
                    maxlength: "1",
                    autocomplete: "off"
                }
            }), a("input", {
                attrs: {
                    type: "tel",
                    id: "equipo2",
                    name: "prEquipo2",
                    maxlength: "1",
                    autocomplete: "off"
                }
            })]), a("label", {
                attrs: {
                    for: "winner_12277807"
                }
            }, [a("span", {
                staticClass: "penal_1"
            })]), a("label", {
                attrs: {
                    for: "winner_22277807"
                }
            }, [a("span", {
                staticClass: "penal_2"
            })])]), a("div", {
                staticClass: "status fecha-hora"
            }, [e._v(" VIE. 25 NOV. / 10:00 Hs. ")])]), a("div", {
                staticClass: "wrapper-pais derecha"
            }, [a("button", {
                staticClass: "btnMobile mas mostrar active"
            }), a("div", {
                staticClass: "pais equipo2"
            }, [e._v("Senegal")]), a("button", {
                staticClass: "btnMobile menos mostrar active"
            })])])]), a("div", [a("div", {
                staticClass: "partido",
                attrs: {
                    id: "2277808"
                }
            }, [a("div", {
                staticClass: "wrapper-pais"
            }, [a("button", {
                staticClass: "btnMobile mas mostrar active"
            }), a("div", {
                staticClass: "pais equipo1"
            }, [e._v("Holanda")]), a("button", {
                staticClass: "btnMobile menos mostrar active"
            })]), a("div", {
                staticClass: "pronostico"
            }, [a("div", {
                staticClass: "puntos izquierda"
            }), a("div", {
                staticClass: "puntos elegir"
            }, [a("span", [e._v("ELEGÍ UN GANADOR")])]), a("div", {
                staticClass: "wrapper-inputs"
            }, [a("div", [a("input", {
                attrs: {
                    type: "tel",
                    id: "equipo1",
                    name: "prEquipo1",
                    maxlength: "1",
                    autocomplete: "off"
                }
            }), a("input", {
                attrs: {
                    type: "tel",
                    id: "equipo2",
                    name: "prEquipo2",
                    maxlength: "1",
                    autocomplete: "off"
                }
            })]), a("label", {
                attrs: {
                    for: "winner_12277808"
                }
            }, [a("span", {
                staticClass: "penal_1"
            })]), a("label", {
                attrs: {
                    for: "winner_22277808"
                }
            }, [a("span", {
                staticClass: "penal_2"
            })])]), a("div", {
                staticClass: "status fecha-hora"
            }, [e._v(" VIE. 25 NOV. / 13:00 Hs. ")])]), a("div", {
                staticClass: "wrapper-pais derecha"
            }, [a("button", {
                staticClass: "btnMobile mas mostrar active"
            }), a("div", {
                staticClass: "pais equipo2"
            }, [e._v("Ecuador")]), a("button", {
                staticClass: "btnMobile menos mostrar active"
            })])])]), a("div", [a("div", {
                staticClass: "partido",
                attrs: {
                    id: "2277824"
                }
            }, [a("div", {
                staticClass: "wrapper-pais"
            }, [a("button", {
                staticClass: "btnMobile mas mostrar active"
            }), a("div", {
                staticClass: "pais equipo1"
            }, [e._v("Ecuador")]), a("button", {
                staticClass: "btnMobile menos mostrar active"
            })]), a("div", {
                staticClass: "pronostico"
            }, [a("div", {
                staticClass: "puntos izquierda"
            }), a("div", {
                staticClass: "puntos elegir"
            }, [a("span", [e._v("ELEGÍ UN GANADOR")])]), a("div", {
                staticClass: "wrapper-inputs"
            }, [a("div", [a("input", {
                attrs: {
                    type: "tel",
                    id: "equipo1",
                    name: "prEquipo1",
                    maxlength: "1",
                    autocomplete: "off"
                }
            }), a("input", {
                attrs: {
                    type: "tel",
                    id: "equipo2",
                    name: "prEquipo2",
                    maxlength: "1",
                    autocomplete: "off"
                }
            })]), a("label", {
                attrs: {
                    for: "winner_12277824"
                }
            }, [a("span", {
                staticClass: "penal_1"
            })]), a("label", {
                attrs: {
                    for: "winner_22277824"
                }
            }, [a("span", {
                staticClass: "penal_2"
            })])]), a("div", {
                staticClass: "status fecha-hora"
            }, [e._v(" MAR. 29 NOV. / 12:00 Hs. ")])]), a("div", {
                staticClass: "wrapper-pais derecha"
            }, [a("button", {
                staticClass: "btnMobile mas mostrar active"
            }), a("div", {
                staticClass: "pais equipo2"
            }, [e._v("Senegal")]), a("button", {
                staticClass: "btnMobile menos mostrar active"
            })])])]), a("div", [a("div", {
                staticClass: "partido",
                attrs: {
                    id: "2277823"
                }
            }, [a("div", {
                staticClass: "wrapper-pais"
            }, [a("button", {
                staticClass: "btnMobile mas mostrar active"
            }), a("div", {
                staticClass: "pais equipo1"
            }, [e._v("Holanda")]), a("button", {
                staticClass: "btnMobile menos mostrar active"
            })]), a("div", {
                staticClass: "pronostico"
            }, [a("div", {
                staticClass: "puntos izquierda"
            }), a("div", {
                staticClass: "puntos elegir"
            }, [a("span", [e._v("ELEGÍ UN GANADOR")])]), a("div", {
                staticClass: "wrapper-inputs"
            }, [a("div", [a("input", {
                attrs: {
                    type: "tel",
                    id: "equipo1",
                    name: "prEquipo1",
                    maxlength: "1",
                    autocomplete: "off"
                }
            }), a("input", {
                attrs: {
                    type: "tel",
                    id: "equipo2",
                    name: "prEquipo2",
                    maxlength: "1",
                    autocomplete: "off"
                }
            })]), a("label", {
                attrs: {
                    for: "winner_12277823"
                }
            }, [a("span", {
                staticClass: "penal_1"
            })]), a("label", {
                attrs: {
                    for: "winner_22277823"
                }
            }, [a("span", {
                staticClass: "penal_2"
            })])]), a("div", {
                staticClass: "status fecha-hora"
            }, [e._v(" MAR. 29 NOV. / 12:00 Hs. ")])]), a("div", {
                staticClass: "wrapper-pais derecha"
            }, [a("button", {
                staticClass: "btnMobile mas mostrar active"
            }), a("div", {
                staticClass: "pais equipo2"
            }, [e._v("Qatar")]), a("button", {
                staticClass: "btnMobile menos mostrar active"
            })])])])])
        }
        ]
          , H = {
            name: "PronosticoOffline",
            data: function() {
                return {}
            },
            props: [],
            mounted: function() {},
            methods: {
                showAlert: function() {
                    this.$store.commit("contexto/setShowAlertLogin", !0)
                }
            }
        }
          , F = H
          , V = (a("4c20"),
        Object(m["a"])(F, z, B, !1, null, null, null))
          , J = V.exports
          , W = new URLSearchParams(window.location.search)
          , K = Object.fromEntries(W.entries())
          , Z = {
            name: "app",
            mixins: [n, i],
            components: {
                Menu: v,
                Alerta: L,
                Redes: S,
                TerminosYCondiciones: G,
                Loader: D,
                PronosticoOffline: J
            },
            data: function() {
                return {
                    idGroup: "",
                    tokenGroup: ""
                }
            },
            created: function() {
                this.hideLoader();
                var e = "dev" == K.ambiente ? "dev/" : "prod/";
                this.$store.commit("contexto/setBaseUrl", c.base + e),
                this.$store.dispatch("user/setUserLoginAction", this.$router),
                this.hasTokenInvitation && this.setTokenInvitations()
            },
            updated: function() {
                this.hasTokenInvitation ? this.setTokenInvitations() : (this.idGroup = "",
                this.tokenGroup = "")
            },
            computed: {
                showAlerta: function() {
                    return this.$store.state.contexto.showAlertLogin
                },
                isValidInvitation: function() {
                    return this.$store.getters["userGroups/isValidInvitationGroup"]
                },
                userData: function() {
                    return this.$store.getters["user/getUserData"]
                },
                userLogued: function() {
                    return this.$store.getters["user/userLogued"]
                },
                haveCookies: function() {
                    return $cookies.get("token")
                },
                predictionsLoaded: function() {
                    return this.$store.getters["predictions/predictionsLoaded"]
                },
                isLocalHost: function() {
                    return "localhost" == window.location.hostname
                },
                hashTokenId: function() {
                    return this.$route.params.hashTokenId
                },
                hasTokenInvitation: function() {
                    return !!this.$route.params.hashTokenId
                },
                invitationGroup: function() {
                    return this.$store.state.userGroups.invitationGroup
                },
                haveErrorMsg: function() {
                    return !!this.$store.state.contexto.errorRequest
                },
                errorMsg: function() {
                    var e = this.$store.state.user.userData;
                    return this.$store.state.contexto.errorRequest + " userData 3: " + JSON.stringify(e)
                },
                belongsToGroup: function() {
                    return this.$store.getters["userGroups/belongsToIdGroup"](this.idGroup)
                },
                routeName: function() {
                    return this.$route.name
                },
                hasGroups: function() {
                    return this.$store.getters["userGroups/hasGroups"]
                }
            },
            methods: {
                invitationAction: function() {
                    this.setTokenInvitations(),
                    this.$store.dispatch("userGroups/getInvitationInfoAction", {
                        idGroup: this.idGroup,
                        tokenGroup: this.tokenGroup
                    })
                },
                setTokenInvitations: function() {
                    function e(e) {
                        var t = e.lastIndexOf("-");
                        return {
                            token: e.slice(0, t),
                            id: e.slice(t + 1)
                        }
                    }
                    this.idGroup = e(this.$route.params.hashTokenId).id,
                    this.tokenGroup = e(this.$route.params.hashTokenId).token
                },
                hideLoader: function() {
                    var e = document.getElementById("preload_ln")
                      , t = document.getElementById("appContainer");
                    e && t && (t.style.opacity = "1",
                    e.style.display = "none")
                },
                setCookies: function(e) {
                    "set" == e ? this.$store.dispatch("user/cookiesSet") : this.$store.dispatch("user/cookiesErase")
                },
                getGroupInvitation: function() {
                    function e(e) {
                        var t = e.lastIndexOf("-");
                        return {
                            token: e.slice(0, t),
                            id: e.slice(t + 1)
                        }
                    }
                    this.idGroup = e(this.$route.params.hashTokenId).id,
                    this.tokenGroup = e(this.$route.params.hashTokenId).token
                },
                closeErrorMsg: function() {
                    this.$store.commit("contexto/setErrorRequest", "")
                },
                getInvitation: function() {
                    function e(e) {
                        var t = e.lastIndexOf("-");
                        return {
                            token: e.slice(0, t),
                            id: e.slice(t + 1)
                        }
                    }
                    this.idGroup = e(this.$route.params.hashTokenId).id,
                    this.tokenGroup = e(this.$route.params.hashTokenId).token,
                    this.$store.dispatch("userGroups/getInvitationInfoAction", {
                        idGroup: this.idGroup,
                        tokenGroup: this.tokenGroup
                    })
                },
                hideAlerta: function() {
                    this.$store.commit("contexto/setShowAlertLogin", !1),
                    this.$store.commit("userGroups/setInvitationGroup", {})
                },
                addUserToAGroup: function() {
                    this.$store.commit("contexto/setShowAlertLogin", !1),
                    this.tokenGroup && (this.$store.dispatch("userGroups/addUserToAGroupAction", this.tokenGroup),
                    this.$router.push("/pronostico"))
                }
            },
            watch: {
                hasGroups: function(e, t) {
                    e && this.hasTokenInvitation && !this.belongsToGroup && this.invitationAction()
                },
                hashTokenId: function(e, t) {
                    "unirse" == this.$route.name && this.hasTokenInvitation && !this.belongsToGroup ? this.invitationAction() : "unirse" == this.$route.name && this.hasTokenInvitation && this.belongsToGroup && this.$router.push("/pronostico/A")
                },
                userLogued: function(e, t) {
                    var a = this;
                    e && (this.$store.dispatch("predictions/getPredictionsAction"),
                    setInterval((function() {
                        a.$store.getters["predictions/getOutdatedPredictions"].forEach((function(e) {
                            a.$store.commit("predictions/saveMatch", Object.assign({}, e, {
                                locked: !0,
                                status: "playing",
                                goal_1: null,
                                goal_2: null
                            }))
                        }
                        ))
                    }
                    ), 1e4))
                },
                belongsToGroup: function(e, t) {
                    e && (this.$store.commit("contexto/setShowAlertLogin", !1),
                    this.$router.push("/pronostico/A"))
                }
            }
        }
          , Q = Z
          , Y = (a("5c0b"),
        Object(m["a"])(Q, o, r, !1, null, null, null))
          , X = Y.exports
          , ee = a("2f62")
          , te = (a("a623"),
        a("4de4"),
        a("c740"),
        a("0481"),
        a("d81d"),
        a("45fc"),
        a("4069"),
        a("accc"),
        a("0d03"),
        a("a9e3"),
        a("8ba4"),
        a("b64b"),
        a("07ac"),
        a("e25e"),
        a("bc3a"))
          , ae = a.n(te)
          , se = a("e13a")
          , oe = a("00fb")
          , re = a("d2c4")
          , ne = a("3965")
          , ie = {
            group: se["a"],
            ascending: oe["a"],
            descending: re["a"],
            sum: ne["a"]
        }
          , ce = {
            parseDatetime: function(e) {
                var t = {
                    day: "2-digit",
                    weekday: "short",
                    month: "short",
                    hour: "numeric",
                    minute: "2-digit"
                }
                  , a = new Date(e)
                  , s = new Intl.DateTimeFormat("es-AR",t).format(a)
                  , o = s.slice(0, 11)
                  , r = s.slice(11, s.length);
                return o.concat(". / ").concat(r).replace(",", ".").toUpperCase().concat(" Hs.")
            }
        }
          , ue = {
            namespaced: !0,
            state: {
                predictions: {},
                isPredictionsSelectedChanged: !1
            },
            getters: {
                getPredictionsSelected: function(e, t, a) {
                    return Object.keys(e.predictions).length < 1 ? [] : e.predictions[a.contexto.groupSelected.key]
                },
                isPredictionsSelectedEditable: function(e, t, a) {
                    return 0 != Object.keys(t.getPredictionsSelected).length && t.getPredictionsSelected.map((function(e) {
                        return e.locked
                    }
                    )).some((function(e) {
                        return !e
                    }
                    ))
                },
                isPredictionsSelectedFull: function(e, t, a) {
                    return !(Object.keys(e.predictions).length < 1) && e.predictions[a.contexto.groupSelected.key].map((function(e) {
                        return [e.goal_1, e.goal_2]
                    }
                    )).flat().every((function(e) {
                        return null !== e
                    }
                    ))
                },
                getValidPredictionsSelected: function(e, t) {
                    return 0 == t.getPredictionsSelected.length ? [] : t.getPredictionsSelected.filter((function(e) {
                        return null != e.goal_1 && Number.isInteger(parseInt(e.goal_1)) && null != e.goal_2 && Number.isInteger(parseInt(e.goal_2))
                    }
                    )).map((function(e) {
                        return {
                            goal_team_1: e.goal_1,
                            goal_team_2: e.goal_2,
                            winner: e.winner,
                            match_id: e.match_id
                        }
                    }
                    ))
                },
                haveValidPredictionsSelected: function(e, t) {
                    return t.getValidPredictionsSelected.length > 0
                },
                predictionsLoaded: function(e, t) {
                    return !!e.predictions.A
                },
                isPredictionEnable: function(e, t) {
                    return t.haveValidPredictionsSelected && t.isPredictionsSelectedEditable && e.isPredictionsSelectedChanged
                },
                getPredictionsStates: function(e) {
                    var t = {};
                    for (var a in e.predictions)
                        e.predictions.hasOwnProperty(a) && (t[a] = e.predictions[a].every((function(e) {
                            return e.completed
                        }
                        )));
                    return t
                },
                invalidMatchesId: function(e, t, a) {
                    return t.getPredictionsSelected.filter((function(e) {
                        return null != e.goal_1 && null == e.goal_2 || null == e.goal_1 && null != e.goal_2
                    }
                    )).map((function(e) {
                        return e.match_id
                    }
                    ))
                },
                allPredictions: function(e) {
                    return Object.values(e.predictions).flat()
                },
                anyFullTime: function(e, t) {
                    return t.allPredictions.some((function(e) {
                        return "full_time" == e.status
                    }
                    ))
                },
                getOutdatedPredictions: function(e, t) {
                    var a = 9e5;
                    return t.allPredictions.flat().filter((function(e) {
                        var t = new Date(e.datetime).getTime() - a
                          , s = (new Date).getTime()
                          , o = s > t;
                        return o && !e.locked
                    }
                    ))
                },
                getTotalPoints: function(e, t) {
                    return ie.sum(t.allPredictions, (function(e) {
                        return e.points
                    }
                    ))
                }
            },
            mutations: {
                setPredictions: function(e, t) {
                    s["a"].set(e, "predictions", t)
                },
                setIsPredictionsSelectedChanged: function(e, t) {
                    e.isPredictionsSelectedChanged = t
                },
                saveMatch: function(e, t) {
                    var a = e.predictions[t.group]
                      , o = a.findIndex((function(e) {
                        return e.match_id == t.match_id
                    }
                    ));
                    s["a"].set(a, o, t)
                },
                cleanInvalidMatches: function(e, t) {
                    t.ids.forEach((function(e) {
                        var a = t.prediction.findIndex((function(t) {
                            return e == t.match_id
                        }
                        ));
                        if (-1 != a) {
                            var o = Object.assign(t.prediction[a], {
                                goal_1: null,
                                goal_2: null
                            });
                            s["a"].set(t.prediction, a, o)
                        }
                    }
                    ))
                }
            },
            actions: {
                getPredictionsAction: function(e) {
                    var t = e.commit
                      , a = e.rootState
                      , s = e.rootGetters
                      , o = ae.a.get(a.contexto.baseUrl + c.fixture, {
                        headers: {
                            "x-token": "92C5943F-AC54-4185-9683-C758AC434A3E",
                            "x-value": "a83a2323-5ed7-4c50-a1b9-b0daa100f835"
                        }
                    })
                      , r = 0;
                    Promise.all([o]).then((function(e) {
                        var a = e[0].data.map((function(e) {
                            e.team_1 && e.team_2 || (e.locked = !0),
                            n(e.group) ? (e.team_1 = e.team_1 ? e.team_1 : "-",
                            e.team_2 = e.team_2 ? e.team_2 : "-") : "eighth" == e.group && (e.team_1 = e.team_1 ? e.team_1 : i[r].team_1,
                            e.team_2 = e.team_2 ? e.team_2 : i[r].team_2,
                            r++);
                            var t = ce.parseDatetime(e.datetime);
                            return Object.assign({}, e, {
                                completed: Number.isInteger(parseInt(e.goal_1)) && Number.isInteger(parseInt(e.goal_2)),
                                datetime_str: t
                            })
                        }
                        ))
                          , s = Object.fromEntries(ie.group(a, (function(e) {
                            return e.group
                        }
                        )));
                        t("setPredictions", s)
                    }
                    ));
                    var n = function(e) {
                        return "fourth" == e || "semi" == e || "final" == e
                    }
                      , i = [{
                        team_1: "1A",
                        team_2: "2B"
                    }, {
                        team_1: "1C",
                        team_2: "2D"
                    }, {
                        team_1: "1D",
                        team_2: "2C"
                    }, {
                        team_1: "1B",
                        team_2: "2A"
                    }, {
                        team_1: "1E",
                        team_2: "2F"
                    }, {
                        team_1: "1G",
                        team_2: "2H"
                    }, {
                        team_1: "1F",
                        team_2: "2E"
                    }, {
                        team_1: "1H",
                        team_2: "2G"
                    }]
                },
                savePredictionAction: function(e, t) {
                    var a = e.commit
                      , s = e.rootState
                      , o = e.getters
                      , r = e.rootGetters;
                    a("contexto/setIsProcessing", !0, {
                        root: !0
                    }),
                    ae()({
                        method: "post",
                        baseURL: s.contexto.baseUrl,
                        url: c.fixture,
                        data: t,
                        headers: {
                            "x-token": "92C5943F-AC54-4185-9683-C758AC434A3E",
                            "x-value": "a83a2323-5ed7-4c50-a1b9-b0daa100f835"
                        }
                    }).then((function(e) {
                        var t = Object.assign({}, r["user/getUserData"]);
                        t.last_update = (new Date).toISOString(),
                        a("user/setUserData", t, {
                            root: !0
                        }),
                        a("setIsPredictionsSelectedChanged", !1),
                        $cookies.set("prode_last_update", t.last_update),
                        o.invalidMatchesId.length > 0 && a("cleanInvalidMatches", {
                            prediction: o.getPredictionsSelected,
                            ids: o.invalidMatchesId
                        })
                    }
                    )).catch((function(e) {
                        return console.log(e)
                    }
                    )).finally((function() {
                        return a("contexto/setIsProcessing", !1, {
                            root: !0
                        })
                    }
                    ))
                }
            }
        }
          , le = {
            namespaced: !0,
            state: {
                userData: {},
                baseUrl: ""
            },
            mutations: {
                setUserData: function(e, t) {
                    var a = Object.assign({}, t);
                    a.user_groups = [],
                    s["a"].set(e, "userData", a)
                }
            },
            getters: {
                getUserData: function(e) {
                    var t = e.userData
                      , a = $cookies.get("prode_last_update")
                      , s = e.userData.last_update
                      , o = a || s;
                    return Object.keys(e.userData).length > 0 && (t = Object.assign({}, e.userData, {
                        last_update_str: ce.parseDatetime(o)
                    })),
                    t
                },
                getUserSuscriptor: function(e, t) {
                    return t.getUserData.suscriptor
                },
                userLogued: function(e, t) {
                    return void 0 !== t.getUserData.token
                }
            },
            actions: {
                cookiesSet: function() {
                    $cookies.set("token", "C1DE408F-54C7-4BFE-BA1B-4DD08BD2D3FE"),
                    $cookies.set("xvalue", "da434bfb-398b-4c6f-a6ac-3cc2ad9e4f26"),
                    window.location.reload()
                },
                cookiesErase: function() {
                    $cookies.remove("xvalue"),
                    $cookies.remove("token"),
                    $cookies.remove("userDataProde"),
                    window.location.reload()
                },
                setUserLoginAction: function(e, t) {
                    var a = e.commit
                      , s = e.rootState
                      , o = e.dispatch
                      , r = $cookies.get("token")
                      , n = $cookies.get("xvalue")
                      , i = $cookies.get("userDataProde")
                      , u = {
                        headers: {
                            "Content-Type": "application/json",
                            "X-token": r,
                            "X-value": n
                        }
                    };
                    r && (i && i.token == r ? (a("setUserData", i),
                    o("userGroups/setUserGroupsAction", {
                        router: t
                    }, {
                        root: !0
                    })) : ae.a.post(s.contexto.baseUrl + c.user, {}, u).then((function(e) {
                        e.data.user.token = r,
                        e.data.user.xvalue = n,
                        a("setUserData", e.data.user),
                        $cookies.set("userDataProde", e.data.user, "100d"),
                        o("userGroups/setUserGroupsAction", {
                            router: t
                        }, {
                            root: !0
                        })
                    }
                    )).catch((function(e) {
                        return console.log(e)
                    }
                    )))
                }
            }
        }
          , de = {
            namespaced: !0,
            state: {
                userGroupSelectedId: null,
                groupSelected: {
                    key: "A",
                    menu: "A",
                    prono: "A",
                    elim: !1
                },
                groupLetters: [{
                    key: "A",
                    menu: "A",
                    prono: "A",
                    elim: !1
                }, {
                    key: "B",
                    menu: "B",
                    prono: "B",
                    elim: !1
                }, {
                    key: "C",
                    menu: "C",
                    prono: "C",
                    elim: !1
                }, {
                    key: "D",
                    menu: "D",
                    prono: "D",
                    elim: !1
                }, {
                    key: "E",
                    menu: "E",
                    prono: "E",
                    elim: !1
                }, {
                    key: "F",
                    menu: "F",
                    prono: "F",
                    elim: !1
                }, {
                    key: "G",
                    menu: "G",
                    prono: "G",
                    elim: !1
                }, {
                    key: "H",
                    menu: "H",
                    prono: "H",
                    elim: !1
                }, {
                    key: "eighth",
                    menu: "8<span>VOS.</span>",
                    prono: "8°",
                    elim: !0
                }, {
                    key: "fourth",
                    menu: "4<span>TOS.</span>",
                    prono: "4°",
                    elim: !0
                }, {
                    key: "semi",
                    menu: "Semi",
                    prono: "Semi",
                    elim: !0
                }, {
                    key: "final",
                    menu: "Final",
                    prono: "Final",
                    elim: !0
                }],
                showAlertLogin: !1,
                baseUrl: "",
                isProcessing: !1,
                errorRequest: ""
            },
            getters: {
                getFinalGroups: function(e) {
                    return e.groupLetters.filter((function(e) {
                        return e.elim
                    }
                    ))
                }
            },
            mutations: {
                setIsProcessing: function(e, t) {
                    e.isProcessing = t
                },
                setGroupSelected: function(e, t) {
                    s["a"].set(e, "groupSelected", t)
                },
                setShowAlertLogin: function(e, t) {
                    s["a"].set(e, "showAlertLogin", t)
                },
                setBaseUrl: function(e, t) {
                    s["a"].set(e, "baseUrl", t)
                },
                setErrorRequest: function(e, t) {
                    e.errorRequest = t
                }
            }
        }
          , pe = {
            namespaced: !0,
            state: {
                userGroups: [],
                selectedGroupId: null,
                userGroupCreated: {},
                deletedGroup: {},
                invitationGroup: {}
            },
            getters: {
                isValidInvitationGroup: function(e) {
                    return Object.keys(e.invitationGroup).length > 0
                },
                getUserGroups: function(e) {
                    return e.userGroups
                },
                getSelectedGroup: function(e) {
                    return null === e.selectedGroupId ? null : e.userGroups[e.selectedGroupId]
                },
                hasGroups: function(e) {
                    return e.userGroups.length > 0
                },
                belongsToIdGroup: function(e, t) {
                    return function(t) {
                        return e.userGroups.some((function(e) {
                            return e.id == t
                        }
                        ))
                    }
                }
            },
            mutations: {
                setUserGroups: function(e, t) {
                    s["a"].set(e, "userGroups", t)
                },
                saveUserGroup: function(e, t) {
                    var a = e.userGroups.findIndex((function(e) {
                        return e.id == t.id
                    }
                    ));
                    if (-1 == a)
                        t.user_position = 1,
                        s["a"].set(e.userGroups, e.userGroups.length, t);
                    else {
                        var o = Object.assign({}, e.userGroups[a], t);
                        s["a"].set(e.userGroups, a, o)
                    }
                },
                deleteUserGroupById: function(e, t) {
                    var a = e.userGroups.findIndex((function(e) {
                        return e.id == t
                    }
                    ));
                    -1 != a && s["a"].delete(e.userGroups, a)
                },
                setSelectedGroupId: function(e, t) {
                    e.selectedGroupId = t
                },
                setUserGroupCreated: function(e, t) {
                    e.userGroupCreated = t
                },
                setDeletedGroup: function(e, t) {
                    e.deletedGroup = t
                },
                setInvitationGroup: function(e, t) {
                    e.invitationGroup = t
                },
                setUserGroupWithMembers: function(e, t) {
                    var a = +t.id;
                    t.users = t.users.map((function(e) {
                        var t = null === e.total_points ? 0 : e.total_points;
                        return Object.assign(e, {
                            total_points: t
                        })
                    }
                    ));
                    var o = e.userGroups.findIndex((function(e) {
                        return +e.id === a
                    }
                    ));
                    e.selectedGroupId = o,
                    s["a"].set(e.userGroups, o, t)
                }
            },
            actions: {
                setUserGroupsAction: function(e, t) {
                    var a = e.commit
                      , s = e.rootState
                      , o = e.rootGetters;
                    ae()({
                        method: "get",
                        baseURL: s.contexto.baseUrl,
                        url: c.userGroups,
                        headers: {
                            "x-token": o["user/getUserData"].token,
                            "x-value": o["user/getUserData"].xvalue
                        }
                    }).then((function(e) {
                        a("setUserGroups", e.data.user.user_groups)
                    }
                    )).catch((function(e) {
                        a("contexto/setErrorRequest", "No se pudo obtener información de tus grupos", {
                            root: !0
                        }),
                        console.log(e)
                    }
                    ))
                },
                setMembersGroupAction: function(e, t) {
                    var a = e.commit
                      , s = e.rootGetters
                      , o = e.rootState
                      , r = c.group
                      , n = {
                        group_id: t.groupId
                    }
                      , i = "group";
                    "rank_gral" != t.groupId && "rank_suscrp" != t.groupId || (r = c.ranking,
                    n = {},
                    i = "rank_gral" == t.groupId ? "general_ranking" : "suscriptors_ranking"),
                    ae()({
                        method: "get",
                        baseURL: o.contexto.baseUrl,
                        url: r,
                        params: n,
                        headers: {
                            "x-token": s["user/getUserData"].token,
                            "x-value": s["user/getUserData"].xvalue
                        }
                    }).then((function(e) {
                        var s = "group" == i ? e.data.group : e.data.ranking[i]
                          , o = "";
                        "group" != i && (o = {
                            id: t.groupId,
                            id_user_admin: 0,
                            isRankingGral: !0,
                            name_admin: "",
                            name: "rank_gral" == t.groupId ? "Ranking LA NACION" : "Ranking suscriptores",
                            token: "",
                            user_position: "rank_gral" == t.groupId ? e.data.ranking.user_position : e.data.ranking.user_position_suscriptor,
                            usuarios_totales: "rank_gral" == t.groupId ? e.data.ranking.total_users : e.data.ranking.total_users_suscriptor,
                            users: s
                        });
                        var r = "group" == i ? s : o;
                        a("setUserGroupWithMembers", r)
                    }
                    )).catch((function(e) {
                        e.response.status >= 400 && t.router.push("/gruposUsuario"),
                        a("contexto/setErrorRequest", "No se pudo obtener información de los integrantes del grupo", {
                            root: !0
                        }),
                        console.log(e)
                    }
                    ))
                },
                createUserGroupAction: function(e, t) {
                    var a = e.rootState
                      , s = e.rootGetters
                      , o = e.commit;
                    o("contexto/setIsProcessing", !0, {
                        root: !0
                    }),
                    ae()({
                        method: "post",
                        baseURL: a.contexto.baseUrl,
                        url: c.group,
                        data: {
                            group_name: t
                        },
                        headers: {
                            "x-token": s["user/getUserData"].token,
                            "x-value": s["user/getUserData"].xvalue
                        }
                    }).then((function(e) {
                        var t = e.data.group;
                        o("setUserGroupCreated", t),
                        o("saveUserGroup", t)
                    }
                    )).catch((function(e) {
                        return console.log(e)
                    }
                    )).finally((function() {
                        return o("contexto/setIsProcessing", !1, {
                            root: !0
                        })
                    }
                    ))
                },
                addUserToAGroupAction: function(e, t) {
                    var a = e.commit
                      , s = e.rootGetters
                      , o = e.rootState;
                    a("contexto/setIsProcessing", !0, {
                        root: !0
                    }),
                    ae()({
                        method: "put",
                        baseURL: o.contexto.baseUrl,
                        url: c.group,
                        data: {
                            token_group: t
                        },
                        headers: {
                            "x-token": s["user/getUserData"].token,
                            "x-value": s["user/getUserData"].xvalue
                        }
                    }).then((function(e) {
                        var t = e.data.group;
                        a("saveUserGroup", t)
                    }
                    )).catch((function(e) {
                        return console.log(e)
                    }
                    )).finally((function() {
                        return a("contexto/setIsProcessing", !1, {
                            root: !0
                        })
                    }
                    ))
                },
                deleteUserFromAGroupAction: function(e, t) {
                    var a = e.commit
                      , s = e.rootGetters
                      , o = e.rootState;
                    a("contexto/setIsProcessing", !0, {
                        root: !0
                    }),
                    ae()({
                        method: "delete",
                        baseURL: o.contexto.baseUrl,
                        url: c.group,
                        data: {
                            delete_user_id: t.delete_user_id,
                            group_id: t.group_id
                        },
                        headers: {
                            "x-token": s["user/getUserData"].token,
                            "x-value": s["user/getUserData"].xvalue
                        }
                    }).then((function(e) {
                        var o = e.data.group;
                        t.delete_user_id == s["user/getUserData"].id && (a("deleteUserGroupById", o.id),
                        a("setDeletedGroup", o))
                    }
                    )).catch((function(e) {
                        return console.log(e)
                    }
                    )).finally((function() {
                        return a("contexto/setIsProcessing", !1, {
                            root: !0
                        })
                    }
                    ))
                },
                getInvitationInfoAction: function(e, t) {
                    var a = e.commit
                      , s = e.getters
                      , o = e.rootState;
                    ae()({
                        method: "get",
                        baseURL: o.contexto.baseUrl,
                        url: c.invitation,
                        params: {
                            group_id: t.idGroup,
                            token_group: t.tokenGroup
                        }
                    }).then((function(e) {
                        var o = e.data.group;
                        console.log("getters.belongsToIdGroup(data.idGroup)", s.belongsToIdGroup(t.idGroup)),
                        s.belongsToIdGroup(t.idGroup) || (a("setInvitationGroup", o),
                        a("contexto/setShowAlertLogin", !0, {
                            root: !0
                        }))
                    }
                    )).catch((function(e) {
                        a("contexto/setErrorRequest", "El grupo no existe", {
                            root: !0
                        })
                    }
                    ))
                },
                updateGroupTokenAction: function(e, t) {
                    var a = e.commit
                      , s = e.rootGetters
                      , o = e.rootState;
                    a("contexto/setIsProcessing", !0, {
                        root: !0
                    }),
                    ae()({
                        method: "put",
                        baseURL: o.contexto.baseUrl,
                        url: c.invitation,
                        data: {
                            group_id: t
                        },
                        headers: {
                            "Content-Type": "application/json",
                            "x-token": s["user/getUserData"].token,
                            "x-value": s["user/getUserData"].xvalue
                        }
                    }).then((function(e) {
                        var t = e.data.group;
                        a("saveUserGroup", t)
                    }
                    )).catch((function(e) {
                        a("contexto/setErrorRequest", "No se pudo actualizar el link del grupo", {
                            root: !0
                        }),
                        console.log(e)
                    }
                    )).finally((function() {
                        return a("contexto/setIsProcessing", !1, {
                            root: !0
                        })
                    }
                    ))
                }
            }
        };
        s["a"].use(ee["a"]);
        var me = new ee["a"].Store({
            strict: !0,
            modules: {
                predictions: ue,
                user: le,
                userGroups: pe,
                contexto: de
            },
            state: {
                vista: "pronostico"
            },
            mutations: {},
            getters: {
                getVista: function(e) {
                    return e.vista
                }
            },
            actions: {}
        })
          , ge = a("8c4f")
          , ve = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "grupo-partidos",
                attrs: {
                    id: "pronostico-wrapper"
                }
            }, [a("div", {
                staticClass: "titulos",
                class: {
                    nohaypartidos: !e.isPredictionEnable && !e.haveValidPredictions
                }
            }, [a("div", {
                staticClass: "nombre-grupo"
            }, [e._v(e._s(e.groupSelected.prono))]), e.msgCompleta ? a("div", {
                staticClass: "completa",
                domProps: {
                    innerHTML: e._s(e.msgCompleta)
                }
            }) : e._e(), e.msgLocked ? a("div", {
                staticClass: "alerta-completa"
            }, [e._v("Cuando se definan rivales podrás completar este pronóstico")]) : e._e(), a("router-link", {
                staticClass: "ver-reglas",
                attrs: {
                    tag: "button",
                    to: "/reglamento"
                }
            }, [e._v(" VER REGLAS ")])], 1), a("div", {
                staticClass: "partidos-container",
                class: [e.groupSelected.prono, {
                    locked: e.msgLocked
                }]
            }, e._l(e.predictionsSelected, (function(t, s) {
                return a("div", {
                    key: t.match_id
                }, ["final" == e.groupSelected.key && 0 == s ? a("h4", [e._v(" 3er. y 4to. Puesto ")]) : e._e(), a("Partido", {
                    attrs: {
                        partido: t,
                        idPart: t.match_id
                    },
                    on: {
                        guardarActive: e.guardarBtn
                    }
                })], 1)
            }
            )), 0), e.anyFullTime ? a("div", {
                staticClass: "total-points"
            }, [e._v("Puntaje obtenido hasta el momento > "), a("span", {
                style: {
                    color: parseInt(e.totalPoints) > 0 ? "#00B546" : "#FF5454"
                },
                domProps: {
                    innerHTML: e._s(e.totalPoints)
                }
            })]) : e._e(), a("div", {
                staticClass: "guardar",
                class: {
                    guardando: e.isProcessing
                }
            }, [a("button", {
                ref: "btnGuardar",
                class: {
                    active: !0
                },
                attrs: {
                    id: "btnGuardar",
                    disabled: !e.isPredictionEnable
                },
                on: {
                    click: e.savePrediction
                }
            }, [e._v(" " + e._s(e.btnMessage) + " ")]), a("p", [a("span", [e._v("Se guardó por última vez el " + e._s(e.horaUpdate) + " "), a("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "#4B1522",
                    "stroke-width": "1",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            }, [a("polyline", {
                attrs: {
                    points: "9 11 12 14 22 4"
                }
            }), a("path", {
                attrs: {
                    d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                }
            })])])])])])
        }
          , he = []
          , fe = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "partido",
                attrs: {
                    id: e.idPart
                }
            }, [a("div", {
                staticClass: "wrapper-pais"
            }, [a("button", {
                staticClass: "btnMobile mas",
                class: {
                    mostrar: "pre_match" == e.statusMatch,
                    active: !e.partido.locked && e.haveTeams,
                    locked: e.partido.locked
                },
                on: {
                    click: function(t) {
                        return e.increment("goal_1", "aumenta")
                    }
                }
            }), a("div", {
                staticClass: "pais equipo1"
            }, [e._v(e._s(e.partido.team_1))]), a("button", {
                staticClass: "btnMobile menos",
                class: {
                    mostrar: "pre_match" == e.statusMatch,
                    active: !e.partido.locked && e.haveTeams,
                    locked: e.partido.locked
                },
                on: {
                    click: function(t) {
                        return e.increment("goal_1", "resta")
                    }
                }
            })]), a("div", {
                staticClass: "pronostico"
            }, [a("div", {
                staticClass: "puntos",
                class: {
                    mostrar: "full_time" == e.statusMatch,
                    izquierda: 0 == this.partido.points,
                    derecha: this.partido.points > 0,
                    mobile: e.isMobile
                },
                domProps: {
                    innerHTML: e._s(e.puntosTxt)
                }
            }), a("div", {
                staticClass: "puntos elegir",
                class: {
                    mostrar: e.isEven && !e.partido.winner && !e.partido.locked,
                    selected: e.partido.winner,
                    mobile: e.isMobile
                }
            }, [a("span", [e._v("ELEGÍ UN GANADOR")])]), a("div", {
                staticClass: "wrapper-inputs",
                class: {
                    "inputs-locked": e.partido.locked,
                    "winner-selected": e.isEven && e.partido.winner
                }
            }, [e.isMobile ? e._l([1, 2], (function(t, s) {
                return a("div", {
                    key: s,
                    class: {
                        "result-mob": !0,
                        "full-group": e.isFullGroup,
                        "completed-match": e.partido.completed,
                        even: e.isEven,
                        "winner-selected": e.isEven && e.partido.winner,
                        blocked: e.partido.locked
                    },
                    attrs: {
                        id: "equipo" + t,
                        value: e.partido["goal_" + t]
                    }
                }, [e._v(" " + e._s(e.partido["goal_" + t]) + " ")])
            }
            )) : a("div", e._l([1, 2], (function(t, s) {
                return a("input", {
                    key: s,
                    class: {
                        "full-group": e.isFullGroup,
                        "completed-match": e.partido.completed,
                        even: e.isEven,
                        blocked: e.partido.locked
                    },
                    attrs: {
                        type: "tel",
                        id: "equipo" + t,
                        name: "prEquipo" + t,
                        disabled: e.partido.locked || !e.haveTeams,
                        maxlength: "1",
                        autocomplete: "off"
                    },
                    domProps: {
                        value: e.partido["goal_" + t]
                    },
                    on: {
                        input: function(a) {
                            return e.saveMatch(e.partido, ["goal_" + t], a.target.value)
                        },
                        keydown: function(t) {
                            return e.checkNumAndFocus(t)
                        },
                        focus: function(e) {
                            return e.target.select()
                        }
                    }
                })
            }
            )), 0), e.isEven ? a("input", {
                attrs: {
                    type: "radio",
                    disabled: e.partido.locked,
                    name: "penales" + e.idPart,
                    id: "winner_1" + e.idPart
                },
                domProps: {
                    value: e.partido.team_1_id,
                    checked: e.partido.winner == e.partido.team_1_id
                },
                on: {
                    input: function(t) {
                        return e.saveMatch(e.partido, "winner", +t.target.value)
                    }
                }
            }) : e._e(), a("label", {
                attrs: {
                    for: "winner_1" + e.idPart
                }
            }, [a("span", {
                staticClass: "penal_1"
            })]), e.isEven ? a("input", {
                attrs: {
                    type: "radio",
                    disabled: e.partido.locked,
                    name: "penales" + e.idPart,
                    id: "winner_2" + e.idPart
                },
                domProps: {
                    value: e.partido.team_2_id,
                    checked: e.partido.winner == e.partido.team_2_id
                },
                on: {
                    input: function(t) {
                        return e.saveMatch(e.partido, "winner", +t.target.value)
                    }
                }
            }) : e._e(), a("label", {
                attrs: {
                    for: "winner_2" + e.idPart
                }
            }, [a("span", {
                staticClass: "penal_2"
            })])], 2), "pre_match" == e.statusMatch ? a("div", {
                staticClass: "status fecha-hora"
            }, [e._v(" " + e._s(e.partido.datetime_str) + " ")]) : a("div", {
                staticClass: "status",
                class: [e.statusMatch]
            }, [a("div", {
                staticClass: "resultado",
                domProps: {
                    innerHTML: e._s(e.resultadoTxt)
                }
            })])]), a("div", {
                staticClass: "wrapper-pais derecha"
            }, [a("button", {
                staticClass: "btnMobile mas",
                class: {
                    mostrar: "pre_match" == e.statusMatch,
                    active: !e.partido.locked && e.haveTeams,
                    locked: e.partido.locked
                },
                on: {
                    click: function(t) {
                        return e.increment("goal_2", "aumenta")
                    }
                }
            }), a("div", {
                staticClass: "pais equipo2"
            }, [e._v(e._s(e.partido.team_2))]), a("button", {
                staticClass: "btnMobile menos",
                class: {
                    mostrar: "pre_match" == e.statusMatch,
                    active: !e.partido.locked && e.haveTeams,
                    locked: e.partido.locked
                },
                on: {
                    click: function(t) {
                        return e.increment("goal_2", "resta")
                    }
                }
            })])])
        }
          , _e = []
          , be = (a("a630"),
        a("2532"),
        a("2fa7"))
          , Ce = {
            name: "Partido",
            data: function() {
                return {}
            },
            props: ["partido", "idPart"],
            mounted: function() {},
            computed: {
                isFullGroup: function() {
                    return this.$store.getters["predictions/isPredictionsSelectedFull"]
                },
                isEven: function() {
                    return this.isFinalRounds && null != this.partido.goal_1 && null != this.partido.goal_2 && +this.partido.goal_1 === +this.partido.goal_2
                },
                isFinalRounds: function() {
                    return this.$store.state.contexto.groupSelected.elim
                },
                statusMatch: function() {
                    return "pre_match" == this.partido.status && this.partido.locked & this.partido.team_1_id && this.partido.team_2_id ? "starting" : this.partido.status
                },
                estadoPartidoTxt: function() {
                    var e = "";
                    return "playing" == this.partido.status ? e = "<span>EN JUEGO</span>" : "full_time" == this.partido.status ? e = "FINALIZADO" : "starting" == this.statusMatch && (e = "<span>POR COMENZAR</span>"),
                    e
                },
                puntosTxt: function() {
                    if ("full_time" != this.partido.status)
                        return "";
                    var e = 1 == this.partido.points ? "" : "S";
                    return "OBTUVISTE <br><span>".concat(this.partido.points, "</span> PUNTO").concat(e)
                },
                resultadoTxt: function() {
                    var e = null != this.partido.penalty_1_opta ? "(".concat(this.partido.penalty_1_opta, ")") : ""
                      , t = null != this.partido.penalty_2_opta ? "(".concat(this.partido.penalty_2_opta, ")") : ""
                      , a = '<span class="penal"> '.concat(e, "</span> ").concat(this.partido.goal_1_opta, " &#60; <span>").concat(this.estadoPartidoTxt, "</span> &#62; ").concat(this.partido.goal_2_opta, '<span class="penal"> ').concat(t, "</span>");
                    return "full_time" == this.statusMatch ? a : this.estadoPartidoTxt
                },
                isMobile: function() {
                    return window.innerWidth < 700
                },
                haveTeams: function() {
                    return !(!this.partido.team_1_id || !this.partido.team_2_id)
                }
            },
            methods: {
                focusNext: function(e) {
                    var t = Array.from(document.querySelectorAll('input[type="tel"]'))
                      , a = t.indexOf(e.target);
                    a < t.length - 1 ? t[a + 1].focus() : a == t.length - 1 && this.$emit("guardarActive", !0)
                },
                checkNumAndFocus: function(e) {
                    var t = this
                      , a = "0123456789".includes(e.key);
                    a ? setTimeout((function() {
                        t.focusNext(e)
                    }
                    ), 10) : e.preventDefault()
                },
                saveMatch: function(e, t, a) {
                    var s = Object.assign({}, e, Object(be["a"])({}, t, a));
                    function o(e) {
                        return e < 0 ? 0 : e > 9 ? 9 : e
                    }
                    s.goal_1 = o(s.goal_1),
                    s.goal_2 = o(s.goal_2),
                    s.completed = Number.isInteger(parseInt(s.goal_1)) && Number.isInteger(parseInt(s.goal_2)),
                    this.$store.commit("predictions/saveMatch", s),
                    null == s.goal_1 && null == s.goal_2 || this.$store.commit("predictions/setIsPredictionsSelectedChanged", !0)
                },
                increment: function(e, t) {
                    var a = this
                      , s = this.partido[e];
                    null == this.partido.goal_1 && null == this.partido.goal_2 ? "goal_1" == e ? (this.saveMatch(this.partido, ["goal_1"], 1),
                    setTimeout((function() {
                        return a.saveMatch(a.partido, ["goal_2"], 0)
                    }
                    ), 100)) : (this.saveMatch(this.partido, ["goal_2"], 1),
                    setTimeout((function() {
                        return a.saveMatch(a.partido, ["goal_1"], 0)
                    }
                    ), 100)) : ("resta" == t && s > 0 ? s-- : "aumenta" == t && s++,
                    this.saveMatch(this.partido, [e], s))
                }
            }
        }
          , Ge = Ce
          , ke = (a("c139"),
        Object(m["a"])(Ge, fe, _e, !1, null, null, null))
          , Pe = ke.exports
          , Ae = {
            name: "Pronostico",
            components: {
                Partido: Pe
            },
            data: function() {
                return {
                    guardarClass: !1
                }
            },
            props: [],
            computed: {
                groupSelected: function() {
                    return this.$store.state.contexto.groupSelected
                },
                predictionsSelected: function() {
                    return this.$store.getters["predictions/getPredictionsSelected"]
                },
                isPredictionsChanged: function() {
                    return this.$store.state.predictions.isPredictionsSelectedChanged
                },
                haveValidPredictions: function() {
                    return this.$store.getters["predictions/haveValidPredictionsSelected"]
                },
                horaUpdate: function() {
                    return this.$store.getters["user/getUserData"].last_update_str
                },
                isProcessing: function() {
                    return this.$store.state.contexto.isProcessing
                },
                btnMessage: function() {
                    return this.isProcessing ? "Guardando..." : this.isPredictionsChanged && this.haveValidPredictions ? "Guardar pronóstico" : "Guardado"
                },
                isPredictionEnable: function() {
                    return this.$store.getters["predictions/isPredictionEnable"]
                },
                totalPoints: function() {
                    var e = this.$store.getters["predictions/getTotalPoints"];
                    return 1 == e ? "1 Punto" : e + " Puntos"
                },
                anyFullTime: function() {
                    return this.$store.getters["predictions/anyFullTime"]
                },
                validPredictions: function() {
                    return this.$store.getters["predictions/getValidPredictionsSelected"]
                },
                msgCompleta: function() {
                    var e = !this.$store.getters["predictions/isPredictionsSelectedEditable"]
                      , t = (this.$store.state.contexto.groupSelected.elim,
                    this.predictionsSelected.every((function(e) {
                        return "full_time" == e.status
                    }
                    )));
                    return e && t ? null : "COMPLETÁ<br />TU PRONÓSTICO"
                },
                msgLocked: function() {
                    var e = !this.$store.getters["predictions/isPredictionsSelectedEditable"]
                      , t = this.$store.state.contexto.groupSelected.elim;
                    return !(!e || !t)
                }
            },
            methods: {
                savePrediction: function() {
                    this.isPredictionEnable && (this.$store.dispatch("predictions/savePredictionAction", this.validPredictions),
                    this.$refs.btnGuardar.blur())
                },
                guardarBtn: function(e) {
                    this.guardarClass = e,
                    e && this.$refs.btnGuardar.focus()
                }
            },
            watch: {
                groupSelected: function(e, t) {
                    this.savePrediction()
                }
            }
        }
          , ye = Ae
          , we = (a("a8b0"),
        Object(m["a"])(ye, ve, he, !1, null, null, null))
          , Se = we.exports
          , xe = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "grupos-usuarios",
                attrs: {
                    id: "gruposUsuario"
                }
            }, [a("div", {
                staticClass: "grupos-container"
            }, [a("h3", {
                staticClass: "titulos",
                domProps: {
                    innerHTML: e._s(e.msgCantidad)
                }
            }), a("router-link", {
                staticClass: "invitar",
                attrs: {
                    tag: "button",
                    to: "/armaUnTorneo"
                },
                nativeOn: {
                    click: function(t) {
                        return e.alertOrScroll()
                    }
                }
            }), a("ul", e._l(e.userGroupsOrdered, (function(t, s) {
                return a("router-link", {
                    key: s,
                    attrs: {
                        tag: "li",
                        to: "/miembrosGrupo/" + t.id
                    }
                }, [a("div", {
                    staticClass: "nombre-grupo"
                }, [a("div", {
                    staticClass: "nombre",
                    domProps: {
                        innerHTML: e._s(e.getName(t.name))
                    }
                }), "rank_suscrp" != t.id || e.esSuscriptor ? a("div", {
                    staticClass: "puesto"
                }, [e._v(" TU PUESTO: "), a("span", [e._v(e._s(t.user_position) + "°")])]) : a("div", {
                    staticClass: "puesto"
                })]), a("button", {
                    staticClass: "ranking"
                }, [e._v("RANKING")])])
            }
            )), 1)], 1), e.showLoader ? a("Loader") : e._e()], 1)
        }
          , Ee = []
          , Ie = (a("4e82"),
        a("284c"))
          , Oe = {
            components: {
                Loader: D
            },
            name: "GruposUsuario",
            data: function() {
                return {}
            },
            props: [],
            mounted: function() {},
            computed: {
                cantidadGrupos: function() {
                    return this.userGroups.length
                },
                userGroups: function() {
                    return this.$store.getters["userGroups/getUserGroups"]
                },
                esSuscriptor: function() {
                    var e = this.$store.getters["user/getUserSuscriptor"];
                    return e
                },
                userGroupsOrdered: function() {
                    if (this.userGroups) {
                        var e = Object(Ie["a"])(this.userGroups)
                          , t = Object(Ie["a"])(this.userGroups);
                        e = e.filter((function(e) {
                            return "General" !== e.name
                        }
                        )).filter((function(e) {
                            return "Suscriptor" !== e.name
                        }
                        )),
                        t = t.filter((function(e) {
                            return "General" === e.name || "Suscriptor" == e.name
                        }
                        )),
                        e.sort((function(e, t) {
                            return ie.ascending(e.name.toLowerCase(), t.name.toLowerCase())
                        }
                        ));
                        var a = t.concat(e);
                        return a
                    }
                    return []
                },
                msgCantidad: function() {
                    var e = 1 === this.cantidadGrupos ? "" : "s";
                    return "Estás Jugando <br/>en <span>".concat(this.cantidadGrupos, " torneo").concat(e, "</span>")
                },
                showLoader: function() {
                    return this.$store.state.contexto.isProcessing
                },
                userLogued: function() {
                    return this.$store.getters["user/userLogued"]
                }
            },
            methods: {
                getName: function(e) {
                    return "General" == e ? "Ranking LA NACION" : "Suscriptor" == e ? "Suscriptores <span></span>" : e
                }
            }
        }
          , qe = Oe
          , Le = (a("8c01"),
        Object(m["a"])(qe, xe, Ee, !1, null, null, null))
          , Ue = Le.exports
          , Me = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "grupos-invitacion",
                attrs: {
                    id: "gruposInvitacion"
                }
            }, [a("h3", [e._v(e._s(e.titleMsg))]), e.wasCreated ? e._e() : a("div", [a("div", {
                staticClass: "group-name-wrapper"
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.groupName,
                    expression: "groupName"
                }],
                attrs: {
                    type: "text",
                    name: "nombre-grupo",
                    placeholder: "Nombre del torneo",
                    minlength: e.minLength,
                    maxlength: e.maxLength,
                    required: ""
                },
                domProps: {
                    value: e.groupName
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.groupName = t.target.value)
                    }
                }
            }), a("div", {
                staticClass: "counter",
                staticStyle: {
                    "text-align": "right"
                }
            }, [e._v(" " + e._s(e.maxLength - e.groupName.length) + " ")])]), e.alertMsg ? a("div", {
                staticClass: "alerta",
                domProps: {
                    innerHTML: e._s(e.alertMsg)
                }
            }) : e._e()]), e.wasCreated ? e._e() : a("button", {
                staticClass: "crear-torneo",
                attrs: {
                    disabled: e.isDisabled
                },
                on: {
                    click: function(t) {
                        return e.createUserGroup()
                    }
                }
            }, [e._v(" " + e._s(e.btnMessage) + " ")]), e.wasCreated ? a("div", {
                staticClass: "compartir-wrapper"
            }, [a("div", {
                staticClass: "link",
                domProps: {
                    innerHTML: e._s(e.inviteUrl(e.userGroupCreated))
                }
            }), a("button", {
                staticClass: "crear-torneo",
                attrs: {
                    disabled: e.copyed
                },
                on: {
                    click: function(t) {
                        return e.copyUrl()
                    }
                }
            }, [e._v(e._s(e.linkMsg))]), a("div", {
                staticClass: "compartir-redes"
            }, [a("a", {
                staticClass: "red whatsapp",
                attrs: {
                    href: "https://api.whatsapp.com/send?text=Te invito al pronóstico del mundial de LA NACION " + e.inviteUrlParsed,
                    target: "_blank",
                    title: "Compartí el torneo por WhatsApp"
                }
            }), a("a", {
                staticClass: "red mail",
                attrs: {
                    href: "mailto:?subject=Pronóstico del Mundial de LA NACION&body=Te invito al pronóstico del mundial de LA NACION " + e.inviteUrlParsed,
                    target: "_blank",
                    title: "Compartí el torneo por email"
                }
            })])]) : e._e()])
        }
          , Ne = []
          , Te = {
            methods: {
                inviteUrl: function(e) {
                    if (e && Object.keys(e).length > 0) {
                        var t = e.token + "-" + e.id;
                        return this.url.origin + this.url.pathname + "#/unirse/" + t
                    }
                    return !1
                }
            }
        }
          , $e = {
            name: "ArmaUnTorneo",
            mixins: [Te],
            data: function() {
                return {
                    groupName: "",
                    minLength: 5,
                    maxLength: 40,
                    alertMsg: null,
                    url: {},
                    wasCreated: !1,
                    copyed: !1
                }
            },
            props: [],
            mounted: function() {
                this.url = new URL(window.location)
            },
            methods: {
                createUserGroup: function() {
                    this.groupName.length >= this.minLength ? (this.groupName = this.groupName.slice(0, this.maxLength),
                    this.$store.dispatch("userGroups/createUserGroupAction", this.groupName),
                    this.alertMsg = "Enviá el siguiente link a tus amigos para que se unan al torneo:") : this.alertMsg = "Este nombre no es válido. Volvé a intentarlo"
                },
                copyUrl: function() {
                    var e = this;
                    this.copyed = !0,
                    navigator.clipboard.writeText(this.inviteUrl(this.userGroupCreated)),
                    setTimeout((function() {
                        e.copyed = !1
                    }
                    ), 3e3)
                }
            },
            computed: {
                titleMsg: function() {
                    return this.wasCreated ? "".concat(this.userGroupCreated.name, " fue creado") : "Armá un torneo para jugar con amigos:"
                },
                isDisabled: function() {
                    return !!(this.wasCreated || this.groupName.length < this.minLength)
                },
                inviteUrlParsed: function() {
                    return this.inviteUrl(this.userGroupCreated).replace("#", "%23")
                },
                userGroupCreated: function() {
                    return this.$store.state.userGroups.userGroupCreated
                },
                isProcessing: function() {
                    return this.$store.state.contexto.isProcessing
                },
                btnMessage: function() {
                    return this.isProcessing ? "CREANDO..." : "CREAR"
                },
                linkMsg: function() {
                    return this.copyed ? "COPIADO" : "COPIAR LINK"
                }
            },
            watch: {
                groupName: function(e, t) {
                    this.$store.commit("userGroups/setUserGroupCreated", {})
                },
                userGroupCreated: function(e, t) {
                    Object.keys(e).length > 0 && (this.wasCreated = !0)
                }
            },
            beforeDestroy: function() {
                this.$store.commit("userGroups/setUserGroupCreated", {})
            }
        }
          , De = $e
          , Re = (a("bb51"),
        Object(m["a"])(De, Me, Ne, !1, null, null, null))
          , je = Re.exports
          , ze = function() {
            var e = this
              , t = e.$createElement;
            e._self._c;
            return e._m(0)
        }
          , Be = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "reglamento-container",
                attrs: {
                    id: "reglamento"
                }
            }, [a("h3", [e._v("Reglamento")]), a("p", {
                staticClass: "bajada"
            }, [e._v(" El pronóstico se podrá completar en cualquier momento de la Copa del Mundo siempre y cuando el partido no se haya iniciado. Se podrán cargar los resultados hasta 15 minutos antes de cada partido. ")]), a("div", {
                staticClass: "reglas"
            }, [a("h4", [e._v("EN FASE DE GRUPOS")]), a("ul", {
                staticClass: "first"
            }, [a("li", [a("div", [a("p", [e._v("Si se acierta el "), a("b", [e._v("resultado")]), e._v(" del partido se obtendrá")]), a("div", {
                staticClass: "punto"
            }, [e._v("1"), a("br"), a("span", [e._v("punto")])])])])]), a("ul", [a("li", [a("div", [a("p", [e._v(" Si, además de acertar el resultado del partido, se acierta la "), a("b", [e._v("cantidad de goles")]), e._v(" se obtendrán ")]), a("div", {
                staticClass: "punto"
            }, [e._v("3"), a("br"), a("span", [e._v("puntos "), a("br"), e._v("adicionales")])])])])]), a("h4", [e._v("EN FASE FINAL")]), a("p", [e._v("Se podrá pronosticar un partido de octavos, cuartos, semifinal y final recién cuando los rivales estén confirmados en esta fase del Mundial.")]), a("ul", {
                staticClass: "first"
            }, [a("li", [a("div", [a("p", [e._v(" Si se acierta el "), a("b", [e._v("resultado")]), e._v(" del partido se obtendrá ")]), a("div", {
                staticClass: "punto"
            }, [e._v("1"), a("br"), a("span", [e._v("punto")])])])])]), a("p", [e._v("En caso de que el partido dure 120 minutos (alargue), el resultado válido es este último.")]), a("ul", {
                staticClass: "first"
            }, [a("li", [a("div", [a("p", [e._v(" Si, además de acertar el resultado del partido, se acierta la "), a("b", [e._v("cantidad de goles")]), e._v(" se obtendrán ")]), a("div", {
                staticClass: "punto"
            }, [e._v("3"), a("br"), a("span", [e._v("puntos "), a("br"), e._v("adicionales")])])])])]), a("ul", [a("li", [a("div", [a("p", [e._v(" Si se acierta un "), a("b", [e._v("pronóstico de empate")]), e._v(" y además se acierta el "), a("b", [e._v("ganador en los penales")]), e._v(", se obtendrá ")]), a("div", {
                staticClass: "punto"
            }, [e._v("1"), a("br"), a("span", [e._v("punto más")])])])])]), a("ul", [a("li", [a("div", [a("p", [e._v(" Si se pronostica un "), a("b", [e._v("ganador durante el partido")]), e._v(" (no en los penales) y ese país resultara "), a("b", [e._v("ganador por penales")]), e._v(", se obtendrá ")]), a("div", {
                staticClass: "punto"
            }, [e._v("1"), a("br"), a("span", [e._v("solo punto")])])])])]), a("ul", {
                staticStyle: {
                    "border-bottom": "0"
                }
            }, [a("li", [a("div", [a("p", [e._v(" Si se pronostica un "), a("b", [e._v("ganador en los penales")]), e._v(" (previo pronóstico de empate) y ese país resultara "), a("b", [e._v("ganador durante el partido")]), e._v(" (en los 90 minutos o en los 120 minutos), se obtendrá ")]), a("div", {
                staticClass: "punto"
            }, [e._v("1"), a("br"), a("span", [e._v("solo punto")])])])])]), a("p", {
                staticStyle: {
                    "border-bottom": "1px dashed #3b111a",
                    "padding-bottom": "20px"
                }
            }, [a("b", [e._v("EJEMPLO:")]), a("br"), e._v("Si se pronostica que la Argentina gana en los 90 minutos o en los 120 minutos si hubiera alargue, pero en realidad gana por penales, solo sumará un punto ya que no se acertó ni el resultado ni los goles, pero sí se acertó qué selección pasó a la siguiente ronda.")]), a("h4", [e._v("TABLA DE POSICIONES")]), a("p", [e._v("Habrá una tabla de posiciones llamada Ranking LA NACION del cual participan todos los usuarios que hagan un pronóstico y una tabla de posiciones para los torneos privados a la que accederán los usuarios que participen en ellos. También habrá una tabla de posiciones llamada Suscriptores LN en la cual participan únicamente usuarios con acceso digital a www.lanacion.com, que sean suscriptores digitales antes de la fecha de inicio del Mundial. ")]), a("h4", [e._v("PREMIO")]), a("p", [e._v('Todos los usuarios que participen del Ranking LA NACION participarán por un premio que consiste en un Smart TV LED 65" Samsung 4K. A este ranking acceden automáticamente todos los usuarios que completen su pronóstico. Quien obtenga más puntos será el ganador, en caso de empate se sorteará. Los grupos privados no participan por ningún premio. ')]), a("p", [e._v('Asimismo, habrá un premio especial que consiste en otro Smart TV LED 65" Samsung 4K para quien lidere la tabla de Suscriptores LN. En caso de que el ganador del Ranking LA NACION sea suscriptor digital, el premio especial para suscriptores quedará para el segundo de la tabla de Suscriptores. ')])])])
        }
        ]
          , He = {
            name: "Reglamento",
            data: function() {
                return {}
            },
            props: [],
            mounted: function() {},
            methods: {}
        }
          , Fe = He
          , Ve = (a("ef52"),
        Object(m["a"])(Fe, ze, Be, !1, null, null, null))
          , Je = Ve.exports
          , We = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "usuarios-container"
            }, [e.mostrarAlertaEliminar ? a("AlertaEliminar", {
                attrs: {
                    text: e.alertMessage
                },
                on: {
                    alertSi: function(t) {
                        return e.deleteSelectedUser()
                    },
                    alertNo: function(t) {
                        e.mostrarAlertaEliminar = !1
                    }
                }
            }) : e._e(), e.mostrarAlertaInvitar ? a("AlertaInvitar", {
                attrs: {
                    dataGroup: e.selectedGroup,
                    isAdmin: e.isCurrentUserAdmin
                },
                on: {
                    alertUpdate: function(t) {
                        return e.updateGroupToken()
                    },
                    alertNo: function(t) {
                        e.mostrarAlertaInvitar = !1
                    }
                }
            }) : e._e(), a("div", {
                staticClass: "titulos-lista-usuarios"
            }, [a("router-link", {
                staticClass: "back",
                attrs: {
                    tag: "button",
                    to: "/gruposUsuario"
                }
            }), e.showLoader ? a("Loader") : e._e(), a("h3", {
                staticClass: "nombre-grupo",
                domProps: {
                    innerHTML: e._s(e.groupName)
                }
            }), a("button", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.selectedGroup && !e.isRankingGral,
                    expression: "selectedGroup && !isRankingGral"
                }],
                staticClass: "invitar",
                on: {
                    click: function(t) {
                        e.mostrarAlertaInvitar = !0
                    }
                }
            })], 1), e.isRankingGral ? a("div", {
                staticClass: "aviso"
            }, [a("span", {
                staticClass: "amarillo"
            }, [e._v("PREMIO PARA EL PRIMER LUGAR")]), a("br"), a("span", {
                staticClass: "celeste"
            }, [e._v('Smart TV LED UHD 4K de 65"')])]) : e._e(), e.isRankingGral && !e.isTopTen ? a("div", [a("div", {
                staticClass: "puesto-usuario-rnk"
            }, [e._m(0), a("ul", {
                staticClass: "rank-pos"
            }, [a("li", {
                staticClass: "es-user-actual"
            }, [a("div", {
                staticClass: "posicion"
            }, [e._v(e._s(e.userPosition))]), a("div", {
                staticClass: "nombre-usuario"
            }, [a("div", {
                staticClass: "nombre"
            }, [a("span", [e._v(e._s(e.userName))])]), a("div", {
                staticClass: "suscriptor"
            }, [e._v("Suscriptor")])]), a("div", {
                staticClass: "puntos"
            }, [e._v(e._s(e.puntosTotales)), a("br"), a("span", [e._v("PTOS")])])])])])]) : e._e(), e.isRankingGral ? a("div", {
                staticClass: "total-usuarios"
            }, [a("div", {
                staticClass: "total"
            }, [e._v("TOTAL: "), a("span", [e._v(e._s(e.usuariosTotales))]), e._v(" USUARIOS")]), a("div", {
                staticClass: "title"
            }, [e._v("TOP 10")])]) : e._e(), a("ul", {
                class: {
                    esAdmin: e.isCurrentUserAdmin
                }
            }, e._l(e.groupMembersOrdered, (function(t, s) {
                return a("li", {
                    key: s,
                    class: {
                        "es-user-actual": t.id_user == e.idCurrentUser,
                        "es-admin": e.isAdminById(t.id_user),
                        "es-suscriptor": t.suscriptor
                    }
                }, [e.isCurrentUserAdmin ? a("button", {
                    staticClass: "eliminar",
                    on: {
                        click: function(a) {
                            return e.showAlertAndSelectUser(t.id_user)
                        }
                    }
                }) : e._e(), a("div", {
                    staticClass: "posicion"
                }, [e._v(e._s(t.user_position))]), a("div", {
                    staticClass: "nombre-usuario"
                }, [a("div", {
                    class: {
                        nombre: !0
                    }
                }, [a("span", [e._v(e._s(t.user_name) + " "), e.isAdminById(t.id_user) ? a("b", {
                    staticClass: "esAdmin"
                }, [e._v("(admin)")]) : e._e()])]), a("div", {
                    staticClass: "suscriptor"
                }, [e._v("Suscriptor")])]), a("div", {
                    staticClass: "puntos"
                }, [e._v(e._s(t.total_points)), a("br"), a("span", [e._v("PTOS")])])])
            }
            )), 0), e.isRankingGral || e.showLoader ? e._e() : a("div", {
                staticClass: "actions"
            }, [a("button", {
                on: {
                    click: function(t) {
                        return e.showAlertAndSelectUser(e.idCurrentUser)
                    }
                }
            }, [e._v(" SALIR DEL TORNEO ")])])], 1)
        }
          , Ke = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "total-usuarios"
            }, [a("div", {
                staticClass: "title"
            }, [e._v("TU PUESTO")])])
        }
        ]
          , Ze = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "alerta-grupos"
            }, [a("div", {
                staticClass: "message-container"
            }, [a("div", {
                staticClass: "msg",
                domProps: {
                    innerHTML: e._s(e.text)
                }
            }), a("button", {
                staticClass: "btnAlertaGrp",
                on: {
                    click: function(t) {
                        return e.$emit("alertSi")
                    }
                }
            }, [e._v("SI")]), a("button", {
                staticClass: "btnAlertaGrp no",
                on: {
                    click: function(t) {
                        return e.$emit("alertNo")
                    }
                }
            }, [e._v("NO")])])])
        }
          , Qe = []
          , Ye = {
            name: "AlertaEliminar",
            data: function() {
                return {}
            },
            props: ["text"],
            computed: {},
            mounted: function() {}
        }
          , Xe = Ye
          , et = (a("e07e"),
        Object(m["a"])(Xe, Ze, Qe, !1, null, null, null))
          , tt = et.exports
          , at = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "alerta-invitar"
            }, [a("div", {
                staticClass: "message-container"
            }, [a("div", {
                staticClass: "alerta"
            }, [e._v(" Enviá el siguiente link a tus amigos para que se unan al torneo: ")]), a("div", {
                staticClass: "link"
            }, [e._v(e._s(e.inviteUrl(this.dataGroup)))]), a("div", {
                staticClass: "compartir-wrapper"
            }, [a("button", {
                staticClass: "copiar",
                class: {
                    copiado: e.copyed
                },
                on: {
                    click: function(t) {
                        return e.copyUrl()
                    }
                }
            }, [e._v(e._s(e.linkMsg))]), a("div", {
                staticClass: "compartir-redes"
            }, [a("a", {
                staticClass: "red whatsapp",
                attrs: {
                    href: "https://api.whatsapp.com/send?text=Te invito al pronóstico del mundial de LA NACION " + e.inviteUrlParsed,
                    target: "_blank",
                    title: "Compartí el torneo por WhatsApp"
                },
                on: {
                    click: function(t) {
                        return e.$emit("alertNo")
                    }
                }
            }), a("a", {
                staticClass: "red mail",
                attrs: {
                    href: "mailto:?subject=Pronóstico del Mundial de LA NACION&body=Te invito al pronóstico del mundial de LA NACION " + e.inviteUrlParsed,
                    target: "_blank",
                    title: "Compartí el torneo por email"
                },
                on: {
                    click: function(t) {
                        return e.$emit("alertNo")
                    }
                }
            })])]), e.isAdmin ? a("button", {
                staticClass: "copiar regenerar",
                class: {
                    copiado: e.updated
                },
                on: {
                    click: function(t) {
                        return e.updateUrl()
                    }
                }
            }, [e._v(" " + e._s(e.updatedMsg) + " ")]) : e._e(), e.isAdmin ? a("div", {
                staticClass: "aclaracion"
            }, [e._v(" Si queres volver a generar el codigo porque te estan haciendo SPAM ")]) : e._e(), a("div", {
                staticClass: "cerrar",
                on: {
                    click: function(t) {
                        return e.$emit("alertNo")
                    }
                }
            })])])
        }
          , st = []
          , ot = {
            name: "AlertaInvitar",
            mixins: [Te],
            data: function() {
                return {
                    url: {},
                    copyed: !1,
                    updated: !1
                }
            },
            props: ["dataGroup", "isAdmin"],
            mounted: function() {
                this.url = new URL(window.location)
            },
            computed: {
                inviteUrlParsed: function() {
                    return this.inviteUrl(this.dataGroup).replace("#", "%23")
                },
                linkMsg: function() {
                    return this.copyed ? "COPIADO" : "COPIAR LINK"
                },
                updatedMsg: function() {
                    return this.isProcessing ? "ACTUALIZANDO" : "ACTUALIZAR LINK"
                },
                isProcessing: function() {
                    return this.$store.state.contexto.isProcessing
                }
            },
            methods: {
                updateUrl: function() {
                    this.$emit("alertUpdate")
                },
                copyUrl: function() {
                    var e = this;
                    this.copyed = !0;
                    var t = this.inviteUrl(this.dataGroup);
                    navigator.clipboard.writeText(t),
                    setTimeout((function() {
                        e.$emit("alertNo")
                    }
                    ), 1500)
                }
            }
        }
          , rt = ot
          , nt = (a("47b2"),
        Object(m["a"])(rt, at, st, !1, null, null, null))
          , it = nt.exports
          , ct = window.innerWidth
          , ut = {
            components: {
                AlertaEliminar: tt,
                AlertaInvitar: it,
                Loader: D
            },
            data: function() {
                return {
                    mostrarAlertaEliminar: !1,
                    mostrarAlertaInvitar: !1,
                    groupId: null,
                    userIdToDelete: null,
                    alertMessage: ""
                }
            },
            mounted: function() {
                var e = ct > 700 ? 190 : 160;
                window.scrollTo({
                    top: e,
                    behavior: "smooth"
                })
            },
            computed: {
                selectedGroup: function() {
                    return this.$store.getters["userGroups/getSelectedGroup"]
                },
                groupName: function() {
                    return null === this.selectedGroup ? "Cargando torneo..." : "Suscriptores" === this.selectedGroup.name ? "Suscriptores <span></span>" : this.selectedGroup.name
                },
                groupMembers: function() {
                    return null === this.selectedGroup ? [] : this.selectedGroup.users
                },
                groupMembersOrdered: function() {
                    return this.groupMembers && 0 != this.groupMembers.length ? this.groupMembers.concat().sort((function(e, t) {
                        return ie.ascending(e.user_position, t.user_position)
                    }
                    )) : []
                },
                userLogued: function() {
                    return this.$store.getters["user/userLogued"]
                },
                idAdminUser: function() {
                    return this.selectedGroup ? this.selectedGroup.id_user_admin : null
                },
                idCurrentUser: function() {
                    return this.$store.getters["user/getUserData"].id
                },
                isCurrentUserAdmin: function() {
                    return this.idAdminUser == this.idCurrentUser
                },
                showLoader: function() {
                    return !this.selectedGroup
                },
                isRankingGral: function() {
                    return !!this.selectedGroup && this.selectedGroup.isRankingGral
                },
                puntosTotales: function() {
                    var e = this.selectedGroup.user_position.total_points;
                    return e || 0
                },
                isTopTen: function() {
                    return !!this.selectedGroup && this.selectedGroup.user_position.user_position < 10
                },
                usuariosTotales: function() {
                    return this.selectedGroup ? this.selectedGroup.usuarios_totales : "--"
                },
                userName: function() {
                    return this.selectedGroup ? this.selectedGroup.user_position.user_name : "--"
                },
                userPosition: function() {
                    return this.selectedGroup ? this.selectedGroup.user_position.user_position : "--"
                }
            },
            methods: {
                isAdminById: function(e) {
                    return e == this.idAdminUser
                },
                deleteSelectedUser: function() {
                    var e = this.userIdToDelete
                      , t = this.selectedGroup.id;
                    this.$store.dispatch("userGroups/deleteUserFromAGroupAction", {
                        delete_user_id: e,
                        group_id: t
                    }),
                    this.$router.push("/gruposUsuario")
                },
                updateGroupToken: function() {
                    var e = this.selectedGroup.id;
                    this.$store.dispatch("userGroups/updateGroupTokenAction", e)
                },
                showAlertAndSelectUser: function(e) {
                    if (this.userIdToDelete = e,
                    this.mostrarAlertaEliminar = !0,
                    e == this.idCurrentUser)
                        this.alertMessage = "¿Estás seguro que querés salir del torneo <span>".concat(this.selectedGroup.name, "</span>?");
                    else {
                        var t = this.groupMembers.find((function(t) {
                            return t.id_user == e
                        }
                        )).user_name;
                        this.alertMessage = "¿Estás seguro de quitar a <span>".concat(t, "</span> del torneo <span>").concat(this.selectedGroup.name, "</span>?")
                    }
                }
            },
            created: function() {
                this.groupId = this.$route.params.groupId,
                this.$store.getters["userGroups/belongsToIdGroup"](this.groupId) ? this.$store.dispatch("userGroups/setMembersGroupAction", {
                    router: this.$router,
                    groupId: this.groupId
                }) : this.$router.push("/gruposUsuario")
            },
            beforeDestroy: function() {
                this.$store.commit("userGroups/setSelectedGroupId", null)
            },
            watch: {
                userLogued: function(e, t) {
                    e && this.$store.dispatch("userGroups/setMembersGroupAction", this.groupId)
                }
            }
        }
          , lt = ut
          , dt = (a("a771"),
        Object(m["a"])(lt, We, Ke, !1, null, null, null))
          , pt = dt.exports
          , mt = [{
            name: "Home",
            path: "/",
            component: Se
        }, {
            name: "Pronostico",
            path: "/pronostico/:id",
            component: Se,
            beforeEnter: function(e, t, a) {
                "Pronostico" == e.name && "miembros_grupo" == t.name && me.dispatch("predictions/getPredictionsAction"),
                a()
            }
        }, {
            name: "grupos_usuario",
            path: "/gruposUsuario",
            component: Ue,
            beforeEnter: function(e, t, a) {
                "grupos_usuario" == e.name && "miembros_grupo" == t.name && me.dispatch("userGroups/setUserGroupsAction", {
                    router: gt
                }),
                a()
            }
        }, {
            name: "miembros_grupo",
            path: "/miembrosGrupo/:groupId",
            component: pt
        }, {
            name: "unirse",
            path: "/unirse/:hashTokenId",
            component: Se
        }, {
            name: "Armá un torneo",
            path: "/armaUnTorneo",
            component: je
        }, {
            name: "Reglamento",
            path: "/reglamento",
            component: Je
        }, {
            path: "*",
            redirect: "/"
        }];
        a.d(t, "router", (function() {
            return gt
        }
        )),
        s["a"].use(j.a, {
            expire: "7d"
        }),
        s["a"].use(ge["a"]);
        var gt = new ge["a"]({
            routes: mt
        });
        s["a"].config.productionTip = !1,
        new s["a"]({
            render: function(e) {
                return e(X)
            },
            router: gt,
            store: me
        }).$mount("#app")
    },
    "5c0b": function(e, t, a) {
        "use strict";
        var s = a("9c0c")
          , o = a.n(s);
        o.a
    },
    "6c1e": function(e, t, a) {},
    "6fa3": function(e, t, a) {},
    7414: function(e, t, a) {
        "use strict";
        var s = a("2fbc")
          , o = a.n(s);
        o.a
    },
    7642: function(e, t, a) {},
    8709: function(e, t, a) {},
    "8c01": function(e, t, a) {
        "use strict";
        var s = a("3890")
          , o = a.n(s);
        o.a
    },
    9130: function(e, t, a) {},
    "9c0c": function(e, t, a) {},
    a071: function(e, t, a) {
        "use strict";
        var s = a("c25f")
          , o = a.n(s);
        o.a
    },
    a771: function(e, t, a) {
        "use strict";
        var s = a("8709")
          , o = a.n(s);
        o.a
    },
    a8b0: function(e, t, a) {
        "use strict";
        var s = a("35d5")
          , o = a.n(s);
        o.a
    },
    bb51: function(e, t, a) {
        "use strict";
        var s = a("6c1e")
          , o = a.n(s);
        o.a
    },
    bb78: function(e, t, a) {
        "use strict";
        var s = a("6fa3")
          , o = a.n(s);
        o.a
    },
    c139: function(e, t, a) {
        "use strict";
        var s = a("f8a0")
          , o = a.n(s);
        o.a
    },
    c25f: function(e, t, a) {},
    e07e: function(e, t, a) {
        "use strict";
        var s = a("480b")
          , o = a.n(s);
        o.a
    },
    ef52: function(e, t, a) {
        "use strict";
        var s = a("0a79")
          , o = a.n(s);
        o.a
    },
    f8a0: function(e, t, a) {}
});



parsetime = function(e) {
    var t = {
        day: "2-digit",
        weekday: "short",
        month: "short",
        hour: "numeric",
        minute: "2-digit"
    }
      , a = new Date(e)
      , s = new Intl.DateTimeFormat("es-AR",t).format(a)
      , o = s.slice(0, 11)
      , r = s.slice(11, s.length);
    return o.concat(". / ").concat(r).replace(",", ".").toUpperCase().concat(" Hs.")
}

nombreGrupo=document.getElementsByClassName('nombre-grupo')

function selectGroup(grupo){
    return fixture.filter(item => item.group == grupo)
}


function getGrupoStr(){
    botonActivo=document.getElementsByClassName('router-link-exact-active active')[1]
    return botonActivo.innerText
}


function getGrupo(){
    grupoStr=getGrupoStr()
    nombreGrupo[0].innerHTML=grupoStr
    grupoPartidos=selectGroup(grupoStr)
  
    containerPartidos=document.getElementsByClassName('partidos-container')[0].getElementsByClassName('partido')

    for (let i = 0; i < containerPartidos.length; i++) {
        t1=grupoPartidos[i].team_1
        t2=grupoPartidos[i].team_2
        containerPartidos[i].getElementsByClassName('pais equipo1')[0].innerText=t1
        containerPartidos[i].getElementsByClassName('pais equipo2')[0].innerText=t2
        time=grupoPartidos[i].datetime
        divTiempo=containerPartidos[i].getElementsByClassName('status fecha-hora')[0]
        divTiempo.innerText=parsetime(time)
    }



}

function addlistener(){
    menuGrupos=document.querySelector('#menu-grupos')
    menuGrupos.addEventListener('click', getGrupo)

}

addlistener()



btnguardado='<div class="guardar"><button id="btnGuardar" class="active"> Guardar pronóstico </button></div>'
nuevo_div=document.createElement('div')
nuevo_div.innerHTML=btnguardado
div=document.getElementsByClassName('partidos-container')[0]
div.append(nuevo_div)


function sendProde(){
    inputs=document.getElementsByTagName('input')
    for (let input of inputs) {
        console.log(input.value)
    }
}

btnGuardar.addEventListener('click', sendProde)




;
//# sourceMappingURL=app~d0ae3f07.e5b3f71a.js.map
