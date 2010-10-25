var search_data = {"index":{"searchIndex":["sucker","request","response","<<()","associate_tag=()","curl()","find()","get()","key=()","new()","new()","new()","to_hash()","valid?()","version=()","xml()","license","readme.md","sucker.rb","request.rb","response.rb","version.rb"],"longSearchIndex":["lib/sucker.rb","sucker","sucker","sucker::request","sucker::request","sucker::request","sucker::response","sucker::request","sucker::request","sucker","sucker::request","sucker::response","sucker::response","sucker::response","sucker::request","sucker::response","files/license.html","files/readme_md.html","files/lib/sucker_rb.html","files/lib/sucker/request_rb.html","files/lib/sucker/response_rb.html","files/lib/sucker/version_rb.html"],"info":[["Sucker","lib/sucker/response.rb","classes/Sucker.html"," < ","= Sucker Sucker is a Ruby wrapper to the Amazon Product Advertising API. ",1],["Request","Sucker","classes/Sucker/Request.html"," < Object","A wrapper around the API request ",1],["Response","Sucker","classes/Sucker/Response.html"," < Object","A Nokogiri-driven wrapper around the cURL response ",1],["<<","Sucker::Request","classes/Sucker/Request.html#M000008","(hash)","A helper method that merges a hash into existing parameters worker = Sucker.new worker << { \"Operation\"",2],["associate_tag=","Sucker::Request","classes/Sucker/Request.html#M000009","(token)","Sets the associate tag worker = Sucker.new worker.associate_tag = 'foo-bar' ",2],["curl","Sucker::Request","classes/Sucker/Request.html#M000010","()","A configurable curl object worker = Sucker.new worker.curl { |c| c.interface = \"eth1\" } ",2],["find","Sucker::Response","classes/Sucker/Response.html#M000001","(path)","Queries an xpath and returns an array of matching nodes Will yield each match if a block is is given",2],["get","Sucker::Request","classes/Sucker/Request.html#M000011","()","Performs the request and returns a response object worker = Sucker.new response = worker.get ",2],["key=","Sucker::Request","classes/Sucker/Request.html#M000012","(token)","Sets the AWS Access Key ID worker = Sucker.new worker.key = 'foo' ",2],["new","Sucker","classes/Sucker.html#M000020","(args={})","Initializes a request object worker = Sucker.new( :locale => \"us\", :key    => \"API KEY\", :secret => \"API",2],["new","Sucker::Request","classes/Sucker/Request.html#M000002","(args)","Initializes a request object worker = Sucker.new( :locale => \"us\", :key    => \"API KEY\", :secret => \"API",2],["new","Sucker::Response","classes/Sucker/Response.html#M000000","(curl)","",2],["to_hash","Sucker::Response","classes/Sucker/Response.html#M000004","()","Parses the response into a simple hash response = worker.get response.to_hash ",2],["valid?","Sucker::Response","classes/Sucker/Response.html#M000005","()","Checks if the HTTP response is OK response = worker.get p response.valid? => true ",2],["version=","Sucker::Request","classes/Sucker/Request.html#M000013","(version)","Sets the Amazon API version worker = Sucker.new worker.version = '2010-06-01' ",2],["xml","Sucker::Response","classes/Sucker/Response.html#M000006","()","The XML document response = worker.get response.xml ",2],["LICENSE","files/LICENSE.html","files/LICENSE.html","","(The MIT License)   Copyright (c) 2010 Paper Cavalier   Permission is hereby granted, free of charge,",3],["README.md","files/README_md.html","files/README_md.html","","Sucker ======  Sucker is a Ruby wrapper to the [Amazon Product Advertising API](https://affiliate-program.amazon.co.uk/gp/advertising/api/detail/main.html).",3],["sucker.rb","files/lib/sucker_rb.html","files/lib/sucker_rb.html","","",3],["request.rb","files/lib/sucker/request_rb.html","files/lib/sucker/request_rb.html","","",3],["response.rb","files/lib/sucker/response_rb.html","files/lib/sucker/response_rb.html","","",3],["version.rb","files/lib/sucker/version_rb.html","files/lib/sucker/version_rb.html","","",3]]}}