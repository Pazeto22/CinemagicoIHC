function enviarResenha() {
    document.querySelector(".formResenha").innerHTML = `<p class="text-center">Sua resenha foi enviada com sucesso.<br>Após análise ela será publicada na página principal.</p><div class="d-flex justify-content-center"><div class="spinner-border text-warning" role="status">
  </div></div><p class="text-center">Obrigado pela contribuição. Você retornará para a home em 3 segundos.</p>`
    return setTimeout(function () { window.location.href = "./index.html"; }, 3000);
}