// pages/dotos/todos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search: 'init',
    todos: [
      { name: 'learning webapp', completed: true },
      { name: 'learning java', completed: true },
      { name: 'learning html', completed: false }
    ]
  },
  // 绑定输入框输入的值
  inputChangeHandle :function(e){
    // console.log(222)
    this.setData({search:e.detail.value})

  },
  /*  在点击图片按钮的守候绑定事件
        1.先在点击按钮的时候执行一段代码 
        2.拿到文本框的值
        3.将值添加到列表只*/
  addTodoHandle: function () {
    //如果文本为空,不能往下执行
    if(!this.data.search){
      wx.showToast({
        title: '请输入内容',
        icon: 'none',
        duration: 2000
      })
      
      return;}
    // console.log(this.data.search)
    //把点击过后的值添加到列表中
    var todos =this.data.todos
    todos.push({
        name:this.data.search,
        completed:false
    })
    //用于数据回填
    this.setData({todos:todos,search:''})
// console.log(11)

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})