import requests
import json

class Foo:
  def __init__(self, access_key):
    self.url = "https://api.github.com/repos/gamestoy/buenos-aires-theme/issues"
    self.access_key = access_key
    
  @property
  def foo(self):
    return 'bar'
  
  def __call__(self, query, page=1, offset=20):
    # A comment
    params = {
      "query": query,
      "page": page,
      "offset": offset
    }
    response = requests.get(self.url, params=params)
    data = json.loads(response.text)
    return data["results"]
