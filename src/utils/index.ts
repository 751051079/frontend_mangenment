
export interface TreeProps<T> {
  id: string | number;
  parentId: string | number;
  children: TreeProps<T>[]
}
export function handleTree<T>(data: TreeProps<T>[]) {
  let tree: TreeProps<T>[] = []
  let isNotFirst = []
  for (let x in data) {
    let oldData = data[x]
    oldData.children = []
    if (data[x].parentId === '' || data[x].parentId === '0') {
      tree.push(oldData)
    }
    else {
      isNotFirst.push(oldData)
    }
  }

  for (let t of tree) {
    adaptToChildrenList(t, isNotFirst);
  }
  function adaptToChildrenList(data: TreeProps<T>, notData: TreeProps<T>[]) {

    for (let x in notData) {
      let oldData = notData[x]
      oldData.children = []
      if (data.id === notData[x].parentId) {
        data.children.push(oldData)
        notData.splice(Number(x), 1)
      }
    }
    for (let t of data.children) {
      adaptToChildrenList(t, notData);
    }
  }

  return tree;
}