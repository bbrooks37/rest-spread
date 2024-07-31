function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

    const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

    function findMin(...nums) {
        return nums.reduce((min, num) => {
          return num < min ? num : min;
        });
      }

        const findMin = (...nums) => Math.min(...nums);
        findMin(1, 4, 12, -3); // -3
        findMin(1, -1); // -1
        findMin(3, 1); // 1


        function mergeObjects(obj1, obj2) {
            return {...obj1, ...obj2};
          }

            const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
            mergeObjects({a:1, b:2}, {c:3, d:4}); // {a:1, b:2, c:3, d:4}

            function doubleAndReturnArgs(arr, ...args) {
                return [...arr, ...args.map(val => val *2)];

              } 
              const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)];
                doubleAndReturnArgs([1,2,3], 4,4); // [1,2,3,8,8]
                doubleAndReturnArgs([2], 10, 4); // [2, 20, 8]

                function removeRandom(items) {
                    const randomIndex = Math.floor(Math.random() * items.length);
                    return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
                  }

                    const removeRandom = (items) => {
                        const randomIndex = Math.floor(Math.random() * items.length);
                        return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
                      }

                      function extend(array1, array2) {
                        return [...array1, ...array2];
                      }

                        const extend = (array1, array2) => [...array1, ...array2];

                        function addKeyVal(obj, key, val) {
                            return {...obj, [key]: val};
                          }

                            const addKeyVal = (obj, key, val) => ({...obj, [key]: val});

                            function removeKey(obj, key) {
                                const newObj = { ...obj };
                                delete newObj[key];
                                return newObj;
                              }

                                const removeKey = (obj, key) => {
                                    const newObj = { ...obj };
                                    delete newObj[key];
                                    return newObj;
                                  }

                                  function combine(obj1, obj2) {
                                    return { ...obj1, ...obj2 };
                                  }

                                    const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

                                    function update(obj, key, val) {
                                        return { ...obj, [key]: val };
                                      }

                                        const update = (obj, key, val) => ({ ...obj, [key]: val });

                                        function copyArrayAndAdd(arr, val) {
                                            return [...arr, val];
                                          }

                                            const copyArrayAndAdd = (arr, val) => [...arr, val];

                                            function copyObjectAndAdd(obj, key, val) {
                                                return { ...obj, [key]: val };
                                              }

                                                const copyObjectAndAdd = (obj, key, val) => ({ ...obj, [key]: val });