function getMinMax(str) {
  function selectMinMax( itm ) {
    (itm < arr_min || typeof(arr_min)=='undefined') ? arr_min = +itm : null;
    (itm > arr_max || typeof(arr_max)=='undefined') ? arr_max = +itm : null;  
  };
  let arr = str.split(' '), arr_min, arr_max;
  arr.forEach(itm => isFinite( itm ) ? selectMinMax( itm ) : null);
  return {
  min: arr_min,
  max: arr_max
  };
}
