class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hashFunc(value) {
    const data = JSON.stringify(value);
    let sum = 0;
    for (let i = 0; i < data?.length; i++) {
      sum = sum + data.charCodeAt(i);
    }
    return sum % this.size;
  }

  set(data) {
    const index = this.hashFunc(data);
    const tableArr = this.table[index];
    if (!tableArr) {
      this.table[index] = [data];
    } else {
      this.table[index].push(data);
    }
  }

  get(data) {
    const index = this.hashFunc(data);

    const tableArr = this.table[index] || [];

    for (let i = 0; i < tableArr?.length; i++) {
      if (JSON.stringify(tableArr[i]) === JSON.stringify(data))
        return tableArr[i];
    }
    return "not Found!";
  }
}

const table = new HashTable(5);

table.set(10);
table.set({
  id: "10",
  phone: "01797177287",
});

console.log(table.table[0]);

console.log(table.table[1]);

console.log(table.table[2]);

console.log(table.table[3]);

console.log(table.table[4]);

console.log(table.get(10));
