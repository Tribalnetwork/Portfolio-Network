

   export const add = (type, input) => {
        let list = localStorage.getItem(type)
        console.log("this is list: " + list)
        if (list == null || list == undefined){
            localStorage.setItem(type, [input])
        } else {
            if(list.length >= 50){
                list = list.pop();
            }
            let update = list.push(input)
            localStorage.setItem(type, update)
        }
    }
