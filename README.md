# NFT Videos for the IC

Branches and their descriptions:
1. `simple_video`: Deploy a simple asset canister that is deployed along with a bundled video asset.
2. `upload_form_for_urls`: Deploy an asset canister that stores and retrieves media URLs from a CRUD backend canister. The asset canister displays the media at the URL as an embed.
3. `upload_form_for_url_nfts`: Same as 2, but now deploys each URL as an NFT.

### Dependencies

Besides `dfx`, the `vite` build tool and Dfinity's `@dfinity/agent` package are required as most of the code is written as simply as possible in vanilla JS. The `vessel` package manager is also needed for most branches.

### Attribution

This code makes heavy use of the following repositories:
* [dfinity_nft](https://github.com/SuddenlyHazel/dfinity_nft), by [SuddenlyHazel](https://github.com/SuddenlyHazel).
* [motoko-crud](https://github.com/matthewhammer/motoko-crud), by [matthewhammer](https://github.com/matthewhammer).
