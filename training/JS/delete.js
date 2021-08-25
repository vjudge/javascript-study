delete 0
console.log('delete 0: ', delete 0)
// delete 0:  true

let obj = {
    name: 'object',
    size: 5
}
delete obj.name
console.log('obj: ', obj)
// obj:  { size: 5 }

delete obj
console.log('obj: ', obj)
// obj:  { size: 5 }
// delete 其实只能删除一种引用，即对象的成员（Property）。



 
