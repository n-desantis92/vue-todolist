var app = new Vue(
  {
    el: "#todolist",
    data: {
      newItem: "",
      lista: [
        "cocomero",
        "cipolla",
        "sesamo",
        "farina"
      ],

    },
    methods: {
      deletItem: function(itemIndex) {
        this.lista.splice(itemIndex, 1);
      },
      addElement: function() {
        this.lista.push(this.newItem);
        this.newItem = "";
      }
    }
});
