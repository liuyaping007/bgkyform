<template>
  <div _tmplitem="52" class="dv-full-screen-container" :style="css">
    <div
      _tmplitem="52"
      style="position: absolute;--animation-linear:1;--animation-type:ease;width:1920px;height:1080px; background-image: url(http://f.kyform.cn/echartdb/bigimg/2025-06-18/32c19b14-cac4-433a-8f84-34c7f6303802.png) !important;background-size:100% 100%;    background-repeat:no-repeat;"
      class="div-full-screen"
    >
      <div
        _tmplitem="52"
        v-if="readDataPermission.num2kkmy"
        class="bigitem num2kkmy "
        style="top: 126px; left: 707px;position: absolute; width: 498px; height: 56px; transform: translate(0px, 0px); z-index: 1024;pointer-events: auto;  "
      >
        <div
          _tmplitem="52"
          class="itemcontent "
          style="--animation-linear:1;--animation-type:ease;opacity:1;line-height:40px ;font-size:24px ;color:rgb(255, 255, 255) ;text-align:left;border-radius:0px;border-width:0px ;border-style:solid ;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
        >
          <numscroll2
            _tmplitem="1"
            :val="fromData.num2kkmy"
            w="498"
            :len="8"
            :h="56"
            backgroundcolor="rgba(5, 129, 32, 0.72)"
            bordercolor=""
            fontcolor="rgb(255, 255, 255)"
          ></numscroll2>
        </div>
      </div>
      <div
        _tmplitem="52"
        v-if="readDataPermission.scrollingtablef015"
        class="bigitem scrollingtablef015 "
        style="top: 785px; left: 1350px;position: absolute; width: 561px; height: 264px; transform: translate(0px, 0px); z-index: 1023;pointer-events: auto;  "
      >
        <div
          _tmplitem="52"
          class="itemcontent "
          style="--animation-linear:1;--animation-type:ease;opacity:1;height:190px;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
        >
          <scrollingtable
            _tmplitem="2"
            :header-row-style="{ 'font-size': '12px', 'line-height': '40px' }"
            :row-style="{ 'font-size': '12px', 'line-height': '40px' }"
            :isheadshow="true"
            :showordernum="false"
            :scrollnum="3"
            tablebackgroundcolor=""
            tableheadcolor=""
            tablerowhovercolor=""
            tablerowcolor=""
            tablerowdoublecolor=""
            tablebordercolor=""
            tableheadfontcolor="rgb(14, 94, 89)"
            tablehoverfontcolor="rgb(12, 88, 79)"
            tablerowfontcolor="rgb(12, 88, 79)"
            :scrollheight="1"
            :scrolltime="25"
            :elcolumn="controlData.scrollingtablef015"
            :tabledata="fromData.scrollingtablef015"
            :h="264"
            :w="561"
          >
          </scrollingtable>
        </div>
      </div>
      <div
        _tmplitem="52"
        v-if="readDataPermission.imgz0ul"
        class="bigitem imgz0ul "
        style="top: 783px; left: 1344px;position: absolute; width: 562px; height: 45px; transform: translate(0px, 0px); z-index: 1022;pointer-events: auto;  "
      >
        <div
          _tmplitem="52"
          class="itemcontent "
          style="--animation-linear:1;--animation-type:ease;opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
        >
          <bigimg
            _tmplitem="3"
            url="http://f.kyform.cn/echartdb/bigimg/2025-06-18/0ab96fee-2162-4178-9ed6-bb80479115be.png"
            w="562"
            h="45"
            rotatetype=""
            rotatetime=""
          ></bigimg>
        </div>
      </div>
      <div
        _tmplitem="52"
        v-if="readDataPermission.charttoolb9p3"
        class="bigitem charttoolb9p3 "
        style="top: 489px; left: 1380px;position: absolute; width: 500px; height: 238px; transform: translate(0px, 0px); z-index: 1021;pointer-events: auto;  "
      >
        <div
          _tmplitem="52"
          class="itemcontent "
          style="--animation-linear:1;--animation-type:ease;opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
        >
          <baseechart
            _tmplitem="4"
            ref="charttoolb9p3"
            :val="fromData.charttoolb9p3"
            mapcity=""
            mapcode=""
            orienttype="horizontal"
            :echartroll="false"
            :maxechartrollnum="8"
            :echartrolltime="2"
            :configechart="controlData.charttoolb9p3"
            :w="500"
            :h="238"
            echartcode="widgetLinechart"
          ></baseechart>
        </div>
      </div>
      <div
        _tmplitem="52"
        v-if="readDataPermission.charttool7any"
        class="bigitem charttool7any "
        style="top: 175px; left: 1373px;position: absolute; width: 505px; height: 240px; transform: translate(0px, 0px); z-index: 1020;pointer-events: auto;  "
      >
        <div
          _tmplitem="52"
          class="itemcontent "
          style="--animation-linear:1;--animation-type:ease;opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
        >
          <baseechart
            _tmplitem="5"
            ref="charttool7any"
            :val="fromData.charttool7any"
            mapcity=""
            mapcode=""
            orienttype="horizontal"
            :echartroll="false"
            :maxechartrollnum="8"
            :echartrolltime="2"
            :configechart="controlData.charttool7any"
            :w="505"
            :h="240"
            echartcode="widgetBarchart"
          ></baseechart>
        </div>
      </div>
      <div
        _tmplitem="52"
        v-if="readDataPermission.charttoolcrk2"
        class="bigitem charttoolcrk2 "
        style="top: 766px; left: 22px;position: absolute; width: 484px; height: 260px; transform: translate(0px, 0px); z-index: 1019;pointer-events: auto;  "
      >
        <div
          _tmplitem="52"
          class="itemcontent "
          style="--animation-linear:1;--animation-type:ease;opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
        >
          <baseechart
            _tmplitem="6"
            ref="charttoolcrk2"
            :val="fromData.charttoolcrk2"
            mapcity=""
            mapcode=""
            orienttype="horizontal"
            :echartroll="false"
            :maxechartrollnum="8"
            :echartrolltime="2"
            :configechart="controlData.charttoolcrk2"
            :w="484"
            :h="260"
            echartcode="widgetBarStackMoreShow"
          ></baseechart>
        </div>
      </div>
      <div
        _tmplitem="52"
        v-if="readDataPermission.charttool980y"
        class="bigitem charttool980y "
        style="top: 464px; left: 16px;position: absolute; width: 480px; height: 240px; transform: translate(0px, 0px); z-index: 1018;pointer-events: auto;  "
      >
        <div
          _tmplitem="52"
          class="itemcontent "
          style="--animation-linear:1;--animation-type:ease;opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
        >
          <baseechart
            _tmplitem="7"
            ref="charttool980y"
            :val="fromData.charttool980y"
            mapcity=""
            mapcode=""
            orienttype="horizontal"
            :echartroll="false"
            :maxechartrollnum="8"
            :echartrolltime="2"
            :configechart="controlData.charttool980y"
            :w="480"
            :h="240"
            echartcode="widgetPiechart"
          ></baseechart>
        </div>
      </div>
      <div
        _tmplitem="52"
        v-if="readDataPermission.num0a4m"
        class="bigitem num0a4m "
        style="top: 358px; left: 284px;position: absolute; width: 174px; height: 44px; transform: translate(0px, 0px); z-index: 1017;pointer-events: auto;  "
      >
        <div
          _tmplitem="52"
          class="itemcontent "
          style="--animation-linear:1;--animation-type:ease;opacity:1;line-height:40px ;font-size:16px ;color:rgba(3, 110, 104, 1) ;text-align:left;border-radius:0px;border-width:0px ;border-style:solid ;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
        >
          <digitalflop
            _tmplitem="8"
            ref="num0a4m"
            :num="fromData.num0a4m"
            content="收益总计：{nt}/万元"
            :w="174"
            :h="44"
            :len="0"
            cssstyle="--animation-linear:1;--animation-type:ease;opacity:1;line-height:40px ;font-size:16px ;color:rgba(3, 110, 104, 1) ;text-align:left;border-radius:0px;border-width:0px ;border-style:solid ;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
          ></digitalflop>
        </div>
      </div>
      <div
        _tmplitem="52"
        v-if="readDataPermission.numo3p3"
        class="bigitem numo3p3 "
        style="top: 355px; left: 20px;position: absolute; width: 174px; height: 44px; transform: translate(0px, 0px); z-index: 1016;pointer-events: auto;  "
      >
        <div
          _tmplitem="52"
          class="itemcontent "
          style="--animation-linear:1;--animation-type:ease;opacity:1;line-height:40px ;font-size:16px ;color:rgba(3, 110, 104, 1) ;text-align:left;border-radius:0px;border-width:0px ;border-style:solid ;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
        >
          <digitalflop
            _tmplitem="9"
            ref="numo3p3"
            :num="fromData.numo3p3"
            content="收益总计：{nt}/万元"
            :w="174"
            :h="44"
            :len="0"
            cssstyle="--animation-linear:1;--animation-type:ease;opacity:1;line-height:40px ;font-size:16px ;color:rgba(3, 110, 104, 1) ;text-align:left;border-radius:0px;border-width:0px ;border-style:solid ;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
          ></digitalflop>
        </div>
      </div>
      <div
        _tmplitem="52"
        v-if="readDataPermission.numqyvd"
        class="bigitem numqyvd "
        style="top: 290px; left: 282px;position: absolute; width: 174px; height: 24px; transform: translate(0px, 0px); z-index: 1015;pointer-events: auto;  "
      >
        <div
          _tmplitem="52"
          class="itemcontent "
          style="--animation-linear:1;--animation-type:ease;opacity:1;line-height:40px ;font-size:16px ;color:rgba(3, 110, 104, 1) ;text-align:left;border-radius:0px;border-width:0px ;border-style:solid ;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
        >
          <digitalflop
            _tmplitem="10"
            ref="numqyvd"
            :num="fromData.numqyvd"
            content="收益总计：{nt}/万元"
            :w="174"
            :h="24"
            :len="0"
            cssstyle="--animation-linear:1;--animation-type:ease;opacity:1;line-height:40px ;font-size:16px ;color:rgba(3, 110, 104, 1) ;text-align:left;border-radius:0px;border-width:0px ;border-style:solid ;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
          ></digitalflop>
        </div>
      </div>
      <div
        _tmplitem="52"
        v-if="readDataPermission.num04nv"
        class="bigitem num04nv "
        style="top: 292px; left: 24px;position: absolute; width: 174px; height: 44px; transform: translate(0px, 0px); z-index: 1014;pointer-events: auto;  "
      >
        <div
          _tmplitem="52"
          class="itemcontent "
          style="--animation-linear:1;--animation-type:ease;opacity:1;line-height:40px ;font-size:16px ;color:rgba(3, 110, 104, 1) ;text-align:left;border-radius:0px;border-width:0px ;border-style:solid ;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
        >
          <digitalflop
            _tmplitem="11"
            ref="num04nv"
            :num="fromData.num04nv"
            content="收益总计：{nt}/万元"
            :w="174"
            :h="44"
            :len="0"
            cssstyle="--animation-linear:1;--animation-type:ease;opacity:1;line-height:40px ;font-size:16px ;color:rgba(3, 110, 104, 1) ;text-align:left;border-radius:0px;border-width:0px ;border-style:solid ;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
          ></digitalflop>
        </div>
      </div>
      <div
        _tmplitem="52"
        v-if="readDataPermission.img0fpq"
        class="bigitem img0fpq "
        style="top: 345px; left: 9px;position: absolute; width: 479px; height: 43px; transform: translate(0px, 0px); z-index: 1013;pointer-events: auto;  "
      >
        <div
          _tmplitem="52"
          class="itemcontent "
          style="--animation-linear:1;--animation-type:ease;opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
        >
          <bigimg
            _tmplitem="12"
            url="http://f.kyform.cn/echartdb/bigimg/2025-06-18/5e7b0af1-a854-4631-bec9-85bbafd27ce8.png"
            w="479"
            h="43"
            rotatetype=""
            rotatetime=""
          ></bigimg>
        </div>
      </div>
      <div
        _tmplitem="52"
        v-if="readDataPermission.imgm852"
        class="bigitem imgm852 "
        style="top: 282px; left: 6px;position: absolute; width: 479px; height: 43px; transform: translate(0px, 0px); z-index: 1012;pointer-events: auto;  "
      >
        <div
          _tmplitem="52"
          class="itemcontent "
          style="--animation-linear:1;--animation-type:ease;opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
        >
          <bigimg
            _tmplitem="13"
            url="http://f.kyform.cn/echartdb/bigimg/2025-06-18/98241954-ce9c-4e9b-be2e-c866e4e01176.png"
            w="479"
            h="43"
            rotatetype=""
            rotatetime=""
          ></bigimg>
        </div>
      </div>
      <div
        _tmplitem="52"
        v-if="readDataPermission.num64w0"
        class="bigitem num64w0 "
        style="top: 204px; left: 252px;position: absolute; width: 148px; height: 37px; transform: translate(0px, 0px); z-index: 1011;pointer-events: auto;  "
      >
        <div
          _tmplitem="52"
          class="itemcontent "
          style="--animation-linear:1;--animation-type:ease;opacity:1;line-height:40px ;font-size:24px ;color:rgb(11, 150, 142) ;text-align:left;border-radius:0px;border-width:0px ;border-style:solid ;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
        >
          <digitalflop
            _tmplitem="14"
            ref="num64w0"
            :num="fromData.num64w0"
            content="{nt}/万元"
            :w="148"
            :h="37"
            :len="0"
            cssstyle="--animation-linear:1;--animation-type:ease;opacity:1;line-height:40px ;font-size:24px ;color:rgb(11, 150, 142) ;text-align:left;border-radius:0px;border-width:0px ;border-style:solid ;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
          ></digitalflop>
        </div>
      </div>
      <div
        _tmplitem="52"
        v-if="readDataPermission.titlegn0s"
        class="bigitem titlegn0s "
        style="top: 155px; left: 241px;position: absolute; width: 100px; height: 40px; transform: translate(0px, 0px); z-index: 1010;pointer-events: auto;  "
      >
        <div
          _tmplitem="52"
          class="itemcontent "
          style="--animation-linear:1;--animation-type:ease;opacity:1;font-size:16px ;color:rgba(45, 42, 42, 1) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;text-align:left;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
        >
          <titlecontrol
            _tmplitem="15"
            ref="titlegn0s"
            :w="100"
            :h="40"
            :val="fromData.titlegn0s"
            cssstyle="--animation-linear:1;--animation-type:ease;opacity:1;font-size:16px ;color:rgba(45, 42, 42, 1) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;text-align:left;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
          ></titlecontrol>
        </div>
      </div>
      <div
        _tmplitem="52"
        v-if="readDataPermission.charttoolemla"
        class="bigitem charttoolemla "
        style="top: 144px; left: -23px;position: absolute; width: 309px; height: 147px; transform: translate(0px, 0px); z-index: 109;pointer-events: auto;  "
      >
        <div
          _tmplitem="52"
          class="itemcontent "
          style="--animation-linear:1;--animation-type:ease;opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
        >
          <baseechart
            _tmplitem="16"
            ref="charttoolemla"
            :val="fromData.charttoolemla"
            mapcity=""
            mapcode=""
            orienttype="horizontal"
            :echartroll="false"
            :maxechartrollnum="8"
            :echartrolltime="2"
            :configechart="controlData.charttoolemla"
            :w="309"
            :h="147"
            echartcode="widgetLinechart"
          ></baseechart>
        </div>
      </div>
      <div
        _tmplitem="52"
        v-if="readDataPermission.groplwre"
        class="groplwre "
        style="overflow: hidden; width: 0px; height: 0px;top: px; left: px;position: absolute; z-index: 108;pointer-events: auto; --animation-linear:1;--animation-type:ease;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;"
      >
        <div
          _tmplitem="52"
          class=""
          style=" width: 0px; height: 0px;pointer-events: auto; --animation-linear:1;--animation-type:ease;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;"
        ></div>
      </div>
      <div
        _tmplitem="52"
        v-if="readDataPermission.groupjmma"
        class="groupjmma "
        style="overflow: hidden; width: 553px; height: 60px;top: 723px; left: 1351px;position: absolute; z-index: 107;pointer-events: auto; --animation-linear:1;--animation-type:ease;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;"
      >
        <div
          _tmplitem="52"
          class=""
          style=" width: 553px; height: 60px;pointer-events: auto; --animation-linear:1;--animation-type:ease;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;"
        >
          <div
            _tmplitem="20"
            v-if="readDataPermission.img1y3e"
            class="bigitem img1y3e "
            style="top: 0px; left: 0px; position: absolute;width: 553px; height: 60px; transform: translate(0px, 0px); z-index: 102;pointer-events: auto;  "
          >
            <div
              _tmplitem="20"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <bigimg
                _tmplitem="18"
                url="http://f.kyform.cn/echartdb/bigimg/2025-06-18/6bb2af5b-36fb-4778-8087-4f0fdd6b2345.png"
                w="553"
                h="60"
                rotatetype=""
                rotatetime=""
              ></bigimg>
            </div>
          </div>
          <div
            _tmplitem="20"
            v-if="readDataPermission.titlevbfo"
            class="bigitem titlevbfo "
            style="top: 26.399999999999977px; left: 23.069999999999936px; position: absolute;width: 160.37px; height: 31.8px; transform: translate(0px, 0px); z-index: 101;pointer-events: auto;  "
          >
            <div
              _tmplitem="20"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;text-align:left;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <titlecontrol
                _tmplitem="19"
                ref="titlevbfo"
                :w="160.37"
                :h="31.8"
                :val="fromData.titlevbfo"
                cssstyle="--animation-linear:1;--animation-type:ease;opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;text-align:left;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);height: 28px; width: 200px; line-height: 24px; display: table-cell; text-align: left; vertical-align: middle; font-size: 17px; color: rgb(51, 128, 115); letter-spacing: 0px; text-indent: 0px; font-weight: bold; font-style: normal; text-decoration: none; opacity: 1; white-space: normal; --50631626: 12; --48ab2e83: none; --22f13d40: 0; --1df0d0f2: 0; --1df0d0f3: 0; --636ad676: #363b4c;"
              ></titlecontrol>
            </div>
          </div>
        </div>
      </div>
      <div
        _tmplitem="52"
        v-if="readDataPermission.groupd947"
        class="groupd947 "
        style="overflow: hidden; width: 553px; height: 60px;top: 425px; left: 1365px;position: absolute; z-index: 106;pointer-events: auto; --animation-linear:1;--animation-type:ease;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;"
      >
        <div
          _tmplitem="52"
          class=""
          style=" width: 553px; height: 60px;pointer-events: auto; --animation-linear:1;--animation-type:ease;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;"
        >
          <div
            _tmplitem="23"
            v-if="readDataPermission.imgh1h7"
            class="bigitem imgh1h7 "
            style="top: 0px; left: 0px; position: absolute;width: 553px; height: 60px; transform: translate(0px, 0px); z-index: 102;pointer-events: auto;  "
          >
            <div
              _tmplitem="23"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <bigimg
                _tmplitem="21"
                url="http://f.kyform.cn/echartdb/bigimg/2025-06-18/6bb2af5b-36fb-4778-8087-4f0fdd6b2345.png"
                w="553"
                h="60"
                rotatetype=""
                rotatetime=""
              ></bigimg>
            </div>
          </div>
          <div
            _tmplitem="23"
            v-if="readDataPermission.titlez710"
            class="bigitem titlez710 "
            style="top: 26.399999999999977px; left: 23.069999999999936px; position: absolute;width: 160.37px; height: 31.8px; transform: translate(0px, 0px); z-index: 101;pointer-events: auto;  "
          >
            <div
              _tmplitem="23"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;text-align:left;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <titlecontrol
                _tmplitem="22"
                ref="titlez710"
                :w="160.37"
                :h="31.8"
                :val="fromData.titlez710"
                cssstyle="--animation-linear:1;--animation-type:ease;opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;text-align:left;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);height: 28px; width: 200px; line-height: 24px; display: table-cell; text-align: left; vertical-align: middle; font-size: 17px; color: rgb(51, 128, 115); letter-spacing: 0px; text-indent: 0px; font-weight: bold; font-style: normal; text-decoration: none; opacity: 1; white-space: normal; --50631626: 12; --48ab2e83: none; --22f13d40: 0; --1df0d0f2: 0; --1df0d0f3: 0; --636ad676: #363b4c;"
              ></titlecontrol>
            </div>
          </div>
        </div>
      </div>
      <div
        _tmplitem="52"
        v-if="readDataPermission.groupmbsa"
        class="groupmbsa "
        style="overflow: hidden; width: 553px; height: 60px;top: 116px; left: 1358px;position: absolute; z-index: 105;pointer-events: auto; --animation-linear:1;--animation-type:ease;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;"
      >
        <div
          _tmplitem="52"
          class=""
          style=" width: 553px; height: 60px;pointer-events: auto; --animation-linear:1;--animation-type:ease;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;"
        >
          <div
            _tmplitem="26"
            v-if="readDataPermission.imgs0xe"
            class="bigitem imgs0xe "
            style="top: 0px; left: 0px; position: absolute;width: 553px; height: 60px; transform: translate(0px, 0px); z-index: 102;pointer-events: auto;  "
          >
            <div
              _tmplitem="26"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <bigimg
                _tmplitem="24"
                url="http://f.kyform.cn/echartdb/bigimg/2025-06-18/6bb2af5b-36fb-4778-8087-4f0fdd6b2345.png"
                w="553"
                h="60"
                rotatetype=""
                rotatetime=""
              ></bigimg>
            </div>
          </div>
          <div
            _tmplitem="26"
            v-if="readDataPermission.titlekdcn"
            class="bigitem titlekdcn "
            style="top: 26.400000000000006px; left: 23.069999999999936px; position: absolute;width: 160.37px; height: 31.8px; transform: translate(0px, 0px); z-index: 101;pointer-events: auto;  "
          >
            <div
              _tmplitem="26"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;text-align:left;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <titlecontrol
                _tmplitem="25"
                ref="titlekdcn"
                :w="160.37"
                :h="31.8"
                :val="fromData.titlekdcn"
                cssstyle="--animation-linear:1;--animation-type:ease;opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;text-align:left;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);height: 28px; width: 200px; line-height: 24px; display: table-cell; text-align: left; vertical-align: middle; font-size: 17px; color: rgb(51, 128, 115); letter-spacing: 0px; text-indent: 0px; font-weight: bold; font-style: normal; text-decoration: none; opacity: 1; white-space: normal; --50631626: 12; --48ab2e83: none; --22f13d40: 0; --1df0d0f2: 0; --1df0d0f3: 0; --636ad676: #363b4c;"
              ></titlecontrol>
            </div>
          </div>
        </div>
      </div>
      <div
        _tmplitem="52"
        v-if="readDataPermission.groupc0p1"
        class="groupc0p1 "
        style="overflow: hidden; width: 532px; height: 60px;top: 698px; left: 15px;position: absolute; z-index: 104;pointer-events: auto; --animation-linear:1;--animation-type:ease;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;"
      >
        <div
          _tmplitem="52"
          class=""
          style=" width: 532px; height: 60px;pointer-events: auto; --animation-linear:1;--animation-type:ease;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;"
        >
          <div
            _tmplitem="29"
            v-if="readDataPermission.imgkw5m"
            class="bigitem imgkw5m "
            style="top: 0px; left: 0px; position: absolute;width: 532px; height: 60px; transform: translate(0px, 0px); z-index: 102;pointer-events: auto;  "
          >
            <div
              _tmplitem="29"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <bigimg
                _tmplitem="27"
                url="http://f.kyform.cn/echartdb/bigimg/2025-06-18/6bb2af5b-36fb-4778-8087-4f0fdd6b2345.png"
                w="532"
                h="60"
                rotatetype=""
                rotatetime=""
              ></bigimg>
            </div>
          </div>
          <div
            _tmplitem="29"
            v-if="readDataPermission.titlep2yh"
            class="bigitem titlep2yh "
            style="top: 26.370000000000005px; left: 22.17px; position: absolute;width: 154.28px; height: 31.81px; transform: translate(0px, 0px); z-index: 101;pointer-events: auto;  "
          >
            <div
              _tmplitem="29"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;text-align:left;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <titlecontrol
                _tmplitem="28"
                ref="titlep2yh"
                :w="154.28"
                :h="31.81"
                :val="fromData.titlep2yh"
                cssstyle="--animation-linear:1;--animation-type:ease;opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;text-align:left;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);height: 28px; width: 200px; line-height: 24px; display: table-cell; text-align: left; vertical-align: middle; font-size: 17px; color: rgb(51, 128, 115); letter-spacing: 0px; text-indent: 0px; font-weight: bold; font-style: normal; text-decoration: none; opacity: 1; white-space: normal; --50631626: 12; --48ab2e83: none; --22f13d40: 0; --1df0d0f2: 0; --1df0d0f3: 0; --636ad676: #363b4c;"
              ></titlecontrol>
            </div>
          </div>
        </div>
      </div>
      <div
        _tmplitem="52"
        v-if="readDataPermission.groupyqd8"
        class="groupyqd8 "
        style="overflow: hidden; width: 535px; height: 46px;top: 422px; left: 8px;position: absolute; z-index: 103;pointer-events: auto; --animation-linear:1;--animation-type:ease;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;"
      >
        <div
          _tmplitem="52"
          class=""
          style=" width: 535px; height: 46px;pointer-events: auto; --animation-linear:1;--animation-type:ease;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;"
        >
          <div
            _tmplitem="32"
            v-if="readDataPermission.imgwykp"
            class="bigitem imgwykp "
            style="top: 0px; left: 0px; position: absolute;width: 535px; height: 46px; transform: translate(0px, 0px); z-index: 102;pointer-events: auto;  "
          >
            <div
              _tmplitem="32"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <bigimg
                _tmplitem="30"
                url="http://f.kyform.cn/echartdb/bigimg/2025-06-18/6bb2af5b-36fb-4778-8087-4f0fdd6b2345.png"
                w="535"
                h="46"
                rotatetype=""
                rotatetime=""
              ></bigimg>
            </div>
          </div>
          <div
            _tmplitem="32"
            v-if="readDataPermission.titleghj3"
            class="bigitem titleghj3 "
            style="top: 12.389999999999986px; left: 22.299999999999997px; position: absolute;width: 155.15px; height: 24.39px; transform: translate(0px, 0px); z-index: 101;pointer-events: auto;  "
          >
            <div
              _tmplitem="32"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;text-align:left;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <titlecontrol
                _tmplitem="31"
                ref="titleghj3"
                :w="155.15"
                :h="24.39"
                :val="fromData.titleghj3"
                cssstyle="--animation-linear:1;--animation-type:ease;opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;text-align:left;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);height: 28px; width: 200px; line-height: 24px; display: table-cell; text-align: left; vertical-align: middle; font-size: 17px; color: rgb(51, 128, 115); letter-spacing: 0px; text-indent: 0px; font-weight: bold; font-style: normal; text-decoration: none; opacity: 1; white-space: normal; --50631626: 12; --48ab2e83: none; --22f13d40: 0; --1df0d0f2: 0; --1df0d0f3: 0; --636ad676: #363b4c;"
              ></titlecontrol>
            </div>
          </div>
        </div>
      </div>
      <div
        _tmplitem="52"
        v-if="readDataPermission.gropmala"
        class="gropmala "
        style="overflow: hidden; width: 538px; height: 66px;top: 80px; left: 9px;position: absolute; z-index: 102;pointer-events: auto; --animation-linear:1;--animation-type:ease;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;"
      >
        <div
          _tmplitem="52"
          class=""
          style=" width: 538px; height: 66px;pointer-events: auto; --animation-linear:1;--animation-type:ease;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;"
        >
          <div
            _tmplitem="35"
            v-if="readDataPermission.img7do5"
            class="bigitem img7do5 "
            style="top: 0px; left: 0px; position: absolute;width: 538px; height: 66px; transform: translate(0px, 0px); z-index: 102;pointer-events: auto;  "
          >
            <div
              _tmplitem="35"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <bigimg
                _tmplitem="33"
                url="http://f.kyform.cn/echartdb/bigimg/2025-06-18/6bb2af5b-36fb-4778-8087-4f0fdd6b2345.png"
                w="538"
                h="66"
                rotatetype=""
                rotatetime=""
              ></bigimg>
            </div>
          </div>
          <div
            _tmplitem="35"
            v-if="readDataPermission.titlet06w"
            class="bigitem titlet06w "
            style="top: 29px; left: 22.44px; position: absolute;width: 156.02px; height: 35px; transform: translate(0px, 0px); z-index: 101;pointer-events: auto;  "
          >
            <div
              _tmplitem="35"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;text-align:left;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <titlecontrol
                _tmplitem="34"
                ref="titlet06w"
                :w="156.02"
                :h="35"
                :val="fromData.titlet06w"
                cssstyle="--animation-linear:1;--animation-type:ease;opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;text-align:left;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);height: 28px; width: 200px; line-height: 24px; display: table-cell; text-align: left; vertical-align: middle; font-size: 17px; color: rgb(51, 128, 115); letter-spacing: 0px; text-indent: 0px; font-weight: bold; font-style: normal; text-decoration: none; opacity: 1; white-space: normal; --50631626: 12; --48ab2e83: none; --22f13d40: 0; --1df0d0f2: 0; --1df0d0f3: 0; --636ad676: #363b4c;"
              ></titlecontrol>
            </div>
          </div>
        </div>
      </div>
      <div
        _tmplitem="52"
        v-if="readDataPermission.gropuxat"
        class="gropuxat "
        style="overflow: hidden; width: 1920px; height: 1088px;top: -8px; left: 0px;position: absolute; z-index: 101;pointer-events: auto; --animation-linear:1;--animation-type:ease;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;"
      >
        <div
          _tmplitem="52"
          class=""
          style=" width: 1920px; height: 1088px;pointer-events: auto; --animation-linear:1;--animation-type:ease;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;"
        >
          <div
            _tmplitem="51"
            v-if="readDataPermission.imgolv5"
            class="bigitem imgolv5 "
            style="top: 224px; left: 362px; position: absolute;width: 1152px; height: 859px; transform: translate(0px, 0px); z-index: 1015;pointer-events: auto;  "
          >
            <div
              _tmplitem="51"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <bigimg
                _tmplitem="36"
                url="/temp/bg62.svg"
                w="1152"
                h="859"
                rotatetype=""
                rotatetime=""
              ></bigimg>
            </div>
          </div>
          <div
            _tmplitem="51"
            v-if="readDataPermission.imgyr6o"
            class="bigitem imgyr6o "
            style="top: 8px; left: 0px; position: absolute;width: 1920px; height: 1080px; transform: translate(0px, 0px); z-index: 1014;pointer-events: none;  "
          >
            <div
              _tmplitem="51"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <bigimg
                _tmplitem="37"
                url="http://f.kyform.cn/echartdb/bigimg/2025-06-18/10b9d6f7-fccf-4691-a532-9e28eeb1751a.png"
                w="1920"
                h="1080"
                rotatetype=""
                rotatetime=""
              ></bigimg>
            </div>
          </div>
          <div
            _tmplitem="51"
            v-if="readDataPermission.titlea1tr"
            class="bigitem titlea1tr "
            style="top: 468px; left: 1305px; position: absolute;width: 28px; height: 102px; transform: translate(0px, 0px); z-index: 1013;pointer-events: auto;  "
          >
            <div
              _tmplitem="51"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;text-align:left;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <titlecontrol
                _tmplitem="38"
                ref="titlea1tr"
                :w="28"
                :h="102"
                :val="fromData.titlea1tr"
                cssstyle="--animation-linear:1;--animation-type:ease;opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;text-align:left;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);height: 74px; width: 21px; line-height: 20px; display: table-cell; text-align: center; vertical-align: middle; font-size: 18px; color: rgb(51, 128, 115); letter-spacing: 0px; text-indent: 0px; font-weight: normal; font-style: normal; text-decoration: none; opacity: 1; writing-mode: vertical-rl; 
