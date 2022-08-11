
const update = document.querySelector('#update-button')

update.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: 'Saul Goodman',
            quote: 'Look, lets start with some tough love. You two suck at peddling meth. Period.'
        })
    })
    .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        window.location.reload(true)
      })
})

const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')

deleteButton.addEventListener('click', _ => {
  fetch('/quotes', {
    method: 'delete',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
        name: 'Saul Goodman'
    })
  })
  .then(res => {
    if (res.ok) return res.json()
  })
  .then(response => {
    if (response === 'No quote to delete') {
      messageDiv.textContent = 'No Saul Goodman quote to delete'
    } else {
      window.location.reload(true)
    }
  })
})


