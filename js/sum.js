(function (window, document) {

    let CountSum = function () {
        this._init();
    };
    CountSum.prototype._init = function () {
        this._Element();
        this._operation([this._ShoupanElm, this._ChenbenElm, this._RangeElm, this._printf1, this._printf2]);
        this._rangeshow(this._Range_val, this._RangeElm);
    };
    CountSum.prototype._rangeshow = function (range_val, RangeElm) {
        range_val.innerText = RangeElm.value;
    };
    CountSum.prototype._Element = function () {
        const ShoupanElm = document.getElementById('start_num');
        const ChenbenElm = document.getElementById('cb_num');
        const RangeElm = document.getElementById('start_bfb');
        const printf1 = document.getElementById('printf1');
        const printf2 = document.getElementById('printf2');
        const range_val = document.getElementById('range_val');
        this._printf1 = printf1;
        this._printf2 = printf2;
        this._Range_val = range_val;
        this._ShoupanElm = ShoupanElm;
        this._ChenbenElm = ChenbenElm;
        this._RangeElm = RangeElm;
    };
    CountSum.prototype._operation = function ([ShoupanElm, ChenbenElm, RangeElm, printf1, printf2]) {

        const Shoupannum = ShoupanElm.value;
        const RangeElmnum = RangeElm.value;
        const Chenbennum = ChenbenElm.value;
        const a3 = Shoupannum / 100;//百分比
        this._titleheader(printf1, printf2);
        let Arr = [];
        for (let i = 1; i <= RangeElmnum; i++) {
            Arr.push((a3 * i).toFixed(5).substr(0, 6));
            // console.log( (a3*i).toFixed(5).substr(0,6));
        }
        for (let i = 0; i < RangeElmnum; i++) {
            let down_price = (Shoupannum - Arr[i]).toFixed(2);
            let up_price = ((eval((Arr[i])) + eval(Shoupannum)).toFixed(2));
            let chenben_price = (Math.round(((eval(Math.floor(((eval(Chenbennum) - eval(down_price)) / 2) * 1000) / 1000) + eval(down_price))) * 1000) / 1000).toFixed(2);
            let xianshinum = i + 1;
            // console.log(`down${down_price}up${up_price}CB${chenben_price}NUM${xianshinum}`);
            this._show(down_price, up_price, chenben_price, xianshinum, printf1, printf2);

        }

    };
    CountSum.prototype._titleheader = function (printf1, printf2) {
        printf1.innerHTML = "";
        printf2.innerHTML = "";
        printf1.innerHTML = `<div class="content_c"> <span class="c_span1">下跌价格</span> <span class="c_span2_1">百分比</span><span class="c_span2">庄家成本价</span><span class="c_span3">上升价格</span> <span c_span2>百分比</span> </div>`;
        printf2.innerHTML = `<div class="content_c"> <span class="c_span1">下跌价格</span> <span class="c_span2_1">百分比</span><span class="c_span2">庄家成本价</span><span class="c_span3">上升价格</span> <span c_span2>百分比</span> </div>`;

    };
    CountSum.prototype._show = function (down_price, up_price, chenben_price, xianshinum, printf1, printf2) {

        let nodediv = document.createElement('div');
        let htmllist = `<div class="content_c"> <span class="c_span1">${down_price}</span> <span class="c_span2_1" >- ${xianshinum} %</span><span class="c_span2">${chenben_price}</span><span class="c_span3">${up_price}</span><span class="c_span2" >+ ${chenben_price}%</span> </div>`;
        printf1.innerHTML += htmllist;
        printf2.innerHTML += htmllist;


        // $("#printf1").append(' <div class="content_c"> <span class="c_span1">' + down_price + '</span> <span class="c_span2_1" >-' + xianshinum + '%</span><span class="c_span2">' + chenben_price + '</span><span class="c_span3">' + up_price + '</span> <span class="c_span2" >+' + chenben_price + '%</span> </div>')

    };
    return window.$CountSum = CountSum
})(window, document);
