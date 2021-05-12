;(self.webpackChunkdemo = self.webpackChunkdemo || []).push([
  [368],
  {
    6901: (e, t, n) => {
      'use strict'
      n.r(t), n.d(t, { default: () => g })
      n(4077)
      var r = n(903),
        a = (n(8582), n(8222)),
        o = (n(6090), n(3944)),
        u = (n(4868), n(5779)),
        i = n(7294),
        c = (n(2349), n(4210)),
        s = n(9669),
        l = n.n(s)
      n(129)
      function f(e, t, n, r, a, o, u) {
        try {
          var i = e[o](u),
            c = i.value
        } catch (e) {
          return void n(e)
        }
        i.done ? t(c) : Promise.resolve(c).then(r, a)
      }
      l().CancelToken.source(), new Map()
      var m = l().create({
        timeout: 5e3,
        baseURL: 'http://localhost:8080',
        headers: { 'Content-Type': 'application/json' }
      })
      m.interceptors.request.use(
        function (e) {
          return e
        },
        function (e) {
          return Promise.reject(e)
        }
      ),
        m.interceptors.response.use(
          function (e) {
            return e.data
          },
          function (e) {
            return e && e.response, Promise.reject(e)
          }
        )
      const p = (function () {
        var e,
          t =
            ((e = regeneratorRuntime.mark(function e() {
              var t,
                n,
                r,
                a,
                o,
                u,
                i = arguments
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = i.length > 0 && void 0 !== i[0] ? i[0] : ''),
                        (n = i.length > 1 && void 0 !== i[1] ? i[1] : {}),
                        (r = i.length > 2 && void 0 !== i[2] ? i[2] : {}),
                        (a = r.method),
                        (o = void 0 === a ? 'post' : a),
                        (e.next = 6),
                        m({ url: t, method: o, data: n }).catch(function (e) {
                          l().isCancel(e) && c.ZP.info('重复提交相同信息:' + e)
                        })
                      )
                    case 6:
                      return (u = e.sent), e.abrupt('return', u)
                    case 8:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })),
            function () {
              var t = this,
                n = arguments
              return new Promise(function (r, a) {
                var o = e.apply(t, n)
                function u(e) {
                  f(o, r, a, u, i, 'next', e)
                }
                function i(e) {
                  f(o, r, a, u, i, 'throw', e)
                }
                u(void 0)
              })
            })
        return function () {
          return t.apply(this, arguments)
        }
      })()
      function d(e, t, n, r, a, o, u) {
        try {
          var i = e[o](u),
            c = i.value
        } catch (e) {
          return void n(e)
        }
        i.done ? t(c) : Promise.resolve(c).then(r, a)
      }
      function h(e) {
        return function () {
          var t = this,
            n = arguments
          return new Promise(function (r, a) {
            var o = e.apply(t, n)
            function u(e) {
              d(o, r, a, u, i, 'next', e)
            }
            function i(e) {
              d(o, r, a, u, i, 'throw', e)
            }
            u(void 0)
          })
        }
      }
      function v(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, t) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e))) return
            var n = [],
              r = !0,
              a = !1,
              o = void 0
            try {
              for (
                var u, i = e[Symbol.iterator]();
                !(r = (u = i.next()).done) && (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              ;(a = !0), (o = e)
            } finally {
              try {
                r || null == i.return || i.return()
              } finally {
                if (a) throw o
              }
            }
            return n
          })(e, t) ||
          (function (e, t) {
            if (!e) return
            if ('string' == typeof e) return y(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            'Object' === n && e.constructor && (n = e.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(e)
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return y(e, t)
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function y(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      const g = function (e) {
        var t = v((0, i.useState)(), 2),
          n = t[0],
          c =
            (t[1],
            (function () {
              var e = h(
                regeneratorRuntime.mark(function e(t) {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), p('/api/add', t)
                        case 2:
                          e.sent
                        case 4:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()),
          s = (function () {
            var e = h(
              regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), p('/api/get')
                      case 2:
                        e.sent
                      case 4:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })(),
          l = (function () {
            var e = h(
              regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), p('/api/find')
                      case 2:
                        e.sent
                      case 4:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })()
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            o.Z,
            { onFinish: c },
            i.createElement(o.Z.Item, { name: 'name', label: 'name' }, i.createElement(u.Z, null)),
            i.createElement(o.Z.Item, { name: 'age', label: 'age' }, i.createElement(u.Z, null)),
            i.createElement(o.Z.Item, null, i.createElement(a.Z, { htmlType: 'submit' }, 'submit'))
          ),
          i.createElement(a.Z, { onClick: s }, 'get'),
          i.createElement(a.Z, { onClick: l }, 'find'),
          i.createElement(a.Z, null, null == n ? void 0 : n.nickName),
          i.createElement(r.Z, {
            columns: [{ title: '序号', dataIndex: 'key' }],
            dataSource: [{ key: 0, name: 'Jack' }]
          })
        )
      }
    },
    4654: () => {}
  }
])