text-orientation: upright; "
              ></titlecontrol>
            </div>
          </div>
          <div
            _tmplitem="51"
            v-if="readDataPermission.title7js8"
            class="bigitem title7js8 "
            style="top: 514px; left: 569px; position: absolute;width: 28px; height: 102px; transform: translate(0px, 0px); z-index: 1012;pointer-events: auto;  "
          >
            <div
              _tmplitem="51"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;text-align:left;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <titlecontrol
                _tmplitem="39"
                ref="title7js8"
                :w="28"
                :h="102"
                :val="fromData.title7js8"
                cssstyle="--animation-linear:1;--animation-type:ease;opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;text-align:left;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);height: 74px; width: 21px; line-height: 20px; display: table-cell; text-align: center; vertical-align: middle; font-size: 18px; color: rgb(51, 128, 115); letter-spacing: 0px; text-indent: 0px; font-weight: normal; font-style: normal; text-decoration: none; opacity: 1; writing-mode: vertical-rl; 
text-orientation: upright; "
              ></titlecontrol>
            </div>
          </div>
          <div
            _tmplitem="51"
            v-if="readDataPermission.titlekaf7"
            class="bigitem titlekaf7 "
            style="top: 738px; left: 400px; position: absolute;width: 28px; height: 102px; transform: translate(0px, 0px); z-index: 1011;pointer-events: auto;  "
          >
            <div
              _tmplitem="51"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;text-align:left;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <titlecontrol
                _tmplitem="40"
                ref="titlekaf7"
                :w="28"
                :h="102"
                :val="fromData.titlekaf7"
                cssstyle="--animation-linear:1;--animation-type:ease;opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;text-align:left;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);height: 74px; width: 21px; line-height: 20px; display: table-cell; text-align: center; vertical-align: middle; font-size: 18px; color: rgb(51, 128, 115); letter-spacing: 0px; text-indent: 0px; font-weight: normal; font-style: normal; text-decoration: none; opacity: 1; writing-mode: vertical-rl; 
