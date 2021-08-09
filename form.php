$client = new MongoDB\Client(
    'mongodb+srv://xezar:Mekikau19@xezarindo.fwgzm.mongodb.net/Xezarindo?retryWrites=true&w=majority');

$db = $client->test;
