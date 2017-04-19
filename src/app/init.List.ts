export class Init{
    load(){
        if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined){
            console.log('No todos Found...Creating...');
            var todos= [
                {
                    text: 'some stuff'
                },
                {
                    text: 'some stuff2'
                },
                {
                    text: 'some stuff3'
                }
            ];

            localStorage.setItem('todos', JSON.stringify(todos));
            return
        }

        if(localStorage.getItem('lists') === null || localStorage.getItem('lists') == undefined){
            console.log('No lists Found...Creating...');
            var lists= [
                {
                    title: 'title stuff'
                },
                {
                    title: 'title stuff2'
                },
                {
                    title: 'title stuff3'
                }
            ];

            localStorage.setItem('lists', JSON.stringify(lists));
            return
        }
    }
}