text-orientation: upright; "
              ></titlecontrol>
            </div>
          </div>
          <div
            _tmplitem="51"
            v-if="readDataPermission.titler218"
            class="bigitem titler218 "
            style="top: 646px; left: 933px; position: absolute;width: 28px; height: 102px; transform: translate(0px, 0px); z-index: 1010;pointer-events: auto;  "
          >
            <div
              _tmplitem="51"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;text-align:left;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <titlecontrol
                _tmplitem="41"
                ref="titler218"
                :w="28"
                :h="102"
                :val="fromData.titler218"
                cssstyle="--animation-linear:1;--animation-type:ease;opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;text-align:left;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);height: 74px; width: 21px; line-height: 20px; display: table-cell; text-align: center; vertical-align: middle; font-size: 18px; color: rgb(51, 128, 115); letter-spacing: 0px; text-indent: 0px; font-weight: normal; font-style: normal; text-decoration: none; opacity: 1; writing-mode: vertical-rl; 
text-orientation: upright; "
              ></titlecontrol>
            </div>
          </div>
          <div
            _tmplitem="51"
            v-if="readDataPermission.title2md2"
            class="bigitem title2md2 "
            style="top: 530px; left: 704px; position: absolute;width: 28px; height: 102px; transform: translate(0px, 0px); z-index: 109;pointer-events: auto;  "
          >
            <div
              _tmplitem="51"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;text-align:left;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <titlecontrol
                _tmplitem="42"
                ref="title2md2"
                :w="28"
                :h="102"
                :val="fromData.title2md2"
                cssstyle="--animation-linear:1;--animation-type:ease;opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;text-align:left;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);height: 74px; width: 21px; line-height: 20px; display: table-cell; text-align: center; vertical-align: middle; font-size: 18px; color: rgb(51, 128, 115); letter-spacing: 0px; text-indent: 0px; font-weight: normal; font-style: normal; text-decoration: none; opacity: 1; writing-mode: vertical-rl; 
