;(self.webpackChunkdemo = self.webpackChunkdemo || []).push([
  [892],
  {
    7892: (e, t, n) => {
      'use strict'
      n.r(t), n.d(t, { default: () => l }), n(8582)
      var o = n(8222),
        c = (n(4077), n(9597)),
        a = n(7294)
      const l = function (e) {
        return (
          console.log('About', e),
          a.createElement(
            a.Fragment,
            null,
            a.createElement(c.Z, {
              columns: [{ title: '序号', dataIndex: 'key' }],
              dataSource: [{ key: 0, name: 'Jack' }]
            }),
            a.createElement(
              o.Z,
              {
                onClick: function () {
                  e.history.go(-1)
                }
              },
              '返回'
            ),
            a.createElement(
              o.Z,
              {
                onClick: function () {
                  e.history.push('/')
                }
              },
              'Home'
            )
          )
        )
      }
    }
  }
])
//# sourceMappingURL=892.3f02b0116b.js.map
