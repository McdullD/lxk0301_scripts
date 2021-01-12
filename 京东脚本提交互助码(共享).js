auto.waitFor();
console.show()

var PLANT_BEAN_SHARECODES = ""
var FRUITSHARECODES = ""
var PETSHARECODES = ""
var DREAM_FACTORY_SHARE_CODES = ""
var DDFACTORY_SHARECODES = ""
var JDZZ_SHARECODES = ""
var JDJOY_SHARECODES = ""
var JD_CASH_SHARECODES = ""

//按要求一个个填入码

var 种豆码 = PLANT_BEAN_SHARECODES.split("@")
var 农场码 = FRUITSHARECODES.split("@")
var 萌宠码 = PETSHARECODES.split("@")
var 京喜工厂码 = DREAM_FACTORY_SHARE_CODES.split("@")
var 宠汪汪码 = []
var 东东工厂码 = DDFACTORY_SHARECODES.split("@")
var 京东赚赚码 = JDZZ_SHARECODES.split("@")
var CrazyJoy码 = JDJOY_SHARECODES.split("@")
var 签到领现金码 = JD_CASH_SHARECODES.split("@")

/**本地Secrets 参数名
 * PLANT_BEAN_SHARECODES=种豆得豆
 * FRUITSHARECODES=东东农场
 * PETSHARECODES=东东萌宠、
 * DREAM_FACTORY_SHARE_CODES=京喜工厂
 * DDFACTORY_SHARECODES=东东工厂
 * JDZZ_SHARECODES=京东赚赚
 * JDJOY_SHARECODES=CrazyJoy
 * JD_CASH_SHARECODES=签到领现金
 * JD_COOKIE=账号
 * PUSH_KEY=sever酱
 * cookie格式：pt_key=XXX;pt_pin=XXX;
 */


var 种豆 = "http://api.turinglabs.net/api/v1/jd/bean/create/"
var 农场 = "http://api.turinglabs.net/api/v1/jd/farm/create/"
var 萌宠 = "http://api.turinglabs.net/api/v1/jd/pet/create/"
var 京喜工厂 = "http://api.turinglabs.net/api/v1/jd/jxfactory/create/"
var 宠汪汪 = "http://api.turinglabs.net/api/v1/jd/joy/create/"
var 东东工厂 = "http://api.turinglabs.net/api/v1/jd/ddfactory/create/"
var 京东赚赚 = "https://code.chiang.fun/api/v1/jd/jdzz/create/"
var CrazyJoy = "https://code.chiang.fun/api/v1/jd/jdcrazyjoy/create/"
var 签到领现金 ="https://code.chiang.fun/api/v1/jd/jdcash/create/"

var urlList = [签到领现金,种豆, 农场, 萌宠, 京喜工厂, 宠汪汪, 东东工厂,京东赚赚,CrazyJoy]
var codeList = [签到领现金码,种豆码, 农场码, 萌宠码, 京喜工厂码, 宠汪汪码, 东东工厂码,京东赚赚码,CrazyJoy码];
var text = ["签到领现金码","种豆码", "农场码", "萌宠码", "京喜工厂码", "宠汪汪码", "东东工厂码","京东赚赚码","CrazyJoy码"]

log("时间会等待有点久，稍等")

for (i = 0; i < urlList.length; i++) {

    for (t = 0; t < codeList[i].length; t++) {
        var r = http.get(urlList[i] + codeList[i][t] + "/");
        var 返回信息 = r.body.string().split(",")

        log("第" + (t + 1) + "个" + text[i] + ":" + 返回信息[1]);
sleep(2000)
        /*预留 测试有问题
        if (返回信息[1].indexOf("success") !== -1) {
            log("第" + (t + 1) + "个" + text[i] + ":" + "成功");
        } else if (返回信息[1].indexOf("This bean share code existed") !== -1) {
            log("第" + (t + 1) + "个" + text[i] + ":" + "已经提交");
        } else if (返回信息[1].indexOf("code error") !== -1) {
            log("第" + (t + 1) + "个" + text[i] + ":" + "错误");
        } else {
            log("第" + (t + 1) + "个" + text[i] + ":" + 返回信息[1]);
        }*/
        sleep(1e3)
    }

}