text-orientation: upright; "
              ></titlecontrol>
            </div>
          </div>
          <div
            _tmplitem="51"
            v-if="readDataPermission.titlet5ff"
            class="bigitem titlet5ff "
            style="top: 35.86px; left: 761.8px; position: absolute;width: 426.96px; height: 63.76px; transform: translate(0px, 0px); z-index: 108;pointer-events: auto;  "
          >
            <div
              _tmplitem="51"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;text-align:left;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <titlecontrol
                _tmplitem="43"
                ref="titlet5ff"
                :w="426.96"
                :h="63.76"
                :val="fromData.titlet5ff"
                cssstyle="--animation-linear:1;--animation-type:ease;opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;text-align:left;font-family:'Microsoft YaHei';--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);    height: 50px;
  width: 380px;
  line-height: 24px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  font-size: 44px;
  color: rgb(255, 248, 237);
  letter-spacing: 0px;
  text-indent: 0px;
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
  opacity: 1;
  white-space: normal;
  filter: drop-shadow(rgb(11, 150, 142) 0px 2px 5px);

"
              ></titlecontrol>
            </div>
          </div>
          <div
            _tmplitem="51"
            v-if="readDataPermission.imgpor0"
            class="bigitem imgpor0 "
            style="top: 724px; left: 395px; position: absolute;width: 50px; height: 148px; transform: translate(0px, 0px); z-index: 107;pointer-events: auto;  "
          >
            <div
              _tmplitem="51"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <bigimg
                _tmplitem="44"
                url="http://f.kyform.cn/echartdb/bigimg/2025-06-18/5ae792f4-e840-42d3-bdc3-f2399ca07a49.png"
                w="50"
                h="148"
                rotatetype=""
                rotatetime=""
              ></bigimg>
            </div>
          </div>
          <div
            _tmplitem="51"
            v-if="readDataPermission.img33hv"
            class="bigitem img33hv "
            style="top: 445px; left: 1294px; position: absolute;width: 50px; height: 148px; transform: translate(0px, 0px); z-index: 106;pointer-events: auto;  "
          >
            <div
              _tmplitem="51"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <bigimg
                _tmplitem="45"
                url="http://f.kyform.cn/echartdb/bigimg/2025-06-18/5ae792f4-e840-42d3-bdc3-f2399ca07a49.png"
                w="50"
                h="148"
                rotatetype=""
                rotatetime=""
              ></bigimg>
            </div>
          </div>
          <div
            _tmplitem="51"
            v-if="readDataPermission.imgavox"
            class="bigitem imgavox "
            style="top: 509px; left: 699px; position: absolute;width: 50px; height: 148px; transform: translate(0px, 0px); z-index: 105;pointer-events: auto;  "
          >
            <div
              _tmplitem="51"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <bigimg
                _tmplitem="46"
                url="http://f.kyform.cn/echartdb/bigimg/2025-06-18/5ae792f4-e840-42d3-bdc3-f2399ca07a49.png"
                w="50"
                h="148"
                rotatetype=""
                rotatetime=""
              ></bigimg>
            </div>
          </div>
          <div
            _tmplitem="51"
            v-if="readDataPermission.imghe0q"
            class="bigitem imghe0q "
            style="top: 624px; left: 928px; position: absolute;width: 50px; height: 148px; transform: translate(0px, 0px); z-index: 104;pointer-events: auto;  "
          >
            <div
              _tmplitem="51"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <bigimg
                _tmplitem="47"
                url="http://f.kyform.cn/echartdb/bigimg/2025-06-18/5ae792f4-e840-42d3-bdc3-f2399ca07a49.png"
                w="50"
                h="148"
                rotatetype=""
                rotatetime=""
              ></bigimg>
            </div>
          </div>
          <div
            _tmplitem="51"
            v-if="readDataPermission.imgmadz"
            class="bigitem imgmadz "
            style="top: 495px; left: 562px; position: absolute;width: 50px; height: 148px; transform: translate(0px, 0px); z-index: 103;pointer-events: auto;  "
          >
            <div
              _tmplitem="51"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <bigimg
                _tmplitem="48"
                url="http://f.kyform.cn/echartdb/bigimg/2025-06-18/5ae792f4-e840-42d3-bdc3-f2399ca07a49.png"
                w="50"
                h="148"
                rotatetype=""
                rotatetime=""
              ></bigimg>
            </div>
          </div>
          <div
            _tmplitem="51"
            v-if="readDataPermission.datetime5rgf"
            class="bigitem datetime5rgf "
            style="top: 0px; left: 1598.87px; position: absolute;width: 268.47px; height: 21.92px; transform: translate(0px, 0px); z-index: 102;pointer-events: auto;  "
          >
            <div
              _tmplitem="51"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;font-size:14px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;text-align:left;font-family:'Microsoft YaHei';line-height:40px ;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <comdatetime
                _tmplitem="49"
                ref="datetime5rgf"
                w="268.47"
                h="21.92"
                format="YYYY年MM月DD日 HH:mm:ss"
                cssstyle="--animation-linear:1;--animation-type:ease;opacity:1;font-size:14px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;text-align:left;font-family:'Microsoft YaHei';line-height:40px ;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);height: 50px; width: 320px; line-height: 24px; display: table-cell; text-align: right; vertical-align: middle; font-size: 20px; color: rgb(11, 150, 142); letter-spacing: 0px; text-indent: 0px; font-weight: normal; font-style: normal; text-decoration: none; "
              ></comdatetime>
            </div>
          </div>
          <div
            _tmplitem="51"
            v-if="readDataPermission.imgwe3w"
            class="bigitem imgwe3w "
            style="top: 7.98px; left: 0px; position: absolute;width: 1902px; height: 114.58px; transform: translate(0px, 0px); z-index: 101;pointer-events: auto;  "
          >
            <div
              _tmplitem="51"
              class="itemcontent "
              style="--animation-linear:1;--animation-type:ease;opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;--animation-type:ease;--animation-linear:infinite;--animation-color:#0ff;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
            >
              <bigimg
                _tmplitem="50"
                url="http://f.kyform.cn/echartdb/bigimg/2025-06-18/66b81ca5-7879-43a8-a1d6-79a84d00cdef.png"
                w="1902"
                h="114.58"
                rotatetype=""
                rotatetime=""
              ></bigimg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <fromdialog _tmplitem="52" ref="reffromdialog"></fromdialog>
  </div>
