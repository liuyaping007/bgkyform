<template>
    <div _tmplitem="29" class="dv-full-screen-container" :style="css">
        <div
            _tmplitem="29"
            style="position: absolute;width:1920px;height:1080px; background-image: url(http://f.kyform.cn/echartdb//bigimg/2023-08-06/a74da474-2907-402b-9e4d-efd29828f544.png); background-size: contain;background-color:rgba(13, 42, 67);"
            class="div-full-screen"
        >
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 146px; left: 17px; width: 428px; height: 444px; transform: translate(0px, 0px); z-index: 1028;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent animation-fadeInLeftBig"
                    style="opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <myechart
                        _tmplitem="1"
                        ref="sel169097236681283"
                        :options="fromData.sel169097236681283"
                    ></myechart>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 622px; left: 1156px; width: 120px; height: 40px; transform: translate(0px, 0px); z-index: 1027;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent "
                    style="opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <titlecontrol
                        _tmplitem="2"
                        ref="sel169123913535252"
                        :w="120"
                        :h="40"
                        :val="fromData.sel169123913535252"
                        cssstyle="opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                    ></titlecontrol>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 687px; left: 1101px; width: 422px; height: 362px; transform: translate(0px, 0px); z-index: 1026;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent animation-wobble"
                    style="opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <myechart
                        _tmplitem="3"
                        ref="sel169123911962516"
                        :options="fromData.sel169123911962516"
                    ></myechart>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 241px; left: 474px; width: 468px; height: 429px; transform: translate(0px, 0px); z-index: 1025;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent animation-fadeInUp"
                    style="opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <myechart
                        _tmplitem="4"
                        ref="sel169123906929899"
                        :options="fromData.sel169123906929899"
                    ></myechart>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 247px; left: 965px; width: 483px; height: 349px; transform: translate(0px, 0px); z-index: 1024;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent animation-bounce"
                    style="opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <myechart
                        _tmplitem="5"
                        ref="sel169123900229393"
                        :options="fromData.sel169123900229393"
                    ></myechart>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 102px; left: 1467px; width: 120px; height: 39px; transform: translate(0px, 0px); z-index: 1023;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent "
                    style="opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <titlecontrol
                        _tmplitem="6"
                        ref="sel169123892713772"
                        :w="120"
                        :h="39"
                        :val="fromData.sel169123892713772"
                        cssstyle="opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                    ></titlecontrol>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 142px; left: 1481px; width: 412px; height: 451px; transform: translate(0px, 0px); z-index: 1022;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent animation-fadeInRight"
                    style="opacity:1;height:190pxpx;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <eltable
                        _tmplitem="7"
                        :isheadshow="true"
                        :scrollnum="3"
                        :step="1"
                        :direction="1"
                        :singleheight="32"
                        :singlewidth="0"
                        tableheadcolor="rgba(1, 41, 109, 1)"
                        tablerowhovercolor="rgb(18 86 157 / 90%)"
                        tablerowcolor="rgb(0 25 82)"
                        tablerowdoublecolor="rgb(2 51 125)"
                        tablebordercolor="#42669a"
                        tableheadfontcolor="#fff"
                        tablehoverfontcolor="#fff"
                        tablerowfontcolor="#fff"
                        :elcolumn="fromData.sel169123886139602_elcolumn"
                        :tabledata="fromData.sel169123886139602"
                        :h="451"
                        :w="412"
                    >
                    </eltable>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 870px; left: 1706px; width: 196px; height: 120px; transform: translate(0px, 0px); z-index: 1021;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent "
                    style="opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <myechart
                        _tmplitem="8"
                        ref="sel169097334183167"
                        :options="fromData.sel169097334183167"
                    ></myechart>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 632px; left: 1440px; width: 194px; height: 38px; transform: translate(0px, 0px); z-index: 1020;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent "
                    style="opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <titlecontrol
                        _tmplitem="9"
                        ref="sel169097323369309"
                        :w="194"
                        :h="38"
                        :val="fromData.sel169097323369309"
                        cssstyle="opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                    ></titlecontrol>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 669px; left: 481px; width: 661px; height: 389px; transform: translate(0px, 0px); z-index: 1019;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent animation-wobble"
                    style="opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <myechart
                        _tmplitem="10"
                        ref="sel169097317469458"
                        :options="fromData.sel169097317469458"
                    ></myechart>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 669px; left: 13px; width: 440px; height: 393px; transform: translate(0px, 0px); z-index: 1018;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent animation-flipInX"
                    style="opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <myechart
                        _tmplitem="11"
                        ref="sel169097299491199"
                        :options="fromData.sel169097299491199"
                    ></myechart>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 28px; left: 814px; width: 300px; height: 37px; transform: translate(0px, 0px); z-index: 1017;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent "
                    style="opacity:1;font-size:23px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <titlecontrol
                        _tmplitem="12"
                        ref="sel169097290621824"
                        :w="300"
                        :h="37"
                        :val="fromData.sel169097290621824"
                        cssstyle="opacity:1;font-size:23px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                    ></titlecontrol>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 140px; left: 1329px; width: 101px; height: 40px; transform: translate(0px, 0px); z-index: 1016;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent "
                    style="opacity:1;font-size:13px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <titlecontrol
                        _tmplitem="13"
                        ref="sel169097258373498"
                        :w="101"
                        :h="40"
                        :val="fromData.sel169097258373498"
                        cssstyle="opacity:1;font-size:13px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                    ></titlecontrol>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 121px; left: 747px; width: 62px; height: 34px; transform: translate(0px, 0px); z-index: 1015;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent "
                    style="opacity:1;font-size:13px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <titlecontrol
                        _tmplitem="14"
                        ref="sel169097250184184"
                        :w="62"
                        :h="34"
                        :val="fromData.sel169097250184184"
                        cssstyle="opacity:1;font-size:13px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                    ></titlecontrol>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 143px; left: 505px; width: 132px; height: 40px; transform: translate(0px, 0px); z-index: 1014;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent "
                    style="opacity:1;font-size:13px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <titlecontrol
                        _tmplitem="15"
                        ref="sel169097244755724"
                        :w="132"
                        :h="40"
                        :val="fromData.sel169097244755724"
                        cssstyle="opacity:1;font-size:13px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                    ></titlecontrol>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 120px; left: 419px; width: 300px; height: 56px; transform: translate(0px, 0px); z-index: 1013;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent "
                    style="opacity:1;font-size:13px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <titlecontrol
                        _tmplitem="16"
                        ref="sel169097242117105"
                        :w="300"
                        :h="56"
                        :val="fromData.sel169097242117105"
                        cssstyle="opacity:1;font-size:13px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                    ></titlecontrol>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 141px; left: 735px; width: 83px; height: 37px; transform: translate(0px, 0px); z-index: 1012;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent "
                    style="opacity:1;font-size:13px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <titlecontrol
                        _tmplitem="17"
                        ref="sel169097252645748"
                        :w="83"
                        :h="37"
                        :val="fromData.sel169097252645748"
                        cssstyle="opacity:1;font-size:13px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                    ></titlecontrol>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 124px; left: 1346px; width: 62px; height: 34px; transform: translate(0px, 0px); z-index: 1011;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent "
                    style="opacity:1;font-size:13px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <titlecontrol
                        _tmplitem="18"
                        ref="sel169097261879234"
                        :w="62"
                        :h="34"
                        :val="fromData.sel169097261879234"
                        cssstyle="opacity:1;font-size:13px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                    ></titlecontrol>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 140px; left: 919px; width: 101px; height: 40px; transform: translate(0px, 0px); z-index: 1010;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent "
                    style="opacity:1;font-size:13px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <titlecontrol
                        _tmplitem="19"
                        ref="sel169097265044329"
                        :w="101"
                        :h="40"
                        :val="fromData.sel169097265044329"
                        cssstyle="opacity:1;font-size:13px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                    ></titlecontrol>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 143px; left: 1118px; width: 101px; height: 40px; transform: translate(0px, 0px); z-index: 109;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent "
                    style="opacity:1;font-size:13px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <titlecontrol
                        _tmplitem="20"
                        ref="sel169097265872554"
                        :w="101"
                        :h="40"
                        :val="fromData.sel169097265872554"
                        cssstyle="opacity:1;font-size:13px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                    ></titlecontrol>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 122px; left: 939px; width: 62px; height: 34px; transform: translate(0px, 0px); z-index: 108;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent "
                    style="opacity:1;font-size:13px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <titlecontrol
                        _tmplitem="21"
                        ref="sel169097268331831"
                        :w="62"
                        :h="34"
                        :val="fromData.sel169097268331831"
                        cssstyle="opacity:1;font-size:13px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                    ></titlecontrol>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 122px; left: 1141px; width: 62px; height: 34px; transform: translate(0px, 0px); z-index: 107;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent "
                    style="opacity:1;font-size:13px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <titlecontrol
                        _tmplitem="22"
                        ref="sel169097270773313"
                        :w="62"
                        :h="34"
                        :val="fromData.sel169097270773313"
                        cssstyle="opacity:1;font-size:13px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                    ></titlecontrol>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 674px; left: 1475px; width: 196px; height: 120px; transform: translate(0px, 0px); z-index: 106;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent "
                    style="opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <myechart
                        _tmplitem="23"
                        ref="sel169097335026288"
                        :options="fromData.sel169097335026288"
                    ></myechart>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 672px; left: 1693px; width: 196px; height: 120px; transform: translate(0px, 0px); z-index: 105;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent "
                    style="opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <myechart
                        _tmplitem="24"
                        ref="sel169097335859156"
                        :options="fromData.sel169097335859156"
                    ></myechart>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 879px; left: 1477px; width: 196px; height: 120px; transform: translate(0px, 0px); z-index: 104;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent "
                    style="opacity:1;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <myechart
                        _tmplitem="25"
                        ref="sel169097337653902"
                        :options="fromData.sel169097337653902"
                    ></myechart>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 630px; left: 458px; width: 194px; height: 38px; transform: translate(0px, 0px); z-index: 103;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent "
                    style="opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <titlecontrol
                        _tmplitem="26"
                        ref="sel169097362738317"
                        :w="194"
                        :h="38"
                        :val="fromData.sel169097362738317"
                        cssstyle="opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                    ></titlecontrol>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 210px; left: 473px; width: 120px; height: 40px; transform: translate(0px, 0px); z-index: 102;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent "
                    style="opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <titlecontrol
                        _tmplitem="27"
                        ref="sel16912391542148"
                        :w="120"
                        :h="40"
                        :val="fromData.sel16912391542148"
                        cssstyle="opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                    ></titlecontrol>
                </div>
            </div>
            <div
                _tmplitem="29"
                class="bigitem"
                style="top: 212px; left: 965px; width: 120px; height: 41px; transform: translate(0px, 0px); z-index: 101;"
            >
                <div
                    _tmplitem="29"
                    class="itemcontent "
                    style="opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                >
                    <titlecontrol
                        _tmplitem="28"
                        ref="sel169123917690873"
                        :w="120"
                        :h="41"
                        :val="fromData.sel169123917690873"
                        cssstyle="opacity:1;font-size:16px ;color:rgb(255, 255, 255) ;border-radius:0px;border-width:0px ;border-style:solid ;line-height:40px ;--animation:2s;--animation-flash:0.2s;transform:  rotateX(0deg) rotateY(0deg) rotateZ(0deg);"
                    ></titlecontrol>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import myechart from '@/components/myechart/newindex.vue'
