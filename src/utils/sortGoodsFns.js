function getSortedByLastUpdated(goods, isUp) {
  //TODO use date-fns
  return goods
}

function getSortedByName(goods, isUp) {
  if (isUp) {
    return goods.sort((a, b) => a.fileTitle > b.fileTitle ? 1 : -1)
  } else {
    return goods.sort((a, b) => a.fileTitle < b.fileTitle ? 1 : -1)
  }
}

function getSortedByFileType(goods, isUp) {
  if (isUp) {
    return goods.sort((a, b) => a.fileType > b.fileType ? 1 : -1)
  } else {
    return goods.sort((a, b) => a.fileType < b.fileType ? 1 : -1)
  }
}

function getSortedByFav(goods, isUp) {
  if (isUp) {
    return goods.sort((a, b) => a.favorite > b.favorite ? 1 : -1)
  } else {
    return goods.sort((a, b) => a.favorite < b.favorite ? 1 : -1)
  }
}

function getSortedByViews(goods, isUp) {
  if (isUp) {
    return goods.sort((a, b) => a.views > b.views ? 1 : -1)
  } else {
    return goods.sort((a, b) => a.views < b.views ? 1 : -1)
  }
}

function getGoodChildrenSize(good) {
  return good.children.reduce((sumSize, child) => {
    let childSize = 0
    if (child.fileSize.indexOf("MB")) {
      childSize = Number.parseInt(child.fileSize.replace("MB", "")) * 1000000
    } else if (child.fileSize.indexOf("KB")) {
      childSize = Number.parseInt(child.fileSize.replace("KB", "")) * 1000
    }
    return sumSize + childSize
  }, 0)
}

function getGoodSize(good) {
  if (good.fileSize.indexOf("MB")) {
    return Number.parseInt(good.fileSize.replace("MB", "")) * 1000000
  } else if (good.fileSize.indexOf("KB")) {
    return Number.parseInt(good.fileSize.replace("KB", "")) * 1000
  }
  return 0
}

function getSortedByFileSize(goods, isUp) {
  return goods.sort((a, b) => {
    const aSize = a.children ? getGoodChildrenSize(a) : getGoodSize(a)
    const bSize = b.children ? getGoodChildrenSize(b) : getGoodSize(b)
    if (isUp) {
      return aSize < bSize ? 1 : -1
    }
    return aSize > bSize ? 1 : -1
  })
}

function getSortGoodsId(sortingMenuItems) {
  const item = sortingMenuItems.find((item) => item.upDownNot !== "not")
  let sortGoodsId = ""
  switch (item.title) {
    case "name":
      sortGoodsId = "NAME"
      break;
    case "last updated":
      sortGoodsId = "LAST_UPDATED"
      break;
    case "views":
      sortGoodsId = "VIEWS"
      break;
    case "favorites":
      sortGoodsId = "FAV"
      break;
    case "file type":
      sortGoodsId = "FILE_TYPE"
      break;
    case "file size":
      sortGoodsId = "FILE_SIZE"
      break;
    default:
      console.log("unknown title", item.title)
      break;
  }
  sortGoodsId += item.upDownNot === "up" ? "_UP" : "_DOWN"
  return sortGoodsId
}

function sortGoods(sortingMenuItems, goods) {
  const sortGoodsID = getSortGoodsId(sortingMenuItems)
  switch (sortGoodsID) {
    case "NAME_UP":
      return getSortedByName(goods, true)
    case "NAME_DOWN":
      return getSortedByName(goods, false)
    case "LAST_UPDATED_UP":
      return getSortedByLastUpdated(goods, true)
    case "LAST_UPDATED_DOWN":
      return getSortedByLastUpdated(goods, false)
    case "FILE_TYPE_UP":
      return getSortedByFileType(goods, true)
    case "FILE_TYPE_DOWN":
      return getSortedByFileType(goods, false)
    case "FILE_SIZE_UP":
      return getSortedByFileSize(goods, true)
    case "FILE_SIZE_DOWN":
      return getSortedByFileSize(goods, false)
    case "FAV_UP":
      return getSortedByFav(goods, true)
    case "FAV_DOWN":
      return getSortedByFav(goods, false)
    case "VIEWS_UP":
      return getSortedByViews(goods, true)
    case "VIEWS_DOWN":
      return getSortedByViews(goods, false)
    default:
      console.log("can't sort? unknown id", sortGoodsID)
      break
  }
}

export {
  sortGoods,
}