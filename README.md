# GitHub Secret Extractor
A simple tool to extract the plain text values of [GitHub Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets). This action was made to show the importance of limiting who can run workflows in repositories with secrets. 
# Usage
This action takes a string, `secret` as input and prints the base 64 encoded string to the console. You can then use a tool like [this one](https://www.base64decode.org/) to get the secret in plain text. 
### Input
```yaml
    - name: Extract A Juicy Secret
      uses: Plabick/GitHub-Secret-Extractor@master
      with:
        secret: ${{ secrets.TARGET_SECRET}}
```
### Output
```text
************************************
* Encoded Secret: YmxhaGJsYWhibGFo *
************************************
```
## Why is the output encoded?
GitHub redacts text that matches secrets from the console. The only way to output secrets in the console is to encode them. 

# How can I protect my secrets?

To protect against this tool, add the base 64 encoding of your secret to this repository in addition to the secret itself. That will cause the encoded secret to be redacted in the console and log(s). 

To protect your secrets from a variant of this tool that uses an arbitrary encoding scheme, limit who can modify workflows on repos with secrets. There is no other way to prevent the disclosure of stored secrets. 