import fullscreen from '@/components/fullscreen.vue'
import eltable from '@/components/scrollgridlist/eltable.vue'
import iconimg from '@/components/iconimg.vue'
import titlecontrol from '@/components/titlecontrol.vue'
import horseindex from '@/components/horseindex.vue'
import textareaindex from '@/components/textareaindex.vue'
import backgroundunit1 from '@/components/backgroundunit/backgroundunit1.vue'
import backgroundunit2 from '@/components/backgroundunit/backgroundunit2.vue'
import backgroundunit3 from '@/components/backgroundunit/backgroundunit3.vue'
import backgroundunit4 from '@/components/backgroundunit/backgroundunit4.vue'
import backgroundunit5 from '@/components/backgroundunit/backgroundunit5.vue'
import backgroundunit7 from '@/components/backgroundunit/backgroundunit7.vue'
import backgroundunit8 from '@/components/backgroundunit/backgroundunit8.vue'
import backgroundunit9 from '@/components/backgroundunit/backgroundunit9.vue'
import backgroundunit10 from '@/components/backgroundunit/backgroundunit10.vue'
import backgroundunit11 from '@/components/backgroundunit/backgroundunit11.vue'
import backgroundunit12 from '@/components/backgroundunit/backgroundunit12.vue'
import myfabric from '@/components/myfabric/hotspot.vue'
import bigimg from '@/components/bigImg.vue'
export default {
    data() {
        return {
            w: 1920,
            css: '',
            h: 1080,
            bg:
                'http://f.kyform.cn/echartdb//bigimg/2023-08-06/a74da474-2907-402b-9e4d-efd29828f544.png',
            bgColor: 'rgba(13, 42, 67)',
            fromData: {
                sel169097236681283: {
                    grid: {
                        top: '2%',
                        bottom: -15,
                        right: 30,
                        left: -30,
                        containLabel: true,
                    },
                    xAxis: {
                        show: false,
                    },
                    yAxis: [
                        {
                            triggerEvent: true,
                            show: true,
                            inverse: true,
                            data: [
                                '军工站1',
                                '军工站2',
                                '军工站3',
                                '军工站4',
                                '军工站5',
                                '军工站6',
                                '军工站7',
                                '军工站8',
                                '军工站9',
                                '军工站10',
                                '军工站11',
                                '军工站12',
                                '军工站13',
                                '军工站14',
                                '军工站15',
                                '军工站16',
                            ],
                            axisLine: {
                                show: false,
                            },
                            splitLine: {
                                show: false,
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLabel: {
                                interval: 0,
                                color: '#fff',
                                align: 'left',
                                margin: 80,
                                fontSize: 13,
                                rich: {
                                    idx0: {
                                        color: '#FB375E',
                                        backgroundColor: '#FFE8EC',
                                        borderRadius: 100,
                                        padding: [5, 8],
                                    },
                                    idx1: {
                                        color: '#FF9023',
                                        backgroundColor: '#FFEACF',
                                        borderRadius: 100,
                                        padding: [5, 8],
                                    },
                                    idx2: {
                                        color: '#01B599',
                                        backgroundColor: '#E1F7F3',
                                        borderRadius: 100,
                                        padding: [5, 8],
                                    },
                                    idx: {
                                        color: '#333',
                                        borderRadius: 100,
                                        padding: [5, 8],
                                    },
                                    title: {
                                        width: 165,
                                    },
                                },
                            },
                        },
                    ],
                    series: [
                        {
                            name: '条',
                            type: 'bar',
                            yAxisIndex: 0,
                            data: [
                                {
                                    name: '军工站1',
                                    value: '10',
                                    sum: 10,
                                },
                                {
                                    name: '军工站2',
                                    value: '9',
                                    sum: 10,
                                },
                                {
                                    name: '军工站3',
                                    value: '8',
                                    sum: 10,
                                },
                                {
                                    name: '军工站4',
                                    value: '7',
                                    sum: 10,
                                },
                                {
                                    name: '军工站5',
                                    value: '7',
                                    sum: 10,
                                },
                                {
                                    name: '军工站6',
                                    value: '6',
                                    sum: 10,
                                },
                                {
                                    name: '军工站7',
                                    value: '6',
                                    sum: 10,
                                },
                                {
                                    name: '军工站8',
                                    value: '5',
                                    sum: 10,
                                },
                                {
                                    name: '军工站9',
                                    value: '5',
                                    sum: 10,
                                },
                                {
                                    name: '军工站10',
                                    value: '4',
                                    sum: 10,
                                },
                                {
                                    name: '军工站11',
                                    value: '4',
                                    sum: 10,
                                },
                                {
                                    name: '军工站12',
                                    value: '2',
                                    sum: 10,
                                },
                                {
                                    name: '军工站13',
                                    value: '1',
                                    sum: 10,
                                },
                                {
                                    name: '军工站14',
                                    value: '1',
                                    sum: 10,
                                },
                                {
                                    name: '军工站15',
                                    value: '1',
                                    sum: 10,
                                },
                                {
                                    name: '军工站16',
                                    value: '0',
                                    sum: 10,
                                },
                            ],
                            barWidth: 10,
                            itemStyle: {
                                color: 'rgb(73, 146, 255)',
                                barBorderRadius: 30,
                            },
                        },
                    ],
                },
                sel169123913535252: '占比测试',
                sel169123911962516: {
                    grid: {},
                    polar: {},
                    angleAxis: {
                        show: false,
                        interval: 1,
                        type: 'category',
                        data: [],
                    },
                    radiusAxis: {
                        show: false,
                    },
                    series: [
                        {
                            type: 'pie',
                            radius: ['68%', '90%'],
                            hoverAnimation: false,
                            itemStyle: {
                                color: 'transparent',
                            },
                            labelLine: {
                                normal: {
                                    show: false,
                                    length: 30,
                                    length2: 55,
                                },
                            },
                            label: {
                                normal: {
                                    position: 'inside',
                                    align: 'right',
                                },
                            },
                            name: '',
                            data: [
                                {
                                    value: 1,
                                    name: 'Chrome移动版',
                                    label: {
                                        color: 'rgba(25, 255, 224)',
                                        rotate: -22.5,
                                    },
                                    itemStyle: {},
                                    emphasis: {
                                        itemStyle: {},
                                    },
                                },
                                {
                                    value: 1,
                                    name: 'Google Chrome',
                                    label: {
                                        color: '#fff',
                                        rotate: -67.5,
                                    },
                                    itemStyle: {},
                                    emphasis: {
                                        itemStyle: {},
                                    },
                                },
                                {
                                    value: 1,
                                    name: '微信浏览器',
                                    label: {
                                        color: '#fff',
                                        rotate: 67.5,
                                    },
                                    itemStyle: {},
                                    emphasis: {
                                        itemStyle: {},
                                    },
                                },
                                {
                                    value: 1,
                                    name: '手机百度',
                                    label: {
                                        color: '#fff',
                                        rotate: 22.5,
                                    },
                                    itemStyle: {},
                                    emphasis: {
                                        itemStyle: {},
                                    },
                                },
                                {
                                    value: 1,
                                    name: 'UC浏览器（其他）',
                                    label: {
                                        color: '#fff',
                                        rotate: -22.5,
                                    },
                                    itemStyle: {},
                                    emphasis: {
                                        itemStyle: {},
                                    },
                                },
                                {
                                    value: 1,
                                    name: 'QQ手机浏览器',
                                    label: {
                                        color: '#fff',
                                        rotate: -67.5,
                                    },
                                    itemStyle: {},
                                    emphasis: {
                                        itemStyle: {},
                                    },
                                },
                                {
                                    value: 1,
                                    name: 'Safari移动版',
                                    label: {
                                        color: '#fff',
                                        rotate: 67.5,
                                    },
                                    itemStyle: {},
                                    emphasis: {
                                        itemStyle: {},
                                    },
                                },
                                {
                                    value: 1,
                                    name: '其它',
                                    label: {
                                        color: '#fff',
                                        rotate: 22.5,
                                    },
                                    itemStyle: {},
                                    emphasis: {
                                        itemStyle: {},
                                    },
                                },
                            ],
                        },
                        {
                            stack: 'a',
                            type: 'pie',
                            radius: ['75%', '42%'],
                            roseType: 'area',
                            zlevel: 10,
                            itemStyle: {
                                color: '#4169E1',
                            },
                            emphasis: {
                                itemStyle: {
                                    color: '#6A5ACD',
                                },
                            },
                            label: {
                                normal: {
                                    show: true,
                                    textStyle: {
                                        fontSize: 18,
                                        color: '#fff',
                                    },
                                    position: 'inside',
                                    rotate: 30,
                                    align: 'right',
                                    fontWeight: 'bold',
                                    formatter: '{c}%',
                                },
                                emphasis: {
                                    show: true,
                                },
                            },
                            animation: false,
                            data: [
                                {
                                    value: 100,
                                    name: 'Chrome移动版',
                                    label: {
                                        color: '#333',
                                        rotate: -22.5,
                                    },
                                    itemStyle: {
                                        color: 'rgba(25, 255, 224)',
                                    },
                                    emphasis: {
                                        itemStyle: {
                                            color: 'rgba(25, 255, 224)',
                                        },
                                    },
                                },
                                {
                                    value: 80,
                                    name: 'Google Chrome',
                                    label: {
                                        color: '#fff',
                                        rotate: -67.5,
                                    },
                                    itemStyle: {
                                        color: '#4169E1',
                                    },
                                    emphasis: {
                                        itemStyle: {
                                            color: '#6A5ACD',
                                        },
                                    },
                                },
                                {
                                    value: 65,
                                    name: '微信浏览器',
                                    label: {
                                        color: '#fff',
                                        rotate: 67.5,
                                    },
                                    itemStyle: {
                                        color: '#4169E1',
                                    },
                                    emphasis: {
                                        itemStyle: {
                                            color: '#6A5ACD',
                                        },
                                    },
                                },
                                {
                                    value: 65,
                                    name: '手机百度',
                                    label: {
                                        color: '#fff',
                                        rotate: 22.5,
                                    },
                                    itemStyle: {
                                        color: '#4169E1',
                                    },
                                    emphasis: {
                                        itemStyle: {
                                            color: '#6A5ACD',
                                        },
                                    },
                                },
                                {
                                    value: 60,
                                    name: 'UC浏览器（其他）',
                                    label: {
                                        color: '#fff',
                                        rotate: -22.5,
                                    },
                                    itemStyle: {
                                        color: '#4169E1',
                                    },
                                    emphasis: {
                                        itemStyle: {
                                            color: '#6A5ACD',
                                        },
                                    },
                                },
                                {
                                    value: 60,
                                    name: 'QQ手机浏览器',
                                    label: {
                                        color: '#fff',
                                        rotate: -67.5,
                                    },
                                    itemStyle: {
                                        color: '#4169E1',
                                    },
                                    emphasis: {
                                        itemStyle: {
                                            color: '#6A5ACD',
                                        },
                                    },
                                },
                                {
                                    value: 50,
                                    name: 'Safari移动版',
                                    label: {
                                        color: '#fff',
                                        rotate: 67.5,
                                    },
                                    itemStyle: {
                                        color: '#4169E1',
                                    },
                                    emphasis: {
                                        itemStyle: {
                                            color: '#6A5ACD',
                                        },
                                    },
                                },
                                {
                                    value: 90,
                                    name: '其它',
                                    label: {
                                        color: '#fff',
                                        rotate: 22.5,
                                    },
                                    itemStyle: {
                                        color: '#4169E1',
                                    },
                                    emphasis: {
                                        itemStyle: {
                                            color: '#6A5ACD',
                                        },
                                    },
                                },
                            ],
                        },
                        {
                            type: 'pie',
                            zlevel: 99,
                            radius: ['15%', '90%'],
                            selectedOffset: 0,
                            animation: false,
                            hoverAnimation: false,
                            label: {
                                normal: {
                                    show: false,
                                },
                            },
                            data: [
                                {
                                    value: 1,
                                    itemStyle: {
                                        color: 'rgba(25, 255, 224,0.05)',
                                    },
                                },
                                {
                                    value: 1,
                                    itemStyle: {
                                        color: 'transparent',
                                    },
                                },
                                {
                                    value: 1,
                                    itemStyle: {
                                        color: 'transparent',
                                    },
                                },
                                {
                                    value: 1,
                                    itemStyle: {
                                        color: 'transparent',
                                    },
                                },
                                {
                                    value: 1,
                                    itemStyle: {
                                        color: 'transparent',
                                    },
                                },
                                {
                                    value: 1,
                                    itemStyle: {
                                        color: 'transparent',
                                    },
                                },
                                {
                                    value: 1,
                                    itemStyle: {
                                        color: 'transparent',
                                    },
                                },
                                {
                                    value: 1,
                                    itemStyle: {
                                        color: 'transparent',
                                    },
                                },
                            ],
                        },
                    ],
                },
                sel169123906929899: {
                    color: [
                        '#37A2DA',
                        '#32C5E9',
                        '#67E0E3',
                        '#9FE6B8',
                        '#FFDB5C',
                    ],
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c}%',
                    },
                    legend: {
                        data: ['展现', '点击', '访问', '咨询', '订单'],
                    },
                    series: [
                        {
                            name: '预期',
                            type: 'funnel',
                            left: '10%',
                            width: '80%',
                            label: {
                                normal: {
                                    formatter: '{b}预期',
                                },
                                emphasis: {
                                    position: 'inside',
                                    formatter: '{b}预期: {c}%',
                                },
                            },
                            labelLine: {
                                normal: {
                                    show: false,
                                },
                            },
                            itemStyle: {
                                normal: {
                                    opacity: 0.7,
                                },
                            },
                            data: [
                                {
                                    value: 60,
                                    name: '访问',
                                },
                                {
                                    value: 40,
                                    name: '咨询',
                                },
                                {
                                    value: 20,
                                    name: '订单',
                                },
                                {
                                    value: 80,
                                    name: '点击',
                                },
                                {
                                    value: 100,
                                    name: '展现',
                                },
                            ],
                        },
                        {
                            name: '实际',
                            type: 'funnel',
                            left: '10%',
                            width: '80%',
                            maxSize: '80%',
                            label: {
                                normal: {
                                    position: 'inside',
                                    formatter: '{c}%',
                                    textStyle: {
                                        color: '#fff',
                                    },
                                },
                                emphasis: {
                                    position: 'inside',
                                    formatter: '{b}实际: {c}%',
                                },
                            },
                            data: [
                                {
                                    value: 30,
                                    name: '访问',
                                },
                                {
                                    value: 10,
                                    name: '咨询',
                                },
                                {
                                    value: 5,
                                    name: '订单',
                                },
                                {
                                    value: 50,
                                    name: '点击',
                                },
                                {
                                    value: 80,
                                    name: '展现',
                                },
                            ],
                        },
                    ],
                },
                sel169123900229393: {
                    color: [
                        '#0E7CE2',
                        '#FF8352',
                        '#E271DE',
                        '#F8456B',
                        '#00FFFF',
                        '#4AEAB0',
                    ],
                    title: [
                        {
                            text: '{name|总量}\n{val|10,260}',
                            top: 'center',
                            left: 'center',
                            textStyle: {
                                rich: {
                                    name: {
                                        fontSize: 14,
                                        fontWeight: 'normal',
                                        color: '#fff',
                                        padding: [10, 0],
                                    },
                                    val: {
                                        fontSize: 32,
                                        fontWeight: 'bold',
                                        color: '#fff',
                                    },
                                },
                            },
                        },
                        {
                            text: '单位：个',
                            top: 20,
                            left: 20,
                            textStyle: {
                                fontSize: 14,
                                color: '#fff',
                                fontWeight: 400,
                            },
                        },
                    ],
                    series: [
                        {
                            type: 'pie',
                            radius: ['45%', '60%'],
                            center: ['50%', '50%'],
                            data: [
                                {
                                    name: 'A类',
                                    value: '3720',
                                },
                                {
                                    name: 'B类',
                                    value: '2920',
                                },
                                {
                                    name: 'C类',
                                    value: '2200',
                                },
                                {
                                    name: 'D类',
                                    value: '1420',
                                },
                            ],
                            hoverAnimation: false,
                            itemStyle: {
                                normal: {
                                    borderColor: '#fff',
                                    borderWidth: 2,
                                },
                            },
                            labelLine: {
                                normal: {
                                    length: 20,
                                    length2: 120,
                                    lineStyle: {
                                        color: '#fff',
                                    },
                                },
                            },
                            label: {
                                normal: {
                                    padding: [0, -100, 25, -100],
                                    rich: {
                                        icon: {
                                            fontSize: 16,
                                        },
                                        name: {
                                            fontSize: 14,
                                            padding: [0, 10, 0, 4],
                                            color: '#fff',
                                        },
                                        value: {
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            color: '#fff',
                                        },
                                    },
                                },
                            },
                        },
                    ],
                },
                sel169123892713772: '具体库存',
                sel169123886139602: [
                    {
                        prop: 'date',
                        label: '日期',
                        width: 120,
                    },
                    {
                        prop: 'name',
                        label: '姓名',
                        width: 80,
                    },
                    {
                        prop: 'address',
                        label: '地址',
                    },
                ],
                sel169123886139602_elcolumn: [
                    {
                        prop: 'date',
                        label: '日期',
                        width: 120,
                    },
                    {
                        prop: 'name',
                        label: '姓名',
                        width: 80,
                    },
                    {
                        prop: 'address',
                        label: '地址',
                    },
                ],
                sel169097334183167: {
                    graphic: [
                        {
                            type: 'group',
                            left: 'center',
                            bottom: 10,
                            children: [
                                {
                                    type: 'text',
                                    z: 100,
                                    left: '10',
                                    top: 'middle',
                                    style: {
                                        fill: '#fff',
                                        text: '其它',
                                        font: '16px Microsoft YaHei',
                                    },
                                },
                                {
                                    type: 'text',
                                    z: 100,
                                    left: '120',
                                    top: 'middle',
                                    style: {
                                        fill: '#fff',
                                        text: '108kG',
                                        font: '12px Microsoft YaHei',
                                    },
                                },
                            ],
                        },
                    ],
                    series: [
                        {
                            type: 'liquidFill',
                            radius: '70%',
                            center: ['50%', '40%'],
                            data: [0.48, 0.48, 0.48, 0.48, 0.48],
                            backgroundStyle: {
                                borderWidth: 5,
                                borderColor: '#1daaeb',
                                color: '#fff',
                            },
                            label: {
                                normal: {
                                    formatter: '58.00%',
                                    textStyle: {
                                        fontSize: 20,
                                        color: '#fff',
                                    },
                                },
                            },
                        },
                    ],
                },
                sel169097323369309: '粮食占比',
                sel169097317469458: {
                    grid: {
                        left: '12%',
                        top: '5%',
                        bottom: '12%',
                        right: '8%',
                    },
                    xAxis: {
                        data: [
                            '军工站1',
                            '军工站2',
                            '军工站3',
                            '军工站4',
                            '军工站5',
                            '军工站6',
                            '军工站7',
                            '军工站8',
                        ],
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#fff',
                                width: 1,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#fff',
                                fontSize: 12,
                            },
                            color: '#fff',
                        },
                    },
                    yAxis: [
                        {
                            axisTick: {
                                show: false,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#fff',
                                    width: 1,
                                },
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#fff',
                                },
                                color: '#fff',
                            },
                            splitArea: {
                                areaStyle: {
                                    color: 'rgba(255,255,255,.5)',
                                },
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: 'rgba(255, 129, 109, 0.1)',
                                    width: 0.5,
                                    type: 'dashed',
                                },
                            },
                        },
                    ],
                    series: [
                        {
                            type: 'pictorialBar',
                            barCategoryGap: '0%',
                            symbol:
                                'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                            label: {
                                show: true,
                                position: 'top',
                                distance: 15,
                                color: '#08DFFE',
                                fontWeight: 'bolder',
                                fontSize: 15,
                            },
                            itemStyle: {
                                normal: {
                                    color: 'rgb(73, 146, 255)',
                                },
                                emphasis: {
                                    opacity: 1,
                                },
                                color: 'rgb(73, 146, 255)',
                            },
                            data: [123, 60, 25, 18, 12, 9, 2, 1],
                        },
                    ],
                },
                sel169097299491199: {
                    tooltip: {
                        trigger: 'axis',
                    },
                    legend: {
                        data: ['出库', '入库'],
                        textStyle: {
                            fontSize: 12,
                            color: '#fff',
                        },
                        right: '4%',
                    },
                    grid: {
                        top: '14%',
                        left: '4%',
                        right: '4%',
                        bottom: '12%',
                        containLabel: true,
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: [
                            '2018-11-11 17:01',
                            '2018-11-11 17:02',
                            '2018-11-11 17:03',
                            '2018-11-11 17:04',
                            '2018-11-11 17:05',
                            '2018-11-11 17:06',
                            '2018-11-11 17:07',
                            '2018-11-11 17:08',
                            '2018-11-11 17:09',
                            '2018-11-11 17:10',
                            '2018-11-11 17:11',
                            '2018-11-11 17:12',
                            '2018-11-11 17:13',
                            '2018-11-11 17:14',
                            '2018-11-11 17:15',
                            '2018-11-11 17:16',
                            '2018-11-11 17:17',
                            '2018-11-11 17:18',
                            '2018-11-11 17:19',
                            '2018-11-11 17:20',
                        ],
                        axisLabel: {
                            textStyle: {
                                color: '#fff',
                            },
                            color: '#fff',
                        },
                    },
                    yAxis: {
                        name: 'kg',
                        type: 'value',
                        axisLabel: {
                            formatter: '{value}',
                            textStyle: {
                                color: '#fff',
                            },
                            color: '#fff',
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgb(23,255,243,0.3)',
                            },
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#fff',
                            },
                        },
                    },
                    series: [
                        {
                            name: '出库',
                            type: 'line',
                            color: 'rgba(23, 255, 243)',
                            smooth: true,
                            areaStyle: {
                                normal: {
                                    color: {
                                        colorStops: [
                                            {
                                                offset: 0,
                                                color:
                                                    'rgba(23, 255, 243, 0.3)',
                                            },
                                            {
                                                offset: 0.8,
                                                color: 'rgba(23, 255, 243, 0)',
                                            },
                                        ],
                                        x: 0,
                                        y: 0,
                                        x2: 0,
                                        y2: 1,
                                        type: 'linear',
                                        global: false,
                                    },
                                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                                    shadowBlur: 10,
                                },
                            },
                            symbol: 'circle',
                            symbolSize: 5,
                            data: [
                                451,
                                352,
                                303,
                                534,
                                95,
                                236,
                                217,
                                328,
                                159,
                                151,
                                231,
                                192,
                                453,
                                524,
                                165,
                                236,
                                527,
                                328,
                                129,
                                530,
                            ],
                            markLine: {
                                silent: true,
                                data: [
                                    {
                                        yAxis: 5,
                                    },
                                    {
                                        yAxis: 100,
                                    },
                                    {
                                        yAxis: 200,
                                    },
                                    {
                                        yAxis: 300,
                                    },
                                    {
                                        yAxis: 400,
                                    },
                                ],
                            },
                        },
                        {
                            name: '入库',
                            type: 'line',
                            color: 'rgba(255,100,97)',
                            smooth: true,
                            areaStyle: {
                                normal: {
                                    color: {
                                        colorStops: [
                                            {
                                                offset: 0,
                                                color: 'rgba(255,100,97, 0.3)',
                                            },
                                            {
                                                offset: 0.8,
                                                color: 'rgba(255,100,97, 0)',
                                            },
                                        ],
                                        x: 0,
                                        y: 0,
                                        x2: 0,
                                        y2: 1,
                                        type: 'linear',
                                        global: false,
                                    },
                                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                                    shadowBlur: 10,
                                },
                            },
                            symbol: 'circle',
                            symbolSize: 5,
                            data: [
                                360,
                                545,
                                80,
                                192,
                                330,
                                580,
                                192,
                                80,
                                250,
                                453,
                                352,
                                28,
                                625,
                                345,
                                65,
                                325,
                                468,
                                108,
                                253,
                                98,
                            ],
                        },
                    ],
                },
                sel169097290621824: 'XXX某大屏统计',
                sel169097258373498: '其它',
                sel169097250184184: '2000',
                sel169097244755724: '销售金额',
                sel169097242117105: '2100',
                sel169097252645748: '大米',
                sel169097261879234: '2000',
                sel169097265044329: '食用油',
                sel169097265872554: '大豆',
                sel169097268331831: '2000',
                sel169097270773313: '2000',
                sel169097335026288: {
                    graphic: [
                        {
                            type: 'group',
                            left: 'center',
                            bottom: 10,
                            children: [
                                {
                                    type: 'text',
                                    z: 100,
                                    left: '10',
                                    top: 'middle',
                                    style: {
                                        fill: '#fff',
                                        text: '大米占比',
                                        font: '12px Microsoft YaHei',
                                    },
                                },
                                {
                                    type: 'text',
                                    z: 100,
                                    left: '120',
                                    top: 'middle',
                                    style: {
                                        fill: '#fff',
                                        text: '128kg',
                                        font: '12px Microsoft YaHei',
                                    },
                                },
                            ],
                        },
                    ],
                    series: [
                        {
                            type: 'liquidFill',
                            radius: '70%',
                            center: ['50%', '40%'],
                            data: [0.48, 0.48, 0.48, 0.48, 0.48],
                            backgroundStyle: {
                                borderWidth: 5,
                                borderColor: '#1daaeb',
                                color: '#fff',
                            },
                            label: {
                                normal: {
                                    formatter: '48.00%',
                                    textStyle: {
                                        fontSize: 12,
                                        color: '#fff',
                                    },
                                },
                            },
                        },
                    ],
                },
                sel169097335859156: {
                    graphic: [
                        {
                            type: 'group',
                            left: 'center',
                            bottom: 10,
                            children: [
                                {
                                    type: 'text',
                                    z: 100,
                                    left: '10',
                                    top: 'middle',
                                    style: {
                                        fill: '#fff',
                                        text: '大豆',
                                        font: '12px Microsoft YaHei',
                                    },
                                },
                                {
                                    type: 'text',
                                    z: 100,
                                    left: '120',
                                    top: 'middle',
                                    style: {
                                        fill: '#fff',
                                        text: '79kg',
                                        font: '12px Microsoft YaHei',
                                    },
                                },
                            ],
                        },
                    ],
                    series: [
                        {
                            type: 'liquidFill',
                            radius: '70%',
                            center: ['50%', '40%'],
                            data: [0.48, 0.48, 0.48, 0.48, 0.48],
                            backgroundStyle: {
                                borderWidth: 5,
                                borderColor: '#1daaeb',
                                color: '#fff',
                            },
                            label: {
                                normal: {
                                    formatter: '38.00%',
                                    textStyle: {
                                        fontSize: 14,
                                        color: '#fff',
                                    },
                                },
                            },
                        },
                    ],
                },
                sel169097337653902: {
                    graphic: [
                        {
                            type: 'group',
                            left: 'center',
                            bottom: 10,
                            children: [
                                {
                                    type: 'text',
                                    z: 100,
                                    left: '10',
                                    top: 'middle',
                                    style: {
                                        fill: '#fff',
                                        text: '食用油',
                                        font: '12px Microsoft YaHei',
                                    },
                                },
                                {
                                    type: 'text',
                                    z: 100,
                                    left: '120',
                                    top: 'middle',
                                    style: {
                                        fill: '#fff',
                                        text: '58kG',
                                        font: '12px Microsoft YaHei',
                                    },
                                },
                            ],
                        },
                    ],
                    series: [
                        {
                            type: 'liquidFill',
                            radius: '70%',
                            center: ['50%', '40%'],
                            data: [0.48, 0.48, 0.48, 0.48, 0.48],
                            backgroundStyle: {
                                borderWidth: 5,
                                borderColor: '#1daaeb',
                                color: '#fff',
                            },
                            label: {
                                normal: {
                                    formatter: '18.00%',
                                    textStyle: {
                                        fontSize: 12,
                                        color: '#fff',
                                    },
                                },
                            },
                        },
                    ],
                },
                sel169097362738317: '军供站库存排行',
                sel16912391542148: '测试标题',
                sel169123917690873: '测试标题',
            },
        }
    },
    methods: {
        created_sys() {
            ///系统方法 判断页面大小 使其自动适应
            let $this = this
            this.w = this.w === undefined ? 1920 : this.w
            $this.css = `  width: ${$this.w}px;height: ${$this.h}px; ${
                $this.bg === ''
                    ? ''
                    : 'background-image:url(' +
                      $this.bg +
                      ');background-size: contain;'
            }  transform: scale(${document.body.clientWidth / $this.w});  ${
                $this.bgColor === ''
                    ? ''
                    : 'background-color:' +
                      $this.bgColor +
                      ';left:calc( 50% - ' +
                      $this.w / 2 +
                      'px);'
            }`

            window.addEventListener('resize', () => {
                $this.css = `  width: ${$this.w}px;height: ${$this.h}px; ${
                    $this.bg === ''
                        ? ''
                        : 'background-image:url(' +
                          $this.bg +
                          ');    background-size: contain;'
                }  transform: scale(${document.body.clientWidth / $this.w}); ${
                    $this.bgColor === ''
                        ? ''
                        : 'background-color:' + $this.bgColor + ';'
                }`
            })
            $this.css = `transform: scale(${document.body.clientWidth /
                $this.w})`
            if (this.loadfunmounted_sys !== undefined) {
                this.loadfunmounted_sys()
            }
        },
        loadfunmounted_sys() {},
    },
    created() {
        this.created_sys()
        if (this.funmounted_sys !== undefined) {
            this.funmounted_sys()
        }
    },
    components: {
        myechart,
        titlecontrol,
        horseindex,
        textareaindex,
        backgroundunit1,
        backgroundunit2,
        backgroundunit3,
        backgroundunit4,
        backgroundunit5,
        backgroundunit7,
        backgroundunit8,
        backgroundunit9,
        backgroundunit10,
        backgroundunit11,
        backgroundunit12,
        bigimg,
        myfabric,
        eltable,
        iconimg,
        fullscreen,
    },
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
    overflow: hidden;
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
</style>
<style scoped></style>
