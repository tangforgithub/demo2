window.onload = function () {



    //导航点击效果 
    
    var oGolv = document.getElementById("golv");
    var arrList = oGolv.getElementsByTagName("li");

    for (var j = 0; j < arrList.length; j++) {
        arrList[j].index = j;
        arrList[j].onclick = function () {
            for (var i = 0 ; i < arrList.length; i++) {
                arrList[i].classList.remove("golv");
            }
            this.classList.add("golv");
        }






        //轮播图 1

        var oBa1 = document.getElementById("banner1");
        var arrLi1 = oBa1.getElementsByTagName("li");
        var arrDiv1 = oBa1.getElementsByClassName("banner")[0];
        var page1 = 0;

        for (var i = 0; i < arrLi1.length; i++) {
            arrLi1[i].index = i;
            arrLi1[i].onclick = function () {
                for (var j = 0; j < arrLi1.length; j++) {
                    arrLi1[j].classList.remove("now");
                }
                this.classList.add("now");
                arrDiv1.style.left = this.index * -1200 + "px";
                page1 = this.index;
            }
        }


        var oNext1 = document.getElementById("next");
        var oPrev1 = document.getElementById("prev");

        oNext1.onclick = function () {
            page1++;
            if (page1 >= arrLi1.length) {
                page1 = 0;
            }

            arrDiv1.style.left = page1 * -1200 + "px";
            for (var j = 0; j < arrLi1.length; j++) {
                arrLi1[j].classList.remove("now");
            }
            arrLi1[page1].classList.add("now");

        }

        oPrev1.onclick = function () {
            page1--;
            if (page1 < 0) {
                page1 = arrLi1.length - 1;
            }
            arrDiv1.style.left = page1 * -1200 + "px";
            for (var j = 0; j < arrLi1.length; j++) {
                arrLi1[j].classList.remove("now");
            }
            arrLi1[page1].classList.add("now");
        }



        //轮播图 2


        var oBa2 = document.getElementById("banner2");
        var arrLi2 = oBa2.getElementsByTagName("li");
        var arrDiv2 = oBa2.getElementsByClassName("banner")[0];
        var page2 = 0;

        for (var i = 0; i < arrLi2.length; i++) {
            arrLi2[i].index = i;
            arrLi2[i].onclick = function () {
                for (var j = 0; j < arrLi2.length; j++) {
                    arrLi2[j].classList.remove("now");
                }
                this.classList.add("now");
                arrDiv2.style.left = this.index * -1200 + "px";
                page2 = this.index;
            }
        }


        var oNext2 = document.getElementById("Span2");
        var oPrev2 = document.getElementById("Span1");

        oNext2.onclick = function () {
            page2++;
            if (page2 >= arrLi2.length) {
                page2 = 0;
            }

            arrDiv2.style.left = page2 * -1200 + "px";
            for (var j = 0; j < arrLi2.length; j++) {
                arrLi2[j].classList.remove("now");
            }
            arrLi2[page2].classList.add("now");

        }

        oPrev2.onclick = function () {
            page2--;
            if (page2 < 0) {
                page2 = arrLi2.length - 1;
            }
            arrDiv2.style.left = page2 * -1200 + "px";
            for (var j = 0; j < arrLi2.length; j++) {
                arrLi2[j].classList.remove("now");
            }
            arrLi2[page2].classList.add("now");
        }



        //轮播图 3

        var oBa3 = document.getElementById("banner3");
        var arrLi3 = oBa3.getElementsByTagName("li");
        var arrDiv3 = oBa3.getElementsByClassName("banner")[0];
        var page3 = 0;

        for (var i = 0; i < arrLi3.length; i++) {
            arrLi3[i].index = i;
            arrLi3[i].onclick = function () {
                for (var j = 0; j < arrLi3.length; j++) {
                    arrLi3[j].classList.remove("now");
                }
                this.classList.add("now");
                arrDiv3.style.left = this.index * -1200 + "px";
                page3 = this.index;
            }
        }


        var oNext3 = document.getElementById("Span4");
        var oPrev3 = document.getElementById("Span3");

        oNext3.onclick = function () {
            page3++;
            if (page3 >= arrLi3.length) {
                page3 = 0;
            }

            arrDiv3.style.left = page3 * -1200 + "px";
            for (var j = 0; j < arrLi3.length; j++) {
                arrLi3[j].classList.remove("now");
            }
            arrLi3[page3].classList.add("now");

        }

        oPrev3.onclick = function () {
            page3--;
            if (page3 < 0) {
                page3 = arrLi3.length - 1;
            }
            arrDiv3.style.left = page3 * -1200 + "px";
            for (var j = 0; j < arrLi3.length; j++) {
                arrLi3[j].classList.remove("now");
            }
            arrLi3[page3].classList.add("now");
        }

        //轮播图 4

        var oBa4 = document.getElementById("banner4");
        var arrLi4 = oBa4.getElementsByTagName("li");
        var arrDiv4 = oBa4.getElementsByClassName("banner")[0];
        var page4 = 0;

        for (var i = 0; i < arrLi4.length; i++) {
            arrLi4[i].index = i;
            arrLi4[i].onclick = function () {
                for (var j = 0; j < arrLi4.length; j++) {
                    arrLi4[j].classList.remove("now");
                }
                this.classList.add("now");
                arrDiv4.style.left = this.index * -1200 + "px";
                page4 = this.index;
            }
        }


        var oNext4 = document.getElementById("Span6");
        var oPrev4 = document.getElementById("Span5");

        oNext4.onclick = function () {
            page4++;
            if (page4 >= arrLi4.length) {
                page4 = 0;
            }

            arrDiv4.style.left = page4 * -1200 + "px";
            for (var j = 0; j < arrLi4.length; j++) {
                arrLi4[j].classList.remove("now");
            }
            arrLi4[page4].classList.add("now");

        }

        oPrev4.onclick = function () {
            page4--;
            if (page4 < 0) {
                page4 = arrLi4.length - 1;
            }
            arrDiv4.style.left = page4 * -1200 + "px";
            for (var j = 0; j < arrLi4.length; j++) {
                arrLi4[j].classList.remove("now");
            }
            arrLi4[page4].classList.add("now");
        }

        //轮播图 5

        var oBa5 = document.getElementById("banner5");
        var arrLi5 = oBa5.getElementsByTagName("li");
        var arrDiv5 = oBa5.getElementsByClassName("banner")[0];
        var page5 = 0;

        for (var i = 0; i < arrLi5.length; i++) {
            arrLi5[i].index = i;
            arrLi5[i].onclick = function () {
                for (var j = 0; j < arrLi5.length; j++) {
                    arrLi5[j].classList.remove("now");
                }
                this.classList.add("now");
                arrDiv5.style.left = this.index * -1200 + "px";
                page5 = this.index;
            }
        }


        var oNext5 = document.getElementById("Span8");
        var oPrev5 = document.getElementById("Span7");

        oNext5.onclick = function () {
            page5++;
            if (page5 >= arrLi5.length) {
                page5 = 0;
            }

            arrDiv5.style.left = page5 * -1200 + "px";
            for (var j = 0; j < arrLi5.length; j++) {
                arrLi5[j].classList.remove("now");
            }
            arrLi5[page5].classList.add("now");

        }

        oPrev5.onclick = function () {
            page5--;
            if (page5 < 0) {
                page5 = arrLi5.length - 1;
            }
            arrDiv5.style.left = page5 * -1200 + "px";
            for (var j = 0; j < arrLi5.length; j++) {
                arrLi5[j].classList.remove("now");
            }
            arrLi5[page5].classList.add("now");
        }



        //点击切换轮播图

        var oTit1 = document.getElementById("title1");
        var oTit2 = document.getElementById("title2");
        var oTit3 = document.getElementById("title3");
        var oTit4 = document.getElementById("title4");
        var oTit5 = document.getElementById("title5");
        var ob1 = document.getElementsByClassName("teality1")[0];
        var ob2 = document.getElementsByClassName("teality2")[0];
        var ob3 = document.getElementsByClassName("teality3")[0];
        var ob4 = document.getElementsByClassName("teality4")[0];
        var ob5 = document.getElementsByClassName("teality5")[0];

        oTit1.onclick = function () {
            ob1.style.display = "block";
            ob2.style.display = "none";
            ob3.style.display = "none";
            ob4.style.display = "none";
            ob5.style.display = "none";
            oTit1.style.color = "white";
            oTit2.style.color = "#969696";
            oTit3.style.color = "#969696";
            oTit5.style.color = "#969696";
            oTit4.style.color = "#969696";
        }
        oTit2.onclick = function () {
            ob2.style.display = "block";
            ob1.style.display = "none";
            ob3.style.display = "none";
            ob4.style.display = "none";
            ob5.style.display = "none";
            oTit2.style.color = "white";
            oTit1.style.color = "#969696";
            oTit3.style.color = "#969696";
            oTit5.style.color = "#969696";
            oTit4.style.color = "#969696";
        }
        oTit3.onclick = function () {
            ob3.style.display = "block";
            ob2.style.display = "none";
            ob1.style.display = "none";
            ob4.style.display = "none";
            ob5.style.display = "none";
            oTit3.style.color = "white";
            oTit2.style.color = "#969696";
            oTit1.style.color = "#969696";
            oTit5.style.color = "#969696";
            oTit4.style.color = "#969696";
        }
        oTit4.onclick = function () {
            ob4.style.display = "block";
            ob2.style.display = "none";
            ob3.style.display = "none";
            ob1.style.display = "none";
            ob5.style.display = "none";
            oTit4.style.color = "white";
            oTit2.style.color = "#969696";
            oTit3.style.color = "#969696";
            oTit5.style.color = "#969696";
            oTit1.style.color = "#969696";
        }
        oTit5.onclick = function () {
            ob5.style.display = "block";
            ob1.style.display = "none";
            ob3.style.display = "none";
            ob4.style.display = "none";
            ob2.style.display = "none";
            oTit5.style.color = "white";
            oTit2.style.color = "#969696";
            oTit3.style.color = "#969696";
            oTit1.style.color = "#969696";
            oTit4.style.color = "#969696";
        }


        //搜索框下拉效果


        var oDrow = document.getElementById("drow");
        var oInput = document.getElementById("input");
        var arrB2 = oDrow.getElementsByClassName("b2");
        var arrList = oDrow.getElementsByTagName("li")[0];

        oInput.onfocus = function () {
            oDrow.style.display = "block";
        };
        oInput.onblur = function () {
            oDrow.style.display = "none";
        }





        //for (var i = 0; i < arrList.length; i++) {
        //    arrList[i].index = i;
        arrList.onclick = function () {
            //oInput.value = "";
            //oInput.value = this.innerHTML;
            alert(1)
            //}
        }

    }

    //  特效轮播图

    var oMian3 = document.getElementById("main3");
    var oMain33 = oMian3.getElementsByClassName("main33")[0];
    var arrLii = oMian3.getElementsByTagName("li");
    var arrImgg = oMain33.getElementsByTagName("img");
    var papa = 0;

    for (var i = 0; i < arrLii.length; i++) {
      
        arrLii[i].index = i;
        arrLii[i].onclick = function () {
            for (var j = 0; j < arrLii.length; j++) {
                arrImgg[j].classList.remove("secend");
                arrImgg[j].classList.add("first");
                arrImgg[j].style.left = "";
            }
            arrImgg[this.index+1].classList.remove("first");
            arrImgg[this.index+1].classList.add("secend");
            arrImgg[this.index+1].style.left = this.index * 600 + 200 + "px";
            oMain33.style.left = this.index * -600 + "px";
            papa = this.index;
        }
    }

    var oNextt = oMian3.getElementsByClassName("right")[0];
    var oPrevv = oMian3.getElementsByClassName("left")[0];

    var timerr = function () {
        papa++;
        if (papa >= arrLii.length-1) {
            papa = 0;
        }
        for (var j = 0; j < arrLii.length; j++) {
            arrImgg[j].classList.remove("secend");
            arrImgg[j].classList.add("first");
            arrImgg[j].style.left = "";
        }
        arrImgg[papa + 1].classList.remove("first");
        arrImgg[papa + 1].classList.add("secend");
        arrImgg[papa + 1].style.left = papa * 600 + 200 + "px";
        oMain33.style.left = papa * -600 + "px";
     }

    setInterval(timerr, 3000);

    oNextt.onclick = timerr;
    oPrevv.onclick = function () {
        papa--;
        if (papa < 0) {
            papa = arrLii.length - 2;
        }
        for (var j = 0; j < arrLii.length; j++) {
            arrImgg[j].classList.remove("secend");
            arrImgg[j].classList.add("first");
            arrImgg[j].style.left = "";
        }
        arrImgg[papa + 1].classList.remove("first");
        arrImgg[papa + 1].classList.add("secend");
        arrImgg[papa + 1].style.left = papa * 600 + 200 + "px";
        oMain33.style.left = papa * -600 + "px";
    }
  


}
