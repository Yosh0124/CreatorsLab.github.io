

function header(){
    var html = (function() {/*
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand brand-title" href="index.html">iloli</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <div class="navbar-right">
            <ul class="nav navbar-nav">
     <li><a href="index.html#whats"><span class="brand-title">iloli</span>とは</a></li>
            </ul>
            <a href="https://docs.google.com/forms/d/1jXNnrTf5IUhFlovefWSTonEIExJvdZVld7nfWpY9tI8/viewform" target=”_blank" onclick="ga('send', 'event', 'services', 'click', 'お問い合わせ');"><button type="button" class="btn btn-default navbar-btn">お問い合わせ</button></a>
          </div>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>

    */}).toString().match(/\/\*([^]*)\*\//)[1];

    document.write(html);
}


function footer(){

    var html = (function() {/*

    <!-- Footer -->
    <footer class="footer container-fluid">
      <div class="text-center">
        <p>
          <!-- Facebook Share -->
          <div class="fb-share-button" data-href="http://iloli.co/" data-layout="button_count"></div>
          <!-- Twitter Share -->
          <a href="https://twitter.com/share" class="twitter-share-button" data-url="http://iloli.co/" data-via="creators_lab_jp" data-hashtags="iloli">Tweet</a>
          <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
        </p>
      </div>
      <div class="row text-center footer-nav">
        <div class="col-sm-4"><a href="terms.html">利用規約</a></div>
        <div class="col-sm-4"><a href="privacy.html">プライバシーポリシー</a></div>
        <div class="col-sm-4"><a href="https://docs.google.com/forms/d/1jXNnrTf5IUhFlovefWSTonEIExJvdZVld7nfWpY9tI8/viewform" onclick="ga('send', 'event', 'services', 'click', 'お問い合わせ');" target=”_blank”>お問い合わせ</a></div>
      </div>
      <div class="text-center footer-credit">
        <p>Produced by <a href="http://creatorslab.jp" target=”_blank”><img src="img/cl_logo.png" alt="Creator \'s Lab. Logo" class="corp-logo" /></a></p>
      </div>
    </footer>

    */}).toString().match(/\/\*([^]*)\*\//)[1];


    document.write(html);
}
