/*
    Форма записи:
    Роут (eg post '/api/affiche')
    Тело запроса (если не get) (eg {title, text})
    Тело ответа (eg {title, text})

    Пояснения:
    [] - массив
    {title, text} на деле имеет вид {title: 'Some title', text: 'Some text'}
    {title, img?} означает, что img в ответе (или запросе) может не быть
    status: 'success' | 'no-data' | 'no-premissions' - одно из возможных вариантов
    message: '[Server message] ' + текст, поясняющий ответ (eg '[Server message] Got affiches')
    affiche/:id - :id - переменная - id афиши
*/

// Affiches
get '/api/affiches'
{
    message,
    data: [{date, title, img, text, description}]
}

get '/api/affiche/:id'
{
    message,
    data: {date, title, text}
}

// Projects
get '/api/projects'
{
    message,
    data: [{title, img, description}]
}

get '/api/project/:id'
{
    message,
    data: {title, text}
}

// Same to:
// fools-funny-crew(s), teploobmen(s), aesthetic(s)

get '/api/choreographies'
{
    message,
    data: [{title, img, description, style, [style]}]       // [style] - все возможные стили
}

get '/api/choreographies/:style'
{
    message,
    data: [{title, img, description, style}]        // Преподаватели по стилю
}

get '/api/choreography/:id'
{
    message,
    data: {title, text, style}
}


/* Админка */

post '/api/admin/login'
{username, password}
{
    message,
    state: 'success' | 'wrong-password' | 'wrong-username'
}

post '/api/admin/change-password'
{oldPass, newPass}
{
    message,
    state: 'success' | 'wrong-password' | 'wrong-new-password'
}


// Affiche
// Add
post '/api/admin/affiche'
{date, title, img, text, description}
{
    message,
    state: 'success' | 'no-permissions'
}

// Change
put '/api/admin/affiche/:id'
{date, title, img, text, description}
{
    message,
    state: 'success' | 'no-permissions'
}

// Delete
delete '/api/admin/affiche/:id'
{
    message,
    state: 'success' | 'no-permissions'
}


// Projects
// Add
post '/api/admin/affiche'
{date, title, img, text, description}
{
    message,
    state: 'success' | 'no-permissions'
}

// Change
put '/api/admin/affiche/:id'
{date, title, img, text, description}
{
    message,
    state: 'success' | 'no-permissions'
}

// Delete
delete '/api/admin/affiche/:id'
{
    message,
    state: 'success' | 'no-permissions'
}

// Same to:
// fools-funny-crew, teploobmen, aesthetic

// Choreography
// Add
post '/api/admin/choreography'
{title, img, text, description, style}
{
    message,
    state: 'success' | 'no-permissions'
}

// Change
put '/api/admin/choreography/:id'
{title, img, text, description, style}
{
    message,
    state: 'success' | 'no-permissions'
}

// Delete
delete '/api/admin/choreography/:id'
{
    message,
    state: 'success' | 'no-permissions'
}
