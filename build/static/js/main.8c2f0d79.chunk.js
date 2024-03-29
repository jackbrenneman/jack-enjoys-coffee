(this["webpackJsonpjack-enjoys-coffee"] =
  this["webpackJsonpjack-enjoys-coffee"] || []).push([
  [0],
  {
    104: function (e, a, t) {
      e.exports = t(119);
    },
    109: function (e, a, t) {},
    119: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        r = t.n(n),
        c = t(11),
        l = t.n(c),
        o = (t(109), t(14)),
        i = t(23),
        m = t(93),
        s = t(176),
        u = t(39),
        d = t(38),
        f = t(161),
        E = t(178),
        b = t(162),
        g = t(166),
        v = t(167),
        p = t(168),
        h = t(169),
        y = t(182),
        j = t(163),
        O = t(59),
        C = t(164),
        w = t(90),
        x = t.n(w),
        N = t(12),
        k = t.n(N),
        I = t(5),
        D = t.n(I),
        S = t(85),
        B = t.n(S),
        R = t(86),
        _ = t.n(R),
        L = t(87),
        P = t.n(L),
        W = t(88),
        F = t.n(W),
        G = t(89),
        T = t.n(G),
        H = [
          { name: "Home", icon: r.a.createElement(B.a, null), path: "/home" },
          { name: "Data", icon: r.a.createElement(_.a, null), path: "/data" },
          {
            name: "Coffee",
            icon: r.a.createElement(P.a, null),
            path: "/coffee",
          },
          {
            name: "Equipment",
            icon: r.a.createElement(F.a, null),
            path: "/equipment",
          },
          { name: "Blog", icon: r.a.createElement(T.a, null), path: "/blog" },
        ],
        V = {
          brewers: [],
          coffees: [],
          drinks: [],
          grinders: [],
          methods: [],
          origins: [],
          processes: [],
          roasters: [],
          waters: [],
        },
        M = {
          dataOption: "ORIGIN",
          brewer: { name: "", website: "", method_id: 0 },
          coffee: { name: "", roaster_id: "", process_id: 0, origin_id: "" },
          drink: { name: "", method_id: 0 },
          grinder: { name: "", website: "" },
          origin: { name: "" },
          roaster: { name: "", city: "", state: "", country: "", website: "" },
          water: { name: "", description: "" },
        },
        A = new Date(),
        q = A.getFullYear(),
        z = A.getMonth() + 1,
        J = A.getDate(),
        K = {
          date: ""
            .concat(q, "-")
            .concat(z > 9 ? z : "0".concat(z), "-")
            .concat(J),
          coffee: { name: "", roaster: "", origin: "", process: 0 },
          brew: {
            method: 0,
            brewer: 0,
            drink: 0,
            grind: { grinder: "", setting: null },
            water: "",
            coffee_in: null,
            out: null,
          },
          rating: 8,
          note: "",
        },
        U = {
          name: D.a.string,
          roaster: D.a.string,
          origin: D.a.string,
          process: D.a.number,
        },
        Y = { grinder: D.a.string, setting: D.a.number },
        X = {
          method: D.a.number,
          brewer: D.a.number,
          drink: D.a.number,
          grind: D.a.shape(Y),
          water: D.a.string,
          coffee_in: D.a.number,
          out: D.a.number,
        };
      D.a.shape({
        date: D.a.string,
        coffee: D.a.shape(U),
        brew: D.a.shape(X),
        rating: D.a.number,
        note: D.a.string,
      }).isRequired,
        D.a.func.isRequired;
      var $ = function () {
          var e = Object(f.a)(function (e) {
              return {
                root: { background: "grey" },
                menuButton: { color: "white", marginRight: "5%" },
                title: { color: "white" },
                navLink: { textDecoration: "none", color: "black" },
                activeNavLink: { color: "brown" },
              };
            })(),
            a = Object(n.useState)(!1),
            t = Object(u.a)(a, 2),
            c = t[0],
            l = t[1],
            o = function () {
              l(!c);
            },
            i =
              void 0 !== window
                ? function () {
                    return window.document.body;
                  }
                : void 0;
          return r.a.createElement(
            E.a,
            null,
            r.a.createElement(
              b.a,
              { className: e.root, position: "static" },
              r.a.createElement(
                j.a,
                null,
                r.a.createElement(
                  C.a,
                  {
                    className: e.menuButton,
                    disableRipple: !0,
                    edge: "start",
                    color: "inherit",
                    "aria-label": "menu",
                    size: "small",
                    onClick: o,
                  },
                  r.a.createElement(x.a, null)
                ),
                r.a.createElement(
                  O.a,
                  { variant: "h6", className: e.title },
                  "jack-enjoys-coffee"
                ),
                r.a.createElement(
                  E.a,
                  { p: 1, display: "flex", justifyContent: "center" },
                  r.a.createElement(
                    d.a,
                    { className: e.navLink, to: "/home" },
                    r.a.createElement("img", {
                      src: k.a,
                      alt: "Coffee Logo",
                      width: "30px",
                      height: "30px",
                    })
                  )
                )
              )
            ),
            r.a.createElement(
              "nav",
              { className: "Drawer", "aria-label": "side drawer" },
              r.a.createElement(
                y.a,
                {
                  container: i,
                  variant: "temporary",
                  anchor: "left",
                  open: c,
                  onClose: o,
                  ModalProps: { keepMounted: !0 },
                },
                r.a.createElement(
                  g.a,
                  null,
                  H.map(function (a) {
                    var t = a.name,
                      n = a.icon,
                      c = a.path;
                    return r.a.createElement(
                      d.a,
                      {
                        className: e.navLink,
                        key: t,
                        to: c,
                        onClick: o,
                        activeClassName: e.activeNavLink,
                      },
                      r.a.createElement(
                        E.a,
                        { pr: 2 },
                        r.a.createElement(
                          v.a,
                          { button: !0 },
                          r.a.createElement(p.a, null, n),
                          r.a.createElement(h.a, { primary: t })
                        )
                      )
                    );
                  })
                )
              )
            )
          );
        },
        Q = t(170);
      var Z = function () {
        var e = H.slice(1),
          a = Object(f.a)(function (e) {
            return {
              navLink: { textDecoration: "none", color: "black" },
              activeNavLink: { color: "brown" },
            };
          })();
        return r.a.createElement(
          E.a,
          { p: 4 },
          r.a.createElement(
            Q.a,
            { container: !0, align: "center" },
            e.map(function (e) {
              var t = e.name,
                n = e.icon,
                c = e.path;
              return r.a.createElement(
                Q.a,
                { item: !0, xs: 6, sm: 3, key: t },
                r.a.createElement(
                  E.a,
                  { p: 2 },
                  r.a.createElement(
                    d.a,
                    {
                      className: a.navLink,
                      to: c,
                      activeClassName: a.activeNavLink,
                    },
                    r.a.createElement(E.a, null, n),
                    r.a.createElement(
                      E.a,
                      null,
                      r.a.createElement(O.a, null, t)
                    )
                  )
                )
              );
            })
          )
        );
      };
      var ee = function () {
          var e = Object(f.a)(function (e) {
            return { home: { backgroundColor: "#EEEEEE", minHeight: "100vh" } };
          })();
          return r.a.createElement(
            E.a,
            { className: e.home, p: 4 },
            r.a.createElement(
              E.a,
              { p: 4, display: "flex", justifyContent: "center" },
              r.a.createElement(O.a, { variant: "h2" }, "jack-enjoys-coffee")
            ),
            r.a.createElement(
              E.a,
              { p: 1, display: "flex", justifyContent: "center" },
              r.a.createElement("img", { src: k.a, alt: "Coffee Logo" })
            ),
            r.a.createElement(
              E.a,
              { p: 4, display: "flex", justifyContent: "center" },
              r.a.createElement(
                O.a,
                { variant: "body1", align: "center" },
                "Welcome! This is a site for Jack and his love for coffee. I want to be able to track all the coffee I've tried and my drinking habits. I also wanted to create a simple website from start to finish. Eventually, I hope to make some visualizations on the data that I've been recording."
              )
            ),
            r.a.createElement(
              E.a,
              { p: 4, display: "flex", justifyContent: "center" },
              r.a.createElement(
                O.a,
                { variant: "body1", align: "center" },
                "You can click the hamburger icon in the top left of this page in order to open the side drawer and navigate to other sections, or you can just click on one of the buttons below to look around. Thanks for checking out the site!"
              )
            ),
            r.a.createElement(Z, null)
          );
        },
        ae = t(91),
        te = t.n(ae);
      var ne = function () {
        var e = Object(f.a)(function (e) {
          return { home: { backgroundColor: "#EEEEEE", minHeight: "100vh" } };
        })();
        return r.a.createElement(
          E.a,
          { className: e.home, p: 10 },
          r.a.createElement(
            E.a,
            { p: 4, display: "flex", justifyContent: "center" },
            r.a.createElement(te.a, { fontSize: "large" })
          ),
          r.a.createElement(
            E.a,
            { p: 4, display: "flex", justifyContent: "center" },
            r.a.createElement(
              O.a,
              { variant: "h2", align: "center" },
              "This page is under construction! Come back later."
            )
          )
        );
      };
      var re = function () {
        return r.a.createElement(ne, null);
      };
      var ce = function () {
        return r.a.createElement(ne, null);
      };
      var le = function () {
        return r.a.createElement(ne, null);
      };
      function oe() {
        var e = Object(f.a)(function (e) {
          return { data: { backgroundColor: "#EEEEEE", minHeight: "100vh" } };
        })();
        return r.a.createElement(
          E.a,
          {
            className: e.data,
            p: 4,
            display: "flex",
            justifyContent: "center",
          },
          r.a.createElement(
            Q.a,
            { container: !0, align: "center" },
            r.a.createElement(
              Q.a,
              { item: !0, xs: 12 },
              r.a.createElement(
                E.a,
                { p: 4 },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Click on the button below to input a Coffee Journal Entry"
                ),
                r.a.createElement(
                  E.a,
                  { p: 2 },
                  r.a.createElement(
                    d.a,
                    {
                      className: e.navLink,
                      to: "/data/coffee_entry",
                      activeClassName: e.activeNavLink,
                    },
                    r.a.createElement(
                      E.a,
                      { p: 1 },
                      r.a.createElement("img", { src: k.a, alt: "Coffee Logo" })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              Q.a,
              { item: !0, xs: 12 },
              r.a.createElement(
                E.a,
                { p: 4 },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Click on the button below to input a new Roaster, Coffee, or Origin"
                ),
                r.a.createElement(
                  E.a,
                  { p: 2 },
                  r.a.createElement(
                    d.a,
                    {
                      className: e.navLink,
                      to: "/data/entry",
                      activeClassName: e.activeNavLink,
                    },
                    r.a.createElement(
                      E.a,
                      { p: 1 },
                      r.a.createElement("img", { src: k.a, alt: "Coffee Logo" })
                    )
                  )
                )
              )
            ),
            r.a.createElement(
              Q.a,
              { item: !0, xs: 12 },
              r.a.createElement(
                E.a,
                { p: 4 },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Here is where your data will be when you put in some journal entries!"
                )
              )
            )
          )
        );
      }
      oe.defaultProps = { user: "", entries: [] };
      var ie = oe,
        me = t(173),
        se = t(2),
        ue = t(177);
      var de = function (e) {
          var a = e.coffeeEntry,
            t = e.setCoffeeEntry,
            n = a.date,
            c = Object(f.a)(function () {
              return { form: { width: "200px" } };
            })();
          return r.a.createElement(
            Q.a,
            { container: !0, justify: "center" },
            r.a.createElement(
              Q.a,
              { item: !0, xs: 12 },
              r.a.createElement(
                O.a,
                { variant: "h6", align: "center" },
                "General Info"
              )
            ),
            r.a.createElement(
              Q.a,
              { item: !0, xs: 12 },
              r.a.createElement(
                Q.a,
                {
                  container: !0,
                  align: "center",
                  justify: "center",
                  spacing: 2,
                },
                r.a.createElement(
                  Q.a,
                  { item: !0, xs: 12, sm: 6 },
                  r.a.createElement(
                    O.a,
                    { variant: "body1", align: "center" },
                    "Date"
                  ),
                  r.a.createElement(
                    "form",
                    { autoComplete: "off" },
                    r.a.createElement(ue.a, {
                      className: c.form,
                      id: "date",
                      type: "date",
                      defaultValue: n,
                      onChange: function (e) {
                        t(
                          Object(se.a)(
                            Object(se.a)({}, a),
                            {},
                            { date: e.target.value }
                          )
                        );
                      },
                      SelectProps: { native: !0 },
                      variant: "outlined",
                    })
                  )
                )
              )
            )
          );
        },
        fe = t(172),
        Ee = t(179);
      var be = function (e) {
          var a = e.onChange,
            t = e.options,
            c = e.textField,
            l = Object(n.useState)(null),
            o = Object(u.a)(l, 2),
            i = o[0],
            m = o[1],
            s = Object(fe.a)();
          return r.a.createElement(Ee.a, {
            value: i,
            onChange: function (e, t) {
              if ("string" === typeof t) m({ name: t });
              else if (t && t.inputValue) {
                var n = null === t || void 0 === t ? void 0 : t.inputValue;
                m({ name: n }), a(n || "");
              } else {
                var r = null === t || void 0 === t ? void 0 : t.name;
                m(t), a(r || "");
              }
            },
            filterOptions: function (e, a) {
              var t = s(e, a);
              return (
                "" !== a.inputValue &&
                  t.push({
                    inputValue: a.inputValue,
                    name: 'Add "'.concat(a.inputValue, '"'),
                  }),
                t
              );
            },
            selectOnFocus: !0,
            clearOnBlur: !0,
            handleHomeEndKeys: !0,
            id: "autcomplete-with-add-option",
            options: t,
            getOptionLabel: function (e) {
              return "string" === typeof e
                ? e
                : e.inputValue
                ? e.inputValue
                : e.name;
            },
            renderOption: function (e) {
              return e.name;
            },
            freeSolo: !0,
            renderInput: c,
          });
        },
        ge = [
          { name: "Espresso", value: 0 },
          { name: "Pour Over", value: 1 },
          { name: "Immersion", value: 2 },
        ],
        ve = {
          0: [
            { name: "Flair Pro 2", value: 0, method: 0 },
            { name: "Flair Signature 2", value: 1, method: 0 },
            { name: "Lelit Mara", value: 2, method: 0 },
          ],
          1: [
            { name: "Stagg X", value: 0, method: 1 },
            { name: "Stagg XF", value: 1, method: 1 },
            { name: "Kalita Wave", value: 2, method: 1 },
            { name: "V60", value: 3, method: 1 },
          ],
          2: [
            { name: "Aeropress", value: 0, method: 2 },
            { name: "French Press", value: 1, method: 2 },
            { name: "Toddy", value: 2, method: 2 },
          ],
        },
        pe = [
          { name: "Comandante Red Clix", value: 0 },
          { name: "Comandante", value: 1 },
          { name: "Niche", value: 2 },
          { name: "Pre-ground", value: 3 },
        ],
        he = [
          { name: "Ethiopia", value: 0 },
          { name: "Yemen", value: 1 },
          { name: "Brazil", value: 2 },
          { name: "Costa Rica", value: 3 },
        ],
        ye = [
          { name: "Boston Tap", value: 0 },
          { name: "Vermont Tap", value: 1 },
          { name: "Homemade", value: 2 },
        ],
        je = {
          0: [
            { name: "Straight Espresso", value: 0, method: 0 },
            { name: "Americano", value: 1, method: 0 },
            { name: "Cortado", value: 2, method: 0 },
            { name: "Flat White", value: 3, method: 0 },
            { name: "Cappacino", value: 4, method: 0 },
            { name: "Latte", value: 5, method: 0 },
            { name: "Mocha", value: 6, method: 0 },
            { name: "Iced Latte", value: 7, method: 0 },
          ],
          1: [
            { name: "Normal", value: 0, method: 1 },
            { name: "Japanese Iced Coffee", value: 1, method: 1 },
          ],
          2: [
            { name: "Hot Brew", value: 0, method: 2 },
            { name: "Cold Brew", value: 1, method: 2 },
            { name: "Nitro Cold Brew", value: 2, method: 2 },
          ],
        },
        Oe = [
          { name: "Washed", value: 0 },
          { name: "Natural", value: 1 },
          { name: "Honey", value: 2 },
          { name: "Other", value: 3 },
        ],
        Ce = [
          { name: 1, value: 0 },
          { name: 1.5, value: 1 },
          { name: 2, value: 2 },
          { name: 2.5, value: 3 },
          { name: 3, value: 4 },
          { name: 3.5, value: 5 },
          { name: 4, value: 6 },
          { name: 4.5, value: 7 },
          { name: 5, value: 8 },
          { name: 5.5, value: 9 },
          { name: 6, value: 10 },
          { name: 6.5, value: 11 },
          { name: 7, value: 12 },
          { name: 7.5, value: 13 },
          { name: 8, value: 14 },
          { name: 8.5, value: 15 },
          { name: 9, value: 16 },
          { name: 9.5, value: 17 },
          { name: 10, value: 18 },
        ],
        we = { 0: { id: 0, name: "Test Name" } },
        xe = {
          0: {
            roaster_id: 0,
            name: "Little Wolf",
            city: "Ipswhich",
            state: "Massachusetts",
            country: "United States",
            website: "https://littlewolf.coffee/",
          },
          1: {
            roaster_id: 1,
            name: "Tandem",
            city: "Portland",
            state: "Maine",
            country: "United States",
            website: "https://www.tandemcoffee.com/",
          },
          2: {
            roaster_id: 2,
            name: "George Howell",
            city: "Acton",
            state: "Massachusetts",
            country: "United States",
            website: "https://www.georgehowellcoffee.com/",
          },
          3: {
            roaster_id: 3,
            name: "Abracadabra",
            city: "Woodstock",
            state: "Vermont",
            country: "United States",
            website: "https://www.abracadabracoffeeco.com/",
          },
        };
      var Ne = function (e) {
        var a = e.coffeeEntry,
          t = e.setCoffeeEntry,
          n = a.coffee,
          c = n.process,
          l = Object(f.a)(function () {
            return { form: { width: "200px" } };
          })();
        return r.a.createElement(
          Q.a,
          { container: !0, justify: "center" },
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              O.a,
              { variant: "h6", align: "center" },
              "Coffee Info"
            )
          ),
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              Q.a,
              { container: !0, align: "center", justify: "center", spacing: 2 },
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12, sm: 6 },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Name"
                ),
                r.a.createElement(be, {
                  fieldName: "name",
                  onChange: function (e) {
                    t(
                      Object(se.a)(
                        Object(se.a)({}, a),
                        {},
                        {
                          coffee: Object(se.a)(
                            Object(se.a)({}, n),
                            {},
                            { name: e }
                          ),
                        }
                      )
                    );
                  },
                  options: Object.values(we),
                  textField: function (e) {
                    return r.a.createElement(
                      ue.a,
                      Object.assign({}, e, {
                        className: l.form,
                        id: "outlined-text-field-name",
                        label: "Name",
                        variant: "outlined",
                      })
                    );
                  },
                })
              ),
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12, sm: 6 },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Roaster"
                ),
                r.a.createElement(be, {
                  fieldName: "roaster",
                  onChange: function (e) {
                    t(
                      Object(se.a)(
                        Object(se.a)({}, a),
                        {},
                        {
                          coffee: Object(se.a)(
                            Object(se.a)({}, n),
                            {},
                            { roaster: e }
                          ),
                        }
                      )
                    );
                  },
                  options: Object.values(xe),
                  textField: function (e) {
                    return r.a.createElement(
                      ue.a,
                      Object.assign({}, e, {
                        className: l.form,
                        id: "outlined-text-field-roaster",
                        label: "Roaster",
                        variant: "outlined",
                      })
                    );
                  },
                })
              ),
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12, sm: 6 },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Origin"
                ),
                r.a.createElement(be, {
                  fieldName: "origin",
                  onChange: function (e) {
                    t(
                      Object(se.a)(
                        Object(se.a)({}, a),
                        {},
                        {
                          coffee: Object(se.a)(
                            Object(se.a)({}, n),
                            {},
                            { origin: e }
                          ),
                        }
                      )
                    );
                  },
                  options: he,
                  textField: function (e) {
                    return r.a.createElement(
                      ue.a,
                      Object.assign({}, e, {
                        className: l.form,
                        id: "outlined-text-field-origin",
                        label: "Origin",
                        variant: "outlined",
                      })
                    );
                  },
                })
              ),
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12, sm: 6 },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Process"
                ),
                r.a.createElement(
                  "form",
                  { autoComplete: "off" },
                  r.a.createElement(
                    ue.a,
                    {
                      className: l.form,
                      id: "outlined-select-process-native",
                      select: !0,
                      value: c,
                      onChange: function (e) {
                        t(
                          Object(se.a)(
                            Object(se.a)({}, a),
                            {},
                            {
                              coffee: Object(se.a)(
                                Object(se.a)({}, n),
                                {},
                                { process: parseInt(e.target.value) }
                              ),
                            }
                          )
                        );
                      },
                      SelectProps: { native: !0 },
                      variant: "outlined",
                    },
                    Oe.map(function (e) {
                      var a = e.name,
                        t = e.value;
                      return r.a.createElement(
                        "option",
                        { value: t, key: a },
                        a
                      );
                    })
                  )
                )
              )
            )
          )
        );
      };
      var ke = function (e) {
        var a = e.coffeeEntry,
          t = e.setCoffeeEntry,
          n = a.brew,
          c = n.method,
          l = n.brewer,
          o = n.drink,
          i = Object(f.a)(function () {
            return { form: { width: "200px" } };
          })(),
          m = je[c],
          s = (function (e) {
            return ve[e];
          })(c);
        return r.a.createElement(
          Q.a,
          { container: !0, justify: "center", spacing: 2 },
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12, sm: 4 },
            r.a.createElement(
              O.a,
              { variant: "body1", align: "center" },
              "Method"
            ),
            r.a.createElement(
              "form",
              { autoComplete: "off" },
              r.a.createElement(
                ue.a,
                {
                  className: i.form,
                  id: "outlined-select-method-native",
                  select: !0,
                  value: c,
                  onChange: function (e) {
                    t(
                      Object(se.a)(
                        Object(se.a)({}, a),
                        {},
                        {
                          brew: Object(se.a)(
                            Object(se.a)({}, n),
                            {},
                            {
                              method: parseInt(e.target.value),
                              drink: 0,
                              brewer: 0,
                            }
                          ),
                        }
                      )
                    );
                  },
                  SelectProps: { native: !0 },
                  variant: "outlined",
                },
                ge.map(function (e) {
                  var a = e.name,
                    t = e.value;
                  return r.a.createElement("option", { value: t, key: a }, a);
                })
              )
            )
          ),
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12, sm: 4 },
            r.a.createElement(
              O.a,
              { variant: "body1", align: "center" },
              "Brewer"
            ),
            r.a.createElement(
              "form",
              { autoComplete: "off" },
              r.a.createElement(
                ue.a,
                {
                  className: i.form,
                  id: "outlined-select-brewer-native",
                  select: !0,
                  value: l,
                  onChange: function (e) {
                    t(
                      Object(se.a)(
                        Object(se.a)({}, a),
                        {},
                        {
                          brew: Object(se.a)(
                            Object(se.a)({}, n),
                            {},
                            { brewer: parseInt(e.target.value) }
                          ),
                        }
                      )
                    );
                  },
                  SelectProps: { native: !0 },
                  variant: "outlined",
                },
                s.map(function (e) {
                  var a = e.name,
                    t = e.value;
                  return r.a.createElement("option", { value: t, key: a }, a);
                })
              )
            )
          ),
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12, sm: 4 },
            r.a.createElement(
              O.a,
              { variant: "body1", align: "center" },
              "Drink Type"
            ),
            r.a.createElement(
              "form",
              { autoComplete: "off" },
              r.a.createElement(
                ue.a,
                {
                  className: i.form,
                  id: "outlined-select-drink-type-native",
                  select: !0,
                  value: o,
                  onChange: function (e) {
                    t(
                      Object(se.a)(
                        Object(se.a)({}, a),
                        {},
                        {
                          brew: Object(se.a)(
                            Object(se.a)({}, n),
                            {},
                            { drink: parseInt(e.target.value) }
                          ),
                        }
                      )
                    );
                  },
                  SelectProps: { native: !0 },
                  variant: "outlined",
                },
                m.map(function (e) {
                  var a = e.name,
                    t = e.value;
                  return r.a.createElement("option", { value: t, key: a }, a);
                })
              )
            )
          )
        );
      };
      var Ie = function (e) {
        var a = e.coffeeEntry,
          t = e.setCoffeeEntry,
          n = a.brew,
          c = n.grind,
          l = Object(f.a)(function () {
            return { form: { width: "200px" } };
          })();
        return r.a.createElement(
          Q.a,
          { container: !0, justify: "center" },
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              O.a,
              { variant: "h6", align: "center" },
              "Brew Info"
            )
          ),
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              Q.a,
              { container: !0, align: "center", justify: "center", spacing: 2 },
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12 },
                r.a.createElement(ke, { coffeeEntry: a, setCoffeeEntry: t })
              ),
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12, sm: 4 },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Grinder"
                ),
                r.a.createElement(be, {
                  fieldName: "grinder",
                  onChange: function (e) {
                    t(
                      Object(se.a)(
                        Object(se.a)({}, a),
                        {},
                        {
                          brew: Object(se.a)(
                            Object(se.a)({}, n),
                            {},
                            {
                              grind: Object(se.a)(
                                Object(se.a)({}, c),
                                {},
                                { grinder: e }
                              ),
                            }
                          ),
                        }
                      )
                    );
                  },
                  options: pe,
                  textField: function (e) {
                    return r.a.createElement(
                      ue.a,
                      Object.assign({}, e, {
                        className: l.form,
                        id: "outlined-text-field-origin",
                        label: "Grinder",
                        variant: "outlined",
                      })
                    );
                  },
                })
              ),
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12, sm: 4 },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Grind Setting"
                ),
                r.a.createElement(
                  "form",
                  { autoComplete: "off" },
                  r.a.createElement(ue.a, {
                    className: l.form,
                    id: "outlined-basic",
                    label: "Grind Setting",
                    variant: "outlined",
                    onChange: function (e) {
                      t(
                        Object(se.a)(
                          Object(se.a)({}, a),
                          {},
                          {
                            brew: Object(se.a)(
                              Object(se.a)({}, n),
                              {},
                              {
                                grind: Object(se.a)(
                                  Object(se.a)({}, c),
                                  {},
                                  { setting: parseInt(e.target.value) }
                                ),
                              }
                            ),
                          }
                        )
                      );
                    },
                  })
                )
              ),
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12, sm: 4 },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Water"
                ),
                r.a.createElement(be, {
                  fieldName: "water",
                  onChange: function (e) {
                    t(
                      Object(se.a)(
                        Object(se.a)({}, a),
                        {},
                        {
                          brew: Object(se.a)(
                            Object(se.a)({}, n),
                            {},
                            { water: e }
                          ),
                        }
                      )
                    );
                  },
                  options: ye,
                  textField: function (e) {
                    return r.a.createElement(
                      ue.a,
                      Object.assign({}, e, {
                        className: l.form,
                        id: "outlined-text-field-origin",
                        label: "Water",
                        variant: "outlined",
                      })
                    );
                  },
                })
              ),
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12 },
                r.a.createElement(
                  Q.a,
                  { container: !0, justify: "center", spacing: 2 },
                  r.a.createElement(
                    Q.a,
                    { item: !0, xs: 4 },
                    r.a.createElement(
                      O.a,
                      { variant: "body1", align: "center" },
                      "In"
                    ),
                    r.a.createElement(
                      "form",
                      { autoComplete: "off" },
                      r.a.createElement(ue.a, {
                        className: l.formInOut,
                        id: "outlined-basic",
                        label: "In (g)",
                        variant: "outlined",
                        onChange: function (e) {
                          t(
                            Object(se.a)(
                              Object(se.a)({}, a),
                              {},
                              {
                                brew: Object(se.a)(
                                  Object(se.a)({}, n),
                                  {},
                                  { coffee_in: parseInt(e.target.value) }
                                ),
                              }
                            )
                          );
                        },
                      })
                    )
                  ),
                  r.a.createElement(
                    Q.a,
                    { item: !0, xs: 4 },
                    r.a.createElement(
                      O.a,
                      { variant: "body1", align: "center" },
                      "Out"
                    ),
                    r.a.createElement(
                      "form",
                      { autoComplete: "off" },
                      r.a.createElement(ue.a, {
                        id: "outlined-basic",
                        label: "Out (g)",
                        variant: "outlined",
                        onChange: function (e) {
                          t(
                            Object(se.a)(
                              Object(se.a)({}, a),
                              {},
                              {
                                brew: Object(se.a)(
                                  Object(se.a)({}, n),
                                  {},
                                  { out: parseInt(e.target.value) }
                                ),
                              }
                            )
                          );
                        },
                      })
                    )
                  )
                )
              )
            )
          )
        );
      };
      var De = function (e) {
        var a = e.coffeeEntry,
          t = e.setCoffeeEntry,
          n = a.rating,
          c = Object(f.a)(function () {
            return { form: { width: "100px" } };
          })();
        return r.a.createElement(
          Q.a,
          { container: !0, justify: "center" },
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(O.a, { variant: "h6", align: "center" }, "Rating")
          ),
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              Q.a,
              { container: !0, align: "center", spacing: 2 },
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12 },
                r.a.createElement(
                  "form",
                  { autoComplete: "off" },
                  r.a.createElement(
                    ue.a,
                    {
                      className: c.form,
                      id: "outlined-select-rating-native",
                      select: !0,
                      value: n,
                      onChange: function (e) {
                        t(
                          Object(se.a)(
                            Object(se.a)({}, a),
                            {},
                            { rating: parseInt(e.target.value) }
                          )
                        );
                      },
                      SelectProps: { native: !0 },
                      variant: "outlined",
                    },
                    Ce.map(function (e) {
                      var a = e.name,
                        t = e.value;
                      return r.a.createElement(
                        "option",
                        { value: t, key: a },
                        a
                      );
                    })
                  )
                )
              )
            )
          )
        );
      };
      var Se = function (e) {
        var a = e.coffeeEntry,
          t = e.setCoffeeEntry,
          n = Object(f.a)(function () {
            return { form: { width: "250px" } };
          })();
        return r.a.createElement(
          Q.a,
          { container: !0, justify: "center" },
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(O.a, { variant: "h6", align: "center" }, "Notes")
          ),
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              Q.a,
              { container: !0, align: "center", spacing: 2 },
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12 },
                r.a.createElement(ue.a, {
                  className: n.form,
                  onChange: function (e) {
                    t(
                      Object(se.a)(
                        Object(se.a)({}, a),
                        {},
                        { note: e.target.value }
                      )
                    );
                  },
                  id: "outlined-textarea",
                  label: "Notes",
                  placeholder: "Placeholder",
                  multiline: !0,
                  variant: "outlined",
                })
              )
            )
          )
        );
      };
      var Be = function () {
          var e = Object(f.a)(function (e) {
              return {
                page: { backgroundColor: "#EEEEEE", minHeight: "100vh" },
                section: { maxWidth: "800px" },
                submitButton: {
                  background: "linear-gradient(45deg, grey 30%, #DC7633 90%)",
                  color: "black",
                  "&:hover": {
                    color: "white",
                    background: "linear-gradient(45deg, #DC7633 30%, grey 90%)",
                  },
                },
              };
            }),
            a = r.a.createElement(
              E.a,
              { p: 1, display: "flex", justifyContent: "center" },
              r.a.createElement("img", {
                width: 30,
                src: k.a,
                alt: "Coffee Logo",
              })
            ),
            t = e(),
            c = Object(n.useState)(K),
            l = Object(u.a)(c, 2),
            o = l[0],
            i = l[1],
            m = [
              {
                component: r.a.createElement(de, {
                  coffeeEntry: o,
                  setCoffeeEntry: i,
                }),
                name: "General Info",
              },
              {
                component: r.a.createElement(Ne, {
                  coffeeEntry: o,
                  setCoffeeEntry: i,
                }),
                name: "Coffee Info",
              },
              {
                component: r.a.createElement(Ie, {
                  coffeeEntry: o,
                  setCoffeeEntry: i,
                }),
                name: "Brew Info",
              },
              {
                component: r.a.createElement(De, {
                  coffeeEntry: o,
                  setCoffeeEntry: i,
                }),
                name: "Rating",
              },
              {
                component: r.a.createElement(Se, {
                  coffeeEntry: o,
                  setCoffeeEntry: i,
                }),
                name: "Notes",
              },
            ];
          return r.a.createElement(
            Q.a,
            {
              container: !0,
              direction: "column",
              alignItems: "center",
              className: t.page,
            },
            r.a.createElement(
              Q.a,
              { item: !0, xs: 12 },
              r.a.createElement(
                E.a,
                { p: 4 },
                r.a.createElement(O.a, { variant: "h2" }, "New Coffee Entry")
              )
            ),
            m.map(function (e) {
              var a = e.component,
                n = e.name;
              return r.a.createElement(
                E.a,
                { p: 2, className: t.section, key: n },
                r.a.createElement(Q.a, { item: !0, xs: 12 }, a)
              );
            }),
            r.a.createElement(
              Q.a,
              { item: !0, xs: 12 },
              r.a.createElement(
                E.a,
                { p: 4 },
                r.a.createElement(
                  me.a,
                  {
                    startIcon: a,
                    endIcon: a,
                    className: t.submitButton,
                    onClick: function () {},
                  },
                  r.a.createElement(
                    O.a,
                    { variant: "body1", align: "center" },
                    "Submit"
                  )
                )
              )
            )
          );
        },
        Re = t(175),
        _e = t(180),
        Le = t(183),
        Pe = t(174),
        We = t(171);
      var Fe = function (e) {
        var a = e.dataEntry,
          t = e.setDataEntry,
          n = a.coffee,
          c = n.process_id,
          l = Object(f.a)(function () {
            return {
              form: { width: "200px" },
              submitButton: {
                background: "linear-gradient(45deg, grey 30%, #DC7633 90%)",
                color: "black",
                "&:hover": {
                  color: "white",
                  background: "linear-gradient(45deg, #DC7633 30%, grey 90%)",
                },
              },
            };
          }),
          o = r.a.createElement(
            E.a,
            { p: 1, display: "flex", justifyContent: "center" },
            r.a.createElement("img", {
              width: 30,
              src: k.a,
              alt: "Coffee Logo",
            })
          ),
          i = l();
        return r.a.createElement(
          Q.a,
          { container: !0, direction: "column", alignItems: "center" },
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              E.a,
              { p: 4 },
              r.a.createElement(O.a, { variant: "h6" }, "New Coffee")
            )
          ),
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              Q.a,
              { container: !0, align: "center", justify: "center", spacing: 2 },
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12, sm: 6 },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Name"
                ),
                r.a.createElement(
                  "form",
                  { autoComplete: "off" },
                  r.a.createElement(ue.a, {
                    className: i.form,
                    id: "outlined-basic",
                    label: "Name",
                    variant: "outlined",
                    onChange: function (e) {
                      t(
                        Object(se.a)(
                          Object(se.a)({}, a),
                          {},
                          {
                            coffee: Object(se.a)(
                              Object(se.a)({}, n),
                              {},
                              { name: e.target.value }
                            ),
                          }
                        )
                      );
                    },
                  })
                )
              ),
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12, sm: 6 },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Roaster"
                ),
                r.a.createElement(
                  "form",
                  { autoComplete: "off" },
                  r.a.createElement(ue.a, {
                    className: i.form,
                    id: "outlined-basic",
                    label: "Roaster",
                    variant: "outlined",
                    onChange: function (e) {
                      t(
                        Object(se.a)(
                          Object(se.a)({}, a),
                          {},
                          {
                            coffee: Object(se.a)(
                              Object(se.a)({}, n),
                              {},
                              { roaster_id: parseInt(e.target.value) }
                            ),
                          }
                        )
                      );
                    },
                  })
                )
              ),
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12, sm: 6 },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Origin"
                ),
                r.a.createElement(
                  "form",
                  { autoComplete: "off" },
                  r.a.createElement(ue.a, {
                    className: i.form,
                    id: "outlined-basic",
                    label: "Origin",
                    variant: "outlined",
                    onChange: function (e) {
                      t(
                        Object(se.a)(
                          Object(se.a)({}, a),
                          {},
                          {
                            coffee: Object(se.a)(
                              Object(se.a)({}, n),
                              {},
                              { origin_id: parseInt(e.target.value) }
                            ),
                          }
                        )
                      );
                    },
                  })
                )
              ),
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12, sm: 6 },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Process"
                ),
                r.a.createElement(
                  "form",
                  { autoComplete: "off" },
                  r.a.createElement(
                    ue.a,
                    {
                      className: i.form,
                      id: "outlined-select-process-native",
                      select: !0,
                      value: c,
                      onChange: function (e) {
                        t(
                          Object(se.a)(
                            Object(se.a)({}, a),
                            {},
                            {
                              coffee: Object(se.a)(
                                Object(se.a)({}, n),
                                {},
                                { process_id: parseInt(e.target.value) }
                              ),
                            }
                          )
                        );
                      },
                      SelectProps: { native: !0 },
                      variant: "outlined",
                    },
                    Oe.map(function (e) {
                      var a = e.name,
                        t = e.value;
                      return r.a.createElement(
                        "option",
                        { value: t, key: a },
                        a
                      );
                    })
                  )
                )
              )
            )
          ),
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              E.a,
              { p: 4 },
              r.a.createElement(
                me.a,
                {
                  startIcon: o,
                  endIcon: o,
                  className: i.submitButton,
                  onClick: function () {
                    console.log(n);
                  },
                },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Submit"
                )
              )
            )
          )
        );
      };
      var Ge = function (e) {
        var a = e.dataEntry,
          t = e.setDataEntry,
          n = a.origin,
          c = Object(f.a)(function () {
            return {
              form: { width: "200px" },
              submitButton: {
                background: "linear-gradient(45deg, grey 30%, #DC7633 90%)",
                color: "black",
                "&:hover": {
                  color: "white",
                  background: "linear-gradient(45deg, #DC7633 30%, grey 90%)",
                },
              },
            };
          }),
          l = r.a.createElement(
            E.a,
            { p: 1, display: "flex", justifyContent: "center" },
            r.a.createElement("img", {
              width: 30,
              src: k.a,
              alt: "Coffee Logo",
            })
          ),
          o = c();
        return r.a.createElement(
          Q.a,
          { container: !0, direction: "column", alignItems: "center" },
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              E.a,
              { p: 4 },
              r.a.createElement(O.a, { variant: "h6" }, "New Origin")
            )
          ),
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              O.a,
              { variant: "body1", align: "center" },
              "Name"
            ),
            r.a.createElement(
              "form",
              { autoComplete: "off" },
              r.a.createElement(ue.a, {
                className: o.form,
                id: "outlined-basic",
                label: "Origin Name",
                variant: "outlined",
                onChange: function (e) {
                  t(
                    Object(se.a)(
                      Object(se.a)({}, a),
                      {},
                      {
                        origin: Object(se.a)(
                          Object(se.a)({}, n),
                          {},
                          { name: e.target.value }
                        ),
                      }
                    )
                  );
                },
              })
            )
          ),
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              E.a,
              { p: 4 },
              r.a.createElement(
                me.a,
                {
                  startIcon: l,
                  endIcon: l,
                  className: o.submitButton,
                  onClick: function () {
                    console.log(n);
                  },
                },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Submit"
                )
              )
            )
          )
        );
      };
      var Te = function (e) {
        var a = e.dataEntry,
          t = e.setDataEntry,
          n = a.roaster,
          c = Object(f.a)(function () {
            return {
              form: { width: "200px" },
              submitButton: {
                background: "linear-gradient(45deg, grey 30%, #DC7633 90%)",
                color: "black",
                "&:hover": {
                  color: "white",
                  background: "linear-gradient(45deg, #DC7633 30%, grey 90%)",
                },
              },
            };
          }),
          l = r.a.createElement(
            E.a,
            { p: 1, display: "flex", justifyContent: "center" },
            r.a.createElement("img", {
              width: 30,
              src: k.a,
              alt: "Coffee Logo",
            })
          ),
          o = c();
        return r.a.createElement(
          Q.a,
          { container: !0, direction: "column", alignItems: "center" },
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              E.a,
              { p: 4 },
              r.a.createElement(O.a, { variant: "h6" }, "New Roaster")
            )
          ),
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              Q.a,
              { container: !0, align: "center", justify: "center", spacing: 2 },
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12, sm: 6 },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Name"
                ),
                r.a.createElement(
                  "form",
                  { autoComplete: "off" },
                  r.a.createElement(ue.a, {
                    className: o.form,
                    id: "outlined-basic",
                    label: "Name",
                    variant: "outlined",
                    onChange: function (e) {
                      t(
                        Object(se.a)(
                          Object(se.a)({}, a),
                          {},
                          {
                            roaster: Object(se.a)(
                              Object(se.a)({}, n),
                              {},
                              { name: e.target.value }
                            ),
                          }
                        )
                      );
                    },
                  })
                )
              ),
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12, sm: 6 },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "City"
                ),
                r.a.createElement(
                  "form",
                  { autoComplete: "off" },
                  r.a.createElement(ue.a, {
                    className: o.form,
                    id: "outlined-basic",
                    label: "City",
                    variant: "outlined",
                    onChange: function (e) {
                      t(
                        Object(se.a)(
                          Object(se.a)({}, a),
                          {},
                          {
                            roaster: Object(se.a)(
                              Object(se.a)({}, n),
                              {},
                              { city: e.target.value }
                            ),
                          }
                        )
                      );
                    },
                  })
                )
              ),
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12, sm: 6 },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "State"
                ),
                r.a.createElement(
                  "form",
                  { autoComplete: "off" },
                  r.a.createElement(ue.a, {
                    className: o.form,
                    id: "outlined-basic",
                    label: "State",
                    variant: "outlined",
                    onChange: function (e) {
                      t(
                        Object(se.a)(
                          Object(se.a)({}, a),
                          {},
                          {
                            roaster: Object(se.a)(
                              Object(se.a)({}, n),
                              {},
                              { state: e.target.value }
                            ),
                          }
                        )
                      );
                    },
                  })
                )
              ),
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12, sm: 6 },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Country"
                ),
                r.a.createElement(
                  "form",
                  { autoComplete: "off" },
                  r.a.createElement(ue.a, {
                    className: o.form,
                    id: "outlined-basic",
                    label: "Contry",
                    variant: "outlined",
                    onChange: function (e) {
                      t(
                        Object(se.a)(
                          Object(se.a)({}, a),
                          {},
                          {
                            roaster: Object(se.a)(
                              Object(se.a)({}, n),
                              {},
                              { country: e.target.value }
                            ),
                          }
                        )
                      );
                    },
                  })
                )
              ),
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12, sm: 6 },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Website"
                ),
                r.a.createElement(
                  "form",
                  { autoComplete: "off" },
                  r.a.createElement(ue.a, {
                    className: o.form,
                    id: "outlined-basic",
                    label: "Website",
                    variant: "outlined",
                    onChange: function (e) {
                      t(
                        Object(se.a)(
                          Object(se.a)({}, a),
                          {},
                          {
                            roaster: Object(se.a)(
                              Object(se.a)({}, n),
                              {},
                              { website: e.target.value }
                            ),
                          }
                        )
                      );
                    },
                  })
                )
              )
            )
          ),
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              E.a,
              { p: 4 },
              r.a.createElement(
                me.a,
                {
                  startIcon: l,
                  endIcon: l,
                  className: o.submitButton,
                  onClick: function () {
                    console.log(n);
                  },
                },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Submit"
                )
              )
            )
          )
        );
      };
      var He = function (e) {
        var a = e.dataEntry,
          t = e.setDataEntry,
          n = a.brewer,
          c = n.method_id,
          l = Object(f.a)(function () {
            return {
              form: { width: "200px" },
              submitButton: {
                background: "linear-gradient(45deg, grey 30%, #DC7633 90%)",
                color: "black",
                "&:hover": {
                  color: "white",
                  background: "linear-gradient(45deg, #DC7633 30%, grey 90%)",
                },
              },
            };
          }),
          o = r.a.createElement(
            E.a,
            { p: 1, display: "flex", justifyContent: "center" },
            r.a.createElement("img", {
              width: 30,
              src: k.a,
              alt: "Coffee Logo",
            })
          ),
          i = l();
        return r.a.createElement(
          Q.a,
          { container: !0, direction: "column", alignItems: "center" },
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              E.a,
              { p: 4 },
              r.a.createElement(O.a, { variant: "h6" }, "New Brewer")
            )
          ),
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              Q.a,
              { container: !0, align: "center", justify: "center", spacing: 2 },
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12, sm: 6 },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Name"
                ),
                r.a.createElement(
                  "form",
                  { autoComplete: "off" },
                  r.a.createElement(ue.a, {
                    className: i.form,
                    id: "outlined-basic",
                    label: "Brewer Name",
                    variant: "outlined",
                    onChange: function (e) {
                      t(
                        Object(se.a)(
                          Object(se.a)({}, a),
                          {},
                          {
                            brewer: Object(se.a)(
                              Object(se.a)({}, n),
                              {},
                              { name: e.target.value }
                            ),
                          }
                        )
                      );
                    },
                  })
                )
              ),
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12, sm: 6 },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Website"
                ),
                r.a.createElement(
                  "form",
                  { autoComplete: "off" },
                  r.a.createElement(ue.a, {
                    className: i.form,
                    id: "outlined-basic",
                    label: "Brewer Website",
                    variant: "outlined",
                    onChange: function (e) {
                      t(
                        Object(se.a)(
                          Object(se.a)({}, a),
                          {},
                          {
                            brewer: Object(se.a)(
                              Object(se.a)({}, n),
                              {},
                              { website: e.target.value }
                            ),
                          }
                        )
                      );
                    },
                  })
                )
              ),
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12, sm: 6 },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Method"
                ),
                r.a.createElement(
                  "form",
                  { autoComplete: "off" },
                  r.a.createElement(
                    ue.a,
                    {
                      className: i.form,
                      id: "outlined-select-process-native",
                      select: !0,
                      value: c,
                      onChange: function (e) {
                        t(
                          Object(se.a)(
                            Object(se.a)({}, a),
                            {},
                            {
                              brewer: Object(se.a)(
                                Object(se.a)({}, n),
                                {},
                                { method_id: parseInt(e.target.value) }
                              ),
                            }
                          )
                        );
                      },
                      SelectProps: { native: !0 },
                      variant: "outlined",
                    },
                    ge.map(function (e) {
                      var a = e.name,
                        t = e.value;
                      return r.a.createElement(
                        "option",
                        { value: t, key: a },
                        a
                      );
                    })
                  )
                )
              )
            )
          ),
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              E.a,
              { p: 4 },
              r.a.createElement(
                me.a,
                {
                  startIcon: o,
                  endIcon: o,
                  className: i.submitButton,
                  onClick: function () {
                    console.log(n);
                  },
                },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Submit"
                )
              )
            )
          )
        );
      };
      var Ve = function (e) {
        var a = e.dataEntry,
          t = e.setDataEntry,
          n = a.water,
          c = Object(f.a)(function () {
            return {
              form: { width: "200px" },
              submitButton: {
                background: "linear-gradient(45deg, grey 30%, #DC7633 90%)",
                color: "black",
                "&:hover": {
                  color: "white",
                  background: "linear-gradient(45deg, #DC7633 30%, grey 90%)",
                },
              },
            };
          }),
          l = r.a.createElement(
            E.a,
            { p: 1, display: "flex", justifyContent: "center" },
            r.a.createElement("img", {
              width: 30,
              src: k.a,
              alt: "Coffee Logo",
            })
          ),
          o = c();
        return r.a.createElement(
          Q.a,
          { container: !0, direction: "column", alignItems: "center" },
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              E.a,
              { p: 4 },
              r.a.createElement(O.a, { variant: "h6" }, "New Water")
            )
          ),
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              E.a,
              { pb: 1 },
              r.a.createElement(
                O.a,
                { variant: "body1", align: "center" },
                "Name"
              ),
              r.a.createElement(
                "form",
                { autoComplete: "off" },
                r.a.createElement(ue.a, {
                  className: o.form,
                  id: "outlined-basic",
                  label: "Water Name",
                  variant: "outlined",
                  onChange: function (e) {
                    t(
                      Object(se.a)(
                        Object(se.a)({}, a),
                        {},
                        {
                          water: Object(se.a)(
                            Object(se.a)({}, n),
                            {},
                            { name: e.target.value }
                          ),
                        }
                      )
                    );
                  },
                })
              )
            )
          ),
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              E.a,
              { pt: 1 },
              r.a.createElement(
                O.a,
                { variant: "body1", align: "center" },
                "Description"
              ),
              r.a.createElement(
                "form",
                { autoComplete: "off" },
                r.a.createElement(ue.a, {
                  className: o.form,
                  onChange: function (e) {
                    t(
                      Object(se.a)(
                        Object(se.a)({}, a),
                        {},
                        {
                          water: Object(se.a)(
                            Object(se.a)({}, n),
                            {},
                            { description: e.target.value }
                          ),
                        }
                      )
                    );
                  },
                  id: "outlined-textarea",
                  label: "Short description",
                  placeholder: "Placeholder",
                  multiline: !0,
                  variant: "outlined",
                })
              )
            )
          ),
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              E.a,
              { p: 4 },
              r.a.createElement(
                me.a,
                {
                  startIcon: l,
                  endIcon: l,
                  className: o.submitButton,
                  onClick: function () {
                    console.log(n);
                  },
                },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Submit"
                )
              )
            )
          )
        );
      };
      var Me = function (e) {
        e.currentGrinders;
        var a = e.dataEntry,
          t = e.setDataEntry,
          n = a.grinder,
          c = Object(f.a)(function () {
            return {
              form: { width: "200px" },
              submitButton: {
                background: "linear-gradient(45deg, grey 30%, #DC7633 90%)",
                color: "black",
                "&:hover": {
                  color: "white",
                  background: "linear-gradient(45deg, #DC7633 30%, grey 90%)",
                },
              },
            };
          }),
          l = r.a.createElement(
            E.a,
            { p: 1, display: "flex", justifyContent: "center" },
            r.a.createElement("img", {
              width: 30,
              src: k.a,
              alt: "Coffee Logo",
            })
          ),
          o = c();
        return r.a.createElement(
          Q.a,
          { container: !0, direction: "column", alignItems: "center" },
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              E.a,
              { p: 4 },
              r.a.createElement(O.a, { variant: "h6" }, "New Brewer")
            )
          ),
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              Q.a,
              { container: !0, align: "center", justify: "center", spacing: 2 },
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12, sm: 6 },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Name"
                ),
                r.a.createElement(
                  "form",
                  { autoComplete: "off" },
                  r.a.createElement(ue.a, {
                    className: o.form,
                    id: "outlined-basic",
                    label: "Grinder Name",
                    variant: "outlined",
                    onChange: function (e) {
                      t(
                        Object(se.a)(
                          Object(se.a)({}, a),
                          {},
                          {
                            grinder: Object(se.a)(
                              Object(se.a)({}, n),
                              {},
                              { name: e.target.value }
                            ),
                          }
                        )
                      );
                    },
                  })
                )
              ),
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12, sm: 6 },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Website"
                ),
                r.a.createElement(
                  "form",
                  { autoComplete: "off" },
                  r.a.createElement(ue.a, {
                    className: o.form,
                    id: "outlined-basic",
                    label: "Grinder Website",
                    variant: "outlined",
                    onChange: function (e) {
                      t(
                        Object(se.a)(
                          Object(se.a)({}, a),
                          {},
                          {
                            brewer: Object(se.a)(
                              Object(se.a)({}, n),
                              {},
                              { website: e.target.value }
                            ),
                          }
                        )
                      );
                    },
                  })
                )
              )
            )
          ),
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              E.a,
              { p: 4 },
              r.a.createElement(
                me.a,
                {
                  startIcon: l,
                  endIcon: l,
                  className: o.submitButton,
                  onClick: function () {
                    console.log(n);
                  },
                },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Submit"
                )
              )
            )
          )
        );
      };
      var Ae = function (e) {
        var a = e.dataEntry,
          t = e.setDataEntry,
          n = a.drink,
          c = n.method_id,
          l = Object(f.a)(function () {
            return {
              form: { width: "200px" },
              submitButton: {
                background: "linear-gradient(45deg, grey 30%, #DC7633 90%)",
                color: "black",
                "&:hover": {
                  color: "white",
                  background: "linear-gradient(45deg, #DC7633 30%, grey 90%)",
                },
              },
            };
          }),
          o = r.a.createElement(
            E.a,
            { p: 1, display: "flex", justifyContent: "center" },
            r.a.createElement("img", {
              width: 30,
              src: k.a,
              alt: "Coffee Logo",
            })
          ),
          i = l();
        return r.a.createElement(
          Q.a,
          { container: !0, direction: "column", alignItems: "center" },
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              E.a,
              { p: 4 },
              r.a.createElement(O.a, { variant: "h6" }, "New Brewer")
            )
          ),
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              Q.a,
              { container: !0, align: "center", justify: "center", spacing: 2 },
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12, sm: 6 },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Name"
                ),
                r.a.createElement(
                  "form",
                  { autoComplete: "off" },
                  r.a.createElement(ue.a, {
                    className: i.form,
                    id: "outlined-basic",
                    label: "Drink Name",
                    variant: "outlined",
                    onChange: function (e) {
                      t(
                        Object(se.a)(
                          Object(se.a)({}, a),
                          {},
                          {
                            drink: Object(se.a)(
                              Object(se.a)({}, n),
                              {},
                              { name: e.target.value }
                            ),
                          }
                        )
                      );
                    },
                  })
                )
              ),
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12, sm: 6 },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Method"
                ),
                r.a.createElement(
                  "form",
                  { autoComplete: "off" },
                  r.a.createElement(
                    ue.a,
                    {
                      className: i.form,
                      id: "outlined-select-method-native",
                      select: !0,
                      value: c,
                      onChange: function (e) {
                        t(
                          Object(se.a)(
                            Object(se.a)({}, a),
                            {},
                            {
                              drink: Object(se.a)(
                                Object(se.a)({}, n),
                                {},
                                { method_id: parseInt(e.target.value) }
                              ),
                            }
                          )
                        );
                      },
                      SelectProps: { native: !0 },
                      variant: "outlined",
                    },
                    ge.map(function (e) {
                      var a = e.name,
                        t = e.value;
                      return r.a.createElement(
                        "option",
                        { value: t, key: a },
                        a
                      );
                    })
                  )
                )
              )
            )
          ),
          r.a.createElement(
            Q.a,
            { item: !0, xs: 12 },
            r.a.createElement(
              E.a,
              { p: 4 },
              r.a.createElement(
                me.a,
                {
                  startIcon: o,
                  endIcon: o,
                  className: i.submitButton,
                  onClick: function () {
                    console.log(n);
                  },
                },
                r.a.createElement(
                  O.a,
                  { variant: "body1", align: "center" },
                  "Submit"
                )
              )
            )
          )
        );
      };
      var qe = function () {
          var e = Object(n.useState)(M),
            a = Object(u.a)(e, 2),
            t = a[0],
            c = a[1],
            l = Object(n.useState)(V),
            o = Object(u.a)(l, 2),
            i = o[0],
            m = o[1];
          Object(n.useEffect)(function () {
            fetch("/graphql", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                query:
                  "\n  query {\n    brewers {\n      brewer_id\n      name\n      website\n      method_id\n    }\n    coffees {\n      coffee_id\n      name\n      roaster {\n        name\n        roaster_id\n      }\n      origin {\n        origin_id\n        name\n      }\n      process {\n        process_id\n        name\n      }\n    }\n    drinks {\n      drink_id\n      name\n      method_id\n    }\n    grinders {\n      grinder_id\n      name\n      website\n    }\n    methods {\n      method_id\n      name\n    }\n    origins {\n      origin_id\n      name\n    }\n    processes {\n      process_id\n      name\n    }\n    roasters {\n      roaster_id\n      name\n      city\n      state\n      country\n      website\n    }\n    waters {\n      water_id\n      name\n      description\n    }\n  }\n",
              }),
            })
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                var a = e.data;
                console.log(a), a && m(a);
              });
          }, []);
          var s = t.dataOption,
            d = i.brewers,
            f = i.coffees,
            b = i.drinks,
            g = i.grinders,
            v = i.origins,
            p = i.roasters,
            h = i.waters;
          return r.a.createElement(
            E.a,
            null,
            r.a.createElement(
              E.a,
              { py: 4 },
              r.a.createElement(
                Q.a,
                { container: !0, direction: "column", alignItems: "center" },
                r.a.createElement(
                  Q.a,
                  { item: !0, xs: 12 },
                  r.a.createElement(
                    E.a,
                    { p: 4 },
                    r.a.createElement(O.a, { variant: "h4" }, "Enter Data")
                  )
                ),
                r.a.createElement(
                  Q.a,
                  { item: !0, xs: 12 },
                  r.a.createElement(
                    We.a,
                    { component: "fieldset" },
                    r.a.createElement(
                      Le.a,
                      {
                        row: !0,
                        "aria-label": "dataOptions",
                        name: "dataOptions",
                        value: s,
                        onChange: function (e) {
                          c(
                            Object(se.a)(
                              Object(se.a)({}, t),
                              {},
                              { dataOption: e.target.value }
                            )
                          );
                        },
                      },
                      r.a.createElement(
                        Q.a,
                        {
                          container: !0,
                          align: "center",
                          justify: "center",
                          spacing: 2,
                        },
                        r.a.createElement(
                          Q.a,
                          { item: !0, xs: 12 },
                          r.a.createElement(Pe.a, {
                            value: "ORIGIN",
                            control: r.a.createElement(_e.a, null),
                            label: "Origin",
                            labelPlacement: "bottom",
                          }),
                          r.a.createElement(Pe.a, {
                            value: "ROASTER",
                            control: r.a.createElement(_e.a, null),
                            label: "Roaster",
                            labelPlacement: "bottom",
                          }),
                          r.a.createElement(Pe.a, {
                            value: "COFFEE",
                            control: r.a.createElement(_e.a, null),
                            label: "Coffee",
                            labelPlacement: "bottom",
                          })
                        ),
                        r.a.createElement(
                          Q.a,
                          { item: !0, xs: 12 },
                          r.a.createElement(Pe.a, {
                            value: "BREWER",
                            control: r.a.createElement(_e.a, null),
                            label: "Brewer",
                            labelPlacement: "bottom",
                          }),
                          r.a.createElement(Pe.a, {
                            value: "WATER",
                            control: r.a.createElement(_e.a, null),
                            label: "Water",
                            labelPlacement: "bottom",
                          }),
                          r.a.createElement(Pe.a, {
                            value: "GRINDER",
                            control: r.a.createElement(_e.a, null),
                            label: "Grinder",
                            labelPlacement: "bottom",
                          }),
                          r.a.createElement(Pe.a, {
                            value: "DRINK",
                            control: r.a.createElement(_e.a, null),
                            label: "Drink",
                            labelPlacement: "bottom",
                          })
                        )
                      )
                    )
                  )
                )
              )
            ),
            r.a.createElement(Re.a, { variant: "middle" }),
            r.a.createElement(
              Q.a,
              null,
              r.a.createElement(
                Q.a,
                { item: !0, xs: 12 },
                (function () {
                  switch (s) {
                    case "BREWER":
                      return r.a.createElement(He, {
                        currentBrewers: d,
                        dataEntry: t,
                        setDataEntry: c,
                      });
                    case "COFFEE":
                      return r.a.createElement(Fe, {
                        currentCoffees: f,
                        dataEntry: t,
                        setDataEntry: c,
                      });
                    case "DRINK":
                      return r.a.createElement(Ae, {
                        currentDrinks: b,
                        dataEntry: t,
                        setDataEntry: c,
                      });
                    case "GRINDER":
                      return r.a.createElement(Me, {
                        currentGrinders: g,
                        dataEntry: t,
                        setDataEntry: c,
                      });
                    case "ORIGIN":
                      return r.a.createElement(Ge, {
                        currentOrigins: v,
                        dataEntry: t,
                        setDataEntry: c,
                      });
                    case "ROASTER":
                      return r.a.createElement(Te, {
                        currentRoasters: p,
                        dataEntry: t,
                        setDataEntry: c,
                      });
                    case "WATER":
                      return r.a.createElement(Ve, {
                        currentWaters: h,
                        dataEntry: t,
                        setDataEntry: c,
                      });
                    default:
                      return r.a.createElement("div", null);
                  }
                })()
              )
            )
          );
        },
        ze = Object(i.a)();
      var Je = function () {
        var e = Object(m.a)({
          typography: { fontFamily: ["Roboto Condensed"].join(",") },
        });
        return (
          (e.typography.h2 = {
            fontSize: "3.75rem",
            "@media (max-width:750px)": {
              fontSize: "1.5rem",
              fontWeight: "400",
            },
            fontWeight: "300",
            lineHeight: "1.2",
            fontFamily: ["Roboto Condensed"].join(","),
            letterSpacing: "-0.00833em",
          }),
          r.a.createElement(
            o.b,
            { history: ze },
            r.a.createElement(
              s.a,
              { theme: e },
              r.a.createElement($, null),
              r.a.createElement(
                o.c,
                null,
                r.a.createElement(
                  o.a,
                  { exact: !0, path: "/coffee" },
                  r.a.createElement(ce, null)
                ),
                r.a.createElement(
                  o.a,
                  { exact: !0, path: "/data" },
                  r.a.createElement(ie, null)
                ),
                r.a.createElement(
                  o.a,
                  { exact: !0, path: "/equipment" },
                  r.a.createElement(le, null)
                ),
                r.a.createElement(
                  o.a,
                  { exact: !0, path: "/blog" },
                  r.a.createElement(re, null)
                ),
                r.a.createElement(
                  o.a,
                  { exact: !0, path: "/data/coffee_entry" },
                  r.a.createElement(Be, null)
                ),
                r.a.createElement(
                  o.a,
                  { exact: !0, path: "/data/entry" },
                  r.a.createElement(qe, null)
                ),
                r.a.createElement(
                  o.a,
                  { path: "/" },
                  r.a.createElement(ee, null)
                )
              )
            )
          )
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      l.a.render(r.a.createElement(Je, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
    12: function (e, a, t) {
      e.exports = t.p + "static/media/coffee-icon.cb024ff0.png";
    },
  },
  [[104, 1, 2]],
]);
//# sourceMappingURL=main.8c2f0d79.chunk.js.map
