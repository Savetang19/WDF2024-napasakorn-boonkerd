const users = [
    { 'uid': 1, 'username': 'JohnSoCool', 'password': 'John2024', 'isAdmin': false },
    { 'uid': 2, 'username': 'JaneSoCool', 'password': 'Jane2024', 'isAdmin': false },
    { 'uid': 3, 'username': 'SamanthaBozo', 'password': 'S3cr3tp4ssw0rd', 'isAdmin': false },
    { 'uid': 4, 'username': 'JeromeL', 'password': 'J3r0m3L', 'isAdmin': true },
    { 'uid': 5, 'username': 'Sxvetxng', 'password': 'Sxve2502', 'isAdmin': true },
    { 'uid': 6, 'username': 'admin', 'password': 'admin', 'isAdmin': true }
]

const songs = [
    { 'sid': 1, 'title': 'Bohemian Rhapsody', 'artist': 'Queen', 'album': 'A Night at the Opera', 'genre': 'Rock', 'release_year': 1975, 'cover_url': '/img/bohemian-rhapsody.png' },
    { 'sid': 2, 'title': 'Killer Queen', 'artist': 'Queen', 'album': 'Sheer Heart Attack', 'genre': 'Rock', 'release_year': 1974, 'cover_url': '/img/killer-queen.png' },
    { 'sid': 3, 'title': 'Thunderstruck', 'artist': 'AC/DC', 'album': 'The Razors Edge', 'genre': 'Rock', 'release_year': 1990, 'cover_url': '/img/thunderstruck.png' },
    { 'sid': 4, 'title': 'Back in Black', 'artist': 'AC/DC', 'album': 'Back in Black', 'genre': 'Rock', 'release_year': 1980, 'cover_url': '/img/back-in-black.png' },
    { 'sid': 5, 'title': `Sweet Child O' Mine`, 'artist': 'Guns N Roses', 'album': 'Appetite for Destruction', 'genre': 'Rock', 'release_year': 1987, 'cover_url': '/img/sweet-child-o-mine.png' },
    { 'sid': 6, 'title': 'Welcome To The Jungle', 'artist': 'Guns N Roses', 'album': 'Appetite for Destruction', 'genre': 'Rock', 'release_year': 1987, 'cover_url': '/img/welcome-to-the-jungle.png' },
    { 'sid': 7, 'title': 'November Rain', 'artist': 'Guns N Roses', 'album': 'Use Your Illusion I', 'genre': 'Rock', 'release_year': 1991, 'cover_url': '/img/november-rain.png' },
    { 'sid': 8, 'title': 'Rap God', 'artist': 'Eminem', 'album': 'The Marshall Mathers LP2', 'genre': 'Hip Hop', 'release_year': 2013, 'cover_url': '/img/rap-god.png' },
    { 'sid': 9, 'title': 'My Name Is', 'artist': 'Eminem', 'album': 'The Slim Shady LP', 'genre': 'Hip Hop', 'release_year': 1999, 'cover_url': '/img/my-name-is.png' },
    { 'sid': 10, 'title': 'Godzilla', 'artist': 'Eminem', 'album': 'Music to Be Murdered By', 'genre': 'Hip Hop', 'release_year': 2020, 'cover_url': '/img/godzilla.png' },
    { 'sid': 11, 'title': 'Throne', 'artist': 'Bring Me The Horizon', 'album': `That's the Spirit`, 'genre': 'Rock', 'release_year': 2015, 'cover_url': '/img/throne.png' },
    { 'sid': 12, 'title': 'Teardrops', 'artist': 'Bring Me The Horizon', 'album': 'Post Human: Survival Horror', 'genre': 'Rock', 'release_year': 2020, 'cover_url': '/img/teardrops.png' },
    { 'sid': 13, 'title': 'Unholy', 'artist': 'Sam Smith & Kim Petras', 'album': 'Unholy', 'genre': 'Pop', 'release_year': 2022, 'cover_url': '/img/unholy.png' },
    { 'sid': 14, 'title': 'ฉันไม่ต้องการตัวเธอในตอนนี้', 'artist': 'Little John', 'album': 'ฉันไม่ต้องการตัวเธอในตอนนี้', 'genre': 'Rock', 'release_year': 2024, 'cover_url': '/img/thai-song-1.png' },
    { 'sid': 15, 'title': 'Dance for your life', 'artist': 'LHAM', 'album': 'Dance for your life', 'genre': 'Indie', 'release_year': 2024, 'cover_url': '/img/thai-song-2.png' }
]

const reviews = [
    { 'rid': 1, 'sid': 1, 'uid': 1, 'rating': 5, 'comment': 'This is the best song ever!' },
    { 'rid': 2, 'sid': 2, 'uid': 2, 'rating': 4, 'comment': 'This is a great song!' },
    { 'rid': 3, 'sid': 3, 'uid': 3, 'rating': 4, 'comment': 'Let there be rock!' },
    { 'rid': 4, 'sid': 5, 'uid': 4, 'rating': 5, 'comment': 'This is a classic!' },
    { 'rid': 5, 'sid': 8, 'uid': 5, 'rating': 5, 'comment': 'Bro use his skin to breathe!' },
    { 'rid': 6, 'sid': 1, 'uid': 5, 'rating': 5, 'comment': 'Golden ears unlocked!' }
]

module.exports = { users, songs, reviews }