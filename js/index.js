function RankingFilmes() {
    var rank = document.querySelectorAll(".rankF")
    var nota = document.querySelectorAll(".notaF")
    var rankN = 1
    var aux = 2

    rank[0].innerHTML = 1

    for (var i = 0; i < rank.length; i++) {
        if (nota[i].innerHTML == nota[i + 1].innerHTML) {
            rank[i + 1].innerHTML = rankN
            aux = aux+1
        } else {
            rankN = aux
            rank[i + 1].innerHTML = rankN
            aux = aux+1
        }
    }
}