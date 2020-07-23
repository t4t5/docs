export const cliReferenceData = [
  {
    args: [
      {
        format: '^([0-9a-f]{40})$',
        name: 'message_hash',
        type: 'string',
        value: 'zonefile_hash',
      },
      {
        format:
          '^([0-9a-f]{64,66})$|^([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^segwit:p2sh:([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^nosign:[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'owner_key',
        type: 'string',
        value: 'private_key',
      },
    ],
    command: 'announce',
    group: 'Peer Services',
    usage:
      'Broadcast a message on the blockchain for subscribers to read.  The MESSAGE_HASH argument must be the hash of a previously-announced zone file.  The OWNER_KEY used to sign the transaction must correspond to the Blockstack ID to which other users have already subscribed.  OWNER_KEY can be a single private key or a serialized multisig private key bundle.\n\nIf this command succeeds, it will print a transaction ID.  The rest of the Blockstack peer network will process it once the transaction reaches 7 confirmations.\n\nExamples:\n\n    $ # Tip: You can obtain the owner key with the get_owner_keys command\n    $ export OWNER_KEY="136ff26efa5db6f06b28f9c8c7a0216a1a52598045162abfe435d13036154a1b01"\n    $ blockstack-cli announce 737c631c7c5d911c6617993c21fba731363f1cfe "$OWNER_KEY"\n    d51749aeec2803e91a2f8bdec8d3e413491fd816b4962372b214ab74acb0bba8\n\n    $ export OWNER_KEY="2,136ff26efa5db6f06b28f9c8c7a0216a1a52598045162abfe435d13036154a1b01,1885cba486a42960499d1f137ef3a475725ceb11f45d74631f9928280196f67401,2418981c7f3a91d4467a65a518e14fafa30e07e6879c11fab7106ea72b49a7cb01"\n    $ blockstack-cli announce 737c631c7c5d911c6617993c21fba731363f1cfe "$OWNER_KEY"\n    8136a1114098893b28a693e8d84451abf99ee37ef8766f4bc59808eed76968c9\n\n',
  },
  {
    args: [
      {
        format: '^http[s]?://.+$',
        name: 'app_gaia_hub',
        type: 'string',
        value: 'url',
      },
      {
        format: '.+',
        name: 'backup_phrase',
        type: 'string',
        value: '12_words_or_ciphertext',
      },
      {
        format: '^http[s]?://.+$',
        name: 'profile_gaia_hub',
        type: 'string',
        value: 'url',
      },
      {
        format: '^[0-9]+',
        name: 'port',
        type: 'string',
        value: 'portnum',
      },
    ],
    command: 'authenticator',
    group: 'Authentication',
    usage:
      'Run an authentication endpoint for the set of names owned by the given backup phrase.  Send applications the given Gaia hub URL on sign-in, so the application will use it to read/write user data.\n\nYou can supply your encrypted backup phrase instead of the raw backup phrase.  If so, then you will be prompted for your password before any authentication takes place.\n\nExample:\n\n    $ export BACKUP_PHRASE="oak indicate inside poet please share dinner monitor glow hire source perfect"\n    $ export APP_GAIA_HUB="https://1.2.3.4"\n    $ export PROFILE_GAIA_HUB="https://hub.blockstack.org"\n    $ blockstack-cli authenticator "$APP_GAIA_HUB" "$BACKUP_PHRASE" "$PROFILE_GAIA_HUB" 8888\n    Press Ctrl+C to exit\n    Authentication server started on 8888\n',
  },
  {
    args: [
      {
        format:
          '^([123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35})$|^([0123456789ABCDEFGHJKMNPQRSTVWXYZ]+)$',
        name: 'address',
        type: 'string',
        value: 'address',
      },
    ],
    command: 'balance',
    group: 'Account Management',
    usage:
      'Query the balance of an account.  Returns the balances of each kind of token that the account owns.  The balances will be in the *smallest possible units* of the token (i.e. satoshis for BTC, microStacks for Stacks, etc.).\n\nExample:\n\n    $ blockstack-cli balance 16pm276FpJYpm7Dv3GEaRqTVvGPTdceoY4\n    {\n      "BTC": "123456"\n      "STACKS": "123456"\n    }\n    $ blockstack-cli balance SPZY1V53Z4TVRHHW9Z7SFG8CZNRAG7BD8WJ6SXD0\n    {\n      "BTC": "123456"\n      "STACKS": "123456"\n    }\n',
  },
  {
    args: [
      {
        format:
          '^([123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35})$|^([0123456789ABCDEFGHJKMNPQRSTVWXYZ]+)$',
        name: 'address',
        type: 'string',
        value: 'address',
      },
    ],
    command: 'convert_address',
    group: 'Account Management',
    usage:
      'Convert a Bitcoin address to a Stacks address and vice versa.\n\nExample:\n\n    $ blockstack-cli convert_address 12qdRgXxgNBNPnDeEChy3fYTbSHQ8nfZfD\n    {\n      "STACKS": "SPA2MZWV9N67TBYVWTE0PSSKMJ2F6YXW7CBE6YPW",\n      "BTC": "12qdRgXxgNBNPnDeEChy3fYTbSHQ8nfZfD"\n    }\n    $ blockstack-cli convert_address SPA2MZWV9N67TBYVWTE0PSSKMJ2F6YXW7CBE6YPW\n    {\n      "STACKS": "SPA2MZWV9N67TBYVWTE0PSSKMJ2F6YXW7CBE6YPW",\n      "BTC": "12qdRgXxgNBNPnDeEChy3fYTbSHQ8nfZfD"\n    }\n',
  },
  {
    args: [
      {
        format: '^[^ ]+$',
        name: 'encrypted_backup_phrase',
        type: 'string',
        value: 'encrypted_backup_phrase',
      },
      {
        format: '.+',
        name: 'password',
        type: 'string',
        value: 'password',
      },
    ],
    command: 'decrypt_keychain',
    group: 'Key Management',
    usage:
      'Decrypt an encrypted backup phrase with a password.  Decrypts to a 12-word backup phrase if done correctly.  The password will be prompted if not given.\n\nExample:\n\n    $ # password is "asdf"\n    $ blockstack-cli decrypt_keychain "bfMDtOucUGcJXjZo6vkrZWgEzue9fzPsZ7A6Pl4LQuxLI1xsVF0VPgBkMsnSLCmYS5YHh7R3mNtMmX45Bq9sNGPfPsseQMR0fD9XaHi+tBg=\n    Enter password:\n    section amount spend resemble spray verify night immune tattoo best emotion parrot',
  },
  {
    args: [
      {
        format: '^json$',
        name: 'format',
        type: 'string',
        value: 'output_format',
      },
    ],
    command: 'docs',
    group: 'CLI',
    usage: 'Dump the documentation for all commands as JSON to standard out.',
  },
  {
    args: [
      {
        format: '.+',
        name: 'backup_phrase',
        type: 'string',
        value: 'backup_phrase',
      },
      {
        format: '.+',
        name: 'password',
        type: 'string',
        value: 'password',
      },
    ],
    command: 'encrypt_keychain',
    group: 'Key Management',
    usage:
      'Encrypt a 12-word backup phrase, which can be decrypted later with the decrypt_backup_phrase command.  The password will be prompted if not given.\n\nExample:\n\n     $ # password is "asdf"\n     $ blockstack-cli encrypt_keychain "section amount spend resemble spray verify night immune tattoo best emotion parrot"\n     Enter password:\n     Enter password again:\n     M+DnBHYb1fgw4N3oZ+5uTEAua5bAWkgTW/SjmmBhGGbJtjOtqVV+RrLJEJOgT35hBon4WKdGWye2vTdgqDo7+HIobwJwkQtN2YF9g3zPsKk=',
  },
  {
    args: [
      {
        format:
          '^ID-[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$|^([0-9a-z_.+-]{3,37})$|^([0-9a-z_+-]{1,37}).([0-9a-z_.+-]{3,37})$',
        name: 'name_or_id_address',
        type: 'string',
        value: 'name_or_id_address',
      },
      {
        format: '^http[s]?://.+$',
        name: 'app_origin',
        type: 'string',
        value: 'url',
      },
      {
        format: '^http[s]?://.+$',
        name: 'gaia_hub',
        type: 'string',
        value: 'url',
      },
      {
        format: '.+',
        name: 'backup_phrase',
        type: 'string',
        value: '12_words_or_ciphertext',
      },
      {
        format: '.+',
        name: 'dump_dir',
        type: 'string',
        value: 'path',
      },
    ],
    command: 'gaia_dump_bucket',
    group: 'Gaia',
    usage:
      'Download the contents of a Gaia hub bucket to a given directory.  The GAIA_HUB argument must correspond to the *write* endpoint of the Gaia hub -- that is, you should be able to fetch $GAIA_HUB/hub_info.  If DUMP_DIR does not exist, it will be created.\n\nExample:\n\n    $ export BACKUP_PHRASE="section amount spend resemble spray verify night immune tattoo best emotion parrot\n    $ blockstack-cli gaia_dump_bucket hello.id.blockstack https://sample.app https://hub.blockstack.org "$BACKUP_PHRASE" ./backups\n    Download 3 files...\n    Download hello_world to ./backups/hello_world\n    Download dir/format to ./backups/dir\\x2fformat\n    Download /.dotfile to ./backups/\\x2f.dotfile\n    3\n',
  },
  {
    args: [
      {
        format: '^([0-9a-z_.+-]{3,37})$|^([0-9a-z_+-]{1,37}).([0-9a-z_.+-]{3,37})$$',
        name: 'blockstack_id',
        type: 'string',
        value: 'blockstack_id',
      },
      {
        format: '^http[s]?://.+$',
        name: 'app_origin',
        type: 'string',
        value: 'url',
      },
      {
        format: '.+',
        name: 'filename',
        type: 'string',
        value: 'filename',
      },
      {
        format: '^([0-9a-f]{64})$',
        name: 'app_private_key',
        type: 'string',
        value: 'private_key',
      },
      {
        format: '^(0|1|true|false)$',
        name: 'decrypt',
        type: 'string',
        value: 'boolean',
      },
      {
        format: '^(0|1|true|false)$',
        name: 'verify',
        type: 'string',
        value: 'boolean',
      },
    ],
    command: 'gaia_getfile',
    group: 'Gaia',
    usage:
      'Get a file from another user\'s Gaia hub.  Prints the file data to stdout.  If you want to read an encrypted file, and/or verify a signed file, then you must pass an app private key, and pass 1 for DECRYPT and/or VERIFY.  If the file is encrypted, and you do not pass an app private key, then this command downloads the ciphertext.  If the file is signed, and you want to download its data and its signature, then you must run this command twice -- once to get the file contents at FILENAME, and once to get the signature (whose name will be FILENAME.sig).\n\nGaia is a key-value store, so it does not have any built-in notion of directories.  However, most underlying storage systems do -- directory separators in the name of a file in Gaia may be internally treated as first-class directories (it depends on the Gaia hub\'s driver).As such, repeated directory separators will be treated as a single directory separator by this command.  For example, the file name a/b.txt, /a/b.txt, and ///a////b.txt will be treated as identical.\n\nExample without encryption:\n\n    $ # Get an unencrypted, unsigned file\n    $ blockstack-cli gaia_getfile ryan.id http://public.ykliao.com statuses.json\n    [{"id":0,"text":"Hello, Blockstack!","created_at":1515786983492}]\n\nExample with encryption:\n\n    $ # Get an encrypted file without decrypting\n    $ blockstack-cli gaia_getfile ryan.id https://app.graphitedocs.com documentscollection.json\n        $ # Get an encrypted file, and decrypt it\n    $ # Tip: You can obtain the app key with the get_app_keys command\n    $ export APP_KEY="3ac770e8c3d88b1003bf4a0a148ceb920a6172bdade8e0325a1ed1480ab4fb19"\n    $ blockstack-cli gaia_getfile ryan.id https://app.graphitedocs.com documentscollection.json "$APP_KEY" 1 0\n',
  },
  {
    args: [
      {
        format: '^http[s]?://.+$',
        name: 'gaia_hub',
        type: 'string',
        value: 'url',
      },
      {
        format: '^([0-9a-f]{64})$',
        name: 'app_private_key',
        type: 'string',
        value: 'private_key',
      },
      {
        format: '.+',
        name: 'data_path',
        type: 'string',
        value: 'path',
      },
      {
        format: '.+',
        name: 'gaia_filename',
        type: 'string',
        value: 'filename',
      },
      {
        format: '^(0|1|true|false)$',
        name: 'encrypt',
        type: 'string',
        value: 'boolean',
      },
      {
        format: '^(0|1|true|false)$',
        name: 'sign',
        type: 'string',
        value: 'boolean',
      },
    ],
    command: 'gaia_putfile',
    group: 'Gaia',
    usage:
      'Put a file into a given Gaia hub, authenticating with the given app private key.  Optionally encrypt and/or sign the data with the given app private key.  If the file is successfully stored, this command prints out the URLs at which it can be fetched.\n\nGaia is a key-value store, so it does not have any built-in notion of directories.  However, most underlying storage systems do -- directory separators in the name of a file in Gaia may be internally treated as first-class directories (it depends on the Gaia hub\'s driver).As such, repeated directory separators will be treated as a single directory separator by this command.  For example, the file name a/b.txt, /a/b.txt, and ///a////b.txt will be treated as identical.\n\nExample:\n\n    $ # Store 4 versions of a file: plaintext, encrypted, signed, and encrypted+signed\n    $ # Tip: You can obtain the app key with the get_app_keys command.\n    $ export APP_KEY="3ac770e8c3d88b1003bf4a0a148ceb920a6172bdade8e0325a1ed1480ab4fb19"\n    $ blockstack-cli gaia_putfile https://hub.blockstack.org "$APP_KEY" /path/to/file.txt file.txt\n    {\n       "urls": "https://gaia.blockstack.org/hub/19KAzYp4kSKozeAGMUsnuqkEGdgQQLEvwo/file.txt"\n    }\n    $ blockstack-cli gaia_putfile https://hub.blockstack.org "$APP_KEY" /path/to/file.txt file-encrypted.txt 1\n    {\n       "urls": "https://gaia.blockstack.org/hub/19KAzYp4kSKozeAGMUsnuqkEGdgQQLEvwo/file-encrypted.txt"\n    }\n    $ blockstack-cli gaia_putfile https://hub.blockstack.org "$APP_KEY" /path/to/file.txt file-signed.txt 0 1\n    {\n       "urls": "https://gaia.blockstack.org/hub/19KAzYp4kSKozeAGMUsnuqkEGdgQQLEvwo/file-signed.txt"\n    }\n    $ blockstack-cli gaia_putfile https://hub.blockstack.org "$APP_KEY" /path/to/file.txt file-encrypted-signed.txt 1 1\n    {\n       "urls": "https://gaia.blockstack.org/hub/19KAzYp4kSKozeAGMUsnuqkEGdgQQLEvwo/file-encrypted-signed.txt"\n    }\n',
  },
  {
    args: [
      {
        format: '^http[s]?://.+$',
        name: 'gaia_hub',
        type: 'string',
        value: 'url',
      },
      {
        format: '^([0-9a-f]{64})$',
        name: 'app_private_key',
        type: 'string',
        value: 'private_key',
      },
    ],
    command: 'gaia_listfiles',
    group: 'Gaia',
    usage:
      'List all the files in a Gaia hub bucket.  You must have the private key for the bucket in order to list its contents.  The command prints each file name on its own line, and when finished, it prints the number of files listed.\n\nExample:\n\n    $ # Tip: You can obtain the app key with the get_app_keys command.\n    $ export APP_KEY="3ac770e8c3d88b1003bf4a0a148ceb920a6172bdade8e0325a1ed1480ab4fb19"\n    $ blockstack-cli gaia_listfiles "https://hub.blockstack.org" "$APP_KEY"\n    hello_world\n    dir/format\n    /.dotfile\n    3\n',
  },
  {
    args: [
      {
        format:
          '^ID-[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$|^([0-9a-z_.+-]{3,37})$|^([0-9a-z_+-]{1,37}).([0-9a-z_.+-]{3,37})$',
        name: 'name_or_id_address',
        type: 'string',
        value: 'name_or_id_address',
      },
      {
        format: '^http[s]?://.+$',
        name: 'app_origin',
        type: 'string',
        value: 'url',
      },
      {
        format: '^http[s]?://.+$',
        name: 'gaia_hub',
        type: 'string',
        value: 'url',
      },
      {
        format: '.+',
        name: 'backup_phrase',
        type: 'string',
        value: '12_words_or_ciphertext',
      },
      {
        format: '.+',
        name: 'dump_dir',
        type: 'string',
        value: 'path',
      },
    ],
    command: 'gaia_restore_bucket',
    group: 'Gaia',
    usage:
      'Upload the contents of a previously-dumped Gaia bucket to a new Gaia hub.  The GAIA_HUB argument must correspond to the *write* endpoint of the Gaia hub -- that is, you should be able to fetch $GAIA_HUB/hub_info.  DUMP_DIR must contain the file contents created by a previous successful run of the gaia_dump_bucket command, and both NAME_OR_ID_ADDRESS and APP_ORIGIN must be the same as they were when it was run.\n\nExample:\n\n    $ export BACKUP_PHRASE="section amount spend resemble spray verify night immune tattoo best emotion parrot"\n    $ blockstack-cli gaia_restore_bucket hello.id.blockstack https://sample.app https://new.gaia.hub "$BACKUP_PHRASE" ./backups\n    Uploaded ./backups/hello_world to https://new.gaia.hub/hub/1Lr8ggSgdmfcb4764woYutUfFqQMjEoKHc/hello_world\n    Uploaded ./backups/dir\\x2fformat to https://new.gaia.hub/hub/1Lr8ggSgdmfcb4764woYutUfFqQMjEoKHc/dir/format\n    Uploaded ./backups/\\x2f.dotfile to https://new.gaia.hub/hub/1Lr8ggSgdmfcb4764woYutUfFqQMjEoKHc//.dotfile\n    3\n',
  },
  {
    args: [
      {
        format: '^^([0-9a-z_.+-]{3,37})$|^([0-9a-z_+-]{1,37}).([0-9a-z_.+-]{3,37})$$',
        name: 'blockstack_id',
        type: 'string',
        value: 'blockstack_id',
      },
      {
        format: '^http[s]?://.+$',
        name: 'owner_gaia_hub',
        type: 'string',
        value: 'url',
      },
      {
        format: '^http[s]?://.+$',
        name: 'app_origin',
        type: 'string',
        value: 'url',
      },
      {
        format: '^http[s]?://.+$',
        name: 'app_gaia_hub',
        type: 'string',
        value: 'url',
      },
      {
        format: '.+',
        name: 'backup_phrase',
        type: 'string',
        value: '12_words_or_ciphertext',
      },
    ],
    command: 'gaia_sethub',
    group: 'Gaia',
    usage:
      'Set the Gaia hub for a particular application for a Blockstack ID.  If the command succeeds, the URLs to your updated profile will be printed and your profile will contain an entry in its "apps" key that links the given APP_ORIGIN to the given APP_GAIA_HUB.  Note that both OWNER_GAIA_HUB and APP_GAIA_HUB must be the *write* endpoints of their respective Gaia hubs.\n\nYour 12-word phrase (in either raw or encrypted form) is required to re-sign and store your profile and to generate an app-specific key and Gaia bucket.  If you give the encrypted backup phrase, you will be prompted for a password.\n\nExample:\n\n    $ export BACKUP_PHRASE="soap fog wealth upon actual blossom neither timber phone exile monkey vocal"\n    $ blockstack-cli gaia_sethub hello_world.id https://hub.blockstack.org https://my.cool.app https://my.app.gaia.hub "$BACKUP_PHRASE"\n    {\n      "profileUrls": {\n        "error": null,\n        "dataUrls": [\n          "https://gaia.blockstack.org/hub/1ArdkA2oLaKnbNbLccBaFhEV4pYju8hJ82/profile.json"\n        ]\n      }\n    }\n    \n    $ # You can check the new apps entry with curl and jq as follows:\n    $ curl -sL https://gaia.blockstack.org/hub/1ArdkA2oLaKnbNbLccBaFhEV4pYju8hJ82/profile.json | jq ".[0].decodedToken.payload.claim.apps"\n    {\n      "https://my.cool.app": "https://my.app.gaia.hub/hub/1EqzyQLJ15KG1WQmi5cf1HtmSeqS1Wb8tY/"\n    }\n\n',
  },
  {
    args: [
      {
        format: '^([0123456789ABCDEFGHJKMNPQRSTVWXYZ]+)$',
        name: 'address',
        type: 'string',
        value: 'address',
      },
      {
        format: '^[0-9]+$',
        name: 'page',
        type: 'string',
        value: 'integer',
      },
    ],
    command: 'get_account_history',
    group: 'Account Management',
    usage:
      'Query the history of account debits and credits over a given block range.  Returns the history one page at a time.  An empty result indicates that the page number has exceeded the number of historic operations in the given block range.\n\nExample:\n\n    $ blockstack-cli get_account_history SP2H7VMY13ESQDAD5808QEY1EMGESMHZWBJRTN2YA 0\n    [\n      {\n        "address": "SP2H7VMY13ESQDAD5808QEY1EMGESMHZWBJRTN2YA",\n        "block_id": 56789\n        "credit_value": "100000000000",\n        "debit_value": "0",\n        "lock_transfer_block_id": 0,\n        "txid": "0e5db84d94adff5b771262b9df015164703b39bb4a70bf499a1602b858a0a5a1",\n        "type": "STACKS",\n        "vtxindex": 0\n      },\n      {\n        "address": "SP2H7VMY13ESQDAD5808QEY1EMGESMHZWBJRTN2YA",\n        "block_id": 56790,\n        "credit_value": "100000000000",\n        "debit_value": "64000000000",\n        "lock_transfer_block_id": 0,\n        "txid": "5a0c67144626f7bd4514e4de3f3bbf251383ca13887444f326bac4bc8b8060ee",\n        "type": "STACKS",\n        "vtxindex": 1\n      },\n      {\n        "address": "SP2H7VMY13ESQDAD5808QEY1EMGESMHZWBJRTN2YA",\n        "block_id": 56791,\n        "credit_value": "100000000000",\n        "debit_value": "70400000000",\n        "lock_transfer_block_id": 0,\n        "txid": "e54c271d6a9feb4d1859d32bc99ffd713493282adef5b4fbf50bca9e33fc0ecc",\n        "type": "STACKS",\n        "vtxindex": 2\n      },\n      {\n        "address": "SP2H7VMY13ESQDAD5808QEY1EMGESMHZWBJRTN2YA",\n        "block_id": 56792,\n        "credit_value": "100000000000",\n        "debit_value": "76800000000",\n        "lock_transfer_block_id": 0,\n        "txid": "06e0d313261baefec1e59783e256ab487e17e0e776e2fdab0920cc624537e3c8",\n        "type": "STACKS",\n        "vtxindex": 3\n      }\n    ]\n\n',
  },
  {
    args: [
      {
        format: '^([0123456789ABCDEFGHJKMNPQRSTVWXYZ]+)$',
        name: 'address',
        type: 'string',
        value: 'address',
      },
      {
        format: '^[0-9]+$',
        name: 'blocknumber',
        type: 'string',
        value: 'integer',
      },
    ],
    command: 'get_account_at',
    group: 'Account Management',
    usage:
      'Query the list of token debits and credits on a given address that occurred at a particular block height.  Does not include BTC debits and credits; only Stacks.\n\nExample\n\n    $ blockstack-cli -t get_account_at SP2NTAQFECYGSTE1W47P71FG21H8F00KZZWFGEVKQ 56789\n    [\n      {\n        "debit_value": "0",\n        "block_id": 56789\n        "lock_transfer_block_id": 0,\n        "txid": "291817c78a865c1f72938695218a48174265b2358e89b9448edc89ceefd66aa0",\n        "address": "SP2NTAQFECYGSTE1W47P71FG21H8F00KZZWFGEVKQ",\n        "credit_value": "1000000000000000000",\n        "type": "STACKS",\n        "vtxindex": 0\n      }\n    ]\n\n',
  },
  {
    args: [
      {
        format:
          '^([0-9a-f]{64,66})$|^([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^segwit:p2sh:([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^nosign:[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'private_key',
        type: 'string',
        value: 'private_key',
      },
    ],
    command: 'get_address',
    group: 'Key Management',
    usage:
      'Get the address of a private key or multisig private key bundle.  Gives the BTC and STACKS addresses\n\nExample:\n\n    $ blockstack-cli get_address f5185b9ca93bdcb5753fded3b097dab8547a8b47d2be578412d0687a9a0184cb01\n    {\n      "BTC": "1JFhWyVPpZQjbPcXFtpGtTmU22u4fhBVmq",\n      "STACKS": "SP2YM3J4KQK09V670TD6ZZ1XYNYCNGCWCVVKSDFWQ"\n    }\n    $ blockstack-cli get_address 1,f5185b9ca93bdcb5753fded3b097dab8547a8b47d2be578412d0687a9a0184cb01,ff2ff4f4e7f8a1979ffad4fc869def1657fd5d48fc9cf40c1924725ead60942c01\n    {\n      "BTC": "363pKBhc5ipDws1k5181KFf6RSxhBZ7e3p",\n      "STACKS": "SMQWZ30EXVG6XEC1K4QTDP16C1CAWSK1JSWMS0QN"\n    }',
  },
  {
    args: [
      {
        format: '^^([0-9a-z_.+-]{3,37})$|^([0-9a-z_+-]{1,37}).([0-9a-z_.+-]{3,37})$$',
        name: 'blockstack_id',
        type: 'string',
        value: 'blockstack_id',
      },
    ],
    command: 'get_blockchain_record',
    group: 'Querying Blockstack IDs',
    usage:
      'Get the low-level blockchain-hosted state for a Blockstack ID.  This command is used mainly for debugging and diagnostics.  You should not rely on it to be stable.',
  },
  {
    args: [
      {
        format: '^([0-9a-z_.+-]{3,37})$|^([0-9a-z_+-]{1,37}).([0-9a-z_.+-]{3,37})$$',
        name: 'blockstack_id',
        type: 'string',
        value: 'blockstack_id',
      },
      {
        format: '^[0-9]+$',
        name: 'page',
        type: 'string',
        value: 'page_number',
      },
    ],
    command: 'get_blockchain_history',
    group: 'Querying Blockstack IDs',
    usage:
      'Get the low-level blockchain-hosted history of operations on a Blocktack ID.  This command is used mainly for debugging and diagnostics, and is not guaranteed to be stable across releases.',
  },
  {
    args: [
      {
        format: '^([0-9a-f]{64})$',
        name: 'txid',
        type: 'string',
        value: 'transaction_id',
      },
    ],
    command: 'get_confirmations',
    group: 'Peer Services',
    usage:
      'Get the block height and number of confirmations for a transaction.\n\nExample:\n\n    $ blockstack-cli get_confirmations e41ce043ab64fd5a5fd382fba21acba8c1f46cbb1d7c08771ada858ce7d29eea\n    {\n      "blockHeight": 567890,\n      "confirmations": 7,\n    }\n\n',
  },
  {
    args: [
      {
        format: '^([0-9a-z_-]{1,19})$',
        name: 'namespace_id',
        type: 'string',
        value: 'namespace_id',
      },
    ],
    command: 'get_namespace_blockchain_record',
    group: 'Namespace Operations',
    usage:
      'Get the low-level blockchain-hosted state for a Blockstack namespace.  This command is used mainly for debugging and diagnostics, and is not guaranteed to be stable across releases.',
  },
  {
    args: [
      {
        format: '.+',
        name: 'backup_phrase',
        type: 'string',
        value: '12_words_or_ciphertext',
      },
      {
        format:
          '^([0-9a-z_.+-]{3,37})$|^([0-9a-z_+-]{1,37}).([0-9a-z_.+-]{3,37})$|^ID-[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'name_or_id_address',
        type: 'string',
        value: 'name-or-id-address',
      },
      {
        format: '^http[s]?://.+$',
        name: 'app_origin',
        type: 'string',
        value: 'url',
      },
    ],
    command: 'get_app_keys',
    group: 'Key Management',
    usage:
      'Get the application private key from a 12-word backup phrase and a name or ID-address.  This is the private key used to sign data in Gaia, and its address is the Gaia bucket address.  If you provide your encrypted backup phrase, you will be asked to decrypt it.  If you provide a name instead of an ID-address, its ID-address will be queried automatically (note that this means that the name must already be registered).  Note that this command does NOT verify whether or not the name or ID-address was created by the backup phrase.  You should do this yourself via the "get_owner_keys" command if you are not sure.\nThere are two derivation paths emitted by this command:  a "keyInfo" path and a "legacyKeyInfo"path.  You should use the one that matches the Gaia hub read URL\'s address, if you have already signed in before.  If not, then you should use the "keyInfo" path when possible.\n\nExample:\n\n    $ export BACKUP_PHRASE="one race buffalo dynamic icon drip width lake extra forest fee kit"\n    $ blockstack-cli get_app_keys "$BACKUP_PHRASE" example.id.blockstack https://my.cool.dapp\n    {\n      "keyInfo": {\n        "privateKey": "TODO",\n        "address": "TODO"\n      },\n      "legacyKeyInfo": {\n        "privateKey": "90f9ec4e13fb9a00243b4c1510075157229bda73076c7c721208c2edca28ea8b",\n        "address": "1Lr8ggSgdmfcb4764woYutUfFqQMjEoKHc"\n      },\n      "ownerKeyIndex": 0\n    }',
  },
  {
    args: [
      {
        format: '.+',
        name: 'backup_phrase',
        type: 'string',
        value: '12_words_or_ciphertext',
      },
      {
        format: '^[0-9]+$',
        name: 'index',
        type: 'string',
        value: 'integer',
      },
    ],
    command: 'get_owner_keys',
    group: 'Key Management',
    usage:
      'Get the list of owner private keys and ID-addresses from a 12-word backup phrase.  Pass non-zero values for INDEX to generate the sequence of ID-addresses that can be used to own Blockstack IDs.  If you provide an encrypted 12-word backup phrase, you will be asked for your password to decrypt it.\n\nExample:\n\n    $ # get the first 3 owner keys and addresses for a backup phrase\n    $ export BACKUP_PHRASE="soap fog wealth upon actual blossom neither timber phone exile monkey vocal"\n    $ blockstack-cli get_owner_keys "$BACKUP_PHRASE" 3\n    [\n      {\n        "privateKey": "14b0811d5cd3486d47279d8f3a97008647c64586b121e99862c18863e2a4183501",\n        "version": "v0.10-current",\n        "index": 0,\n        "idAddress": "ID-1ArdkA2oLaKnbNbLccBaFhEV4pYju8hJ82"\n      },\n      {\n        "privateKey": "1b3572d8dd6866828281ac6cf135f04153210c1f9b123743eccb795fd3095e4901",\n        "version": "v0.10-current",\n        "index": 1,\n        "idAddress": "ID-18pR3UpD1KFrnk88a3MGZmG2dLuZmbJZ25"\n      },\n      {\n        "privateKey": "b19b6d62356db96d570fb5f08b78f0aa7f384525ba3bdcb96fbde29b8e11710d01",\n        "version": "v0.10-current",\n        "index": 2,\n        "idAddress": "ID-1Gx4s7ggkjENw3wSY6bNd1CwoQKk857AqN"\n      }\n    ]\n\n',
  },
  {
    args: [
      {
        format: '.+',
        name: 'backup_phrase',
        type: 'string',
        value: '12_words_or_ciphertext',
      },
    ],
    command: 'get_payment_key',
    group: 'Key Management',
    usage:
      'Get the payment private key from a 12-word backup phrase.  If you provide an encrypted backup phrase, you will be asked for your password to decrypt it.  This command will tell you your Bitcoin and Stacks token addresses as well.\n\nExample\n\n    $ blockstack-cli get_payment_key "soap fog wealth upon actual blossom neither timber phone exile monkey vocal"\n    [\n      {\n        "privateKey": "4023435e33da4aff0775f33e7b258f257fb20ecff039c919b5782313ab73afb401",\n        "address": {\n          "BTC": "1ybaP1gaRwRSWRE4f8JXo2W8fiTZmA4rV",\n          "STACKS": "SP5B89ZJAQHBRXVYP15YB5PAY5E24FEW9K4Q63PE"\n        },\n        "index": 0\n      }\n    ]\n\n',
  },
  {
    args: [
      {
        format: '^([0-9a-f]{40})$',
        name: 'zonefile_hash',
        type: 'string',
        value: 'zonefile_hash',
      },
    ],
    command: 'get_zonefile',
    group: 'Peer Services',
    usage:
      'Get a zone file by hash.\n\nExample:\n\n    $ blockstack-cli get_zonefile ee77ad484b7b229f09461e4c2b6d3bd3e152ba95\n    $ORIGIN ryanshea.id\n    $TTL 3600\n    _http._tcp URI 10 1 "https://gaia.blockstack.org/hub/15BcxePn59Y6mYD2fRLCLCaaHScefqW2No/1/profile.json"\n\n',
  },
  {
    args: [
      {
        format: '.+',
        name: 'command',
        type: 'string',
        value: 'command',
      },
    ],
    command: 'help',
    group: 'CLI',
    usage: 'Get the usage string for a CLI command',
  },
  {
    args: [
      {
        format: '^([0-9a-z_.+-]{3,37})$|^([0-9a-z_+-]{1,37}).([0-9a-z_.+-]{3,37})$$',
        name: 'blockstack_id',
        type: 'string',
        value: 'blockstack_id',
      },
    ],
    command: 'lookup',
    group: 'Querying Blockstack IDs',
    usage:
      'Get and authenticate the profile and zone file for a Blockstack ID.\n\nExample:\n\n    $ blockstack-cli lookup example.id\n\n',
  },
  {
    args: [
      {
        format: '^ID-[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'id_address',
        type: 'string',
        value: 'id-address',
      },
    ],
    command: 'names',
    group: 'Querying Blockstack IDs',
    usage:
      'Get the list of Blockstack IDs owned by an ID-address.\n\nExample:\n\n    $ blockstack-cli names ID-1FpBChfzHG3TdQQRKWAipbLragCUArueG9\n\n',
  },
  {
    args: [
      {
        format: '.+',
        name: 'backup_phrase',
        type: 'string',
        value: '12_words_or_ciphertext',
      },
    ],
    command: 'make_keychain',
    group: 'Key Management',
    usage:
      'Generate the owner and payment private keys, optionally from a given 12-word backup phrase.  If no backup phrase is given, a new one will be generated.  If you provide your encrypted backup phrase, you will be asked to decrypt it.\n\nExample:\n\n    $ blockstack-cli make_keychain\n    {\n      "mnemonic": "apart spin rich leader siren foil dish sausage fee pipe ethics bundle",\n      "ownerKeyInfo": {\n        "idAddress": "ID-192yxWSvZrss3f4ZY48tUMJJxQvuB6DcXE",\n        "index": 0,\n        "privateKey": "c0a1c606bf509059be1be27aeb88a60bb530910e16e2e605c7ef9e20a0d6bbb001",\n        "version": "v0.10-current"\n      },\n      "paymentKeyInfo": {\n        "address": {\n          "BTC": "1MRq8Vzb2pCVx9fcrBThWaV7reHhudt3ix",\n          "STACKS": "SP3G19B6J50FH6JGXAKS06N6WA1XPJCKKM4JCHC2D"\n        },\n        "index": 0,\n        "privateKey": "56d30f2b605ed114c7dc45599ae521c525d07e1286fbab67452a6586ea49332a01"\n      }\n    }\n\n',
  },
  {
    args: [
      {
        format: '^^([0-9a-z_.+-]{3,37})$|^([0-9a-z_+-]{1,37}).([0-9a-z_.+-]{3,37})$$',
        name: 'blockstack_id',
        type: 'string',
        value: 'blockstack_id',
      },
      {
        format: '^ID-[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'id_address',
        type: 'string',
        value: 'ID-address',
      },
      {
        format: '.+',
        name: 'gaia_url_prefix',
        type: 'string',
        value: 'url',
      },
      {
        format: '.+',
        name: 'resolver_url',
        type: 'string',
        value: 'url',
      },
    ],
    command: 'make_zonefile',
    group: 'Peer Services',
    usage:
      'Generate a zone file for a Blockstack ID with the given profile URL.  If you know the ID-address for the Blockstack ID, the profile URL usually takes the form of:\n\n     {GAIA_URL_PREFIX}/{ADDRESS}/profile.json\n\nwhere {GAIA_URL_PREFIX} is the *read* endpoint of your Gaia hub (e.g. https://gaia.blockstack.org/hub) and {ADDRESS} is the base58check part of your ID-address (i.e. the string following \'ID-\').\n\nExample:\n\n     $ blockstack-cli make_zonefile example.id ID-1ArdkA2oLaKnbNbLccBaFhEV4pYju8hJ82 https://my.gaia.hub/hub\n     $ORIGIN example.id\n     $TTL 3600\n     _http._tcp      IN      URI     10      1       "https://my.gaia.hub/hub/1ArdkA2oLaKnbNbLccBaFhEV4pYju8hJ82/profile.json"\n\n',
  },
  {
    args: [
      {
        format: '^([0-9a-z_.+-]{3,37})$',
        name: 'blockstack_id',
        type: 'string',
        value: 'blockstack_id',
      },
      {
        format: '^ID-[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'id_address',
        type: 'string',
        value: 'id-address',
      },
      {
        format: '.+',
        name: 'gaia_url_prefix',
        type: 'string',
        value: 'url',
      },
      {
        format:
          '^([0-9a-f]{64,66})$|^([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^segwit:p2sh:([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^nosign:[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'reveal_key',
        type: 'string',
        value: 'private_key',
      },
      {
        format: '.+',
        name: 'zonefile',
        type: 'string',
        value: 'path',
      },
      {
        format: '^([0-9a-f]{40})$',
        name: 'zonefile_hash',
        type: 'string',
        value: 'zonefile_hash',
      },
    ],
    command: 'name_import',
    group: 'Namespace Operations',
    usage:
      'Import a name into a namespace you revealed.  The REVEAL_KEY must be the same as the key that revealed the namespace.  You can only import a name into a namespace if the namespace has not yet been launched (i.e. via `namespace_ready`), and if the namespace was revealed less than a year ago (52595 blocks ago).\n\nA zone file will be generated for this name automatically, if "ZONEFILE" is not given.  By default, the zone file will have a URL to the name owner\'s profile prefixed by GAIA_URL_PREFIX.  If you know the *write* endpoint for the name owner\'s Gaia hub, you can find out the GAIA_URL_PREFIX to use with "curl $GAIA_HUB/hub_info".\n\nIf you specify an argument for "ZONEFILE," then the GAIA_URL_PREFIX argument is ignored in favor of your custom zone file on disk.\n\nIf you specify a valid zone file hash for "ZONEFILE_HASH," then it will be used in favor of both ZONEFILE and GAIA_URL_PREFIX.  The zone file hash will be incorporated directly into the name-import transaction.\n\nThis command prints out a transaction ID if it succeeds, and it replicates the zone file (if given) to a transaction broadcaster (you can choose which one with -T).  The zone file will be automatically broadcast to the Blockstack peer network when the transaction confirms.  Alternatively, you can do so yourself with the "zonefile_push" command.\n\nExample:\n\n    $ export REVEAL_KEY="bfeffdf57f29b0cc1fab9ea197bb1413da2561fe4b83e962c7f02fbbe2b1cd5401"\n    $ export ID_ADDRESS="ID-18e1bqU7B5qUPY3zJgMLxDnexyStTeSnvV"\n    $ blockstack-cli name_import example.id "$ID_ADDRESS" https://gaia.blockstack.org/hub "$REVEAL_KEY"\n    f726309cea7a9db364307466dc0e0e759d5c0d6bad1405e2fd970740adc7dc45\n\n',
  },
  {
    args: [
      {
        format: '^([0-9a-z_-]{1,19})$',
        name: 'namespace_id',
        type: 'string',
        value: 'namespace_id',
      },
      {
        format: '^([123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35})$',
        name: 'reveal_address',
        type: 'string',
        value: 'address',
      },
      {
        format:
          '^([0-9a-f]{64,66})$|^([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^segwit:p2sh:([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^nosign:[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'payment_key',
        type: 'string',
        value: 'private_key',
      },
    ],
    command: 'namespace_preorder',
    group: 'Namespace Operations',
    usage:
      'Preorder a namespace.  This is the first of three steps to creating a namespace.  Once this transaction is confirmed, you will need to use the `namespace_reveal` command to reveal the namespace (within 24 hours, or 144 blocks).',
  },
  {
    args: [
      {
        format: '^([0-9a-z_-]{1,19})$',
        name: 'namespace_id',
        type: 'string',
        value: 'namespace_id',
      },
      {
        format: '^([123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35})$',
        name: 'reveal_address',
        type: 'string',
        value: 'address',
      },
      {
        format: '^-?[0-9]+$',
        name: 'version',
        type: 'string',
        value: '2-byte-integer',
      },
      {
        format: '^-?[0-9]+$',
        name: 'lifetime',
        type: 'string',
        value: '4-byte-integer',
      },
      {
        format: '^-?[0-9]+$',
        name: 'coefficient',
        type: 'string',
        value: '1-byte-integer',
      },
      {
        format: '^-?[0-9]+$',
        name: 'base',
        type: 'string',
        value: '1-byte-integer',
      },
      {
        format: '^([0-9]{1,2},){15}[0-9]{1,2}$',
        name: 'price_buckets',
        type: 'string',
        value: 'csv-of-16-nybbles',
      },
      {
        format: '^-?[0-9]+$',
        name: 'nonalpha_discount',
        type: 'string',
        value: 'nybble',
      },
      {
        format: '^-?[0-9]+$',
        name: 'no_vowel_discount',
        type: 'string',
        value: 'nybble',
      },
      {
        format:
          '^([0-9a-f]{64,66})$|^([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^segwit:p2sh:([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^nosign:[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'payment_key',
        type: 'string',
        value: 'private_key',
      },
    ],
    command: 'namespace_reveal',
    group: 'Namespace Operations',
    usage:
      'Reveal a preordered namespace, and set the price curve and payment options.  This is the second of three steps required to create a namespace, and must be done shortly after the associated "namespace_preorder" command.',
  },
  {
    args: [
      {
        format: '^([0-9a-z_-]{1,19})$',
        name: 'namespace_id',
        type: 'string',
        value: 'namespace_id',
      },
      {
        format:
          '^([0-9a-f]{64,66})$|^([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^segwit:p2sh:([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^nosign:[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'reveal_key',
        type: 'string',
        value: 'private_key',
      },
    ],
    command: 'namespace_ready',
    group: 'Namespace Operations',
    usage:
      'Launch a revealed namespace.  This is the third and final step of creating a namespace.  Once launched, you will not be able to import names anymore.',
  },
  {
    args: [
      {
        format: '^([0-9a-z_.+-]{3,37})$',
        name: 'blockstack_id',
        type: 'string',
        value: 'blockstack_id',
      },
    ],
    command: 'price',
    group: 'Querying Blockstack IDs',
    usage:
      'Get the price of an on-chain Blockstack ID.  Its namespace must already exist.\n\nExample:\n\n    $ blockstack-cli price example.id\n    {\n      "units": "BTC",\n      "amount": "5500"\n    }\n\n',
  },
  {
    args: [
      {
        format: '^([0-9a-z_-]{1,19})$',
        name: 'namespace_id',
        type: 'string',
        value: 'namespace_id',
      },
    ],
    command: 'price_namespace',
    group: 'Namespace Operations',
    usage:
      'Get the price of a namespace.\n\nExample:\n\n    $ # get the price of the .hello namespace\n    $ blockstack-cli price_namespace hello\n    {\n      "units": "BTC",\n      "amount": "40000000"\n    }\n\n',
  },
  {
    args: [
      {
        format: '.+',
        name: 'profile',
        type: 'string',
        value: 'path',
      },
      {
        format: '^([0-9a-f]{64,66})$',
        name: 'owner_key',
        type: 'string',
        value: 'private_key',
      },
    ],
    command: 'profile_sign',
    group: 'Profiles',
    usage:
      'Sign a profile on disk with a given owner private key.  Print out the signed profile JWT.\n\nExample:\n\n    $ # Tip: you can get the owner key from your 12-word backup phrase using the get_owner_keys command\n    $ blockstack-cli profile_sign /path/to/profile.json 0ffd299af9c257173be8486ef54a4dd1373407d0629ca25ca68ff24a76be09fb01\n\n',
  },
  {
    args: [
      {
        format:
          '^([0-9a-z_.+-]{3,37})$|^([0-9a-z_+-]{1,37}).([0-9a-z_.+-]{3,37})$|^ID-[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'user_id',
        type: 'string',
        value: 'name-or-id-address',
      },
      {
        format: '.+',
        name: 'profile',
        type: 'string',
        value: 'path',
      },
      {
        format: '^([0-9a-f]{64,66})$',
        name: 'owner_key',
        type: 'string',
        value: 'private_key',
      },
      {
        format: '.+',
        name: 'gaia_hub',
        type: 'string',
        value: 'url',
      },
    ],
    command: 'profile_store',
    group: 'Profiles',
    usage:
      "Store a profile on disk to a Gaia hub.  USER_ID can be either a Blockstack ID or an ID-address.  The GAIA_HUB argument must be the *write* endpoint for the user's Gaia hub (e.g. https://hub.blockstack.org).  You can verify this by ensuring that you can run 'curl \"$GAIA_HUB/hub_info\"' successfully.",
  },
  {
    args: [
      {
        format: '.+',
        name: 'profile',
        type: 'string',
        value: 'path',
      },
      {
        format:
          '^ID-[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$|^([0-9a-f]{66,130})$',
        name: 'id_address',
        type: 'string',
        value: 'id-address',
      },
    ],
    command: 'profile_verify',
    group: 'Profiles',
    usage:
      'Verify a JWT encoding a profile on disk using an ID-address.  Prints out the contained profile on success.\n\nExample:\n\n    $ # get the raw profile JWT\n    $ curl -sL https://raw.githubusercontent.com/jcnelson/profile/master/judecn.id > /tmp/judecn.id.jwt\n    $ # Tip: you can get the ID-address for a name with the "whois" command\n    $ blockstack-cli profile_verify /tmp/judecn.id.jwt ID-16EMaNw3pkn3v6f2BgnSSs53zAKH4Q8YJg\n\n',
  },
  {
    args: [
      {
        format: '^([0-9a-z_.+-]{3,37})$',
        name: 'blockstack_id',
        type: 'string',
        value: 'on-chain-blockstack_id',
      },
      {
        format:
          '^([0-9a-f]{64,66})$|^([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^segwit:p2sh:([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^nosign:[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'owner_key',
        type: 'string',
        value: 'private_key',
      },
      {
        format:
          '^([0-9a-f]{64,66})$|^([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^segwit:p2sh:([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^nosign:[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'payment_key',
        type: 'string',
        value: 'private_key',
      },
      {
        format: '^ID-[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'new_id_address',
        type: 'string',
        value: 'id-address',
      },
      {
        format: '.+',
        name: 'zonefile',
        type: 'string',
        value: 'path',
      },
      {
        format: '^([0-9a-f]{40})$',
        name: 'zonefile_hash',
        type: 'string',
        value: 'zonefile_hash',
      },
    ],
    command: 'renew',
    group: 'Blockstack ID Management',
    usage:
      'Renew a name.  Optionally transfer it to a new owner address (NEW_ID_ADDRESS), and optionally load up and give it a new zone file on disk (ZONEFILE).  If the command succeeds, it prints out a transaction ID.  You can use with the "get_confirmations" command to track its confirmations on the underlying blockchain -- once it reaches 7 confirmations, the rest of the Blockstack peer network will process it.\n\nIf you create a new zonefile for your name, you will need to later use "zonefile_push" to replicate the zone file to the Blockstack peer network once the transaction reaches 7 confirmations.\n\nExample:\n\n    $ # Tip: you can get your owner key from your backup phrase with "get_owner_keys".\n    $ # Tip: you can get your payment key from your backup phrase with "get_payment_key".\n    $ export OWNER="136ff26efa5db6f06b28f9c8c7a0216a1a52598045162abfe435d13036154a1b01"\n    $ export PAYMENT="bfeffdf57f29b0cc1fab9ea197bb1413da2561fe4b83e962c7f02fbbe2b1cd5401"\n    $ blockstack-cli renew hello_world.id "$OWNER" "$PAYMENT"\n    3d8945ce76d4261678d76592b472ed639a10d4298f9d730af4edbbc3ec02882e\n\n    $ # Renew with a new owner\n    $ export NEW_OWNER="ID-141BcmFVbEuuMb7Bd6umXyV6ZD1WYomYDE"\n    $ blockstack-cli renew hello_world.id "$OWNER" "$PAYMENT" "$NEW_OWNER"\n    33865625ef3f1b607111c0dfba9e58604927173bd2e299a343e19aa6d2cfb263\n\n    $ # Renew with a new zone file.\n    $ # Tip: you can create a new zonefile with the "make_zonefile" command.\n    $ export ZONEFILE_PATH="/path/to/new/zonefile.txt"\n    $ blockstack-cli renew hello_world.id "$OWNER" "$PAYMENT" --zonefile "$ZONEFILE_PATH"\n    e41ce043ab64fd5a5fd382fba21acba8c1f46cbb1d7c08771ada858ce7d29eea\n    $ # wait 7 confirmations\n    $ blockstack-cli get_confirmations e41ce043ab64fd5a5fd382fba21acba8c1f46cbb1d7c08771ada858ce7d29eea\n    {\n      "blockHeight": 567890,\n      "confirmations": 7,\n    }\n    $ blockstack-cli -H https://core.blockstack.org zonefile_push "$ZONEFILE_PATH"\n    [\n      "https://core.blockstack.org"\n    ]\n\n',
  },
  {
    args: [
      {
        format: '^([0-9a-z_.+-]{3,37})$',
        name: 'blockstack_id',
        type: 'string',
        value: 'on-chain-blockstack_id',
      },
      {
        format: '^([0-9a-f]{64,66})$',
        name: 'owner_key',
        type: 'string',
        value: 'private_key',
      },
      {
        format:
          '^([0-9a-f]{64,66})$|^([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^segwit:p2sh:([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^nosign:[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'payment_key',
        type: 'string',
        value: 'private_key',
      },
      {
        format: '.+',
        name: 'gaia_hub',
        type: 'string',
        value: 'url',
      },
      {
        format: '.+',
        name: 'zonefile',
        type: 'string',
        value: 'path',
      },
    ],
    command: 'register',
    group: 'Blockstack ID Management',
    usage:
      'If you are trying to register a name for a *private key*, use this command.\n\nRegister a name to a single name-owning private key.  After successfully running this command, and after waiting a couple hours, your name will be ready to use and will resolve to a signed empty profile hosted on the given Gaia hub (GAIA_HUB).\n\nBehind the scenes, this will generate and send two transactions and generate and replicate a zone file with the given Gaia hub URL (GAIA_HUB).  Note that the GAIA_HUB argument must correspond to the *write* endpoint of the Gaia hub (i.e. you should be able to run \'curl "$GAIA_HUB/hub_info"\' and get back data).  If you are using Blockstack PBC\'s default Gaia hub, pass "https://hub.blockstack.org" for this argument.\n\nBy default, this command generates a zone file automatically that points to the Gaia hub\'s read endpoint (which is queried on-the-fly from GAIA_HUB).  If you instead want to have a custom zone file for this name, you can specify a path to it on disk with the ZONEFILE argument.\n\nIf this command completes successfully, your name will be ready to use once both transactions have 7+ confirmations.  You can use the "get_confirmations" command to track the confirmations on the transaction IDs returned by this command.\n\nWARNING: You should *NOT* use the payment private key (PAYMENT_KEY) while the name is being confirmed.  If you do so, you could double-spend one of the pending transactions and lose your name.\n\nExample:\n\n    $ export OWNER="136ff26efa5db6f06b28f9c8c7a0216a1a52598045162abfe435d13036154a1b01"\n    $ export PAYMENT="bfeffdf57f29b0cc1fab9ea197bb1413da2561fe4b83e962c7f02fbbe2b1cd5401"\n    $ blockstack-cli register example.id "$OWNER" "$PAYMENT" https://hub.blockstack.org\n    9bb908bfd4ab221f0829167a461229172184fc825a012c4e551533aa283207b1\n\n',
  },
  {
    args: [
      {
        format: '^([0-9a-z_.+-]{3,37})$',
        name: 'blockstack_id',
        type: 'string',
        value: 'blockstack_id',
      },
      {
        format: '^ID-[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'id-address',
        type: 'string',
        value: 'id-address',
      },
      {
        format:
          '^([0-9a-f]{64,66})$|^([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^segwit:p2sh:([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^nosign:[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'payment_key',
        type: 'string',
        value: 'private_key',
      },
      {
        format: '.+',
        name: 'gaia_url_prefix',
        type: 'string',
        value: 'url',
      },
      {
        format: '.+',
        name: 'zonefile',
        type: 'string',
        value: 'path',
      },
    ],
    command: 'register_addr',
    group: 'Blockstack ID Management',
    usage:
      'If you are trying to register a name for an *ID-address*, use this command.\n\nRegister a name to someone\'s ID-address.  After successfully running this command and waiting a couple of hours, the name will be registered on-chain and have a zone file with a URL to where the owner\'s profile should be.  This command does NOT generate, sign, or replicate a profile for the name---the name owner will need to do this separately, once the name is registered.\n\nBehind the scenes, this command will generate two transactions, and generate and replicate a zone file with the given Gaia hub read URL (GAIA_URL_PREFIX).  Note that the GAIA_URL_PREFIX argument must correspond to the *read* endpoint of the Gaia hub (e.g. if you are using Blockstack PBC\'s default Gaia hub, this is "https://gaia.blockstack.org/hub"). If you know the *write* endpoint of the name owner\'s Gaia hub, you can find the right value for GAIA_URL_PREFIX by running "curl $GAIA_HUB/hub_info".\n\nNo profile will be generated or uploaded by this command.  Instead, this command generates a zone file that will include the URL to a profile based on the GAIA_URL_PREFIX argument.\n\nThe zone file will be generated automatically from the GAIA_URL_PREFIX argument.  If you need to use a custom zone file, you can pass the path to it on disk via the ZONEFILE argument.\n\nIf this command completes successfully, the name will be ready to use in a couple of hours---that is, once both transactions have 7+ confirmations. You can use the "get_confirmations" command to track the confirmations.\n\nWARNING: You should *NOT* use the payment private key (PAYMENT_KEY) while the name is being confirmed.  If you do so, you could double-spend one of the pending transactions and lose the name.\n\nExample:\n\n    $ export ID_ADDRESS="ID-18e1bqU7B5qUPY3zJgMLxDnexyStTeSnvV"\n    $ export PAYMENT="bfeffdf57f29b0cc1fab9ea197bb1413da2561fe4b83e962c7f02fbbe2b1cd5401"\n    $ blockstack-cli register_addr example.id "$ID_ADDRESS" "$PAYMENT" https://gaia.blockstack.org/hub',
  },
  {
    args: [
      {
        format: '^([0-9a-z_+-]{1,37}).([0-9a-z_.+-]{3,37})$',
        name: 'blockstack_id',
        type: 'string',
        value: 'blockstack_id',
      },
      {
        format: '^([0-9a-f]{64,66})$',
        name: 'owner_key',
        type: 'string',
        value: 'private_key',
      },
      {
        format: '.+',
        name: 'gaia_hub',
        type: 'string',
        value: 'url',
      },
      {
        format: '.+',
        name: 'registrar',
        type: 'string',
        value: 'url',
      },
      {
        format: '.+',
        name: 'zonefile',
        type: 'string',
        value: 'path',
      },
    ],
    command: 'register_subdomain',
    group: 'Blockstack ID Management',
    usage:
      'Register a subdomain.  This will generate and sign a subdomain zone file record with the given GAIA_HUB URL and send it to the given subdomain registrar (REGISTRAR).\n\nThis command generates, signs, and uploads a profile to the GAIA_HUB url.  Note that the GAIA_HUB argument must correspond to the *write* endpoint of your Gaia hub (i.e. you should be able to run \'curl "$GAIA_HUB/hub_info"\' successfully).  If you are using Blockstack PBC\'s default Gaia hub, this argument should be "https://hub.blockstack.org".\n\nWARNING: At this time, no validation will occur on the registrar URL.  Be sure that the URL corresponds to the registrar for the on-chain name before running this command!\n\nExample:\n\n    $ export OWNER="6e50431b955fe73f079469b24f06480aee44e4519282686433195b3c4b5336ef01"\n    $ # NOTE: https://registrar.blockstack.org is the registrar for personal.id!\n    $ blockstack-cli register_subdomain hello.personal.id "$OWNER" https://hub.blockstack.org https://registrar.blockstack.org\n',
  },
  {
    args: [
      {
        format: '^([0-9a-z_.+-]{3,37})$',
        name: 'blockstack_id',
        type: 'string',
        value: 'on-chain-blockstack_id',
      },
      {
        format:
          '^([0-9a-f]{64,66})$|^([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^segwit:p2sh:([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^nosign:[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'owner_key',
        type: 'string',
        value: 'private_key',
      },
      {
        format:
          '^([0-9a-f]{64,66})$|^([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^segwit:p2sh:([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^nosign:[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'payment_key',
        type: 'string',
        value: 'private_key',
      },
    ],
    command: 'revoke',
    group: 'Blockstack ID Management',
    usage:
      'Revoke a name.  This renders it unusable until it expires (if ever).  This command prints out the transaction ID if it succeeds.  Once the transaction confirms, the name will be revoked by each node in the peer network.  This command only works for on-chain names, not subdomains.\n\nExample:\n\n    $ # Tip: you can get your owner and payment keys from your 12-word backup phrase using the get_owner_keys and get_payment_key commands.\n    $ export OWNER="6e50431b955fe73f079469b24f06480aee44e4519282686433195b3c4b5336ef01"\n    $ export PAYMENT="bfeffdf57f29b0cc1fab9ea197bb1413da2561fe4b83e962c7f02fbbe2b1cd5401"\n    $ blockstack-cli revoke example.id "$OWNER" "$PAYMENT"\n    233b559c97891affa010567bd582110508d0236b4e3f88d3b1d0731629e030b0\n\n',
  },
  {
    args: [
      {
        format: '^([123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35})$',
        name: 'recipient_address',
        type: 'string',
        value: 'address',
      },
      {
        format: '^-?[0-9]+$',
        name: 'amount',
        type: 'string',
        value: 'satoshis',
      },
      {
        format:
          '^([0-9a-f]{64,66})$|^([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^segwit:p2sh:([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^nosign:[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'payment_key',
        type: 'string',
        value: 'private_key',
      },
    ],
    command: 'send_btc',
    group: 'Account Management',
    usage:
      'Send some Bitcoin (in satoshis) from a payment key to an address.  Up to the given amount will be spent, but likely less---the actual amount sent will be the amount given, minus the transaction fee.  For example, if you want to send 10000 satoshis but the transaction fee is 2000 satoshis, then the resulting transaction will send 8000 satoshis to the given address.  This is to ensure that this command does not *over*-spend your Bitcoin.  If you want to check the amount before spending, pass the -x flag to see the raw transaction.\n\nIf the command succeeds, it prints out the transaction ID.  You can track its confirmations with the get_confirmations command.\n\nExample:\n\n    $ export PAYMENT="bfeffdf57f29b0cc1fab9ea197bb1413da2561fe4b83e962c7f02fbbe2b1cd5401"\n    $ blockstack-cli send_btc 18qTSE5PPQmypwKKej7QX5Db2XAttgYeA1 123456 "$PAYMENT"\n    c7e239fd24da30e36e011e6bc7db153574a5b40a3a8dc3b727adb54ad038acc5\n\n',
  },
  {
    args: [
      {
        format: '^([0123456789ABCDEFGHJKMNPQRSTVWXYZ]+)$',
        name: 'address',
        type: 'string',
        value: 'address',
      },
      {
        format: '^^([0-9a-z_-]{1,19})$$|^STACKS$',
        name: 'type',
        type: 'string',
        value: 'token-type',
      },
      {
        format: '^[0-9]+$',
        name: 'amount',
        type: 'string',
        value: 'integer',
      },
      {
        format:
          '^([0-9a-f]{64,66})$|^([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^segwit:p2sh:([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^nosign:[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'payment_key',
        type: 'string',
        value: 'private_key',
      },
      {
        format:
          '^([0-9a-f]{64,66})$|^([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^segwit:p2sh:([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^nosign:[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'bitcoin_fee_key',
        type: 'string',
        value: 'private_key',
      },
      {
        format: '^.{0,34}$',
        name: 'memo',
        type: 'string',
        value: 'string',
      },
    ],
    command: 'send_tokens',
    group: 'Account Management',
    usage:
      'Send a particular type of tokens to the given ADDRESS.  Right now, only supported TOKEN-TYPE is "STACKS".  Optionally include a memo string (MEMO) up to 34 characters long.\n\nIf the command succeeds, it prints out a transaction ID.  You can track the confirmations on the transaction via the get_confirmations command.  Once the transaction has 7 confirmations, the Blockstack peer network will have processed it, and your payment key balance and recipient balance will be updated.\n\nAt this time, token transfers are encoded as Bitcoin transactions.  As such, you will need to pay a transaction fee in Bitcoin.  Your payment key should have both a Bitcoin balance and a Stacks balance (you can check with the "balance" command).\n\nExample:\n\n    $ # check balances of sender and recipient before sending.\n    $ # address of the key below is SP2SC16ASH76GX549PT7J5WQZA4GHMFBKYMBQFF9V\n    $ export PAYMENT="bfeffdf57f29b0cc1fab9ea197bb1413da2561fe4b83e962c7f02fbbe2b1cd5401"\n    $ export BTC_PAYMENT="4be95a5987ec727c033aa48a3fb1dbadb750446c1c63a02707a0b1c28e7ec17801"\n    $ blockstack-cli balance SP2SC16ASH76GX549PT7J5WQZA4GHMFBKYMBQFF9V\n    {\n      "BTC": "125500"\n      "STACKS": "10000000"\n    }\n    $ blockstack-cli balance SP1P10PS2T517S4SQGZT5WNX8R00G1ECTRKYCPMHY\n    {\n      "BTC": "0"\n      "STACKS": "0"\n    }\n\n    $ # send tokens\n    $ blockstack-cli send_tokens SP1P10PS2T517S4SQGZT5WNX8R00G1ECTRKYCPMHY STACKS 12345 "$PAYMENT" "$BTC_PAYMENT"\n    a9d387a925fb0ba7a725fb1e11f2c3f1647473699dd5a147c312e6453d233456\n\n    $ # wait 7 confirmations\n    $ blockstack-cli get_confirmations a9d387a925fb0ba7a725fb1e11f2c3f1647473699dd5a147c312e6453d233456\n    {\n      "blockHeight": 567890,\n      "confirmations": 7,\n    }\n\n    $ # check balance again.  The recipient receives some dust to encode the Stacks transfer,\n    $ # and the sender pays for the transaction fee.\n    $ blockstack-cli balance SP2SC16ASH76GX549PT7J5WQZA4GHMFBKYMBQFF9V\n    {\n      "BTC": "117000"\n      "STACKS": "9987655"\n    }\n    $ blockstack-cli balance SP1P10PS2T517S4SQGZT5WNX8R00G1ECTRKYCPMHY\n    {\n      "BTC": "5500"\n      "STACKS": "12345"\n    }\n\n',
  },
  {
    args: [
      {
        format: '^([0-9a-z_.+-]{3,37})$',
        name: 'blockstack_id',
        type: 'string',
        value: 'on-chain-blockstack_id',
      },
      {
        format: '^ID-[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'new_id_address',
        type: 'string',
        value: 'id-address',
      },
      {
        format: '^true$|^false$',
        name: 'keep_zonefile',
        type: 'string',
        value: 'true-or-false',
      },
      {
        format:
          '^([0-9a-f]{64,66})$|^([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^segwit:p2sh:([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^nosign:[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'owner_key',
        type: 'string',
        value: 'private_key',
      },
      {
        format:
          '^([0-9a-f]{64,66})$|^([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^segwit:p2sh:([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^nosign:[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'payment_key',
        type: 'string',
        value: 'private_key',
      },
    ],
    command: 'transfer',
    group: 'Blockstack ID Management',
    usage:
      'Transfer a Blockstack ID to a new address (NEW_ID_ADDRESS).  Optionally preserve its zone file (KEEP_ZONEFILE).  If the command succeeds, it will print a transaction ID.  Once the transaction reaches 7 confirmations, the Blockstack peer network will transfer the Blockstack ID to the new ID-address.  You can track the transaction\'s confirmations with the "get_confirmations" command.\n\nThis command only works for on-chain Blockstack IDs.  It does not yet work for subdomains.\n\nAn ID-address can only own up to 25 Blockstack IDs.  In practice, you should generate a new owner key and ID-address for each name you receive (via the "get_owner_keys" command).\n\nExample:\n\n    $ # Tip: you can get your owner key from your backup phrase with "get_owner_keys".\n    $ # Tip: you can get your payment key from your backup phrase with "get_payment_key".\n    $ export OWNER="136ff26efa5db6f06b28f9c8c7a0216a1a52598045162abfe435d13036154a1b01"\n    $ export PAYMENT="bfeffdf57f29b0cc1fab9ea197bb1413da2561fe4b83e962c7f02fbbe2b1cd5401"\n    $ blockstack-cli transfer example.id ID-1HJA1AJvWef21XbQVL2AcTv71b6JHGPfDX true "$OWNER" "$PAYMENT"\n    e09dc158e586d0c09dbcdcba917ec394e6c6ac2b9c91c4b55f32f5973e4f08fc\n\n',
  },
  {
    args: [
      {
        format: '^([0-9a-z_.+-]{3,37})$',
        name: 'blockstack_id',
        type: 'string',
        value: 'on-chain-blockstack_id',
      },
      {
        format: '^ID-[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'id_address',
        type: 'string',
        value: 'id-address',
      },
      {
        format:
          '^([0-9a-f]{64,66})$|^([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^segwit:p2sh:([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^nosign:[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'payment_key',
        type: 'string',
        value: 'private_key',
      },
    ],
    command: 'tx_preorder',
    group: 'Blockstack ID Management',
    usage:
      'Generate and send NAME_PREORDER transaction, for a Blockstack ID to be owned by a given ID_ADDRESS.  The name cost will be paid for by the gven PAYMENT_KEY.  The ID-address should be a never-before-seen address, since it will be used as a salt when generating the name preorder hash.\n\nThis is a low-level command that only experienced Blockstack developers should use.  If you just want to register a name, use the "register" command.\n',
  },
  {
    args: [
      {
        format: '^([0-9a-z_.+-]{3,37})$',
        name: 'blockstack_id',
        type: 'string',
        value: 'on-chain-blockstack_id',
      },
      {
        format: '^ID-[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'id_address',
        type: 'string',
        value: 'id-address',
      },
      {
        format:
          '^([0-9a-f]{64,66})$|^([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^segwit:p2sh:([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^nosign:[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'payment_key',
        type: 'string',
        value: 'private_key',
      },
      {
        format: '.+',
        name: 'zonefile',
        type: 'string',
        value: 'path',
      },
      {
        format: '^([0-9a-f]{40})$',
        name: 'zonefile_hash',
        type: 'string',
        value: 'zoenfile_hash',
      },
    ],
    command: 'tx_register',
    group: 'Blockstack ID Management',
    usage:
      'Generate and send a NAME_REGISTRATION transaction, assigning the given BLOCKSTACK_ID to the given ID_ADDRESS.  Optionally pair the Blockstack ID with a zone file (ZONEFILE) or the hash of the zone file (ZONEFILE_HASH).  You will need to push the zone file to the peer network after the transaction confirms (i.e. with "zonefile_push").\n\nThis is a low-level command that only experienced Blockstack developers should use.  If you just want to register a name, you should use the "register" command.',
  },
  {
    args: [
      {
        format: '^([0-9a-z_.+-]{3,37})$',
        name: 'blockstack_id',
        type: 'string',
        value: 'on-chain-blockstack_id',
      },
      {
        format: '.+',
        name: 'zonefile',
        type: 'string',
        value: 'path',
      },
      {
        format:
          '^([0-9a-f]{64,66})$|^([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^segwit:p2sh:([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^nosign:[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'owner_key',
        type: 'string',
        value: 'private_key',
      },
      {
        format:
          '^([0-9a-f]{64,66})$|^([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^segwit:p2sh:([0-9]+),([0-9a-f]{64,66},)*([0-9a-f]{64,66})$|^nosign:[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1,35}$',
        name: 'payment_key',
        type: 'string',
        value: 'private_key',
      },
      {
        format: '^([0-9a-f]{40})$',
        name: 'zonefile_hash',
        type: 'string',
        value: 'zonefile_hash',
      },
    ],
    command: 'update',
    group: 'Blockstack ID Management',
    usage:
      'Update the zonefile for an on-chain Blockstack ID.  You can generate a well-formed zone file using the "make_zonefile" command, or you can supply your own.  Zone files can be up to 40Kb.  Alternatively, if you only want to announce the hash of a zone file (or any arbitrary 20-byte hex string), you can do so by passing a value for ZONEFILE_HASH.  If ZONEFILE_HASH is given, then the value for ZONEFILE will be ignored.\n\nIf this command succeeds, it prints out a transaction ID.  Once the transaction has 7 confirmations, the Blockstack peer network will set the name\'s zone file hash to the RIPEMD160(SHA256) hash of the given zone file (or it will simply set it to the hash given in ZONEFILE_HASH).\n\nOnce the transaction confirms, you will need to replicate the zone file to the Blockstack peer network.  This can be done with the "zonefile_push" command.  Until you do so, no Blockstack clients will be able to obtain the zone file announced by this command.\n\nExample:\n\n    $ # Tip: you can get your owner and payment keys from your 12-word backup phrase using the get_owner_keys and get_payment_key commands.\n    $ export OWNER="6e50431b955fe73f079469b24f06480aee44e4519282686433195b3c4b5336ef01"\n    $ export PAYMENT="bfeffdf57f29b0cc1fab9ea197bb1413da2561fe4b83e962c7f02fbbe2b1cd5401"\n    $ # make a new zone file\n    $ blockstack-cli make_zonefile example.id ID-1ArdkA2oLaKnbNbLccBaFhEV4pYju8hJ82 https://my.gaia.hub/hub > /tmp/zonefile.txt\n    \n    $ # update the name to reference this new zone file\n    $ blockstack-cli update example.id /tmp/zonefile.txt "$OWNER" "$PAYMENT"\n    8e94a5b6647276727a343713d3213d587836e1322b1e38bc158406f5f8ebe3fd\n    \n    $ # check confirmations\n    $ blockstack-cli get_confirmations e41ce043ab64fd5a5fd382fba21acba8c1f46cbb1d7c08771ada858ce7d29eea\n    {\n      "blockHeight": 567890,\n      "confirmations": 7,\n    }\n    \n    $ # send out the new zone file to a Blockstack peer\n    $ blockstack-cli -H https://core.blockstack.org zonefile_push /tmp/zonefile.txt\n    [\n      "https://core.blockstack.org"\n    ]\n\n',
  },
  {
    args: [
      {
        format: '^([0-9a-z_.+-]{3,37})$|^([0-9a-z_+-]{1,37}).([0-9a-z_.+-]{3,37})$',
        name: 'blockstack_id',
        type: 'string',
        value: 'blockstack_id',
      },
    ],
    command: 'whois',
    group: 'Querying Blockstack IDs',
    usage:
      'Look up the zone file and owner of a Blockstack ID.  Works with both on-chain and off-chain names.\n\nExample:\n\n    $ blockstack-cli whois example.id\n    {\n      "address": "1ArdkA2oLaKnbNbLccBaFhEV4pYju8hJ82",\n      "block_renewed_at": 567890,\n      "blockchain": "bitcoin",\n      "expire_block": 687010,\n      "grace_period": false,\n      "last_transaction_height": "567891",\n      "last_txid": "a564aa482ee43eb2bdfb016e01ea3b950bab0cfa39eace627d632e73c7c93e48",\n      "owner_script": "76a9146c1c2fc3cf74d900c51e9b5628205130d7b98ae488ac",\n      "renewal_deadline": 692010,\n      "resolver": null,\n      "status": "registered",\n      "zonefile": "$ORIGIN example.id\\n$TTL 3600\\n_http._tcp URI 10 1 \\"https://gaia.blockstack.org/hub/1ArdkA2oLaKnbNbLccBaFhEV4pYju8hJ82/profile.json\\"\\n",\n      "zonefile_hash": "ae4ee8e7f30aa890468164e667e2c203266f726e"\n    }\n\n',
  },
  {
    args: [
      {
        format: '.+',
        name: 'zonefile',
        type: 'string',
        value: 'path',
      },
    ],
    command: 'zonefile_push',
    group: 'Peer Services',
    usage:
      'Push a zone file on disk to the Blockstack peer network.  The zone file must correspond to a zone file hash that has already been announced.  That is, you use this command in conjunction with the "register", "update", "renew", or "name_import" commands.\n\nExample:\n\n    $ blockstack-cli -H https://core.blockstack.org zonefile_push /path/to/zonefile.txt\n    [\n      "https://core.blockstack.org"\n    ]\n\n',
  },
  {
    args: [
      {
        format: '^([0-9a-z_.+-]{3,37})$|^([0-9a-z_+-]{1,37}).([0-9a-z_.+-]{3,37})$',
        name: 'blockstack_id',
        type: 'string',
        value: 'blockstack_id',
      },
      {
        format: '^([0-9a-z_.+-]{3,37})$|^([0-9a-z_+-]{1,37}).([0-9a-z_.+-]{3,37})$',
        name: 'domain',
        type: 'string',
        value: 'domain',
      },
      {
        format: '^([0-9a-f]{64,66})$',
        name: 'owner_key',
        type: 'string',
        value: 'private_key',
      },
    ],
    command: 'get_did_configuration',
    group: 'DID',
    usage:
      'Creates a DID configuration for the given blockstack id and domain to create a link between both.The specification is define by the Decentralized Identity Foundation at https://identity.foundation/specs/did-configuration/\nThe DID configuration should be placed in the json file ".well_known/did_configuration"\nExample:\n\n    $ # Tip: you can get your owner keys from your 12-word backup phrase using the get_owner_keys command.\n    $ export PRIVATE_OWNER_KEY="6e50431b955fe73f079469b24f06480aee44e4519282686433195b3c4b5336ef01"\n    $ blockstack-cli get_did_configuration public_profile_for_testing.id.blockstack helloblockstack.com PRIVATE_OWNER_KEY\n    {\n       "entries": [\n          {\n            "did": "did:stack:v0:SewTRvPZUEQGdr45QvEnVMGHZBhx3FT1Jj-0",\n            "jwt": "eyJ0eXAiOiJKV1QiL...."\n          }\n       ]\n    }\n\nThe decoded content of the jwt above is \n    {\n       "header": {\n          "typ": "JWT", "alg": "ES256K"\n       },\n       "payload": {\n           "iss": "did:stack:v0:SewTRvPZUEQGdr45QvEnVMGHZBhx3FT1Jj-0",\n           "domain": "helloblockstack.com",\n           "exp": "2020-12-07T13:05:28.375Z"\n       },\n       "signature": "NDY7ISzgAHKcZDvbxzTxQdVnf6xWMZ46w5vHcDpNx_1Fsyip0M6E6GMq_2YZ-gUcwmwlo8Ag9jgnfOkaBIFpoQ"\n    }\n\n',
  },
];