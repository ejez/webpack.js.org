(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{295:function(e,n,o){"use strict";o.r(n),n.default='<p>Compilation object has many methods and hooks avaialble. On this page we will list the available methods and properties.</p>\n<h2 id="compilation-object-methods">compilation object methods<a href="#compilation-object-methods" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="getstats">getStats<a href="#getstats" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function</code></p>\n<p>Returns Stats object for the current compilation.</p>\n<h3 id="addmodule">addModule<a href="#addmodule" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function (module, cacheGroup)</code></p>\n<p>Returns Stats object for the current compilation.</p>\n<p>Parameters:</p>\n<ul>\n<li><code>module</code> - module to be added</li>\n<li><code>cacheGroup</code> - <code>cacheGroup</code> of the module</li>\n</ul>\n<h3 id="getmodule">getModule<a href="#getmodule" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function (module)</code></p>\n<p>Fetches a module from a compilation by its identifier.</p>\n<p>Parameters:</p>\n<ul>\n<li><code>module</code> - module to be fetched. Identifier is extracted from the module by the compilation using <code>module.identifier()</code> method.</li>\n</ul>\n<h3 id="findmodule">findModule<a href="#findmodule" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function (module)</code></p>\n<p>Attempts to search for a module by its identifier.</p>\n<p>Parameters:</p>\n<ul>\n<li><code>module</code> - module to be searched for. Identifier is extracted from the module by the compilation using <code>module.identifier()</code> method.</li>\n</ul>\n<h3 id="waitforbuildingfinished">waitForBuildingFinished<a href="#waitforbuildingfinished" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function (module, callback)</code></p>\n<p>Runs a given <code>callback</code> function when given module was built.</p>\n<p>Parameters:</p>\n<ul>\n<li><code>module</code> - module at question.</li>\n<li><code>callback</code> - a function to be invoked.</li>\n</ul>\n<h3 id="buildmodule">buildModule<a href="#buildmodule" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function (module, optional, origin, dependencies)</code></p>\n<p>Builds the given module.</p>\n<p>Parameters:</p>\n<ul>\n<li><code>module</code> - the module to be built.</li>\n<li><code>optional</code> - optional flag.</li>\n<li><code>origin</code> - origin module from which this module build was requested.</li>\n<li><code>dependencies</code> - optional dependencies of the module to be built.</li>\n</ul>\n<h3 id="processmoduledependencies">processModuleDependencies<a href="#processmoduledependencies" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function (module, callback)</code></p>\n<p>Process the given module dependencies.</p>\n<p>Parameters:</p>\n<ul>\n<li><code>module</code> - module to be processed for the dependencies.</li>\n<li><code>callback</code> - function to be invoked when dependencies of the module had been processed.</li>\n</ul>\n<h3 id="addmoduledependencies">addModuleDependencies<a href="#addmoduledependencies" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function (module, dependencies, bail, cacheGroup, recursive, callback)</code></p>\n<p>Adds dependencies to the module. Automatically called by <code>processModuleDependencies</code> after processing dependencies.</p>\n<p>Parameters:</p>\n<ul>\n<li><code>module</code> - module to add dependencies to.</li>\n<li><code>dependencies</code> - set of sorted dependencies to iterate through and add to the module.</li>\n<li><code>bail</code> - whether to bail or not when error occurs.</li>\n<li><code>cacheGroup</code> - <code>cacheGroup</code> of the module.</li>\n<li><code>recursive</code> - whether it is a recursive traversal.</li>\n<li><code>callback</code> - function to invoke after adding the module dependencies.</li>\n</ul>\n<h3 id="addentry">addEntry<a href="#addentry" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function (context, entry, name, callback)</code></p>\n<p>Adds an entry to the compilation.</p>\n<p>Parameters:</p>\n<ul>\n<li><code>context</code> - context path for entry.</li>\n<li><code>entry</code> - entry dependency.</li>\n<li><code>name</code> - name of entry.</li>\n<li><code>callback</code> - function to be invoked when addEntry finishes.</li>\n</ul>\n<h3 id="prefetch">prefetch<a href="#prefetch" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function (context, dependency, callback)</code></p>\n<p>Creates a module from given dependency.</p>\n<p>Parameters:</p>\n<ul>\n<li><code>context</code> - context path.</li>\n<li><code>dependency</code> - dependency that was used to create the module.</li>\n<li><code>callback</code> - module callback that sends a module up one level.</li>\n</ul>\n<h3 id="rebuildmodule">rebuildModule<a href="#rebuildmodule" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function (module, thisCallback)</code></p>\n<p>Triggers a re-build of the module.</p>\n<p>Parameters:</p>\n<ul>\n<li><code>module</code> - module to be rebuilt.</li>\n<li><code>thisCallback</code> - function to be invoked when the module finishes rebuilding.</li>\n</ul>\n<h3 id="finish">finish<a href="#finish" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function (callback)</code></p>\n<p>Finishes compilation and invokes given callback.</p>\n<p>Parameters:</p>\n<ul>\n<li><code>callback</code> - function to be invoked when the compilation has been finished.</li>\n</ul>\n<h3 id="seal">seal<a href="#seal" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function (callback)</code></p>\n<p>Seals the compilation.</p>\n<p>Parameters:</p>\n<ul>\n<li><code>callback</code> - function to be invoked when the compilation has been sealed.</li>\n</ul>\n<h3 id="unseal">unseal<a href="#unseal" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function</code></p>\n<p>Unseals the compilation.</p>\n<p>Parameters:</p>\n<ul>\n<li><code>callback</code> - function to be invoked when compilation has been sealed.</li>\n</ul>\n<h3 id="reportdependencyerrorsandwarnings">reportDependencyErrorsAndWarnings<a href="#reportdependencyerrorsandwarnings" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function (module, blocks)</code></p>\n<p>Adds errors and warnings of the given module to the compilation errors and warnings.</p>\n<p>Parameters:</p>\n<ul>\n<li><code>module</code> - the module which\'s errors and warnings to be reported.</li>\n<li><code>blocks</code> - a set of dependencies blocks to report from.</li>\n</ul>\n<h3 id="addchunkingroup">addChunkInGroup<a href="#addchunkingroup" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function (groupOptions, module, loc, request)</code></p>\n<p>Adds module to an existing chunk group or creates a new one. Returns a <code>chunkGroup</code>.</p>\n<p>Parameters:</p>\n<ul>\n<li><code>groupOptions</code> - options for the chunk group.</li>\n<li><code>module</code> - a module that references the chunk group.</li>\n<li><code>loc</code> - the location from which the chunk group is referenced (inside of the module).</li>\n<li><code>request</code> - the request from which the chunk group is referenced.</li>\n</ul>\n<h3 id="addchunk">addChunk<a href="#addchunk" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function (name)</code></p>\n<p>Creates and adds a new chunk to the <code>compilation.chunks</code>. Returns that <code>chunk</code>.</p>\n<p>Parameters:</p>\n<ul>\n<li><code>name</code> - the name of the chunk.</li>\n</ul>\n<h3 id="assigndepth">assignDepth<a href="#assigndepth" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function (module)</code></p>\n<p>Assigns <code>depth</code> to the given module and its depencency blocks recursively.</p>\n<p>Parameters:</p>\n<ul>\n<li><code>module</code> - the module to assign depth to.</li>\n</ul>\n<h3 id="getdependencyreference">getDependencyReference<a href="#getdependencyreference" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function (module, dependency)</code></p>\n<p>Returns the reference to the dependency from a given module.</p>\n<p>Parameters:</p>\n<ul>\n<li><code>module</code> - the module at question.</li>\n<li><code>dependency</code> - the dependency to get reference to.</li>\n</ul>\n<h3 id="processdependenciesblocksforchunkgroups">processDependenciesBlocksForChunkGroups<a href="#processdependenciesblocksforchunkgroups" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function (inputChunkGroups)</code></p>\n<p>Creates the <code>Chunk</code> graph from the <code>Module</code> graph. The process is done in two phases. Phase one: traverse the module graph and build a basic chunks graph in <code>chunkDependencies</code>. Phase two: traverse every possible way through the basic chunk graph and track the available modules. While traversing, <code>processDependenciesBlocksForChunkGroups</code> connects chunks with each other and <code>Blocks</code> with <code>Chunks</code>. It stops traversing when all modules for a chunk are already available and it doesn\'t connect unneeded chunks.</p>\n<p>Parameters:</p>\n<ul>\n<li><code>inputChunkGroups</code> - chunk groups which are processed.</li>\n</ul>\n<h3 id="removereasonsofdependencyblock">removeReasonsOfDependencyBlock<a href="#removereasonsofdependencyblock" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function (module, block)</code></p>\n<p>Removes relation of the module to dependency block.</p>\n<p>Parameters:</p>\n<ul>\n<li><code>module</code> - a module relationship to be removed.</li>\n<li><code>block</code> - dependency block.</li>\n</ul>\n<h3 id="patchchunksafterreasonremoval">patchChunksAfterReasonRemoval<a href="#patchchunksafterreasonremoval" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function (module, chunk)</code></p>\n<p>Patches ties of module and chunk after removing dependecy reasons. Called automatically by <code>removeReasonsOfDependencyBlock</code>.</p>\n<p>Parameters:</p>\n<ul>\n<li><code>module</code> - a module to patch tie.</li>\n<li><code>chunk</code> - a chunk to patch tie.</li>\n</ul>\n<h3 id="removechunkfromdependencies">removeChunkFromDependencies<a href="#removechunkfromdependencies" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function (block, chunk)</code></p>\n<p>Removes given chunk from a dependecies block module and chunks after removing dependecy reasons. Called automatically by <code>removeReasonsOfDependencyBlock</code>.</p>\n<p>Parameters:</p>\n<ul>\n<li><code>block</code> - block tie for <code>Chunk</code>.</li>\n<li><code>chunk</code> - a chunk to remove from dependencies.</li>\n</ul>\n<h3 id="applymoduleids">applyModuleIds<a href="#applymoduleids" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function</code></p>\n<h3 id="applychunkids">applyChunkIds<a href="#applychunkids" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function</code></p>\n<h3 id="sortitemswithmoduleids">sortItemsWithModuleIds<a href="#sortitemswithmoduleids" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function</code></p>\n<h3 id="sortitemswithchunkids">sortItemsWithChunkIds<a href="#sortitemswithchunkids" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function</code></p>\n<h3 id="summarizedependencies">summarizeDependencies<a href="#summarizedependencies" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function</code></p>\n<h3 id="createhash">createHash<a href="#createhash" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function</code></p>\n<h3 id="modifyhash">modifyHash<a href="#modifyhash" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function (update)</code></p>\n<h3 id="createmoduleassets">createModuleAssets<a href="#createmoduleassets" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function</code></p>\n<h3 id="createchunkassets">createChunkAssets<a href="#createchunkassets" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function</code></p>\n<h3 id="getpath">getPath<a href="#getpath" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function (filename, data)</code></p>\n<p>Parameters:</p>\n<ul>\n<li><code>filename</code> - used to get asset path with hash.</li>\n<li><code>data</code> - data object.</li>\n</ul>\n<h3 id="createchildcompiler">createChildCompiler<a href="#createchildcompiler" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function (name, outputOptions, plugins)</code></p>\n<p>Allows to run another instance of webpack inside of webpack. However as a child with different settings and configurations applied. It copies all hooks and plugins from parent (or top level compiler) and creates a child <code>Compiler</code> instance. Returns the created <code>Compiler</code>.</p>\n<p>Parameters:</p>\n<ul>\n<li><code>name</code> - name for the child <code>Compiler</code>.</li>\n<li><code>outputOptions</code> - output options object.</li>\n<li><code>plugins</code> - webpack plugins that will be applied.</li>\n</ul>\n<h3 id="checkconstraints">checkConstraints<a href="#checkconstraints" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function</code></p>\n'}}]);