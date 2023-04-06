const student = {
    id: 101,
    name: 'Rifat bin Ilias',
    money: 5000,
    isRich: false,
    sub: ['english', 'math', 'bangla', 'islamic pora sona',],
    bestFriend: {
        name: 'abdul kiddos boyati',
        mejoe: 'uponnas',
    },
    takeExam: function () {
        console.log(this.name, 'taking exam');
    },

    treeday: function (expense, boksis) {
        this.money = this.money - expense - boksis;
        return this.money
    }

}

// student.takeExam();

const reamining = student.treeday(900, 100);
console.log(reamining);