</template>
<script>
export default {
  methods: {
    created_sys() {
      ///系统方法 判断页面大小 使其自动适应
      let $this = this
      this.w = this.w === undefined ? 1920 : this.w
      $this.css = $this.fullScreenCss($this, this.screentype)
      window.addEventListener('resize', () => {
        $this.css = $this.fullScreenCss($this, this.screentype)
      })
      if (this.loadfunmounted_sys !== undefined) {
        this.$nextTick(() => {
          this.loadfunmounted_sys()
        })
      }
    },
    loadsysmounted() {},
    fullScreenCss(t, e) {
      if ('none' === e)
        return `  width: ${t.w}px;height: ${t.h}px; ${
          '' === t.bg
            ? ''
            : 'background-image:url(' +
              t.bg +
              ');    background-repeat: no-repeat;background-size: cover;'
        }    ${'' === t.bgColor ? '' : 'background-color:' + t.bgColor + ';'}`
      if ('w' === e)
        return `  width: ${t.w}px;height: ${t.h}px; ${
          '' === t.bg
            ? ''
            : 'background-image:url(' +
              t.bg +
              ');    background-repeat: no-repeat;background-size: cover;'
        }  transform: scale(${document.body.clientWidth / t.w});  ${
          '' === t.bgColor ? '' : 'background-color:' + t.bgColor + ';'
        }`
      if ('h' === e)
        return `  width: ${t.w}px;height: ${t.h}px; ${
          '' === t.bg
            ? ''
            : 'background-image:url(' +
              t.bg +
              ');    background-repeat: no-repeat;background-size: cover;'
        }  transform: scale(${document.body.clientHeight / t.h});  ${
          '' === t.bgColor ? '' : 'background-color:' + t.bgColor + ';'
        }`
      if ('full' === e)
        return `  width: ${t.w}px;height: ${t.h}px; ${
          '' === t.bg
            ? ''
            : 'background-image:url(' +
              t.bg +
              ');    background-repeat: no-repeat;background-size: cover;'
        }  transform: scale(${document.body.clientWidth / t.w},${document.body.clientHeight /
          t.h});  ${'' === t.bgColor ? '' : 'background-color:' + t.bgColor + ';'}`
      {
        let e = document.body.clientHeight / t.h,
          n = document.body.clientWidth / t.w,
          i = e > n ? n : e,
          o = (document.body.clientWidth - i * t.w) / 2
        return (
          (o = o > 0 ? 'left:' + o + 'px;' : ''),
          o +
            ` transform: scale(${i}); width: ${t.w}px;height: ${t.h}px; ${
              '' === t.bg
                ? ''
                : 'background-image:url(' +
                  t.bg +
                  ');    background-repeat: no-repeat;background-size: cover;'
            } ${'' === t.bgColor ? '' : 'background-color:' + t.bgColor + ';'}`
        )
      }
    },
    loadfunmounted_sys() {
      if (this.loadsysmounted !== undefined) {
        this.loadsysmounted()
      }
      if (this.loadfunmounted !== undefined) {
        let isreturn = this.loadfunmounted()
        if (isreturn == false) {
          return
        }
      }
    },
  },
  created() {
    this.created_sys()
  },
  data() {
    return {
      w: 1920,
      css: ``,
      h: 1080,
      bg: `/img1935219200305926145/32c19b14-cac4-433a-8f84-34c7f6303802.png`,
      bgColor: `rgb(43 44 45)`,
      fromData: {
        num2kkmy: 1343,
        scrollingtablef015: [
          {
            date: `2016-05-02`,
            name: `王小虎`,
            address: `上海市普陀区金沙江路 1518 弄`,
          },
          {
            date: `2016-05-04`,
            name: `王小虎`,
            address: `上海市普陀区金沙江路 1517 弄`,
          },
          {
            date: `2016-05-01`,
            name: `王小虎`,
            address: `上海市普陀区金沙江路 1519 弄`,
          },
          {
            date: `2016-05-03`,
            name: `王小虎`,
            address: `上海市普陀区金沙江路 1516 弄`,
          },
          {
            date: `2016-05-01`,
            name: `王小虎`,
            address: `上海市普陀区金沙江路 1519 弄`,
          },
          {
            date: `2016-05-03`,
            name: `王小虎`,
            address: `上海市普陀区金沙江路 1516 弄`,
          },
          {
            date: `2016-05-04`,
            name: `王小虎`,
            address: `上海市普陀区金沙江路 1517 弄`,
          },
          {
            date: `2016-05-01`,
            name: `王小虎`,
            address: `上海市普陀区金沙江路 1519 弄`,
          },
          {
            date: `2016-05-03`,
            name: `王小虎`,
            address: `上海市普陀区金沙江路 1516 弄`,
          },
          {
            date: `2016-05-01`,
            name: `王小虎`,
            address: `上海市普陀区金沙江路 1519 弄`,
          },
          {
            date: `2016-05-03`,
            name: `王小虎`,
            address: `上海市普陀区金沙江路 1516 弄`,
          },
        ],
        charttoolb9p3: [
          {
            axis: `苹果`,
            data: 1000,
          },
          {
            axis: `三星`,
            data: 2229,
          },
          {
            axis: `小米`,
            data: 3879,
          },
          {
            axis: `oppo`,
            data: 2379,
          },
          {
            axis: `vivo`,
            data: 4079,
          },
        ],
        charttool7any: [
          {
            axis: `苹果`,
            data: 1000,
          },
          {
            axis: `三星`,
            data: 2229,
          },
          {
            axis: `小米`,
            data: 3879,
          },
          {
            axis: `oppo`,
            data: 2379,
          },
          {
            axis: `vivo`,
            data: 4079,
          },
        ],
        charttoolcrk2: [
          {
            axis: `2021-07-25`,
            name: `A`,
            data: 32,
            plan: 1200,
            real: 3600,
          },
          {
            axis: `2021-07-25`,
            name: `B`,
            data: 50,
            plan: 1800,
            real: 6000,
          },
          {
            axis: `2021-07-26`,
            name: `B`,
            data: 70,
            plan: 2000,
            real: 4000,
          },
          {
            axis: `2021-07-27`,
            name: `A`,
            data: 85,
            plan: 1500,
            real: 8000,
          },
          {
            axis: `2021-07-27`,
            name: `B`,
            data: 90,
            plan: 1200,
            real: 3000,
          },
        ],
        charttool980y: [
          {
            value: 1048,
            name: `搜索引擎`,
          },
          {
            value: 735,
            name: `直接访问`,
          },
          {
            value: 580,
            name: `邮件营销`,
          },
          {
            value: 484,
            name: `联盟广告`,
          },
          {
            value: 300,
            name: `视频广告`,
          },
        ],
        num0a4m: 1343,
        numo3p3: 1343,
        numqyvd: 1343,
        num04nv: 1343,
        num64w0: 1343,
        titlegn0s: `收益总计`,
        charttoolemla: [
          {
            axis: `苹果`,
            data: 3,
          },
          {
            axis: `三星`,
            data: 2,
          },
          {
            axis: `小米`,
            data: 4,
          },
          {
            axis: `oppo`,
            data: 3,
          },
          {
            axis: `vivo`,
            data: 6,
          },
        ],
        titlevbfo: `景区客流数据统计`,
        titlez710: `景区客流数据统计`,
        titlekdcn: `景区客流数据统计`,
        titlep2yh: `景区客流数据统计`,
        titleghj3: `景区客流数据统计`,
        titlet06w: `景区客流数据统计`,
        titlea1tr: `风雨桥`,
        title7js8: `风雨桥`,
        titlekaf7: `风雨桥`,
        titler218: `风雨桥`,
        title2md2: `风雨桥`,
        titlet5ff: `古镇可视化大屏`,
      },
      controlTimer: {},
      controlData: {
        scrollingtablef015: [
          {
            prop: `date`,
            label: `日期`,
            width: ``,
            align: ``,
            headeralign: ``,
            classname: ``,
            scopehtml: ``,
            minwidth: `80`,
            flexAlign: ``,
            showOverflowTooltip: false,
          },
          {
            prop: `name`,
            label: `姓名`,
            width: ``,
            align: ``,
            headeralign: ``,
            classname: ``,
            scopehtml: ``,
            minwidth: `80`,
            flexAlign: ``,
            showOverflowTooltip: false,
          },
          {
            prop: `address`,
            label: `地址`,
            align: ``,
            headeralign: ``,
            classname: ``,
            scopehtml: ``,
            minwidth: `200`,
            flexAlign: ``,
            showOverflowTooltip: false,
          },
        ],
        charttoolb9p3: {
          isShowTitle: true,
          text: ``,
          textColor: `rgb(11, 150, 142)`,
          textFontSize: 20,
          textFontWeight: `normal`,
          textFontStyle: `normal`,
          textFontFamily: `sans-serif`,
          subtext: ``,
          subtextColor: `rgb(11, 150, 142)`,
          subtextFontSize: 20,
          subtextFontWeight: `normal`,
          subtextFontStyle: `normal`,
          subtextFontFamily: `sans-serif`,
          titleLeft: `center`,
          titleTop: 5,
          titleItemGap: 0,
          markPoint: true,
          pointSize: 5,
          symbol: `circle`,
          smoothCurve: true,
          lineWidth: 5,
          area: true,
          areaThickness: 15,
          isShowX: true,
          isShowAxisLabelX: true,
          positionX: `bottom`,
          offsetX: 0,
          textColorX: `rgb(11, 150, 142)`,
          textFontSizeX: 14,
          textFontWeightX: `normal`,
          textFontStyleX: `normal`,
          textFontFamilyX: `sans-serif`,
          textRowsBreakAuto: false,
          textRowsNum: ``,
          textIntervalX: 0,
          textAngleX: 0,
          isShowAxisLineX: true,
          reversalX: false,
          lineColorX: `rgb(11, 150, 142)`,
          lineWidthX: 1,
          nameX: ``,
          nameLocationX: `end`,
          nameColorX: `#fff`,
          nameFontSizeX: 14,
          nameFontWeightX: `normal`,
          nameFontStyleX: `normal`,
          nameFontFamilyX: `sans-serif`,
          isShowSplitLineX: false,
          splitLineColorX: `#fff`,
          splitLineWidthX: 1,
          isShowY: true,
          isShowAxisLabelY: true,
          maxY: ``,
          positionY: `left`,
          offsetY: 0,
          textColorY: `rgb(11, 150, 142)`,
          textFontSizeY: 14,
          textFontWeightY: `normal`,
          textFontStyleY: `normal`,
          textFontFamilyY: `sans-serif`,
          scale: false,
          splitNumberY: 0,
          textAngleY: 0,
          isShowAxisLineY: true,
          reversalY: false,
          lineColorY: `rgb(11, 150, 142)`,
          lineWidthY: 1,
          textNameY: ``,
          nameLocationY: `end`,
          nameColorY: `#fff`,
          nameFontSizeY: 14,
          nameFontWeightY: `normal`,
          nameFontStyleY: `normal`,
          nameFontFamilyY: `sans-serif`,
          isShowSplitLineY: false,
          splitLineColorY: `#fff`,
          splitLineWidthY: 1,
          isShowLegend: true,
          legendName: ``,
          legendColor: `rgb(11, 150, 142)`,
          legendFontSize: 12,
          legendFontWeight: `normal`,
          legendFontStyle: `normal`,
          legendFontFamily: `sans-serif`,
          legendWidth: 12,
          legendHeight: 12,
          lateralPosition: `center`,
          longitudinalPosition: `top`,
          layoutFront: `horizontal`,
          isShow: false,
          percentSign: false,
          fontPosition: `top`,
          fontDistance: 0,
          fontColor: `rgb(11, 150, 142)`,
          fontSize: 12,
          fontWeight: `normal`,
          fontStyle: `normal`,
          fontFamily: `sans-serif`,
          isShowTooltip: true,
          tooltipTrigger: `axis`,
          tooltipAxisPointerType: `shadow`,
          tooltipFontSize: 16,
          tooltipColor: `rgb(11, 150, 142)`,
          tooltipFontWeight: `normal`,
          tooltipFontStyle: `normal`,
          tooltipFontFamily: `sans-serif`,
          marginLeft: 10,
          marginRight: 50,
          marginTop: 50,
          marginBottom: 10,
          customColor: [
            {
              color: `rgb(124, 255, 178)`,
            },
            {
              color: `rgb(253, 221, 96)`,
            },
            {
              color: `rgb(255, 110, 118)`,
            },
            {
              color: `rgb(88, 217, 249)`,
            },
            {
              color: `rgb(5, 192, 145)`,
            },
          ],
          tipsColor: `rgb(11, 150, 142)`,
        },
        charttool7any: {
          verticalShow: true,
          isShowTitle: true,
          text: ``,
          textColor: `rgb(11, 150, 142)`,
          textFontSize: 20,
          textFontWeight: `normal`,
          textFontStyle: `normal`,
          textFontFamily: `sans-serif`,
          subtext: ``,
          subtextColor: `rgb(11, 150, 142)`,
          subtextFontSize: 20,
          subtextFontWeight: `normal`,
          subtextFontStyle: `normal`,
          subtextFontFamily: `sans-serif`,
          titleLeft: `center`,
          titleTop: 5,
          titleItemGap: 0,
          maxWidth: 15,
          radius: 5,
          barGap: 10,
          minHeight: 0,
          stackStyle: `leftRight`,
          isShowBackground: true,
          backgroundStyleColor: `rgba(180, 180, 180, 0.2)`,
          backgroundStyleBorderColor: `#000`,
          backgroundStyleBorderWidth: 0,
          backgroundStyleBorderType: `dashed`,
          backgroundStyleShadowBlur: 10,
          backgroundStyleShadowColor: `rgba(0, 0, 0, 0.5)`,
          backgroundStyleOpacity: 100,
          isShowX: true,
          isShowAxisLabelX: true,
          positionX: `bottom`,
          offsetX: 0,
          textColorX: `rgb(11, 150, 142)`,
          textFontSizeX: 14,
          textFontWeightX: `normal`,
          textFontStyleX: `normal`,
          textFontFamilyX: `sans-serif`,
          textRowsBreakAuto: false,
          textRowsNum: ``,
          textIntervalX: 0,
          textAngleX: 0,
          isShowAxisLineX: true,
          reversalX: false,
          lineColorX: `rgb(11, 150, 142)`,
          lineWidthX: 1,
          nameX: ``,
          nameLocationX: `end`,
          nameColorX: `#fff`,
          nameFontSizeX: 14,
          nameFontWeightX: `normal`,
          nameFontStyleX: `normal`,
          nameFontFamilyX: `sans-serif`,
          isShowSplitLineX: false,
          splitLineColorX: `#fff`,
          splitLineWidthX: 1,
          isShowY: true,
          isShowAxisLabelY: true,
          maxY: ``,
          positionY: `left`,
          offsetY: 0,
          textColorY: `rgb(11, 150, 142)`,
          textFontSizeY: 14,
          textFontWeightY: `normal`,
          textFontStyleY: `normal`,
          textFontFamilyY: `sans-serif`,
          scale: false,
          splitNumberY: 0,
          textAngleY: 0,
          isShowAxisLineY: true,
          reversalY: false,
          lineColorY: `rgb(11, 150, 142)`,
          lineWidthY: 1,
          textNameY: ``,
          nameLocationY: `end`,
          nameColorY: `#fff`,
          nameFontSizeY: 14,
          nameFontWeightY: `normal`,
          nameFontStyleY: `normal`,
          nameFontFamilyY: `sans-serif`,
          isShowSplitLineY: false,
          splitLineColorY: `#fff`,
          splitLineWidthY: 1,
          isShowLegend: true,
          legendName: ``,
          legendColor: `rgb(11, 150, 142)`,
          legendFontSize: 12,
          legendFontWeight: `normal`,
          legendFontStyle: `normal`,
          legendFontFamily: `sans-serif`,
          legendWidth: 12,
          legendHeight: 12,
          lateralPosition: `center`,
          longitudinalPosition: `top`,
          layoutFront: `horizontal`,
          isShow: true,
          percentSign: false,
          fontPosition: `insideTop`,
          fontDistance: -10,
          fontColor: `rgb(11, 150, 142)`,
          fontSize: 12,
          fontWeight: `normal`,
          fontStyle: `normal`,
          fontFamily: `sans-serif`,
          isShowTooltip: true,
          tooltipTrigger: `axis`,
          tooltipAxisPointerType: `shadow`,
          tooltipFontSize: 16,
          tooltipColor: `rgb(11, 150, 142)`,
          tooltipFontWeight: `normal`,
          tooltipFontStyle: `normal`,
          tooltipFontFamily: `sans-serif`,
          marginLeft: 10,
          marginRight: 50,
          marginTop: 50,
          marginBottom: 10,
          colorStyle: `same`,
          customColor: [
            {
              color: `#119990`,
            },
            {
              color: `rgb(124, 255, 178)`,
            },
            {
              color: `rgb(253, 221, 96)`,
            },
            {
              color: `rgb(255, 110, 118)`,
            },
            {
              color: `rgb(88, 217, 249)`,
            },
            {
              color: `rgb(5, 192, 145)`,
            },
          ],
          tipsColor: `rgb(11, 150, 142)`,
        },
        charttoolcrk2: {
          isShowTitle: true,
          text: ``,
          textColor: `rgb(11, 150, 142)`,
          textFontSize: 20,
          textFontWeight: `normal`,
          textFontStyle: `normal`,
          textFontFamily: `sans-serif`,
          subtext: ``,
          subtextColor: `rgb(11, 150, 142)`,
          subtextFontSize: 20,
          subtextFontWeight: `normal`,
          subtextFontStyle: `normal`,
          subtextFontFamily: `sans-serif`,
          titleLeft: `center`,
          titleTop: 5,
          titleItemGap: 0,
          maxWidth: 15,
          radius: 5,
          barGap: 10,
          minHeight: 0,
          stackStyle: `leftRight`,
          isShowBackground: true,
          backgroundStyleColor: `rgba(180, 180, 180, 0.2)`,
          backgroundStyleBorderColor: `#000`,
          backgroundStyleBorderWidth: 0,
          backgroundStyleBorderType: `dashed`,
          backgroundStyleShadowBlur: 10,
          backgroundStyleShadowColor: `rgba(0, 0, 0, 0.5)`,
          backgroundStyleOpacity: 100,
          isShowX: true,
          isShowAxisLabelX: true,
          positionX: `bottom`,
          offsetX: 0,
          textColorX: `rgb(11, 150, 142)`,
          textFontSizeX: 14,
          textFontWeightX: `normal`,
          textFontStyleX: `normal`,
          textFontFamilyX: `sans-serif`,
          textRowsBreakAuto: false,
          textRowsNum: ``,
          textIntervalX: 0,
          textAngleX: 0,
          isShowAxisLineX: true,
          reversalX: false,
          lineColorX: `rgb(11, 150, 142)`,
          lineWidthX: 1,
          nameX: ``,
          nameLocationX: `end`,
          nameColorX: `#fff`,
          nameFontSizeX: 14,
          nameFontWeightX: `normal`,
          nameFontStyleX: `normal`,
          nameFontFamilyX: `sans-serif`,
          isShowSplitLineX: false,
          splitLineColorX: `#fff`,
          splitLineWidthX: 1,
          isShowY: true,
          isShowAxisLabelY: true,
          maxY: ``,
          positionY: `left`,
          offsetY: 0,
          textColorY: `rgb(11, 150, 142)`,
          textFontSizeY: 14,
          textFontWeightY: `normal`,
          textFontStyleY: `normal`,
          textFontFamilyY: `sans-serif`,
          scale: false,
          splitNumberY: 0,
          textAngleY: 0,
          isShowAxisLineY: true,
          reversalY: false,
          lineColorY: `rgb(11, 150, 142)`,
          lineWidthY: 1,
          textNameY: ``,
          nameLocationY: `end`,
          nameColorY: `#fff`,
          nameFontSizeY: 14,
          nameFontWeightY: `normal`,
          nameFontStyleY: `normal`,
          nameFontFamilyY: `sans-serif`,
          isShowSplitLineY: false,
          splitLineColorY: `#fff`,
          splitLineWidthY: 1,
          isShowLegend: true,
          legendName: ``,
          legendColor: `rgb(11, 150, 142)`,
          legendFontSize: 12,
          legendFontWeight: `normal`,
          legendFontStyle: `normal`,
          legendFontFamily: `sans-serif`,
          legendWidth: 12,
          legendHeight: 12,
          lateralPosition: `center`,
          longitudinalPosition: `top`,
          layoutFront: `horizontal`,
          isShow: true,
          fontDataName: ``,
          fontPosition: `insideTop`,
          fontDistance: -10,
          fontColor: `rgb(11, 150, 142)`,
          fontSize: 12,
          fontWeight: `normal`,
          fontStyle: `normal`,
          fontFamily: `sans-serif`,
          isShowTooltip: true,
          tooltipTrigger: `axis`,
          tooltipAxisPointerType: `shadow`,
          tooltipFontSize: 16,
          tooltipColor: `rgb(11, 150, 142)`,
          tooltipFontWeight: `normal`,
          tooltipFontStyle: `normal`,
          tooltipFontFamily: `sans-serif`,
          marginLeft: 10,
          marginRight: 50,
          marginTop: 50,
          marginBottom: 10,
          customColor: [
            {
              color: `rgb(73, 146, 255)`,
            },
            {
              color: `rgb(124, 255, 178)`,
            },
            {
              color: `rgb(253, 221, 96)`,
            },
            {
              color: `rgb(255, 110, 118)`,
            },
            {
              color: `rgb(88, 217, 249)`,
            },
            {
              color: `rgb(5, 192, 145)`,
            },
          ],
          tipsColor: `rgb(11, 150, 142)`,
        },
        charttool980y: {
          isShowTitle: true,
          text: ``,
          textColor: `rgb(11, 150, 142)`,
          textFontSize: 20,
          textFontWeight: `normal`,
          textFontStyle: `normal`,
          textFontFamily: `sans-serif`,
          subtext: ``,
          subtextColor: `rgb(11, 150, 142)`,
          subtextFontSize: 20,
          subtextFontWeight: `normal`,
          subtextFontStyle: `normal`,
          subtextFontFamily: `sans-serif`,
          titleLeft: `center`,
          titleTop: 5,
          titleItemGap: 0,
          innerNumber: 30,
          outerNumber: 60,
          clockwise: true,
          startAngle: 90,
          minAngle: 0,
          minShowLabelAngle: 0,
          borderRadius: 10,
          isShowEmphasisLabel: true,
          emphasisLabelFontSize: 24,
          emphasisLabelFontColor: ``,
          emphasisLabelFontWeight: `bold`,
          emphasisLabelFontStyle: `normal`,
          emphasisLabelFontFamily: `sans-serif`,
          borderColor: ``,
          borderWidth: 1,
          borderType: `solid`,
          shadowBlur: 10,
          shadowColor: `rgba(0, 0, 0, 0.5)`,
          isShowLegend: true,
          legendColor: `rgb(11, 150, 142)`,
          legendFontSize: 12,
          legendFontWeight: `normal`,
          legendFontStyle: `normal`,
          legendFontFamily: `sans-serif`,
          legendWidth: 12,
          legendHeight: 12,
          lateralPosition: `center`,
          longitudinalPosition: `top`,
          layoutFront: `horizontal`,
          isShow: true,
          numberValue: true,
          percentage: false,
          percentPrecision: 2,
          position: `outside`,
          padding: 0,
          rotate: 0,
          fontSize: 12,
          fontColor: `rgb(11, 150, 142)`,
          fontWeight: `normal`,
          fontStyle: `normal`,
          fontFamily: `sans-serif`,
          isShowLabelLine: true,
          labelLineSmooth: false,
          labelLineLength: 5,
          labelLineLength2: 15,
          lineStyleColor: ``,
          lineStyleWidth: 1,
          lineStyleType: `solid`,
          isShowTooltip: true,
          tooltipBackgroundColor: `#333`,
          tooltipFontSize: 16,
          tooltipColor: `rgb(11, 150, 142)`,
          tooltipFontWeight: `normal`,
          tooltipFontStyle: `normal`,
          tooltipFontFamily: `sans-serif`,
          tooltipBorderColor: `#333`,
          tooltipBorderWidth: 0,
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          customColor: [
            {
              color: `rgb(73, 146, 255)`,
            },
            {
              color: `rgb(124, 255, 178)`,
            },
            {
              color: `rgb(253, 221, 96)`,
            },
            {
              color: `rgb(255, 110, 118)`,
            },
            {
              color: `rgb(88, 217, 249)`,
            },
            {
              color: `rgb(5, 192, 145)`,
            },
          ],
          componentLinkage: [],
          tipsColor: `rgb(11, 150, 142)`,
          textColorX: `rgb(11, 150, 142)`,
          textColorY: `rgb(11, 150, 142)`,
          lineColorY: `rgb(11, 150, 142)`,
          lineColorX: `rgb(11, 150, 142)`,
        },
        charttoolemla: {
          isShowTitle: true,
          text: ``,
          textColor: `rgb(11, 150, 142)`,
          textFontSize: 20,
          textFontWeight: `normal`,
          textFontStyle: `normal`,
          textFontFamily: `sans-serif`,
          subtext: ``,
          subtextColor: `rgb(11, 150, 142)`,
          subtextFontSize: 20,
          subtextFontWeight: `normal`,
          subtextFontStyle: `normal`,
          subtextFontFamily: `sans-serif`,
          titleLeft: `center`,
          titleTop: 5,
          titleItemGap: 0,
          markPoint: true,
          pointSize: 5,
          symbol: `circle`,
          smoothCurve: true,
          lineWidth: 5,
          area: true,
          areaThickness: 15,
          isShowX: false,
          isShowAxisLabelX: true,
          positionX: `bottom`,
          offsetX: 0,
          textColorX: `rgb(11, 150, 142)`,
          textFontSizeX: 14,
          textFontWeightX: `normal`,
          textFontStyleX: `normal`,
          textFontFamilyX: `sans-serif`,
          textRowsBreakAuto: false,
          textRowsNum: ``,
          textIntervalX: 0,
          textAngleX: 0,
          isShowAxisLineX: true,
          reversalX: false,
          lineColorX: `rgb(11, 150, 142)`,
          lineWidthX: 1,
          nameX: ``,
          nameLocationX: `end`,
          nameColorX: `#fff`,
          nameFontSizeX: 14,
          nameFontWeightX: `normal`,
          nameFontStyleX: `normal`,
          nameFontFamilyX: `sans-serif`,
          isShowSplitLineX: false,
          splitLineColorX: `#fff`,
          splitLineWidthX: 1,
          isShowY: false,
          isShowAxisLabelY: true,
          maxY: ``,
          positionY: `left`,
          offsetY: 0,
          textColorY: `rgb(11, 150, 142)`,
          textFontSizeY: 14,
          textFontWeightY: `normal`,
          textFontStyleY: `normal`,
          textFontFamilyY: `sans-serif`,
          scale: false,
          splitNumberY: 0,
          textAngleY: 0,
          isShowAxisLineY: true,
          reversalY: false,
          lineColorY: `rgb(11, 150, 142)`,
          lineWidthY: 1,
          textNameY: ``,
          nameLocationY: `end`,
          nameColorY: `#fff`,
          nameFontSizeY: 14,
          nameFontWeightY: `normal`,
          nameFontStyleY: `normal`,
          nameFontFamilyY: `sans-serif`,
          isShowSplitLineY: false,
          splitLineColorY: `#fff`,
          splitLineWidthY: 1,
          isShowLegend: true,
          legendName: ``,
          legendColor: `rgb(11, 150, 142)`,
          legendFontSize: 12,
          legendFontWeight: `normal`,
          legendFontStyle: `normal`,
          legendFontFamily: `sans-serif`,
          legendWidth: 12,
          legendHeight: 12,
          lateralPosition: `center`,
          longitudinalPosition: `top`,
          layoutFront: `horizontal`,
          isShow: false,
          percentSign: false,
          fontPosition: `top`,
          fontDistance: 0,
          fontColor: `rgb(11, 150, 142)`,
          fontSize: 12,
          fontWeight: `normal`,
          fontStyle: `normal`,
          fontFamily: `sans-serif`,
          isShowTooltip: true,
          tooltipTrigger: `axis`,
          tooltipAxisPointerType: `shadow`,
          tooltipFontSize: 16,
          tooltipColor: `rgb(11, 150, 142)`,
          tooltipFontWeight: `normal`,
          tooltipFontStyle: `normal`,
          tooltipFontFamily: `sans-serif`,
          marginLeft: 10,
          marginRight: 50,
          marginTop: 50,
          marginBottom: 10,
          customColor: [
            {
              color: `#0b968e`,
            },
            {
              color: `rgb(124, 255, 178)`,
            },
            {
              color: `rgb(253, 221, 96)`,
            },
            {
              color: `rgb(255, 110, 118)`,
            },
            {
              color: `rgb(88, 217, 249)`,
            },
            {
              color: `rgb(5, 192, 145)`,
            },
          ],
          tipsColor: `rgb(11, 150, 142)`,
        },
      },
      screentype: `w`,
      readDataPermission: {
        num2kkmy: true,
        scrollingtablef015: true,
        imgz0ul: true,
        charttoolb9p3: true,
        charttool7any: true,
        charttoolcrk2: true,
        charttool980y: true,
        num0a4m: true,
        numo3p3: true,
        numqyvd: true,
        num04nv: true,
        img0fpq: true,
        imgm852: true,
        num64w0: true,
        titlegn0s: true,
        charttoolemla: true,
        groplwre: true,
        img1y3e: true,
        titlevbfo: true,
        groupjmma: true,
        imgh1h7: true,
        titlez710: true,
        groupd947: true,
        imgs0xe: true,
        titlekdcn: true,
        groupmbsa: true,
        imgkw5m: true,
        titlep2yh: true,
        groupc0p1: true,
        imgwykp: true,
        titleghj3: true,
        groupyqd8: true,
        img7do5: true,
        titlet06w: true,
        gropmala: true,
        imgolv5: true,
        imgyr6o: true,
        titlea1tr: true,
        title7js8: true,
        titlekaf7: true,
        titler218: true,
        title2md2: true,
        titlet5ff: true,
        imgpor0: true,
        img33hv: true,
        imgavox: true,
        imghe0q: true,
        imgmadz: true,
        datetime5rgf: true,
        imgwe3w: true,
        gropuxat: true,
      },
    }
  },
  components: {},
}
</script>
<style scoped>
.dv-full-screen-container {
  transform: scale(1);
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
  transform-origin: left top;
  z-index: 499;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 1920px;
  height: 1080px;
  background-color: '#040404';
  background-size: cover;
  background-repeat: no-repeat;
}

.div-full-screen {
  background-size: cover;
  background-repeat: no-repeat;
}

.bigitem {
  position: absolute;
  will-change: transform;
}

.bigechartitem:hover {
  z-index: 1900 !important;
}

.layouttable {
  height: 100%;
  display: flex;
}

.layouttable .layouttable-item {
  height: 100%;
  position: relative;
  float: left;
}

.itemcontent {
  width: 100%;
  height: 100%;
}

.bigbutton {
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>
<style scoped></style>
