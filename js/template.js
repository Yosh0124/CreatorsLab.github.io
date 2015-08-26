function header(){
    var html = "";
    html +='<nav class="navbar navbar-default navbar-fixed-top">';
    html +='<div class="container-fluid">';
    html +='<!-- Brand and toggle get grouped for better mobile display -->';
    html +='<div class="navbar-header">';
    html +='<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">';
    html +='<span class="sr-only">Toggle navigation</span>';
    html +='<span class="icon-bar"></span>';
    html +='<span class="icon-bar"></span>';
    html +='<span class="icon-bar"></span>';
    html +='</button>';
    html +='<a class="navbar-brand brand-title" href="index.html">iloli</a>';
    html +='</div>';
    html +='<!-- Collect the nav links, forms, and other content for toggling -->';
    html +='<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">';
    html +='<div class="navbar-right">';
    html +='<ul class="nav navbar-nav">';
    html +='<li><a href="#whats">iloliとは</a></li>';
    html +='</ul>';
    html +='<a class="btn btn-success navbar-btn" href="https://docs.google.com/forms/d/1jXNnrTf5IUhFlovefWSTonEIExJvdZVld7nfWpY9tI8/viewform" role="button">お問い合わせ</a>';
    html +='</div>';
    html +='</div><!-- /.navbar-collapse -->';
    html +='</div><!-- /.container-fluid -->';
    html +='</nav>';

    /*
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
              <li><a href="#whats">iloliとは</a></li>
            </ul>
            <a class="btn btn-success navbar-btn" href="https://docs.google.com/forms/d/1jXNnrTf5IUhFlovefWSTonEIExJvdZVld7nfWpY9tI8/viewform" role="button">お問い合わせ</a>
          </div>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    */


    document.write(html);
}


function footer(){
    var html = "";
    html +='<footer class="footer container-fluid">';
    html +='<div class="row text-center footer-nav">';
    html +='<div class="col-sm-4"><a href="terms.html">利用規約</a></div>';
    html +='<div class="col-sm-4"><a href="privacy.html">プライバシーポリシー</a></div>';
    html +='<div class="col-sm-4"><a href="https://docs.google.com/forms/d/1jXNnrTf5IUhFlovefWSTonEIExJvdZVld7nfWpY9tI8/viewform">お問い合わせ</a></div>';
    html +='</div>';
    html +='<div class="text-center footer-credit">';
    html +='<p>Produced by <a href="http://creatorslab.jp"><img src="img/cl_logo.png" alt="Creator \'s Lab. Logo" class="corp-logo" /></a></p>';
    html +='</div>';
    html +='</footer>';


    /*
        <!-- Footer -->
    <footer class="footer container-fluid">
      <div class="row text-center footer-nav">
        <div class="col-sm-4"><a href="terms.html">利用規約</a></div>
        <div class="col-sm-4"><a href="privacy.html">プライバシーポリシー</a></div>
        <div class="col-sm-4"><a href="https://docs.google.com/forms/d/1jXNnrTf5IUhFlovefWSTonEIExJvdZVld7nfWpY9tI8/viewform">お問い合わせ</a></div>
      </div>
      <div class="text-center footer-credit">
        <p>Produced by <a href="http://creatorslab.jp"><img src="img/cl_logo.png" alt="Creator's Lab. Logo" class="corp-logo" /></a></p>
      </div>
    </footer>
    */

    document.write(html);
}