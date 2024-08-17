document.getElementById("idname").addEventListener("blur",checkName);
      function checkName() {
        //取得元素
        let theName = document.getElementById("idname");
        console.log(theName);
        //取得元素值
        let theNameVal = theName.value;
        console.log(typeof theNameVal); //string

        let idsp = document.getElementById("idsp1");
        let theNameLen = theNameVal.length;
        let flag1 = false;

        //判斷元素值是否為空白，密碼長度是否大於等於2
        if (theNameVal == "") {
            idsp.innerHTML = "請輸入姓名";
            idsp.style.color = "#FF5555";
        }
        else if (theNameLen >= 2) {
          //如果長度是否大於等於2，判斷是否為中文
          for (let i = 0; i < theNameLen; i++) {
            let NameChr = theNameVal.charCodeAt(i);
            if (NameChr >= 0x4e00 && NameChr <= 0x9fff) flag1 = true;
            break;
          } //end of for
          if (flag1 === true) {
            idsp.innerHTML = "輸入正確";
            idsp.style.color = "#50FA7B";
          }
          else {
          idsp.innerHTML = "請輸入中文";
          idsp.style.color = "#FF5555";
        }
        } else {
            idsp.innerHTML = "密碼長度必須大於等於2";
            idsp.style.color = "#FF5555";
        }
      }
      document.getElementById("idPwd").addEventListener("blur",checkPwd);
      function checkPwd() {
        //取得元素
        let thePwd = document.getElementById("idPwd");
        //console.log(thePwdObj);
        //取得元素值
        let thePwdVal = thePwd.value;
        // console.log (typeof thePwdVal);  //string

        //取得存放提示字元位置
        let idsp = document.getElementById("idsp2");
        let thePwdLen = thePwdVal.length;
        let flag1 = false,
          flag2 = false,
          flag3 = false;

        //判斷元素值是否為空白，密碼長度是否大於等於6
        if (thePwdVal == "") {
            idsp.innerHTML = "請輸入密碼";
            idsp.style.color = "#FF5555";
        }
        else if (thePwdLen >= 6) {
          //如果長度是否大於等於6，判斷是否包含字母、數字、特殊符號
          for (let i = 0; i < thePwdLen; i++) {
            let PwdChr = thePwdVal.charAt(i).toUpperCase();
            if (PwdChr >= "A" && PwdChr <= "Z") flag1 = true;
            else if (PwdChr >= "0" && PwdChr <= "9") flag2 = true;
            // else if (PwdChr >= "[`%~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]")
            else if ((PwdChr = "[@#$!$%&*]")) flag3 = true;
            if (flag1 && flag2 && flag3) break;
          } //end of for
          if (flag1 && flag2 && flag3) {
            idsp.innerHTML = "輸入正確";
            idsp.style.color = "#50FA7B";
          } else {
          idsp.innerHTML = "請輸入包含英文字母、數字及特殊符號的密碼";
          idsp.style.color = "#FF5555";
          }
        } else {
          idsp.innerHTML = "輸入的密碼長度必須大於等於6";
          idsp.style.color = "#FF5555";
        }
      }

      document.getElementById("idDate").addEventListener("blur",checkDd);
      function checkDd() {
        //取得元素
        let theDate = document.getElementById("idDate");
        // console.log(theDate);
        //取得元素值
        let theDateVal = theDate.value;
        let theDateFormat = theDateVal.Format;
        let idsp = document.getElementById("idsp3");

        //判斷元素值是否為空白，內容是否符合日期輸入格式xxxx/xx/xx
        if (theDateVal == "") {
            idsp.innerHTML = "請輸入出生日期";
            idsp.style.color = "#FF5555";
        }
        else if ((theDateFormat = /^\d{4}\/\d{2}\/\d{2}$/.test(theDateVal))) {
          //如果符合輸入格式，則判斷月份, 日期是否正確
          let enterDate = new Date(theDateVal);
          let currentDate = new Date();
          let gdate = enterDate.getDate();
          let vdate = theDateVal.substr(8);
          //(檢查是否符合日期格式) && (檢查是否符合閏年)
          if ((enterDate <= currentDate) && (gdate == vdate)) {
            idsp.innerHTML = "輸入正確";
            idsp.style.color = "#50FA7B";
          } else {
            idsp.innerHTML = "日期輸入錯誤";
            idsp.style.color = "#FF5555";
          }
        } else {
          idsp.innerHTML = "日期格式錯誤";
          idsp.style.color = "#FF5555";
        }
      }