// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
      "Yé thế lại thêm tuổi mới",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "Lại thêm những điều mới",  // 同上...
        "Chúc qua tuổi mới cậu sẽ may mắn hơn",
        "Thành công hơn trong học tập cũng như công việc",
        "Chúc gia đình gia đình cậu luôn luôn mạnh khỏe",
        "Chúc bạn bè cậu cũng thật nhiều sức khỏe",
        "May mắn và có thể bên cậu lâu dài hơn nữa!",
        "Năm nay tớ không chúc cậu yêu tớ nựa",
        "Nhưng mà tớ mong khi tớ nói ra câu đó ",
        "Bất kì chỗ nào",
        "Bất kì ở đâu",
        "Thì lúc đó tớ mong tớ có tất cả",
        "Và có cậu",
        "Chúc mừng sinh nhật!",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的小可爱": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    // desc: {
    //     turn_on: "开始",
    //     play: "音乐",
    //     bannar_coming: "颜色",
    //     balloons_flying: "好像少点东西",
    //     cake_fadein: "蛋糕？",
    //     light_candle: "蜡烛？",
    //     wish_message: "生日快乐",
    //     story: "A MESSAGE FOR YOU",
    // }
};
