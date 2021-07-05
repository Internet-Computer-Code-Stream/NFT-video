# NFT Videos for the IC

Branches and their descriptions:
* `simple_video_asset`: Deploy a simple asset canister that is deployed along with a bundled video asset.
* `upload_form_for_urls`: Deploy an asset canister that stores and retrieves media URLs from a CRUD backend canister. The asset canister displays the media at the URL as an embed.
* `upload_form_for_url_nfts`: Same as the previous branch, but now deploys each URL as an NFT.

## Dependencies

Only `vite` and Dfinity's `@dfinity/agent` package are required as most of the code is written as simply as possible in vanilla JS.
