import sValue from './helpers/some.js';

export default class Bar {
    constructor(attrs) {
        this.counter = 0;
        this.a = attrs.a;
        this.b = attrs.b || sValue;
        this.foo = [ { x: 1 }, { x: 2 } ];
    }
    get z() {
        return this.b + 1;
    }
    get c() {
        return this.a + this.b;
    }
    onClick() {
        console.log('clicked');
        this.counter += 1;
        this.foo = [ { x: this.counter }, this.foo[1], { x: 3 } ];
    }

    attach(domNode) {
        console.log('attaching ', domNode);
    }

    ditach(domNode) {
        console.log('detaching ', domNode);
    }

    // after this line, all code is generated by the build process
    // this is a generated method based on the template
    render({f,h,t,i,m}) {
        const iter1 = (item) => {
            return h('li', {
                class: item.x
            }, ['iterator', this.z, item.x]);
        };
        return h('button', {
            name: this.a,
            onClick: m(0, () => this.onClick(...arguments)),
        }, [
            h('span', {}, [
                t(this.b),
            ]),
            this.a ? h('span', {}, ['something']) : f(),
            h('ul', {}, [
                m(1, h('li', {}, ['first'])),
                i(this.foo, iter1),
                m(2, h('li', {}, ['last'])),
            ])
        ]);
    }
}

// <Bar a.bind="x" />
