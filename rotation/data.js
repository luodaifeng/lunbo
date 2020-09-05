var data = Mock.mock("mock-data", "get", {
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  "list|5": [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      "id|+1": 1,
      "imgUrl|1": [
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b25b794ed0fb84c786202d1449c2aeb5.jpg?w=2452&h=920",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/84cec825f1cd04ea6554fece8ecbc236.jpg?thumb=1&w=1103&h=414&f=webp&q=90",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c005ea5a2b25094adcbb250faab309b.jpg?thumb=1&w=1103&h=414&f=webp&q=90",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/33366082cf3f5561d2c4950d94974a85.jpg?thumb=1&w=1103&h=414&f=webp&q=90",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a6d74432da3ee355087e8e9d5eb46057.jpg?thumb=1&w=1103&h=414&f=webp&q=90",
      ],
    },
  ],
});
