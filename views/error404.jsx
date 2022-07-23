const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oh noes!! Cookie is sorry, he can't find this page!</p>
              <img src="/images/cookie404.jpg" alt="Cookie is sorry he can't find your page" />
              Photo by <a href="https://unsplash.com/@cookiethepom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Cookie the Pom</a> on <a href="https://unsplash.com/s/photos/404?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </main>
      </Def>
    )
  }
  

module.exports = error404